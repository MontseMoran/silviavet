import { useTranslation } from "react-i18next";
import "../styles/Footer.scss";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer--diagonals">
      <div className="footer__inner">

        <div className="footer__panel">
          <div className="footer__contact">
            <a href="tel:+34613898805" className="footer__link">📞 +34 613 898 805</a>
            <a href="mailto:info@silviavet.com" className="footer__link">📧 info@silviavet.com</a>
          </div>

          <div className="footer__social">
         <span>{t("footer.follow")}:</span>
            <a
              href="https://www.facebook.com/SilviaGasperinivet"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Silvia Vet"
            >
              <img src="/icons/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="footer__legal">
              {t("footer.legal", { year })}
        </div>
      </div>
    </footer>
  );
}
