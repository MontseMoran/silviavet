import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/BlogList.scss";
import blogArticles, { pickLang } from "../data/blogData.js";

function formatDate(dateStr, lang) {
  try {
    const d = new Date(dateStr);
    const fmt = new Intl.DateTimeFormat(
      lang === "it" ? "it-IT" : "es-ES",
      { day: "2-digit", month: "long", year: "numeric" }
    );
    return fmt.format(d);
  } catch {
    return dateStr || "";
  }
}

function BlogList() {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2);
  const [activeAudience, setActiveAudience] = useState("client");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window === "undefined") return 8;
    return window.innerWidth >= 900 ? 8 : 4;
  });

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 900 ? 8 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeAudience, itemsPerPage]);

  const uiCopy = {
    es: {
      audienceLabel: "¿Para quién es este contenido?",
      audienceHint: "Elige el tipo de contenido que quieres ver",
      clientEmoji: "🐾",
      clientTitle: "Tengo un perro o gato",
      clientDescription: "Consejos claros y útiles para cuidar su salud",
      professionalEmoji: "🩺",
      professionalTitle: "Soy veterinario",
      professionalDescription: "Contenido clínico y técnico para profundizar",
      paginationPrev: "Anterior",
      paginationNext: "Siguiente",
      paginationAria: "Paginación del blog",
    },
    it: {
      audienceLabel: "Per chi è questo contenuto?",
      audienceHint: "Scegli il tipo di contenuto che vuoi vedere",
      clientEmoji: "🐾",
      clientTitle: "Ho un cane o un gatto",
      clientDescription:
        "Consigli chiari e utili per prenderti cura della sua salute",
      professionalEmoji: "🩺",
      professionalTitle: "Sono un veterinario",
      professionalDescription:
        "Contenuti clinici e tecnici per approfondire",
      paginationPrev: "Precedente",
      paginationNext: "Successiva",
      paginationAria: "Paginazione del blog",
    },
  };
  const copy = uiCopy[lang] ?? uiCopy.es;

  const filteredArticles = blogArticles.filter(
    (article) => article.audience === activeAudience
  );

  const sorted = [...filteredArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.max(1, Math.ceil(sorted.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * itemsPerPage;
  const visibleArticles = sorted.slice(pageStart, pageStart + itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <section id="blog" className="blog-list">
      <div className="blog-list__header">
        <p className="blog-list__heading">{copy.audienceLabel}</p>
        <p className="blog-list__subheading">{copy.audienceHint}</p>

        <div
          className="blog-list__tabs"
          role="group"
          aria-label={copy.audienceLabel}
        >
          <button
            type="button"
            aria-pressed={activeAudience === "client"}
            className={`blog-list__tab${
              activeAudience === "client" ? " blog-list__tab--active" : ""
            }`}
            onClick={() => setActiveAudience("client")}
          >
            <span className="blog-list__tab-topline">
              <span className="blog-list__tab-icon" aria-hidden="true">
                {copy.clientEmoji}
              </span>
              <span className="blog-list__tab-title">{copy.clientTitle}</span>
            </span>
            <span className="blog-list__tab-description">
              {copy.clientDescription}
            </span>
          </button>

          <button
            type="button"
            aria-pressed={activeAudience === "professional"}
            className={`blog-list__tab${
              activeAudience === "professional" ? " blog-list__tab--active" : ""
            }`}
            onClick={() => setActiveAudience("professional")}
          >
            <span className="blog-list__tab-topline">
              <span className="blog-list__tab-icon" aria-hidden="true">
                {copy.professionalEmoji}
              </span>
              <span className="blog-list__tab-title">
                {copy.professionalTitle}
              </span>
            </span>
            <span className="blog-list__tab-description">
              {copy.professionalDescription}
            </span>
          </button>
        </div>
      </div>

      <div className="blog-list__grid">
        {visibleArticles.map((article) => {
          const title = pickLang(article.title, lang);
          const summary = pickLang(article.summary, lang);
          const humanDate = formatDate(article.date, lang);

          return (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="blog-list__card"
              style={{ "--delay": `${Math.random() * 0.5 + 0.2}s` }}
            >
              <img
                src={pickLang(article.image, lang)}
                alt={pickLang(article.title, lang)}
                className="blog-list__image"
                loading="lazy"
              />

              <div className="blog-list__content">
                <h3 className="blog-list__title">{title}</h3>

                {article.date && (
                  <time
                    className="blog-list__date"
                    dateTime={article.date}
                    aria-label={humanDate}
                  >
                    {humanDate}
                  </time>
                )}

                <p className="blog-list__summary">{summary}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav className="blog-list__pagination" aria-label={copy.paginationAria}>
          <button
            type="button"
            className="blog-list__page-control"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={safePage === 1}
          >
            {copy.paginationPrev}
          </button>

          <div className="blog-list__page-list">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={`blog-list__page-button${
                  safePage === pageNumber ? " blog-list__page-button--active" : ""
                }`}
                onClick={() => setCurrentPage(pageNumber)}
                aria-current={safePage === pageNumber ? "page" : undefined}
              >
                {pageNumber}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="blog-list__page-control"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={safePage === totalPages}
          >
            {copy.paginationNext}
          </button>
        </nav>
      )}
    </section>
  );
}

export default BlogList;
