"use client";

import { useMemo, useState } from "react";
import type { StoryPage } from "@/data/pages";

type PageProps = {
  page: StoryPage;
  onFinalAction?: () => void;
};

export function Page({ page, onFinalAction }: PageProps) {
  const [showImageFallback, setShowImageFallback] = useState(false);
  const paragraphs = useMemo(() => page.text.split("\n\n"), [page.text]);

  return (
    <article className="paper-texture relative h-full w-full overflow-hidden rounded-2xl border border-amber-900/10 p-7 shadow-paper dark:border-amber-100/10 md:p-10">
      <div className="absolute right-4 top-4 -rotate-2 rounded-md border border-[#7b1f2b]/20 bg-[#ffe0b7] px-3 py-1 font-[var(--font-special-elite)] text-xs uppercase tracking-[0.15em] text-[#7b1f2b] dark:border-amber-200/20 dark:bg-[#493125] dark:text-amber-100">
        {page.stamp}
      </div>

      <aside className="absolute -left-2 top-20 hidden -rotate-6 rounded-md border border-[#7b1f2b]/20 bg-[#fff5cc] px-3 py-2 font-[var(--font-caveat)] text-lg text-[#672114] shadow md:block dark:border-amber-100/20 dark:bg-[#3f2a1e] dark:text-amber-100">
        {page.note}
      </aside>

      <div className="relative z-10 flex h-full flex-col gap-8 md:flex-row md:gap-10">
        <div className="w-full space-y-7 md:w-3/5">
          <h3 className="max-w-xl text-3xl font-semibold leading-tight text-[#531a1e] dark:text-rose-100">
            {page.title}
          </h3>
          <div className="space-y-5 text-base leading-relaxed text-[#3b2518] dark:text-amber-100/90">
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
            <div className="space-y-3 rounded-lg border border-[#7b1f2b]/20 bg-[#fff1dc] p-4 dark:border-amber-100/20 dark:bg-[#352319]">
              {page.finalHeadline ? (
                <p className="text-2xl font-semibold leading-tight text-[#7b1f2b] md:text-3xl">
                  {page.finalHeadline}
                </p>
              ) : null}
              {page.finalParagraphs?.map((paragraph, index) => (
                <p
                  key={`${page.title}-final-${index}`}
                  className="text-sm leading-relaxed text-[#55231a] dark:text-amber-100/90"
                >
                  {paragraph}
                </p>
              ))}
              {page.finalActionLabel && onFinalAction ? (
                <button
                  type="button"
                  onClick={onFinalAction}
                  className="mt-2 rounded-full bg-[#7b1f2b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#651823]"
                >
                  {page.finalActionLabel}
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
