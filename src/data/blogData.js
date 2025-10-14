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
      es: "/blog/es/bcs-mcs-es.md",
      it: "/blog/it/bcs-mcs-it.md",
    },
   image: {
  es: "/blog/images/BCS-es.jpg",
  it: "/blog/images/BCS-it.jpg",
},
 date: "2025-09-10",
  },
  {
  id: "microbiota",
  title: {
    es: "Microbiota intestinal en perros y gatos ancianos",
    it: "Microbiota intestinale nei cani e gatti anziani",
  },
  summary: {
    es: "La microbiota intestinal cambia con la edad y afecta la digestión, el sistema inmune y la salud general de perros y gatos mayores. Descubre cómo mantenerlo equilibrado 🦠.",
    it: "Il microbiota intestinale cambia con l’età e influenza la digestione, il sistema immunitario e la salute generale di cani e gatti anziani. Scopri come mantenerlo in equilibrio 🦠.",
  },
  mdPath: {
    es: "/blog/es/microbiota-es.md",
    it: "/blog/it/microbiota-it.md",
  },
  image: {
    es: "/blog/images/2-es.jpg",
    it: "/blog/images/2-it.jpg",
  },
  date: "2025-10-10",
},
{
  id: "aburrimiento-obesidad",
  title: {
    es: "Aburrimiento y obesidad en perros y gatos",
    it: "Noia e obesità nei cani e nei gatti",
  },
  summary: {
    es: "El aburrimiento puede llevar al sobrepeso en nuestras mascotas 🐶🐱. Descubre cómo mantenerlos activos y mentalmente estimulados con la ayuda de Silvia Vet.",
    it: "La noia può portare al sovrappeso nei nostri animali 🐶🐱. Scopri come mantenerli attivi e mentalmente stimolati con l’aiuto di Silvia Vet.",
  },
  mdPath: {
    es: "/blog/es/aburrimiento-obesidad-es.md",
    it: "/blog/it/aburrimiento-obesidad-it.md",
  },
  image: {
    es: "/blog/images/art-3-es.png",
    it: "/blog/images/art-3-it.png",
  },
  date: "2025-10-15",
},

];

export default blogArticles;

export function pickLang(field, lang = "es") {
  if (typeof field === "string") return field;
  const key = (lang || "es").slice(0, 2);
  return field?.[key] ?? field?.es ?? "";
}
