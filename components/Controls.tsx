type ControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  currentLabel: string;
};

export function Controls({
  onPrev,
  onNext,
  canPrev,
  canNext,
  currentLabel
}: ControlsProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <p className="rounded-full border border-amber-200/50 bg-amber-100/60 px-4 py-1 text-xs uppercase tracking-[0.16em] text-[#4b2b1a] dark:border-amber-400/30 dark:bg-[#2f1f18]/70 dark:text-amber-100">
        {currentLabel}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          className="rounded-full border border-amber-800/20 bg-[#fff2d4] px-5 py-2 text-sm font-semibold text-[#582d16] transition hover:-translate-y-0.5 hover:bg-[#ffe9be] disabled:cursor-not-allowed disabled:opacity-45 dark:border-amber-200/25 dark:bg-[#38231a] dark:text-amber-100 dark:hover:bg-[#492d21]"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="rounded-full border border-rose-900/20 bg-[#f97360] px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ef5f4b] disabled:cursor-not-allowed disabled:opacity-45"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
