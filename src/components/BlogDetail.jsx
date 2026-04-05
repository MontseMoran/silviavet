import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "../styles/BlogDetail.scss";
import blogArticles, { pickLang } from "../data/blogData.js";

function BlogDetail() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2);

  const [md, setMd] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const article = blogArticles.find((entry) => entry.id === id);
    const mainPath = article
      ? pickLang(article.mdPath, lang)
      : `/blog/${lang}/${id}-${lang}.md`;
    const fallbackPath = article?.mdPath?.es ?? `/blog/es/${id}-es.md`;

    setMd("");
    setError("");

    fetch(`${mainPath}?v=${Date.now()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => setMd(text))
      .catch(() => {
        if (fallbackPath === mainPath) {
          setError("No se pudo cargar el artículo.");
          return;
        }

        fetch(`${fallbackPath}?v=${Date.now()}`)
          .then((res) => {
            if (!res.ok) throw new Error("Not found");
            return res.text();
          })
          .then((text) => setMd(text))
          .catch(() => setError("No se pudo cargar el artículo."));
      });
  }, [id, lang]);

  if (error) return <p className="blog-detail__error">{error}</p>;
  if (!md) return <p className="blog-detail__loading">Cargando…</p>;

  return (
    <section className="blog-detail">
      <article className="blog-detail__content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: (props) => (
              <img
                {...props}
                loading="lazy"
                alt={props.alt || ""}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ),
            table: (props) => <table className="md-table" {...props} />,
            a: (props) => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
          {md}
        </ReactMarkdown>
      </article>
    </section>
  );
}

export default BlogDetail;
