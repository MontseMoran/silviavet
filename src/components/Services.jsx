import "../styles/Services.scss"

import services from "../data/servicesData.js";
import ServiceCard from "./ServicesCard.jsx";

function Services() {
  return (
    <section className="services">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          image={service.image}
          nameKey={service.nameKey}
          categoryKey={service.categoryKey}
          dietKey={service.dietKey}
        />
      ))}
    </section>
  );
}

export default Services;
