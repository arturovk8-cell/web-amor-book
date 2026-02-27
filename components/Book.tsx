"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { bookMeta, type StoryPage } from "@/data/pages";
import { Controls } from "./Controls";
import { Cover } from "./Cover";
import { Page } from "./Page";

type BookProps = {
  pages: StoryPage[];
};

export function Book({ pages }: BookProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = pages.length + 2;

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalPages - 1;

  const currentLabel = useMemo(() => {
    if (currentIndex === 0) return "Portada";
    if (currentIndex === totalPages - 1) return "Contraportada";
    return `Página ${currentIndex} de ${pages.length}`;
  }, [currentIndex, pages.length, totalPages]);

  const next = () => {
    if (!canNext) return;
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (!canPrev) return;
    setDirection(-1);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
      <div className="relative w-full max-w-4xl">
        <div className="book-glow" />
        <div className="relative mx-auto h-[clamp(350px,62vh,640px)] w-full max-w-4xl [perspective:2000px] sm:h-[clamp(420px,66vh,640px)] md:h-[clamp(520px,70vh,640px)]">
          <div className="absolute left-1/2 top-1/2 h-[96%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-amber-200/20 bg-black/15 shadow-2xl backdrop-blur-sm" />
          <div className="absolute left-1/2 top-1/2 h-[94%] w-[4%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#3f1f17] via-[#8a4e33] to-[#3f1f17] shadow-inner" />

          <div className="absolute left-1/2 top-1/2 h-[90%] w-[92%] -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ rotateY: direction > 0 ? -88 : 88, opacity: 0.75, x: direction > 0 ? 70 : -70 }}
                animate={{ rotateY: 0, opacity: 1, x: 0 }}
                exit={{ rotateY: direction > 0 ? 72 : -72, opacity: 0.6, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: direction > 0 ? "left center" : "right center"
                }}
                className="h-full w-full rounded-2xl"
              >
                {currentIndex === 0 ? (
                  <Cover
                    side="front"
                    title={bookMeta.title}
                    subtitle={bookMeta.subtitle}
                    smallText={bookMeta.coverSmallText}
                  />
                ) : currentIndex === totalPages - 1 ? (
                  <Cover
                    side="back"
                    title={bookMeta.title}
                    backText={bookMeta.backCoverText}
                  />
                ) : (
                  <Page page={pages[currentIndex - 1]} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full">
        <Controls
          onPrev={prev}
          onNext={next}
          canPrev={canPrev}
          canNext={canNext}
          currentLabel={currentLabel}
        />
      </div>
    </div>
  );
}
