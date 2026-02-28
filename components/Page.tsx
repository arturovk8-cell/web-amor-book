"use client";

import { useMemo } from "react";
import type { StoryPage } from "@/data/pages";

type PageProps = {
  page: StoryPage;
  onFinalAction?: () => void;
  onSpoilerOpen?: (src: string, alt?: string) => void;
};

export function Page({ page, onFinalAction, onSpoilerOpen }: PageProps) {
  const paragraphs = useMemo(() => page.text.split("\n\n"), [page.text]);

  return (
    <article className="paper-texture relative h-full w-full overflow-hidden rounded-2xl border border-amber-900/10 p-6 shadow-paper md:p-8">
      <div className="absolute right-4 top-4 -rotate-2 rounded-md border border-[#7b1f2b]/20 bg-[#ffe0b7] px-3 py-1 font-[var(--font-special-elite)] text-xs uppercase tracking-[0.15em] text-[#7b1f2b]">
        {page.stamp}
      </div>

      <aside className="absolute -left-2 top-20 hidden -rotate-6 rounded-md border border-[#7b1f2b]/20 bg-[#fff5cc] px-3 py-2 font-[var(--font-caveat)] text-lg text-[#672114] shadow md:block">
        {page.note}
      </aside>

      <div className="relative z-10 flex h-full flex-col gap-6">
        <div className="space-y-5 text-center">
          <h3 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[#531a1e]">
            {page.title}
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-[#3b2518]">
            {paragraphs.map((paragraph, index) => (
              <p key={`${page.title}-paragraph-${index}`} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {page.isFinal && page.finalImageSrc ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => onSpoilerOpen?.(page.finalImageSrc, page.finalImageAlt)}
              className="rounded-full bg-[#7b1f2b] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#651823]"
            >
              Ver spoiler
            </button>
          </div>
        ) : null}

        {page.isFinal ? (
          <div className="space-y-3 rounded-lg border border-[#7b1f2b]/20 bg-[#fff1dc] p-4 text-center">
            {page.finalHeadline ? (
              <p className="text-2xl font-semibold leading-tight text-[#7b1f2b] md:text-3xl">
                {page.finalHeadline}
              </p>
            ) : null}
            {page.finalParagraphs?.map((paragraph, index) => (
              <p
                key={`${page.title}-final-${index}`}
                className="text-sm leading-relaxed text-[#55231a]"
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
    </article>
  );
}
