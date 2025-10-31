import logog from "/logog.png";
import "../styles/Hero.scss";
import { useTranslation } from "react-i18next";
import bascula from "../assets/bascula.svg";
import brazo from "../assets/brazo.svg";
import catDog from "../assets/cat-dog.svg";
import corazon from "../assets/corazon.svg";
import energia from "../assets/energia.svg";
import lactancia from "../assets/lactancia.svg";
import pawsline from "../assets/pawsline.png";
import fresh from "../assets/fresh.svg";
import digestion from "../assets/digestion.svg";
import taste from "../assets/taste.svg";
import allergies from "../assets/allergies.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import huella from "../assets/huella.svg";

function Hero() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: catDog,
      text: t("benefits.items.puppies"),
      alt: "Cachorros y gatitos",
    },
    { icon: brazo, text: t("benefits.items.adults"), alt: "Músculo" },
    { icon: bascula, text: t("benefits.items.sports"), alt: "Peso corporal" },
    {
      icon: lactancia,
      text: t("benefits.items.stages"),
      alt: "Lactancia y gestación",
    },
    {
      icon: energia,
      text: t("benefits.items.weight"),
      alt: "Perro corriendo con pelota",
    },
    {
      icon: corazon,
      text: t("benefits.items.chronic"),
      alt: "Corazón saludable",
    },
    { icon: fresh, text: t("benefits.items.fresh"), alt: "Comida saludable" },
    {
      icon: digestion,
      text: t("benefits.items.digestion"),
      alt: "Mejor digestión",
    },
    { icon: taste, text: t("benefits.items.taste"), alt: "Comida apetecible" },
    {
      icon: allergies,
      text: t("benefits.items.allergies"),
      alt: "Mejora alergias",
    },
    //{ icon: love, text: t("benefits.items.love"), alt: "Mejor conexión" },
  ];

  return (
    <section id="benefits" className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="benefits__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("benefits.title")}
        </motion.h2>

        <motion.p
          className="benefits__intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("benefits.intro")}
        </motion.p>

        <motion.div
          className="hero__logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          <img src={logog} alt="Silvia Vet logo" />
        </motion.div>
      </motion.div>

      <div className="benefits-wrapper">
        <div className="benefits-slider">
          <div className="custom-pagination"></div>
         <Swiper
  modules={[Autoplay, Pagination, Grid]}
  loop={false}
  rewind={true}
  observer={true}
  observeParents={true}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  onSlideChange={(swiper) => swiper.pagination.update()}
  pagination={{
    el: ".custom-pagination",
    clickable: true,
    dynamicBullets: false,
   
    renderBullet: (index, className) => {
      return `<span class="${className}">
        <img src="${huella}" alt="huella" style="width:16px;height:16px;" />
      </span>`;
    },
  }}
  breakpoints={{
    0: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1440: { slidesPerView: 5 },
    1920: { spaceBetween: 100, slidesPerView: 5 },
  }}
>
  {benefits.map((b, i) => (
    <SwiperSlide key={i}>
      <motion.li
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <img className="benefit_icon" src={b.icon} alt={b.alt} />
        <p>{b.text}</p>
      </motion.li>
    </SwiperSlide>
  ))}
</Swiper>

        </div>

        <ul className="benefits-grid">
          {benefits.map((b, i) => (
            <li key={i}>
              <img className="benefit_icon" src={b.icon} alt={b.alt} />
              <p>{b.text}</p>
            </li>
          ))}
        </ul>
        <div className="section-separator">
          <img src={pawsline} alt="camino de huellas" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
