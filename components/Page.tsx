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
  const [pageTitle, pageSubtitle] = useMemo(() => {
    const titleParts = page.title.split(/\u2014/).map((part) => part.trim());
    if (titleParts.length < 2) {
      return [page.title.trim(), ""] as const;
    }

    return [titleParts[0], titleParts.slice(1).join(" - ")] as const;
  }, [page.title]);

  return (
    <article className="paper-texture relative h-full w-full overflow-hidden rounded-2xl border border-amber-900/10 p-6 shadow-paper md:p-8">
      <div className="relative z-10 flex h-full flex-col gap-6 overflow-y-auto pr-2">
        <div className="flex justify-center">
          <img
            src="/images/pagina.webp"
            alt="Decoración de cabecera"
            className="h-auto max-h-20 w-full max-w-md object-contain"
          />
        </div>

        <div className="space-y-7 text-center">
          <div className="space-y-3">
            <h3 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[#531a1e]">
              {pageTitle}
            </h3>
            {pageSubtitle ? (
              <p className="mx-auto max-w-3xl text-xl font-semibold leading-snug text-[#7b1f2b]">
                {pageSubtitle}
              </p>
            ) : null}
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#3b2518]">
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
              onClick={() => {
                if (!onSpoilerOpen) return;
                if (!page.finalImageSrc || !page.finalImageAlt) return;
                onSpoilerOpen(page.finalImageSrc, page.finalImageAlt);
              }}
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

        <div className="flex justify-center pb-1">
          <img
            src="/images/pie-de-pagina.webp"
            alt="Decoración de pie de página"
            className="h-auto max-h-16 w-full max-w-md object-contain"
          />
        </div>
      </div>
    </article>
  );
}
