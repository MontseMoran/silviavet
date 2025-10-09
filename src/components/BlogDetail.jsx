import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "../styles/BlogDetail.scss"

 function BlogDetail() {
  const { id } = useParams();                
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2);

  const [md, setMd] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    
    fetch(`/blog/${lang}/${id}.md`)
      .then(r => {
        if (!r.ok) throw new Error(`No se encontró /blog/${lang}/${id}.md`);
        return r.text();
      })
      .then(setMd)
      .catch(async (err) => {
        
        try {
          const r = await fetch(`/blog/es/${id}.md`);
          if (!r.ok) throw err;
          setMd(await r.text());
        } catch {
          setError("No se pudo cargar el artículo.");
        }
      });
  }, [id, lang]);

  if (error) return <p className="blog-detail__error">{error}</p>;
  if (!md)    return <p className="blog-detail__loading">Cargando…</p>;

  return (
    <section className="blog-detail">
      <article className="blog-detail__content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}   // tablas, listas de tareas, etc.
          rehypePlugins={[rehypeRaw]}   // permite <br>, <sup>… 
          components={{
            img: (props) => (
              <img {...props} loading="lazy" style={{maxWidth:"100%", height:"auto"}} />
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