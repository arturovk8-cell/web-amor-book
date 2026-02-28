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
      "Puede que tenga un poco de ego, drama y recuerdos “editados” por William Pitt. 😌",
      "Si quieres la versión verdadera (la bonita, la romántica y la que sí cuenta lo que pasó de verdad),"
    ],
    finalActionLabel: "👉 lee el Libro 2: La Historia Verdadera.",
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
    title: "Página 1 / Capítulo 1 — El inicio en Sunset",
    text: `Todo comenzó en un bar llamado Sunset, en Metepec.
Ahí estaba yo, William Pitt, intentando parecer tranquilo, cuando la vi por primera vez a ella: Golosa69.

Desde ese momento quise llamar su atención, pero no supe cómo hacerlo de la manera correcta.
Y como a veces pasa en los cuentos cuando el príncipe se pone nervioso, terminé diciéndole que bailaba feo, solo para que me mirara un poco más.`,
    note: "Primera mirada en Sunset",
    stamp: "Clasificado"
  },
  {
    title: "Página 2 / Capítulo 2 — La torpeza del corazón",
    text: `Mi plan salió regular.
Tanto la molesté con eso de su baile que llegó un momento en que se desesperó, y con toda razón.

Pero la verdad es que yo no sabía cómo seguir hablándole.
Me daba tanta pena que las ideas se me nublaban por completo.
Quería acercarme, decir algo bonito, hacerla reír... y no me salía nada.

Y para empeorar mi brillante estrategia, me puse borrachito y menos supe cómo hablar con ella.`,
    note: "Torpeza romántica detectada",
    stamp: "Evidencia"
  },
  {
    title: "Página 3 / Capítulo 3 — La búsqueda",
    text: `Al día siguiente desperté con una sola idea en la cabeza: encontrarla.
Quería volver a hablar con ella, pero no tenía cómo.

Empecé a buscar por todos lados algún dato de contacto.
Pregunté, moví cielo y tierra, pedí favores y seguí insistiendo durante horas.
Después de casi medio día de búsqueda, por fin conseguí su WhatsApp.

Y sentí como si hubiera encontrado una llave mágica.`,
    note: "Misión: encontrar su contacto",
    stamp: "Evidencia"
  },
  {
    title: "Página 4 / Capítulo 4 — El gran pequeño secreto",
    text: `Cuando por fin le escribí, le dije que ella me había pasado su número.
Pero no... la verdad es otra.

Ese es mi gran pequeño secreto,
uno de esos secretos que se guardan con una sonrisa
y que quizá jamás le diré.

Lo importante es que, de una u otra forma, ese mensaje llegó.
Y con ese mensaje comenzó una historia que desde el primer momento se sintió especial.`,
    note: "Secreto protegido",
    stamp: "Clasificado"
  },
  {
    title: "Página 5 / Capítulo 5 — Hablar y enamorarse",
    text: `Con el paso de los días hablamos y hablamos.
Cada conversación me gustaba más que la anterior.

Poco a poco empecé a descubrir su forma de ser, su esencia, su luz, y todo eso fue creciendo dentro de mí.
Hasta que un día entendí que ya no era solo emoción de momento.

Me fue gustando más y más,
al punto en que no puedo dejar de pensar en ella.`,
    note: "Enamoramiento confirmado",
    stamp: "Evidencia"
  },
  {
    title: "Página 6 / Capítulo 6 — Un cuento hecho con cariño",
    text: `Y por eso hago este tipo de cosas.
Porque cuando alguien te inspira de verdad, buscas formas de demostrarlo.

Este libro digital, programado en Node.js, CSS y HTML, con animaciones hechas al aventón, nació así:
entre ideas, nervios, desvelos y muchísima ilusión.

Tal vez no sea un castillo encantado,
pero está hecho con algo que vale más:
mucho cariño.`,
    note: "Final con cariño",
    stamp: "Spoiler",
    isFinal: true,
    finalHeadline: "Esta historia continuará...",
    finalParagraphs: [
      "Pero aquí hay un spoiler:",
      "mi corazón ya eligió a su princesa."
    ]
  }
];
