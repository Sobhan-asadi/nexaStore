import { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaRegHeart,
  FaSearch,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SuccessToast from "../libs/SuccessToast";
import { cartActions } from "../store/cartSlice";

const INITIAL_PRODUCTS_COUNT = 8;
const PRODUCTS_PER_LOAD = 4;

const categories = [
  { label: "All", value: "all" },
  { label: "Men", value: "men's clothing" },
  { label: "Women", value: "women's clothing" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelry", value: "jewelery" },
];

export default function AllProduct({ products = [] }) {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(INITIAL_PRODUCTS_COUNT);

  useEffect(() => {
    function handleCategoryChange(event) {
      setSelectedCategory(event.detail);
      setVisibleCount(INITIAL_PRODUCTS_COUNT);
    }

    window.addEventListener("nexa:category-change", handleCategoryChange);

    return () => {
      window.removeEventListener("nexa:category-change", handleCategoryChange);
    };
  }, []);

  useEffect(() => {
    setVisibleCount(INITIAL_PRODUCTS_COUNT);
  }, [search, selectedCategory, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    const normalizedSearch = search.trim().toLowerCase();

    if (normalizedSearch) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(normalizedSearch),
      );
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0));
        break;

      default:
        break;
    }

    return result;
  }, [products, search, selectedCategory, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const hasMoreProducts = visibleCount < filteredProducts.length;

  function handleAddToCart(product) {
    dispatch(cartActions.addToCart(product));
    SuccessToast("Added to your cart");
  }

  function handleLoadMore() {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + PRODUCTS_PER_LOAD, filteredProducts.length),
    );
  }

  function handleResetFilters() {
    setSearch("");
    setSelectedCategory("all");
    setSort("featured");
    setVisibleCount(INITIAL_PRODUCTS_COUNT);
  }

  return (
    <section className="page-container scroll-mt-36 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
            Curated for you
          </p>

          <h2 className="section-title mt-2">Shop our collection</h2>

          <p className="section-description">
            Explore everyday essentials, fashion, accessories, and technology
            selected for the Nexa collection.
          </p>
        </div>

        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="font-semibold text-zinc-950">
            {visibleProducts.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-zinc-950">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 xl:pb-0">
            {categories.map((category) => {
              const isActive = selectedCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-zinc-950 text-white"
                      : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="relative block sm:w-[260px]">
              <span className="sr-only">Search products</span>

              <FaSearch className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-xs text-zinc-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search collection..."
                className="focus:border-brand-500 focus:ring-brand-500/10 h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pr-4 pl-10 text-sm transition outline-none placeholder:text-zinc-400 focus:bg-white focus:ring-4"
              />
            </label>

            <div className="relative">
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort products"
                className="focus:border-brand-500 focus:ring-brand-500/10 h-11 w-full appearance-none rounded-full border border-zinc-200 bg-white pr-10 pl-4 text-sm font-medium text-zinc-700 transition outline-none focus:ring-4 sm:w-[190px]"
              >
                <option value="featured">Featured</option>

                <option value="rating">Top rated</option>

                <option value="price-low">Price: Low to high</option>

                <option value="price-high">Price: High to low</option>
              </select>

              <FaChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[10px] text-zinc-500" />
            </div>
          </div>
        </div>
      </div>

      {visibleProducts.length > 0 ? (
        <>
          <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <article key={product.id} className="group min-w-0">
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

                  <button
                    type="button"
                    aria-label={`Add ${product.title} to wishlist`}
                    className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-600 shadow-sm backdrop-blur-sm transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                  >
                    <FaRegHeart className="text-sm" />
                  </button>

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
                        onClick={() => handleAddToCart(product)}
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
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center">
            {hasMoreProducts ? (
              <>
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="group flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-7 text-sm font-bold text-zinc-900 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
                >
                  Load more products
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </button>

                <p className="mt-3 text-xs text-zinc-400">
                  {filteredProducts.length - visibleProducts.length} more
                  products available
                </p>
              </>
            ) : (
              filteredProducts.length > INITIAL_PRODUCTS_COUNT && (
                <p className="text-sm font-medium text-zinc-400">
                  You've reached the end of the collection.
                </p>
              )
            )}
          </div>
        </>
      ) : (
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
            onClick={handleResetFilters}
            className="text-brand-700 mt-5 flex items-center gap-2 text-sm font-bold"
          >
            Reset filters
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      )}
    </section>
  );
}
