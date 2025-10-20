import { useTranslation } from "react-i18next";
import "../styles/Navbar.scss";
import LanguageSelector from "./LanguageSelector";
import logo from "/logo.png";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
const handleMenuClick = (action) => {
  setIsOpen(false); // cierra el menú
  if (action) action(); // ejecuta una acción extra si la hay (por ejemplo, abrir el modal)
};

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Menú principal">
        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <img
            className="navbar__icon"
            src="/icons/hamburger.png"
            alt="Abrir menú"
          />
        </button>

        <div className="navbar__brand">
          <div className="navbar__logo">
            <img src={logo} alt="Silvia Vet logo" />
          </div>
        </div>
        <ul
          className={`navbar__menu ${isOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <HashLink 
            smooth to="/#benefits" 
            className="navbar__link"
             onClick={() => handleMenuClick()}
            >
              {t("nav.benefits")}
            </HashLink>
          </li>
          <li>
            <HashLink 
            className="navbar__link" 
            smooth to="/#about" 
            onClick={() => handleMenuClick()}>
              {t("nav.about")}
            </HashLink>
          </li>
          <li>
            <HashLink 
            className="navbar__link" 
            smooth to="/#services"
            onClick={() => handleMenuClick()}>
              {t("nav.services")}
            </HashLink>
          </li>

          <li>
            <Link
              className="navbar__link"
              to="/blog"
              onClick={() => handleMenuClick(() => window.scrollTo(0, 0))}
            >
              {t("nav.blog")}
            </Link>
          </li>

          <li>
            <a
              href="#contact"
              className="navbar__link"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(()=>setShowModal(true));
              }}
            >
              {t("nav.contact")}
            </a>
          </li>

          <li>
            <a
              href="https://form.jotform.com/252726382736363"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__link navbar__link--button"
            >
              {t("nav.start")}
            </a>
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

        <LanguageSelector />
      </nav>
      <div className="nav-spacer" />
      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}

export default Navbar;
