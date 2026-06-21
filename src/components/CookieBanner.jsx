import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/CookieBanner.scss";

const STORAGE_KEY = "cookieNoticeSeen";

function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        return;
      }
    } catch {
      // If storage is unavailable, keep the notice visible.
    }

    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
      localStorage.removeItem("cookieConsent");
    } catch {
      // Ignore storage failures and still close the notice.
    }

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={t("cookiesBanner.title")}>
      <div className="cookie-banner__content">
        <p className="cookie-banner__eyebrow">{t("cookiesBanner.eyebrow")}</p>
        <h3>{t("cookiesBanner.title")}</h3>
        <p>{t("cookiesBanner.description")}</p>
        <div className="cookie-banner__actions">
          <button type="button" className="cookie-banner__btn" onClick={handleDismiss}>
            {t("cookiesBanner.dismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
