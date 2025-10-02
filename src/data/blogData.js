const blogArticles = [
  {
    id: "bcs-mcs",
    title: {
      es: "BCS y MCS: herramientas para controlar la salud de tu mascota",
      it: "BCS e MCS: strumenti per monitorare la salute del tuo animale",
    },
    summary: {
      es: "El Body Condition Score (BCS) y el Muscle Condition Score (MCS) son métodos sencillos pero potentes para evaluar el estado nutricional real de tu mascota, considerando tanto la grasa corporal como la masa muscular.",
      it: "Il Body Condition Score (BCS) e il Muscle Condition Score (MCS) sono strumenti semplici ma potenti per valutare lo stato nutrizionale reale del tuo animale, considerando sia il grasso corporeo che la massa muscolare.",
    },
    content: {
      es: `
## Introducción
Se sabe que la prevención es siempre la mejor elección, tanto para nuestra salud como para la de quienes más queremos, incluidas nuestras mascotas.  
Para saber si nuestros amigos de cuatro patas se encuentran en una condición corporal y muscular adecuada, existen dos herramientas específicas: **BCS (Body Condition Score)** y **MCS (Muscle Condition Score)**.  

Estos dos sistemas de evaluación son simples pero muy potentes, ya que permiten definir el estado nutricional real del animal, valorando tanto la cantidad de grasa corporal (BCS) como la condición de la masa muscular (MCS).  
Dado que BCS y MCS miden aspectos complementarios, es fundamental considerarlos de manera conjunta.  

---

## BCS: Body Condition Score
Existen dos escalas:  
- Una de **1 a 5**  
- Otra más detallada, la más utilizada, de **1 a 9**  

La evaluación combina **observación visual y palpación** de costillas, columna vertebral y cintura abdominal.  
Un valor de **4–5/9 corresponde al peso ideal**; valores más bajos indican delgadez y más altos sobrepeso u obesidad.  

### Escala simplificada (1–9)
| Nivel | Descripción |
|-------|-------------|
| 1 – Muy delgado | Costillas, columna y huesos pélvicos muy visibles; ausencia de grasa; marcada pérdida muscular. |
| 3 – Delgado | Costillas visibles; cintura muy pronunciada; abdomen retraído. |
| 5 – Ideal | Costillas palpables sin exceso de grasa; cintura visible; abdomen ligeramente retraído. |
| 7 – Sobrepeso | Costillas difíciles de palpar; cintura poco evidente; abdomen menos retraído. |
| 9 – Obeso | Costillas no palpables; acumulación evidente de grasa; abdomen prominente. |

---

## MCS: Muscle Condition Score
El **MCS** es un sistema estandarizado para evaluar la masa muscular en perros y gatos, independientemente del tejido graso.  
Su importancia radica en que la **pérdida de masa muscular** puede preceder a otros signos clínicos y tiene gran impacto en la prognosis, la calidad de vida y el manejo nutricional.  

### Método de evaluación
El veterinario observa y palpa grupos musculares clave:  
- **Perros**: cuello, hombros, dorso, tórax, pelvis, extremidades posteriores.  
- **Gatos**: cuello, escápulas, dorso, pelvis, extremidades posteriores.  

### Sistema de 5 puntos (recomendado por WSAVA)
| Puntuación | Descripción |
|------------|-------------|
| Normal | Músculos bien desarrollados, sin prominencia ósea. |
| Pérdida leve | Reducción ligera en escápulas, pelvis o columna; sin impacto funcional. |
| Pérdida moderada | Reducción evidente de masa muscular con huesos prominentes; ligera pérdida de función. |
| Pérdida grave | Atrofia marcada; movilidad comprometida. |
| Pérdida muy grave | Pérdida muscular casi completa; función gravemente deteriorada. |

---

## Conclusión
El BCS y el MCS son **herramientas complementarias esenciales** para conocer el verdadero estado nutricional de tu mascota.  
Evaluados juntos, permiten detectar precozmente problemas como **obesidad, malnutrición o sarcopenia**, y guiar planes de manejo que mejoren la calidad y la expectativa de vida de perros y gatos.  

**Revisar periódicamente BCS y MCS**, junto con controles veterinarios regulares, es una estrategia sencilla y eficaz para mantener a tu mascota sana y en forma.  

---

## Referencias
- Freeman, L. M., & Cache, M. (2019). *Assessment of the canine and feline muscle condition score*. Journal of Animal Physiology and Animal Nutrition, 103(5), 1575–1583. [doi.org/10.1111/jpn.13148](https://doi.org/10.1111/jpn.13148)  
- Laflamme, D. P. (1997). *Development and validation of a body condition score system for dogs*. Canine Practice, 22(4), 10–15.  
- WSAVA – *Muscle condition score chart for cats*. [wsava.org](https://wsava.org/wp-content/uploads/2020/01/Muscle-Condition-Score-Chart-for-Cats.pdf)
      `,
      it: `
## Introduzione
Si sa che la prevenzione è la scelta migliore per la nostra salute e per quella dei nostri cari, pet inclusi.  
Per sapere se i nostri amici a 4 zampe stanno in una condizione corporea e muscolare corretta, esistono due strumenti specifici: **BCS (Body Condition Score)** e **MCS (Muscle Condition Score)**.  

Questi due sistemi di valutazione sono semplici ma potenti, poiché consentono di definire lo stato nutrizionale reale dell’animale, valutando sia la quantità di grasso corporeo (BCS) sia la massa muscolare (MCS).  
Poiché misurano aspetti complementari, è fondamentale considerarli insieme.  

---

## BCS: Body Condition Score
Esistono due scale:  
- Una da **1 a 5**  
- Un’altra più dettagliata e più usata, da **1 a 9**  

La valutazione combina **osservazione visiva e palpazione** di coste, colonna vertebrale e girovita.  
Un punteggio di **4–5/9 corrisponde al peso ideale**; valori più bassi indicano magrezza e più alti sovrappeso o obesità.  

### Scala semplificata (1–9)
| Livello | Descrizione |
|---------|-------------|
| 1 – Troppo magro | Costole, colonna e bacino molto visibili; assenza di grasso; marcata perdita muscolare. |
| 3 – Magro | Costole visibili; vita molto pronunciata; addome retratto. |
| 5 – Ideale | Costole palpabili senza grasso in eccesso; vita visibile; addome leggermente retratto. |
| 7 – Sovrappeso | Costole difficili da palpare; vita poco evidente; addome meno retratto. |
| 9 – Obeso | Costole non palpabili; accumulo evidente di grasso; addome prominente. |

---

## MCS: Muscle Condition Score
L’**MCS** è un sistema standardizzato per valutare la massa muscolare in cani e gatti, indipendentemente dal tessuto adiposo.  
È importante perché la **perdita muscolare** può precedere altri segni clinici e influenzare prognosi, qualità di vita e gestione nutrizionale.  

### Metodo di valutazione
Il veterinario osserva e palpa zone muscolari chiave:  
- **Cani**: collo, spalle, dorso, torace, bacino, arti posteriori.  
- **Gatti**: collo, scapole, dorso, bacino, arti posteriori.  

### Sistema a 5 punti (WSAVA)
| Punteggio | Descrizione |
|-----------|-------------|
| Normale | Muscoli ben sviluppati, senza prominenza ossea. |
| Lieve perdita | Riduzione lieve nelle scapole, bacino o colonna; senza alterazioni funzionali. |
| Moderata perdita | Riduzione evidente della massa muscolare con ossa prominenti; lieve perdita funzionale. |
| Grave perdita | Atrofia marcata; mobilità compromessa. |
| Perdita molto grave | Quasi completa perdita muscolare; funzione gravemente compromessa. |

---

## Conclusione
BCS e MCS sono **strumenti complementari essenziali** per conoscere lo stato nutrizionale reale del tuo animale.  
Valutati insieme, permettono di individuare precocemente problemi come **obesità, malnutrizione o sarcopenia** e guidare piani di gestione che migliorano la qualità e l’aspettativa di vita.  

**Controllare regolarmente BCS e MCS**, insieme a visite veterinarie periodiche, è una strategia semplice ed efficace per mantenere il tuo pet sano e in forma.  

---

## Riferimenti
- Freeman, L. M., & Cache, M. (2019). *Valutazione del punteggio della condizione muscolare nei cani e nei gatti*. Journal of Animal Physiology and Animal Nutrition, 103(5), 1575–1583. [doi.org/10.1111/jpn.13148](https://doi.org/10.1111/jpn.13148)  
- Laflamme, D. P. (1997). *Sviluppo e validazione di un sistema di punteggio della condizione corporea per i cani*. Canine Practice, 22(4), 10–15.  
- WSAVA – *Tabella del punteggio della condizione muscolare per i gatti*. [wsava.org](https://wsava.org/wp-content/uploads/2020/01/Muscle-Condition-Score-Chart-for-Cats.pdf)
      `,
    },
    image: "/images/blog/bcs-mcs.jpg",
    date: "2025-09-29",
  },
];

export default blogArticles;

export function pickLang(field, lang = "es") {
  if (typeof field === "string") return field;
  const key = (lang || "es").slice(0, 2);
  return field?.[key] ?? field?.es ?? "";
}
