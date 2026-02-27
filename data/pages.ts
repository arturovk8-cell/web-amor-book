export type StoryPage = {
  title: string;
  text: string;
  note: string;
  imagePlaceholder: string;
  stamp: "Clasificado" | "Evidencia" | "Spoiler";
  isFinal?: boolean;
};

export const bookMeta = {
  title: "Crónicas de un Acoso Exitoso",
  subtitle: "Edición Sunset Metepec",
  coverSmallText:
    "“Cómo Golosa69 logró llamar la atención de William Pitt (contra todo pronóstico).”",
  backCoverText:
    "Reservado para próximos capítulos: más risas, más sarcasmo, más besos y probablemente más acusaciones de acoso."
};

export const storyPages: StoryPage[] = [
  {
    title: "Página 1 / Capítulo 1 — El incidente del Sunset",
    text: `Todo comenzó en un bar llamado Sunset, en Metepec.
Ahí estaba yo, William Pitt, en modo interesante, serio y claramente inalcanzable (según yo), cuando apareció Golosa69 con una energía sospechosamente intensa.

Ella me estaba acosando… en el sentido más divertido de la palabra.
Yo, por supuesto, hice lo que haría cualquier caballero emocionalmente confundido:
hacerme el difícil.`,
    note: "William Pitt aplicando indiferencia premium",
    imagePlaceholder: "Placeholder: escena dramática en Sunset con luces cálidas",
    stamp: "Clasificado"
  },
  {
    title: "Página 2 / Capítulo 2 — La estrategia de defensa",
    text: `Para mantener mi reputación de hombre frío y elegante, la molestaba.
Le decía que bailaba mal.
Le tiraba carrilla.
Y aplicaba mi técnica secreta:
"si la molesto, seguro se aleja".

Spoiler:
no se alejó.`,
    note: "Estrategia fallida #1",
    imagePlaceholder: "Placeholder: diagrama táctico de carrilla y baile cuestionable",
    stamp: "Evidencia"
  },
  {
    title: "Página 3 / Capítulo 3 — Castrosidad de alto impacto",
    text: `Entre tanta castrosidad de su parte (admirable, la verdad), logró llamar mi atención.
Lo que empezó como resistencia de mi parte, terminó en curiosidad.
Y en un momento de aparente debilidad… o destino…
le pasé mi número.

Sí, yo.
William Pitt.
El que según no iba a caer.`,
    note: "Contacto establecido",
    imagePlaceholder: "Placeholder: intercambio de número con tensión cinematográfica",
    stamp: "Evidencia"
  },
  {
    title: "Página 4 / Capítulo 4 — El mensaje del día siguiente",
    text: `Al día siguiente, ella me habló.
Y ahí empezó todo.

Primero fueron pláticas de cotorreo.
Luego conversaciones más largas.
Luego esa sensación rara de estar esperando el mensaje.
Y cuando quise darme cuenta…
ya me estaba importando más de lo que pensaba.`,
    note: "Nivel de enamoramiento: en aumento",
    imagePlaceholder: "Placeholder: chat infinito con café frío al lado",
    stamp: "Clasificado"
  },
  {
    title: "Página 5 / Capítulo 5 — El sapito feo",
    text: `Poco a poco me fui enamorando de ese sapito feo
(dicho con cariño, porque sí, me encanta molestarla).

Ya no era solo hablar por hablar.
Yo quería verla.
Quería estar con ella.
Quería darle su beso
y verla convertirse en princesa…

en mi princesa.`,
    note: "Diagnóstico: romanticismo irreversible",
    imagePlaceholder: "Placeholder: sapito coronado con brillo sospechoso",
    stamp: "Evidencia"
  },
  {
    title: "Página 6 / Capítulo 6 — Continuará + spoiler",
    text: `Y así, lo que empezó con acoso, carrilla y baile cuestionable,
terminó convirtiéndose en una historia que apenas comienza.

La historia de Golosa69 y William Pitt todavía se está escribiendo.
Y lo mejor…
es que lo que viene promete estar todavía más divertido.`,
    note: "Spoiler activo",
    imagePlaceholder: "Aquí va el spoiler oficial de Golosa69 y William Pitt",
    stamp: "Spoiler",
    isFinal: true
  }
];
