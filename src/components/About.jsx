import "../styles/About.scss";
import { useTranslation } from "react-i18next";
import profile from "../assets/profile.webp";
import { useState } from "react";

function About() {
  const { t } = useTranslation();
  const intro = t("about.intro", { returnObjects: true }) || [];
  const more = t("about.more", { returnObjects: true }) || [];

  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about">
      <h2 className="about__title">{t("about.title")}</h2>

      <article className="about__card">
        <figure className="about__badge">
          <img src={profile} alt="Foto de Silvia Vet" />
        </figure>

        <div className="about__text">
        
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

         
          {expanded &&
            more.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

          <button
            className="about__btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Leer menos" : "Leer más"}
          </button>

        
          <div className="about__more-desktop">
            {more.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
