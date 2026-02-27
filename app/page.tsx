"use client";

import { useState } from "react";
import { Book } from "@/components/Book";
import { storyPages } from "@/data/pages";

const floatingHearts = Array.from({ length: 16 });

export default function Home() {
  const [showGolosaVersion, setShowGolosaVersion] = useState(false);

  return (
    <main>
      <section className="relative min-h-screen overflow-x-hidden px-4 py-6 text-[#2f1a0f] transition-colors sm:px-8 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(253,186,116,0.32),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(248,113,113,0.25),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.2),transparent_35%)]" />
        <div className="heart-rain" aria-hidden="true">
          {floatingHearts.map((_, index) => (
            <span key={`heart-${index}`} className="heart-drop" />
          ))}
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6">
          <header className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-[var(--font-special-elite)] text-xs uppercase tracking-[0.2em] text-amber-200">
                Cuento digital interactivo
              </p>
              <h1 className="text-2xl font-semibold text-amber-50 sm:text-3xl">
                Crónicas de un Acoso Exitoso
              </h1>
            </div>
            <div className="ml-auto flex w-full flex-col items-end gap-2 sm:w-auto">
              <audio
                controls
                preload="metadata"
                className="h-10 w-[320px] max-w-full rounded-full border border-amber-100/40 bg-black/30 px-2"
              >
                <source src="/audio/amarte-es-un-placer.mp3" type="audio/mpeg" />
                Tu navegador no soporta audio MP3.
              </audio>
              <button
                type="button"
                onClick={() => setShowGolosaVersion(true)}
                className="rounded-full border border-rose-100/40 bg-[#f97360] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ef5f4b]"
              >
                Ver versión de Golosa69
              </button>
            </div>
          </header>

          <Book pages={storyPages} />
        </div>
      </section>

      {showGolosaVersion ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-amber-100/30 bg-[#fff5e6] p-6 text-[#3a1d0f] shadow-2xl">
            <p className="font-[var(--font-special-elite)] text-xs uppercase tracking-[0.2em] text-[#7b1f2b]">
              Archivo secreto
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Versión de Golosa69 (placeholder)</h2>
            <p className="mt-3 leading-relaxed">
              "Yo no acosé a nadie. Solo ejecuté un plan de socialización intensiva con
              seguimiento premium, paciencia estratégica y cero miedo al ridículo."
            </p>
            <p className="mt-3 leading-relaxed">
              "Conclusión: William Pitt cayó por insistencia, carisma y un baile
              técnicamente cuestionable, pero efectivo."
            </p>
            <button
              type="button"
              onClick={() => setShowGolosaVersion(false)}
              className="mt-5 rounded-full bg-[#7b1f2b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#651823]"
            >
              Cerrar expediente
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
