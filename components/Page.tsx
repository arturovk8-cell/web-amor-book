"use client";

import { useEffect, useMemo, useState } from "react";
import type { StoryPage } from "@/data/pages";

type PageProps = {
  page: StoryPage;
};

function Typewriter({ text }: { text: string }) {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);
    const timer = window.setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= text.length) {
          window.clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 70);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <p className="text-3xl font-semibold leading-tight text-[#7b1f2b] dark:text-rose-200 md:text-4xl">
      {text.slice(0, visibleChars)}
      <span className="typewriter-caret" />
    </p>
  );
}

export function Page({ page }: PageProps) {
  const [showImageFallback, setShowImageFallback] = useState(false);
  const paragraphs = useMemo(() => page.text.split("\n\n"), [page.text]);

  return (
    <article className="paper-texture relative h-full w-full overflow-hidden rounded-2xl border border-amber-900/10 p-6 shadow-paper dark:border-amber-100/10 md:p-8">
      <div className="absolute right-4 top-4 -rotate-2 rounded-md border border-[#7b1f2b]/20 bg-[#ffe0b7] px-3 py-1 font-[var(--font-special-elite)] text-xs uppercase tracking-[0.15em] text-[#7b1f2b] dark:border-amber-200/20 dark:bg-[#493125] dark:text-amber-100">
        {page.stamp}
      </div>

      <aside className="absolute -left-2 top-20 hidden -rotate-6 rounded-md border border-[#7b1f2b]/20 bg-[#fff5cc] px-3 py-2 font-[var(--font-caveat)] text-lg text-[#672114] shadow md:block dark:border-amber-100/20 dark:bg-[#3f2a1e] dark:text-amber-100">
        {page.note}
      </aside>

      <div className="relative z-10 flex h-full flex-col gap-5 md:flex-row">
        <div className="w-full space-y-4 md:w-3/5">
          <h3 className="max-w-xl text-3xl font-semibold leading-tight text-[#531a1e] dark:text-rose-100">
            {page.title}
          </h3>
          <div className="space-y-3 text-base leading-relaxed text-[#3b2518] dark:text-amber-100/90">
            {paragraphs.map((paragraph, index) => (
              <p key={`${page.title}-paragraph-${index}`} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 md:w-2/5">
          <div className="relative flex min-h-48 flex-1 items-center justify-center rounded-xl border border-dashed border-[#7b1f2b]/40 bg-white/45 p-5 text-center text-sm leading-relaxed text-[#7b1f2b] dark:border-amber-100/35 dark:bg-black/20 dark:text-amber-100">
            {page.isFinal ? (
              showImageFallback ? (
                <p className="font-[var(--font-special-elite)] text-base">
                  Aquí va el spoiler oficial de Golosa69 y William Pitt
                </p>
              ) : (
                <img
                  src="/images/spoiler-final.jpg"
                  alt="Spoiler final de Golosa69 y William Pitt"
                  className="h-full max-h-72 w-full rounded-lg border border-amber-900/20 object-cover dark:border-amber-100/20"
                  onError={() => setShowImageFallback(true)}
                />
              )
            ) : (
              <p className="font-[var(--font-special-elite)]">{page.imagePlaceholder}</p>
            )}
          </div>

          {page.isFinal ? (
            <div className="space-y-2 rounded-lg border border-[#7b1f2b]/20 bg-[#fff1dc] p-4 dark:border-amber-100/20 dark:bg-[#352319]">
              <Typewriter text="Esta historia continuará…" />
              <p className="text-sm leading-relaxed text-[#55231a] dark:text-amber-100/90">
                Pero aquí un spoiler 👀: (lo que sigue en esta historia se revela con una
                imagen especial).
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
