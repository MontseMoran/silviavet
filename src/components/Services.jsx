import "../styles/Services.scss"
import { useTranslation } from "react-i18next";
import services from "../data/servicesData.js";
import ServiceCard from "./ServicesCard.jsx";

function Services() {
  const {t} = useTranslation();
  return (
    <section id="services" className="services">
      <h2 className="services__cloak">{t("services.cloak")}</h2>
  <div className="services__grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          image={service.image}
          nameKey={service.nameKey}
          categoryKey={service.categoryKey}
          dietKey={service.dietKey}
        />
        
      ))}
      </div>
    </section>
  );
}

export default Services;
