import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.scss";
import LanguageSelector from "./LanguageSelector";
import Modal from "./Modal";
import logo from "/logo.png";

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname === "/blog") {
      setActiveSection("blog");
      return;
    }

    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["benefits", "about", "services"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleMenuClick = (action) => {
    setIsOpen(false);
    if (action) action();
  };

  const getLinkClassName = (section) =>
    `navbar__link${activeSection === section ? " navbar__link--active" : ""}`;

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
              smooth
              to="/#benefits"
              className={getLinkClassName("benefits")}
              onClick={() => handleMenuClick()}
            >
              {t("nav.benefits")}
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#about"
              className={getLinkClassName("about")}
              onClick={() => handleMenuClick()}
            >
              {t("nav.about")}
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#services"
              className={getLinkClassName("services")}
              onClick={() => handleMenuClick()}
            >
              {t("nav.services")}
            </HashLink>
          </li>

          <li>
            <Link
              className={getLinkClassName("blog")}
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
                handleMenuClick(() => setShowModal(true));
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
