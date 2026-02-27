"use client";

import { useState } from "react";
import { Book } from "@/components/Book";
import { storyPages } from "@/data/pages";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGolosaVersion, setShowGolosaVersion] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="relative min-h-screen overflow-x-hidden px-4 py-6 text-[#2f1a0f] transition-colors sm:px-8 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(253,186,116,0.32),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(248,113,113,0.25),transparent_34%),radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.2),transparent_35%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(251,191,36,0.15),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(251,146,60,0.18),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(248,113,113,0.12),transparent_30%)]" />
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
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDarkMode((prev) => !prev)}
                className="rounded-full border border-amber-100/40 bg-black/25 px-4 py-2 text-sm text-amber-100 transition hover:bg-black/35"
              >
                {darkMode ? "Modo claro" : "Modo oscuro"}
              </button>
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
          <div className="w-full max-w-lg rounded-2xl border border-amber-100/30 bg-[#fff5e6] p-6 text-[#3a1d0f] shadow-2xl dark:bg-[#2d1c16] dark:text-amber-50">
            <p className="font-[var(--font-special-elite)] text-xs uppercase tracking-[0.2em] text-[#7b1f2b] dark:text-amber-200">
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
