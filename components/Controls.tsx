type ControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
};

export function Controls({
  onPrev,
  onNext,
  canPrev,
  canNext
}: ControlsProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          className="rounded-full border border-amber-800/20 bg-[#fff2d4] px-5 py-2 text-sm font-semibold text-[#582d16] transition hover:-translate-y-0.5 hover:bg-[#ffe9be] disabled:cursor-not-allowed disabled:opacity-45"
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
