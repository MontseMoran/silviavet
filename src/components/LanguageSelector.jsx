import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const isES = i18n.language?.toLocaleLowerCase().startsWith("es");
  const isIT = i18n.language?.toLocaleLowerCase().startsWith("it");
  return (
    <div className="Language-Select__btn">
      <button
        className={i18n.language === "es" ? "active" : ""}
        aria-pressed={i18n.language === "es"}
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>

      <button
        className={i18n.language === "it" ? "active" : ""}
        aria-pressed={i18n.language === "it"}
        onClick={() => i18n.changeLanguage("it")}
      >
        IT
      </button>
    </div>
  );
}

export default LanguageSelector;
