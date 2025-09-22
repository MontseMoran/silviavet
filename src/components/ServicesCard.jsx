import { useTranslation } from "react-i18next";

function ServiceCard({ image, nameKey, categoryKey, dietKey }) {
  const { t } = useTranslation();

  return (
    <article className="card">
      <img src={image} alt={t(nameKey)} />
      <h3>{t(nameKey)} – {t(categoryKey)}</h3>
      <p>{t(dietKey)}</p>
      <button>Reservar ahora</button>
    </article>
  );
}

export default ServiceCard;
