import { FaShoppingBag, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import WishlistButton from "../wishlist/WishlistButton";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden rounded-[22px] border border-zinc-200 bg-white">
        <Link
          to={`/products/${product.id}`}
          aria-label={`View ${product.title}`}
          className="block"
        >
          <div className="relative flex aspect-[4/4.4] items-center justify-center overflow-hidden bg-zinc-50 p-8 sm:p-10">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />

            <span className="absolute top-4 left-4 max-w-[70%] truncate rounded-full border border-zinc-200/80 bg-white/90 px-2.5 py-1 text-[10px] font-bold tracking-wide text-zinc-600 uppercase backdrop-blur-sm">
              {product.category}
            </span>
          </div>
        </Link>

        <WishlistButton
          product={product}
          className="absolute top-4 right-4 h-9 w-9 rounded-full border border-zinc-200 bg-white/90 text-sm text-zinc-600 shadow-sm backdrop-blur-sm hover:border-red-100 hover:bg-red-50 hover:text-red-500"
        />

        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-1.5">
            <FaStar className="text-xs text-amber-400" />

            <span className="text-xs font-semibold text-zinc-700">
              {product.rating?.rate ?? "—"}
            </span>

            <span className="text-xs text-zinc-400">
              ({product.rating?.count ?? 0})
            </span>
          </div>

          <Link to={`/products/${product.id}`} className="mt-2 block">
            <h3 className="group-hover:text-brand-700 line-clamp-2 min-h-12 text-sm leading-6 font-semibold text-zinc-900 transition">
              {product.title}
            </h3>
          </Link>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-lg font-bold tracking-tight text-zinc-950">
              ${product.price.toFixed(2)}
            </span>

            <button
              type="button"
              onClick={() => onAddToCart(product)}
              aria-label={`Add ${product.title} to cart`}
              className="hover:bg-brand-600 flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 text-xs font-bold text-white transition"
            >
              <FaShoppingBag />

              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
