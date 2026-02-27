type CoverProps = {
  title: string;
  subtitle?: string;
  smallText?: string;
  backText?: string;
  side: "front" | "back";
};

export function Cover({
  title,
  subtitle,
  smallText,
  backText,
  side
}: CoverProps) {
  const isFront = side === "front";

  return (
    <section
      className={`relative h-full w-full overflow-hidden rounded-2xl border ${
        isFront
          ? "border-amber-200/40 bg-gradient-to-br from-[#5c191f] via-[#7b1f2b] to-[#381015] text-amber-50"
          : "border-[#5c3a2d] bg-gradient-to-br from-[#4a2218] via-[#2f150f] to-[#22100c] text-amber-100"
      } shadow-paper`}
    >
      <div className="absolute -left-8 top-0 h-full w-20 rotate-6 bg-black/25 blur-xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,193,107,0.45),transparent_35%),radial-gradient(circle_at_80%_85%,rgba(249,115,96,0.35),transparent_35%)]" />

      <div className="relative flex h-full flex-col justify-between gap-8 p-7 md:gap-12 md:p-10">
        {isFront ? (
          <>
            <div className="space-y-7 md:space-y-8">
              <p className="w-fit rounded-full border border-amber-100/50 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                Edición de colección
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {title}
              </h1>
              {subtitle ? (
                <h2 className="font-[var(--font-caveat)] text-3xl text-amber-200 md:text-4xl">
                  {subtitle}
                </h2>
              ) : null}
            </div>
            {smallText ? (
              <p className="mt-4 max-w-md rounded-xl border border-amber-50/30 bg-black/25 p-4 text-sm leading-relaxed text-amber-100 md:mt-6">
                {smallText}
              </p>
            ) : null}
          </>
        ) : (
          <>
            <p className="font-[var(--font-special-elite)] text-sm uppercase tracking-[0.22em] text-amber-300/80">
              Contraportada
            </p>
            <p className="max-w-lg text-lg leading-relaxed md:text-2xl">{backText}</p>
            <p className="font-[var(--font-caveat)] text-2xl text-amber-300">
              Fin... por ahora.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
