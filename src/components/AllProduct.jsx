import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import SuccessToast from "../libs/SuccessToast";
import { cartActions } from "../store/cartSlice";
import ProductEmptyState from "./products/ProductEmptyState";
import ProductFilters from "./products/ProductFilters";
import ProductGrid from "./products/ProductGrid";
import ProductLoadMore from "./products/ProductLoadMore";

const INITIAL_PRODUCTS_COUNT = 8;
const PRODUCTS_PER_LOAD = 4;

export default function AllProduct({ products = [] }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") ?? "";

  const [search, setSearch] = useState(urlSearch);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(INITIAL_PRODUCTS_COUNT);

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

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

  const remainingProducts = filteredProducts.length - visibleProducts.length;

  const hasLoadedAll =
    filteredProducts.length > INITIAL_PRODUCTS_COUNT && !hasMoreProducts;

  function handleSearchChange(value) {
    setSearch(value);

    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set("search", value);
    } else {
      nextParams.delete("search");
    }

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSortChange(value) {
    setSort(value);
  }

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

    const nextParams = new URLSearchParams(searchParams);

    nextParams.delete("search");

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  return (
    <section
      id="products"
      className="page-container scroll-mt-36 py-12 sm:py-16 lg:py-20"
    >
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

      <ProductFilters
        search={search}
        selectedCategory={selectedCategory}
        sort={sort}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />

      {visibleProducts.length > 0 ? (
        <>
          <ProductGrid
            products={visibleProducts}
            onAddToCart={handleAddToCart}
          />

          <ProductLoadMore
            hasMoreProducts={hasMoreProducts}
            remainingProducts={remainingProducts}
            hasLoadedAll={hasLoadedAll}
            onLoadMore={handleLoadMore}
          />
        </>
      ) : (
        <ProductEmptyState onReset={handleResetFilters} />
      )}
    </section>
  );
}
