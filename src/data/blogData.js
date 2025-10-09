const blogArticles = [
  {
    id: "bcs-mcs",
    title: {
      es: "BCS y MCS: herramientas para controlar la salud de tu mascota",
      it: "BCS e MCS: strumenti per monitorare la salute del tuo animale",
    },
    summary: {
      es: "Aprende a descubrir si tu perro o tu gato está en su peso ideal 🐾 con dos sencillas herramientas que usan los veterinarios: el BCS y el MCS.",
      it: "Scopri se il tuo cane o gatto sta nel suo peso ideale 🐾 con due semplici strumenti usati dai veterinari: il BCS e l’MCS",
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
