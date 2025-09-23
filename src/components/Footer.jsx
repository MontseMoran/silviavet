import { useTranslation } from "react-i18next";
import "../styles/Footer.scss";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer--diagonals">
      <div className="footer__inner">
        <div id="contact" className="footer__cards">
          <div className="footer__card footer__card--left">
            <p>{t("footer.whatsApp")}:</p>
            <a
              href="https://wa.me/34613898805"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/icons/whatsApp.png"
                alt="WhatsApp"
                className="footer__icon"
              />
            </a>
          </div>

          <div className="footer__card footer__card--center">
            <p>{t("footer.email")}:</p>
            <a href="mailto:info@silviavet.com" className="footer__link">
              📧 info@silviavet.com
            </a>
          </div>

          <div className="footer__card footer__card--right">
            <p>{t("footer.follow")}:</p>
            <div className="footer__card_social-media">
              <a
                href="https://www.facebook.com/SilviaGasperinivet"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de Silvia Vet"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="footer__icon__facebook"
                />
              </a>

              <a
                href="https://www.instagram.com/silviavet_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Silvia Vet"
              >
                <img
                  src="/icons/instagram.jpg"
                  alt="Instagram"
                  className="footer__icon__instagram"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__legal">{t("footer.legal", { year })}</div>
      </div>
    </footer>
  );
}
export default Footer;
