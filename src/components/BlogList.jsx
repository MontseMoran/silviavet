import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogArticles, { pickLang } from "../data/blogData";
import "../styles/BlogList.scss";


function BlogList() {
  const { i18n, t } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2);

  return (
    <section id="blog" className="blog-list">
      <h2>{t("nav.blog")}</h2>

      <div className="blog-list__grid">
        {blogArticles.map((article) => (
          <div key={article.id} className="blog-list__card">
            <img src={article.image} alt={pickLang(article.title, lang)} />
            <h3>{pickLang(article.title, lang)}</h3>
            <p>{pickLang(article.summary, lang)}</p>
            <Link to={`/blog/${article.id}`} className="blog-list__btn">
              {t("common.readMore", { defaultValue: "Leer más" })}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
