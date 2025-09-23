import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import services from "../data/servicesData.js"; 
import "../styles/ServicesDetail.scss";

function ServiceDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p>Servicio no encontrado</p>;
  }

  return (
    <section className="service-detail">
      <img
        src={service.image}
        alt={t(service.nameKey)}
        className="service-detail__image"
      />

      <h2 className="service-detail__title">{t(service.nameKey)}</h2>
      <p className="service-detail__description">
        {t(`services.${service.id}.description`)}
      </p>

      {/* Incluye */}
      <div className="service-detail__includes">
        <h3>{t("services.includesTitle")}</h3>
        <ul>
          {t(`services.${service.id}.includes`, { returnObjects: true }).map(
            (item, i) => (
              <li key={i}>✔️ {item}</li>
            )
          )}
        </ul>
      </div>

      {/* Pasos */}
      <div className="service-detail__steps">
        <h3>{t("services.stepsTitle")}</h3>
        <ol>
          {t(`services.${service.id}.steps`, { returnObjects: true }).map(
            (step, i) => (
              <li key={i}>{step}</li>
            )
          )}
        </ol>
      </div>

      {/* Precio */}
      <p className="service-detail__price">
        {t(`services.${service.id}.price`)}
      </p>

      {/* Botones */}
      <div className="service-detail__buttons">
        <Link to="/services" className="back">
          {t("services.backButton")}
        </Link>
        <button className="reserve">{t("services.reserveButton")}</button>
      </div>
    </section>
  );
}

export default ServiceDetail;
