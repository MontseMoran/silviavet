import { useTranslation } from "react-i18next";
import "../styles/Footer.scss";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
<footer className="footer footer--diagonals">
  <div className="footer__inner">

    <div className="footer__cards">
     
      <div className="footer__card footer__card--left">
        <p>Llámame o escríbeme por WhatsApp</p>
        <a href="https://wa.me/34613898805" target="_blank" rel="noreferrer">
          <img src="/icons/whatsApp.png" alt="WhatsApp" className="footer__icon"/>
        </a>
      </div>

     
      <div className="footer__card footer__card--center">
        <p>Contáctame</p>
        <a href="tel:+34613898805" className="footer__link">📞 +34 613 898 805</a>
        <a href="mailto:info@silviavet.com" className="footer__link">📧 info@silviavet.com</a>
      </div>

    
      <div className="footer__card footer__card--right">
        <p>{t("footer.follow")}:</p>
        <a
          href="https://www.facebook.com/SilviaGasperinivet"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook de Silvia Vet"
        >
          <img src="/icons/facebook.png" alt="Facebook" className="footer__icon"/>
        </a>
      </div>
    </div>

    <div className="footer__legal">
      {t("footer.legal", { year })}
    </div>
  </div>
</footer>
  )
}
