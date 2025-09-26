import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import services from "../data/servicesData.js";
import "../styles/ServicesDetail.scss";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function ServiceDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p>Servicio no encontrado</p>;
  }
  function getRevisionPrice(id, t) {
  switch (id) {
    case "online":
    case "mixta":
      return t("services.revisiones.priceOnline");
    case "presencial":
      return t("services.revisiones.pricePresencial");
    case "ultraprocesada":
      return t("services.revisiones.priceUltraprocesada");
    default:
      return null;
  }
}


  return (
    <section className="service-detail">
      <img
        src={service.image}
        alt={t(service.nameKey)}
        className="service-detail__image"
      />
      <img 
      src="/images/services/barf.png" 
      alt="Foto adicional" 
        className="service-detail__image--extra"
      />

      <h2 className="service-detail__title">{t(service.nameKey)} {t(`services.${service.id}.category`)}</h2>
      <p className="service-detail__description">
        {t(`services.${service.id}.description`)}
      </p>

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

      <p className="service-detail__price">
        {t(`services.${service.id}.price`)}
      </p>
      <div className="service-detail__revisions-block">
<h3 className="service-detail__revisions">
  {t(`services.revisiones.revisionsTitle`)}
</h3>
<p className="service-detail__description">
  {t(`services.revisiones.description`)}
</p>
<p className="service-detail__price-revision">
{getRevisionPrice(service.id, t)}
</p>
</div>
      <div className="service-detail__buttons">
        <HashLink smooth to="/#services" className="back">
          {t("services.backButton")}
        </HashLink>

        <button className="reserve" onClick={() => setShowModal(true)}>
          {t("services.reserveButton")}
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <button
              className="modal__close"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h3>{t("services.reserveButton")}</h3>

            <a
              href="https://wa.me/34613898805"
              target="_blank"
              rel="noopener noreferrer"
              className="modal__btn"
            >
              {t("services.whatsapp")}
            </a>
            <a href="mailto:info@silviavet.com" className="modal__btn">
              {t("services.email")}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServiceDetail;
