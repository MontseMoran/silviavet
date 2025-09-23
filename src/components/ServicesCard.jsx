import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



function ServiceCard({ id, image, nameKey, categoryKey, dietKey }) {
  const { t } = useTranslation();

  return (
    <article className="card">
      <img src={image} alt={t(nameKey)} />
      <h3>{t(nameKey)} – {t(categoryKey)}</h3>
      <p>{t(dietKey)}</p>
    <Link
  to={`/services/${id}`}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="service-card__button"
>
  <button>{t("services.button")}</button>
</Link>

    </article>
  );
}

export default ServiceCard;
