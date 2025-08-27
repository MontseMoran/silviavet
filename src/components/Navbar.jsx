import { useTranslation } from "react-i18next"
import "../styles/Navbar.scss"
import LanguageSelector from "./LanguageSelector";

function Navbar (){
const {t} = useTranslation();

return(
<nav className="navbar" role="navigation" aria-label="Menú principal">

  <div className="navbar__brand">
    <a href="/">{t("nav.brand")}</a>
  </div>
  <ul className="navbar__menu">
    <li><a className="navbar__link" href="/">{t("nav.home")}</a></li>
    <li><a className="navbar__link" href="#sobre">{t("nav.about")}</a></li>
    <li><a className="navbar__link" href="#servicios">{t("nav.services")}</a></li>
    <li><a className="navbar__link" href="#contacto">{t("nav.contact")}</a></li>
   
  </ul>
   <LanguageSelector/>
</nav>



);
}

export default Navbar; 