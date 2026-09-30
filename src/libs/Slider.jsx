import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

export default function SliderMain({ products = [] }) {
  const featuredProducts = products.slice(0, 4);

  if (!featuredProducts.length) {
    return null;
  }

  return (
    <section className="page-container min-w-0 pt-5 sm:pt-7">
      <div className="hero-slider relative min-w-0 overflow-hidden rounded-[28px] bg-zinc-950 sm:rounded-[36px]">
        <Swiper
          loop={featuredProducts.length > 1}
          speed={700}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".hero-slider-prev",
            nextEl: ".hero-slider-next",
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="nexa-hero-swiper"
        >
          {featuredProducts.map((product, index) => (
            <SwiperSlide key={product.id} className="min-w-0">
              <div className="relative grid min-h-[560px] min-w-0 overflow-hidden lg:min-h-[610px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <div className="bg-brand-500/15 pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full blur-[100px]" />

                <div className="bg-brand-500/10 pointer-events-none absolute -right-32 -bottom-40 h-[420px] w-[420px] rounded-full blur-[120px]" />

                <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 xl:px-16">
                  <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                    <span className="bg-brand-400 h-1.5 w-1.5 rounded-full" />

                    <span className="text-xs font-semibold tracking-wide text-zinc-300">
                      {index === 0
                        ? "New season collection"
                        : "Nexa featured pick"}
                    </span>
                  </div>

                  <p className="text-brand-300 mb-3 text-xs font-bold tracking-[0.18em] uppercase">
                    {product.category}
                  </p>

                  <h1 className="font-display max-w-xl min-w-0 text-4xl leading-[1.08] font-extrabold tracking-[-0.05em] text-white sm:text-5xl lg:text-[58px]">
                    {product.title}
                  </h1>

                  <p className="mt-5 max-w-lg min-w-0 text-sm leading-7 text-zinc-400 sm:text-base">
                    {product.description}
                  </p>

                  <div className="mt-7 flex items-end gap-3">
                    <span className="text-sm font-medium text-zinc-500">
                      From
                    </span>

                    <span className="text-3xl font-bold tracking-tight text-white">
                      ${product.price}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="group hover:bg-brand-100 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-zinc-950 transition"
                    >
                      Shop product
                      <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href="#products"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                    >
                      Explore collection
                    </a>
                  </div>
                </div>

                <div className="relative flex min-h-[310px] min-w-0 items-center justify-center px-8 pb-16 lg:min-h-0 lg:px-14 lg:pb-0">
                  <div className="absolute h-[70%] w-[70%] rounded-full bg-white/[0.04] blur-sm" />

                  <div className="absolute h-[55%] w-[55%] rounded-full border border-white/[0.06]" />

                  <div className="absolute h-[42%] w-[42%] rounded-full border border-white/[0.08]" />

                  <img
                    src={product.image}
                    alt={product.title}
                    className="relative z-10 h-[260px] w-full max-w-[430px] object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)] sm:h-[320px] lg:h-[390px]"
                  />

                  <div className="absolute right-5 bottom-6 left-5 z-20 flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl sm:right-10 sm:left-10 lg:right-14 lg:bottom-10 lg:left-14">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-[0.16em] text-zinc-500 uppercase">
                        Customer rating
                      </p>

                      <div className="mt-1 flex min-w-0 items-center gap-2">
                        <span className="shrink-0 text-sm font-bold text-white">
                          ★ {product.rating?.rate ?? "4.5"}
                        </span>

                        <span className="truncate text-xs text-zinc-500">
                          ({product.rating?.count ?? 0} reviews)
                        </span>
                      </div>
                    </div>

                    <span className="bg-brand-500/15 text-brand-300 shrink-0 rounded-full px-3 py-1.5 text-xs font-bold">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-5 bottom-5 z-30 hidden items-center gap-2 sm:flex lg:right-8 lg:bottom-8">
          <button
            type="button"
            aria-label="Previous slide"
            className="hero-slider-prev flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-950/60 text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white hover:text-zinc-950"
          >
            <FaArrowLeft className="text-xs" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="hero-slider-next flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-950/60 text-white backdrop-blur-md transition hover:border-white/25 hover:bg-white hover:text-zinc-950"
          >
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}
