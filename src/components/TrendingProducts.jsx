import {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import SuccessToast from "../libs/SuccessToast";
import { cartActions } from "../store/cartSlice";

export default function TrendingProducts({ products = [] }) {
  const dispatch = useDispatch();

  const trendingProducts = [...products]
    .sort(
      (a, b) =>
        (b.rating?.rate ?? 0) * (b.rating?.count ?? 0) -
        (a.rating?.rate ?? 0) * (a.rating?.count ?? 0),
    )
    .slice(0, 8);

  function handleAddToCart(product) {
    dispatch(cartActions.addToCart(product));
    SuccessToast("Added to your cart");
  }

  if (!trendingProducts.length) {
    return null;
  }

  return (
    <section className="page-container py-12 sm:py-16 lg:py-20">
      <div className="mb-7 flex items-end justify-between gap-5">
        <div>
          <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
            Trending now
          </p>

          <h2 className="section-title mt-2">Most-loved products</h2>

          <p className="section-description">
            Discover the products customers are exploring most across the Nexa
            collection.
          </p>
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous trending products"
            className="trending-prev flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-950 hover:text-white"
          >
            <FaArrowLeft className="text-xs" />
          </button>

          <button
            type="button"
            aria-label="Next trending products"
            className="trending-next flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-950 hover:text-white"
          >
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".trending-prev",
          nextEl: ".trending-next",
        }}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          480: {
            slidesPerView: 1.6,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2.6,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
        }}
        className="overflow-visible!"
      >
        {trendingProducts.map((product) => (
          <SwiperSlide key={product.id} className="h-auto!">
            <article className="group h-full overflow-hidden rounded-[24px] border border-zinc-200 bg-white">
              <Link
                to={`/products/${product.id}`}
                className="relative flex aspect-[4/4.3] items-center justify-center overflow-hidden bg-zinc-50 p-8"
              >
                <span className="absolute top-4 left-4 z-10 rounded-full bg-zinc-950 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white uppercase">
                  Trending
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
              </Link>

              <div className="p-5">
                <div className="flex items-center gap-1.5">
                  <FaStar className="text-xs text-amber-400" />

                  <span className="text-xs font-bold text-zinc-700">
                    {product.rating?.rate ?? "—"}
                  </span>

                  <span className="text-xs text-zinc-400">
                    ({product.rating?.count ?? 0})
                  </span>
                </div>

                <Link to={`/products/${product.id}`} className="mt-2 block">
                  <h3 className="group-hover:text-brand-700 line-clamp-2 min-h-12 text-sm leading-6 font-semibold text-zinc-900 transition-colors">
                    {product.title}
                  </h3>
                </Link>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-lg font-bold tracking-tight text-zinc-950">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.title} to cart`}
                    className="hover:bg-brand-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white transition"
                  >
                    <FaShoppingBag className="text-xs" />
                  </button>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-5 flex items-center gap-2 sm:hidden">
        <button
          type="button"
          aria-label="Previous trending products"
          className="trending-prev flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700"
        >
          <FaArrowLeft className="text-xs" />
        </button>

        <button
          type="button"
          aria-label="Next trending products"
          className="trending-next flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700"
        >
          <FaArrowRight className="text-xs" />
        </button>

        <span className="ml-2 text-xs font-medium text-zinc-400">
          Swipe to explore
        </span>
      </div>
    </section>
  );
}
