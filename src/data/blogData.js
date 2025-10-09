const blogArticles = [
  {
    id: "bcs-mcs",
    title: {
      es: "BCS y MCS: herramientas para controlar la salud de tu mascota",
      it: "BCS e MCS: strumenti per monitorare la salute del tuo animale",
    },
    summary: {
      es: "El Body Condition Score (BCS) y el Muscle Condition Score (MCS) son métodos sencillos pero potentes para evaluar el estado nutricional real de tu mascota.",
      it: "Il Body Condition Score (BCS) e il Muscle Condition Score (MCS) sono strumenti semplici ma potenti per valutare lo stato nutrizionale reale del tuo animale.",
    },
    mdPath: {
      es: "/blog/es/bcs-mcs.md",
      it: "/blog/it/bcs-mcs.md",
    },
   image: {
  es: "/blog/images/BCS-es.jpg",
  it: "/blog/images/BCS-it.jpg",
},
  }
];

export default blogArticles;

export function pickLang(field, lang = "es") {
  if (typeof field === "string") return field;
  const key = (lang || "es").slice(0, 2);
  return field?.[key] ?? field?.es ?? "";
}
