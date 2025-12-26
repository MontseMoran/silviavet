import { useTranslation } from "react-i18next";
import "../styles/LanguageSelector.scss"

function LanguageSelector() {
  const { i18n } = useTranslation();

  const isES = i18n.language?.toLocaleLowerCase().startsWith("es");
  const isIT = i18n.language?.toLocaleLowerCase().startsWith("it");
  return (
    <div className="Language-Select__btn">
      <button
        className={isES ? "active" : ""}
        aria-pressed={isES}
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>

      <button
        className={isIT ? "active" : ""}
        aria-pressed={ isIT}
        onClick={() => i18n.changeLanguage("it")}
      >
        IT
      </button>
    </div>
  );
}

export default LanguageSelector;
