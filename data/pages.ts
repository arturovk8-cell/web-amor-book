export type StoryPageStamp = "Clasificado" | "Evidencia" | "Spoiler";

export type StoryPage = {
  title: string;
  text: string;
  note: string;
  imagePlaceholder?: string;
  stamp: StoryPageStamp;
  isFinal?: boolean;
  finalHeadline?: string;
  finalParagraphs?: string[];
  finalActionLabel?: string;
  finalImageSrc?: string;
  finalImageAlt?: string;
};

export type BookMeta = {
  title: string;
  subtitle: string;
  coverSmallText: string;
  backCoverText: string;
};

export const bookMeta: BookMeta = {
  title: "Crónicas de un Acoso Exitoso",
  subtitle: "Edición Sunset Metepec",
  coverSmallText:
    "Cómo Golosa69 logró llamar la atención de William Pitt (contra todo pronóstico).",
  backCoverText:
    "Reservado para próximos capítulos: más risas, más sarcasmo, más besos y probablemente más acusaciones de acoso."
};

export const storyPages: StoryPage[] = [
  {
    title: "Página 1 / Capítulo 1 — El incidente del Sunset",
    text: `Todo comenzó en un bar llamado Sunset, en Metepec.
Ahí estaba yo, William Pitt, en modo interesante, serio y claramente inalcanzable (según yo), cuando apareció Golosa69 con una energía sospechosamente intensa.

Ella me estaba acosando... en el sentido más divertido de la palabra.
Yo, por supuesto, hice lo que haría cualquier caballero emocionalmente confundido:
hacerme el difícil.`,
    note: "William Pitt aplicando indiferencia premium",
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
    stamp: "Evidencia"
  },
  {
    title: "Página 3 / Capítulo 3 — Castrosidad de alto impacto",
    text: `Entre tanta castrosidad de su parte (admirable, la verdad), logró llamar mi atención.
Lo que empezó como resistencia de mi parte, terminó en curiosidad.
Y en un momento de aparente debilidad... o destino...
le pasé mi número.

Sí, yo.
William Pitt.
El que según no iba a caer.`,
    note: "Contacto establecido",
    stamp: "Evidencia"
  },
  {
    title: "Página 4 / Capítulo 4 — El mensaje del día siguiente",
    text: `Al día siguiente, ella me habló.
Y ahí empezó todo.

Primero fueron pláticas de cotorreo.
Luego conversaciones más largas.
Luego esa sensación rara de estar esperando el mensaje.
Y cuando quise darme cuenta...
ya me estaba importando más de lo que pensaba.`,
    note: "Nivel de enamoramiento: en aumento",
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
y verla convertirse en princesa...

en mi princesa.`,
    note: "Diagnóstico: romanticismo irreversible",
    stamp: "Evidencia"
  },
  {
    title: "Página 6 / Capítulo 6 — Continuará + spoiler",
    text: `Y así, lo que empezó con acoso, carrilla y baile cuestionable,
terminó convirtiéndose en una historia que apenas comienza.

La historia de Golosa69 y William Pitt todavía se está escribiendo.
Y lo mejor...
es que lo que viene promete estar todavía más divertido.`,
    note: "Spoiler activo",
    stamp: "Spoiler",
    isFinal: true,
    finalHeadline: "Tal vez esta historia no es 100% real.",
    finalParagraphs: [
      "Puede que tenga un poco de ego, drama y recuerdos “editados” por William Pitt.",
      "Si quieres la versión verdadera (la bonita, la romántica y la que sí cuenta lo que pasó de verdad),"
    ],
    finalActionLabel: "lee el Libro 2: La Historia Verdadera.",
    finalImageSrc: "/images/bodafake.png",
    finalImageAlt: "Boda fake"
  }
];

export const trueStoryBookMeta: BookMeta = {
  title: "Crónicas de un Encuentro Inolvidable",
  subtitle: "Edición Sunset Metepec",
  coverSmallText:
    "Cómo Golosa69 se convirtió en la historia más bonita de William Pitt.",
  backCoverText:
    "La versión real de una historia que empezó con nervios y terminó en cariño."
};

export const trueStoryPages: StoryPage[] = [
  {
    title: "Crónicas de un Encuentro Inolvidable",
    text: `Edición Sunset Metepec

“Cómo Golosa69 se convirtió en la historia más bonita de William Pitt.”

Todo comenzó en Sunset, Metepec. Ahí estaba yo, William Pitt, intentando parecer tranquilo, cuando vi por primera vez a Golosa69. Quise llamar su atención, pero los nervios me traicionaron, y en vez de decir algo bonito, terminé diciéndole que bailaba feo… solo para que me mirara un poco más.

Mi plan salió mal. La molesté tanto que se desesperó, y con razón. La verdad es que me daba pena hablarle: quería acercarme, hacerla reír, decirle algo lindo… pero no me salía nada. Y para empeorar todo, me puse borrachito y menos supe cómo seguir la conversación.

Al día siguiente desperté con una sola idea: encontrarla. Busqué por todos lados su contacto, pedí favores, insistí durante horas, y después de casi medio día, por fin conseguí su WhatsApp. Cuando le escribí, le dije que ella me había pasado su número… pero ese es mi gran pequeño secreto.

Desde ese mensaje, empezamos a hablar y hablar. Cada conversación me gustaba más que la anterior. Poco a poco descubrí su esencia, su luz, y sin darme cuenta, me fui enamorando… hasta el punto de no poder dejar de pensar en ella.

Por eso existe este libro digital, hecho en Node.js, CSS y HTML, con animaciones hechas al aventón, pero con muchísimo cariño. Tal vez no sea un castillo de cuento, pero sí es una forma de decirle algo muy simple y muy real:

Esta historia continuará…

Spoiler: mi corazón ya eligió a su princesa.`,
    note: "",
    stamp: "Clasificado"
  }
];

