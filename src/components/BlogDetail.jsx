import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "../styles/BlogDetail.scss";

function BlogDetail() {
  const { id } = useParams(); // ejemplo: "microbiota"
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2); // idioma actual (es / it)

  const [md, setMd] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // ruta principal y ruta alternativa por si falta la traducción
    const mainPath = `/blog/${lang}/${id}-${lang}.md`;
    const fallbackPath = `/blog/es/${id}-es.md`;

    // 1️ Intentamos cargar el artículo en el idioma actual
    fetch(`${mainPath}?v=${Date.now()}`)
      .then((res) => {
        if (!res.ok) throw new Error("No encontrado");
        return res.text();
      })
      .then((text) => setMd(text))
      .catch(() => {
        // 2️ Si falla, cargamos la versión en español
        fetch(fallbackPath)
          .then((res) => res.text())
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
          remarkPlugins={[remarkGfm]} // para tablas, listas, etc.
          rehypePlugins={[rehypeRaw]} // permite saltos de línea y HTML
          components={{
            img: (props) => (
              <img
                {...props}
                loading="lazy"
                alt={props.alt || ""}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ),
            table: (props) => (
              <table className="md-table" {...props} />
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
