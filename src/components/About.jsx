import "../styles/About.scss";
import { useTranslation } from "react-i18next";
import profile from "../assets/profile.png";

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true }) || [];

  const side = paragraphs.slice(0, 2);   // 2 primeros al lado de la foto
  const rest = paragraphs.slice(2);      // el resto debajo

  return (
    <section id="about" className="about">
      <h2 className="about__title">{t("about.title")}</h2>

      <article className="about__card">
        <figure className="about__badge">
          <img src={profile} alt="Foto de Silvia Vet" />
        </figure>

        <div className="about__side">
          {side.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="about__rest">
          {rest.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </article>
    </section>
  );
}

