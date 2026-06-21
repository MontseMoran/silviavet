import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";

function JotformLink({ href, className, children, ...props }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleContinue = () => {
    setIsOpen(false);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={handleOpen}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t("jotform.title")}>
        <p className="modal__text">{t("jotform.description")}</p>
        <p className="modal__text modal__text--small">{t("jotform.notice")}</p>
        <a href="/privacy" className="modal__link">
          {t("jotform.privacy")}
        </a>
        <button type="button" className="modal__btn" onClick={handleContinue}>
          {t("jotform.continue")}
        </button>
        <button
          type="button"
          className="modal__btn modal__btn--secondary"
          onClick={() => setIsOpen(false)}
        >
          {t("jotform.cancel")}
        </button>
      </Modal>
    </>
  );
}

export default JotformLink;
