import i18next from "i18next"
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import it from "./locales/it.json";

const savedLang = localStorage.getItem("lang") || (navigator.language?.slice(0,2) === "it" ? "it" : "es");


i18next.use(initReactI18next).init({
    resources: {
        es: { translation: es },
        it: { translation: it },
    },
    lng: savedLang,
    fallbackLng: "es",
    supportedLngs: ["es", "it"],
    load: "languageOnly",
    interpolation: {
        escapeValue: false,
    },
});
document.documentElement.lang = i18next.language

i18next.on("languageChanged", (newLang)=>{
    document.documentElement.lang = newLang;
    localStorage.setItem("lang", newLang)
})

export default i18next;