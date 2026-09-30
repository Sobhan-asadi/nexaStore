import { FaArrowRight } from "react-icons/fa";

export default function ProductLoadMore({
  hasMoreProducts,
  remainingProducts,
  hasLoadedAll,
  onLoadMore,
}) {
  return (
    <div className="mt-10 flex flex-col items-center">
      {hasMoreProducts ? (
        <>
          <button
            type="button"
            onClick={onLoadMore}
            className="group flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 text-sm font-bold text-zinc-900 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
          >
            Load more products
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-3 text-xs text-zinc-400">
            {remainingProducts} more{" "}
            {remainingProducts === 1 ? "product" : "products"} available
          </p>
        </>
      ) : (
        hasLoadedAll && (
          <p className="text-sm font-medium text-zinc-400">
            You&apos;ve reached the end of the collection.
          </p>
        )
      )}
    </div>
  );
}
