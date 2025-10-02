import { useTranslation } from "react-i18next";
import "../styles/Navbar.scss";
import LanguageSelector from "./LanguageSelector";
import logo from "/logo.png";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Modal from "./Modal";


function Navbar (){
const {t} = useTranslation();
const [isOpen, setIsOpen] = useState(false);
const [showModal, setShowModal] = useState(false);

return(
  <>
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
      <img src={logo} alt="Silvia Vet logo" />
    </div>
   
  </div>
<ul className={`navbar__menu ${isOpen ? "open" : ""}`}
onClick={(e)=>e.stopPropagation()}>

<li><HashLink smooth to="/#benefits"  className="navbar__link" >{t("nav.benefits")}</HashLink></li>
  <li><HashLink className="navbar__link" smooth to="/#about">{t("nav.about")}</HashLink></li>
  <li><HashLink className="navbar__link" smooth to="/#services">{t("nav.services")}</HashLink></li>
  
  <li><HashLink className="navbar__link" smooth to="#blog">{t("nav.blog")}</HashLink></li>
  <li><HashLink className="navbar__link" smooth to="/#contact">{t("nav.contact")}</HashLink></li>


 <li>
  <button
    className="navbar__link navbar__link--button"
    onClick={() => setShowModal(true)}
  >
    {t("nav.book")}
  </button>
</li>

</ul>
 {showModal && (
  <Modal
    isOpen={showModal}
    onClose={() => setShowModal(false)}
    title={t("nav.book")}
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
)}

   <LanguageSelector/>
</nav>
 <div className="nav-spacer" />
{isOpen && (
  <div
    className="nav-overlay"
    onClick={() => setIsOpen(false)}
  ></div>
)}
</>

);

}

export default Navbar; 