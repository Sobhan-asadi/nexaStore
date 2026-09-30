import { useEffect } from "react";
import { FaHeart, FaTimes, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { wishlistActions } from "../../store/wishlistSlice";

export default function WishlistDrawer({ isOpen, onClose }) {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function handleRemove(productId) {
    dispatch(wishlistActions.removeFromWishlist(productId));
  }

  function handleClear() {
    dispatch(wishlistActions.clearWishlist());
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close wishlist"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-zinc-950/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Wishlist"
        className={`fixed top-0 right-0 z-[70] flex h-dvh w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-5 py-5 sm:px-6">
          <div>
            <div className="flex items-center gap-2">
              <FaHeart className="text-sm text-red-500" />

              <h2 className="font-display text-lg font-bold text-zinc-950">
                Wishlist
              </h2>
            </div>

            <p className="mt-1 text-xs text-zinc-500">
              {items.length} {items.length === 1 ? "item" : "items"} saved
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close wishlist"
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-950"
          >
            <FaTimes />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-5 py-2 sm:px-6">
              {items.map((product) => (
                <article
                  key={product.id}
                  className="flex gap-4 border-b border-zinc-100 py-5 last:border-b-0"
                >
                  <Link
                    to={`/products/${product.id}`}
                    onClick={onClose}
                    className="flex h-24 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-50 p-3"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="truncate text-[10px] font-bold tracking-wide text-zinc-400 uppercase">
                      {product.category}
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      onClick={onClose}
                      className="mt-1"
                    >
                      <h3 className="hover:text-brand-700 line-clamp-2 text-sm leading-5 font-semibold text-zinc-900 transition">
                        {product.title}
                      </h3>
                    </Link>

                    <div className="mt-auto flex items-end justify-between gap-3 pt-3">
                      <span className="text-sm font-bold text-zinc-950">
                        ${product.price.toFixed(2)}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleRemove(product.id)}
                        aria-label={`Remove ${product.title} from wishlist`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <FaTrashAlt className="text-xs" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="shrink-0 border-t border-zinc-200 p-5 sm:p-6">
              <button
                type="button"
                onClick={handleClear}
                className="w-full rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                Clear wishlist
              </button>
            </div>
          </>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-x-hidden overflow-y-auto px-6 py-8 text-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xl text-zinc-400">
              <FaHeart />
            </div>

            <h3 className="font-display mt-5 text-lg font-bold text-zinc-950">
              Your wishlist is empty
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
              Save products you like and they will appear here.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="hover:bg-brand-600 mt-6 rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
