import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/BlogList.scss";
import blogArticles, { pickLang } from "../data/blogData";

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

  
  const sorted = [...blogArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section id="blog" className="blog-list">
      <div className="blog-list__grid">
        {sorted.map((article) => {
          const title = pickLang(article.title, lang);
          const summary = pickLang(article.summary, lang);
          const humanDate = formatDate(article.date, lang);

          
          return (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="blog-list__card"
            >
              <img
                src={pickLang(article.image, lang)}
                alt={pickLang(article.title, lang)}
                className="blog-list__image"
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
    </section>
  );
}

export default BlogList;
