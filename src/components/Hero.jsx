import logog from "/logog.png"
import "../styles/Hero.scss"
import { useTranslation } from "react-i18next";
import bascula from "../assets/bascula.svg";
import brazo from "../assets/brazo.svg";
import catDog from "../assets/cat-dog.svg"
import corazon from "../assets/corazon.svg"
import energia from "../assets/energia.svg"
import lactancia from "../assets/lactancia.svg"
import pawsline from "../assets/pawsline.png"
import fresh from "../assets/fresh.svg"
import digestion from "../assets/digestion.svg"
import taste from "../assets/taste.svg"
import allergies from "../assets/allergies.svg"
//import love from "../assets/love.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import huella from "../assets/huella.svg"

function Hero() {
  const { t } = useTranslation();

  
  const benefits = [
    { icon: catDog, text: t("benefits.items.puppies"), alt: "Cachorros y gatitos" },
    { icon: brazo, text: t("benefits.items.adults"), alt: "Músculo" },
    { icon: bascula, text: t("benefits.items.sports"), alt: "Peso corporal" },
    { icon: lactancia, text: t("benefits.items.stages"), alt: "Lactancia y gestación" },
    { icon: energia, text: t("benefits.items.weight"), alt: "Perro corriendo con pelota" },
    { icon: corazon, text: t("benefits.items.chronic"), alt: "Corazón saludable" },
    { icon: fresh, text: t("benefits.items.fresh"), alt: "Comida saludable" },
    { icon: digestion, text: t("benefits.items.digestion"), alt: "Mejor digestión" },
    { icon: taste, text: t("benefits.items.taste"), alt: "Comida apetecible" },
    { icon: allergies, text: t("benefits.items.allergies"), alt: "Mejora alergias" },
    //{ icon: love, text: t("benefits.items.love"), alt: "Mejor conexión" },
  ];

  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="benefits__title">{t("benefits.title")}</h2>
        <p className="benefits__intro">{t("benefits.intro")}</p>
        <div className="hero__logo">
          <img src={logog} alt="Silvia Vet logo" />
        </div>

        <div className="benefits-wrapper">
        
          <div className="benefits-slider">
            <div className="custom-pagination"></div> 
            <Swiper
  modules={[Autoplay, Pagination, Grid]}
  spaceBetween={20}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
   pagination={{ el: ".custom-pagination", clickable: true, 
     renderBullet: (index, className) => {
        return `<span class="${className}">
                  <img src="${huella}" alt="huella" style="width:16px;height:16px;" />
                </span>`;}
   }}
  breakpoints={{
    0: {
      slidesPerView: 2,
      grid: { rows: 1 }, // 2x2 en móvil
    },
    768: {
      slidesPerView: 4,
      grid: { rows: 1 }, 
    },
    1024: {
      slidesPerView: 6,
      grid: { rows: 1 }, // desktop
    },
  }}
>
              {benefits.map((b, i) => (
                <SwiperSlide key={i}>
                  <li>
                    <img className="benefit_icon" src={b.icon} alt={b.alt} />
                    <p>{b.text}</p>
                  </li>
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
      </div>
    </section>
  );
}

export default Hero;
