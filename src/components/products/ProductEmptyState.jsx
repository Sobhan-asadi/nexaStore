import { FaArrowRight, FaSearch } from "react-icons/fa";

export default function ProductEmptyState({ onReset }) {
  return (
    <div className="mt-8 flex min-h-72 flex-col items-center justify-center rounded-[24px] border border-dashed border-zinc-300 bg-white px-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
        <FaSearch />
      </div>

      <h3 className="font-display mt-4 text-lg font-bold text-zinc-950">
        No products found
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
        Try another search term or choose a different category.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="text-brand-700 hover:text-brand-800 mt-5 flex items-center gap-2 text-sm font-bold transition"
      >
        Reset filters
        <FaArrowRight className="text-xs" />
      </button>
    </div>
  );
}
