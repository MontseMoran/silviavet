import { useTranslation } from "react-i18next";
import "../styles/Navbar.scss";
import LanguageSelector from "./LanguageSelector";
import logo from "/logo.png";
import { useState } from "react";


function Navbar (){
const {t} = useTranslation();
const [isOpen, setIsOpen] = useState(false);

return(
<nav className="navbar" role="navigation" aria-label="Menú principal">
<button
  className="navbar__toggle"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Abrir menú"
>
  <img className= "navbar__icon" src="/icons/hamburger.png" alt="Abrir menú" />
</button>

  <div className="navbar__brand">
    <div className="navbar__logo">
      <img src={logo} alt="" />
    </div>
   
  </div>
<ul className={`navbar__menu ${isOpen ? "open" : ""}`}>
  <li><a className="navbar__link" href="#sobre">{t("nav.about")}</a></li>
  <li><a className="navbar__link" href="#servicios">{t("nav.services")}</a></li>
  <li><a className="navbar__link" href="#beneficios">{t("nav.benefits")}</a></li>
  <li><a className="navbar__link" href="#blog">{t("nav.blog")}</a></li>
  <li><a className="navbar__link" href="#contacto">{t("nav.contact")}</a></li>


  <li>
    <a className="navbar__link navbar__link--button" href="#reserva">
      {t("nav.book")}
    </a>
  </li>
</ul>

   <LanguageSelector/>
</nav>



);
}

export default Navbar; 