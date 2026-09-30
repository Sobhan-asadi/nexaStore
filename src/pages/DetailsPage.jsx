import {
  FaArrowLeft,
  FaCheck,
  FaShoppingBag,
  FaStar,
  FaTruck,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";

import WishlistButton from "../components/wishlist/WishlistButton";
import Photoswipe from "../libs/Photoswipe";
import SuccessToast from "../libs/SuccessToast";
import { cartActions } from "../store/cartSlice";

export default function ProductDetails() {
  const product = useLoaderData();
  const dispatch = useDispatch();

  const images = [
    {
      largeURL: product.image,
      thumbnailURL: product.image,
      width: 1200,
      height: 1500,
    },
  ];

  function handleAddToCart() {
    dispatch(cartActions.addToCart(product));
    SuccessToast("Added to your cart");
  }

  return (
    <div className="bg-[#fafafa]">
      <div className="page-container py-6 sm:py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs text-zinc-500"
        >
          <Link to="/" className="transition hover:text-zinc-950">
            Home
          </Link>

          <span>/</span>

          <Link to="/#products" className="transition hover:text-zinc-950">
            Shop
          </Link>

          <span>/</span>

          <span className="max-w-[220px] truncate font-medium text-zinc-800 sm:max-w-sm">
            {product.title}
          </span>
        </nav>

        <section className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-8 sm:min-h-[560px] sm:p-14">
              <span className="bg-brand-50 text-brand-700 absolute top-5 left-5 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] uppercase">
                {product.category}
              </span>

              <div className="product-details-gallery flex h-full w-full items-center justify-center">
                <Photoswipe
                  galleryID={`product-gallery-${product.id}`}
                  images={images}
                />
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-zinc-400">
              Click the image to view it in full size.
            </p>
          </div>

          <div className="flex flex-col justify-center py-2 lg:py-8">
            <Link
              to="/#products"
              className="mb-7 flex w-fit items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-zinc-950"
            >
              <FaArrowLeft className="text-xs" />
              Back to collection
            </Link>

            <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
              {product.category}
            </p>

            <h1 className="font-display mt-3 max-w-xl text-3xl leading-tight font-extrabold tracking-[-0.045em] text-zinc-950 sm:text-4xl xl:text-5xl">
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.round(product.rating?.rate ?? 0)
                        ? "text-sm text-amber-400"
                        : "text-sm text-zinc-200"
                    }
                  />
                ))}
              </div>

              <span className="text-sm font-bold text-zinc-800">
                {product.rating?.rate ?? "—"}
              </span>

              <span className="text-sm text-zinc-400">
                {product.rating?.count ?? 0} reviews
              </span>
            </div>

            <div className="mt-7 flex items-end gap-3 border-b border-zinc-200 pb-7">
              <span className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="py-7">
              <h2 className="text-sm font-bold text-zinc-950">
                About this product
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-[15px]">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="hover:bg-brand-600 flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition"
              >
                <FaShoppingBag />
                Add to cart
              </button>

              <WishlistButton
                product={product}
                className="h-13 gap-2 rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-700 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              />
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-7">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                  <FaTruck className="text-sm" />
                </div>

                <div>
                  <p className="text-xs font-bold text-zinc-900">
                    Free shipping
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-zinc-500">
                    Orders over $75
                  </p>
                </div>
              </div>
            </div>

            <div className="border-brand-100 bg-brand-50/60 mt-7 flex items-center gap-2 rounded-2xl border px-4 py-3">
              <div className="bg-brand-600 flex h-5 w-5 items-center justify-center rounded-full text-white">
                <FaCheck className="text-[8px]" />
              </div>

              <p className="text-brand-800 text-xs font-semibold">
                Available in the demo product catalog
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
