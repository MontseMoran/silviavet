import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import services from "../data/servicesData.js";
import "../styles/ServicesDetail.scss";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Modal from "./Modal.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; 

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
    <motion.section
      className={`service-detail service-detail--${service.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
      <motion.img
        src={service.image}
        alt={t(service.nameKey)}
        className="service-detail__image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

   
      <motion.h2
        className="service-detail__title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {t(service.nameKey)} {t(`services.${service.id}.category`)}
      </motion.h2>

      
      <motion.p
        className="service-detail__description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {t(`services.${service.id}.description`)}
      </motion.p>

      <div className="service-detail__info">
  <div className="service-detail__includes">
    <h3>{t("services.includesTitle")}</h3>
    <ul>
      {t(`services.${service.id}.includes`, { returnObjects: true }).map(
        (item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            ✔️ {item}
          </motion.li>
        )
      )}
    </ul>
  </div>

  <div className="service-detail__steps">
    <h3>{t("services.stepsTitle")}</h3>
    <ol>
      {t(`services.${service.id}.steps`, { returnObjects: true }).map(
        (step, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            {step}
          </motion.li>
        )
      )}
    </ol>
  </div>

  <motion.p
    className="service-detail__price service-detail__price--inline"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    {t(`services.${service.id}.price`)}
  </motion.p>
</div>

     
      <motion.div
  className="service-detail__revisions-block"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <div className="service-detail__revisions-header">
   
    <h3 className="service-detail__revisions">
      {t(`services.revisiones.revisionsTitle`)}
    </h3>
  </div>

  <p className="service-detail__description">
    {t(`services.revisiones.description`)}
  </p>

  <p className="service-detail__price-revision">
    {getRevisionPrice(service.id, t)}
  </p>
</motion.div>


     
      <motion.div
        className="service-detail__buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <HashLink smooth to="/#services" className="back">
          {t("services.backButton")}
        </HashLink>

        <button className="reserve" onClick={() => setShowModal(true)}>
          {t("services.reserveButton")}
        </button>
      </motion.div>

      
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={t("services.reserveButton")}
      >
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
      </Modal>
    </motion.section>
  );
}

export default ServiceDetail;
