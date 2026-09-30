import { FaChevronDown, FaSearch } from "react-icons/fa";

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Men",
    value: "men's clothing",
  },
  {
    label: "Women",
    value: "women's clothing",
  },
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Jewelry",
    value: "jewelery",
  },
];

export default function ProductFilters({
  search,
  selectedCategory,
  sort,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) {
  return (
    <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1 xl:pb-0">
          {categories.map((category) => {
            const isActive = selectedCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => onCategoryChange(category.value)}
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
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search collection..."
              className="focus:border-brand-500 focus:ring-brand-500/10 h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pr-4 pl-10 text-sm transition outline-none placeholder:text-zinc-400 focus:bg-white focus:ring-4"
            />
          </label>

          <div className="relative">
            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
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
  );
}
