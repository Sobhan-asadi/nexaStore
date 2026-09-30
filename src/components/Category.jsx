import {
  FaArrowRight,
  FaGem,
  FaLaptop,
  FaMale,
  FaShoppingBag,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Men's Clothing",
    category: "men's clothing",
    description: "Everyday essentials and modern wardrobe staples.",
    image: "/professional-man-portrait.jpg",
    icon: FaMale,
    featured: true,
  },
  {
    id: 2,
    title: "Women's Clothing",
    category: "women's clothing",
    description: "Versatile pieces selected for modern everyday style.",
    image: "/WomanCetegory.webp",
    icon: FaShoppingBag,
  },
  {
    id: 3,
    title: "Electronics",
    category: "electronics",
    description: "Tech essentials for work, entertainment, and daily life.",
    image: null,
    icon: FaLaptop,
  },
  {
    id: 4,
    title: "Jewelry",
    category: "jewelery",
    description: "Simple finishing touches for every occasion.",
    image: null,
    icon: FaGem,
  },
];

export default function Category() {
  function handleCategoryClick(category) {
    const productsSection = document.getElementById("products");

    if (!productsSection) return;

    productsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.dispatchEvent(
      new CustomEvent("nexa:category-change", {
        detail: category,
      }),
    );
  }

  return (
    <section className="page-container py-12 sm:py-16 lg:py-20">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
            Shop your way
          </p>

          <h2 className="section-title mt-2">Explore popular categories</h2>

          <p className="section-description">
            Find what you need faster with collections built around the way you
            shop.
          </p>
        </div>

        <button
          type="button"
          onClick={() => handleCategoryClick("all")}
          className="group hover:text-brand-700 hidden items-center gap-2 text-sm font-semibold text-zinc-700 transition sm:flex"
        >
          Shop all products
          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleCategoryClick(item.category)}
              className={`group relative overflow-hidden rounded-[24px] text-left ${
                item.featured
                  ? "min-h-[340px] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[520px]"
                  : "min-h-[250px]"
              }`}
            >
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                      <Icon />
                    </div>

                    <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-300">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
                      Shop collection
                      <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="group-hover:bg-brand-50 absolute inset-0 flex flex-col justify-between bg-zinc-100 p-6 transition-colors duration-300 sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="group-hover:text-brand-700 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg text-zinc-800 shadow-sm transition">
                      <Icon />
                    </div>

                    <div className="group-hover:border-brand-200 group-hover:bg-brand-500 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs text-zinc-600 transition group-hover:text-white">
                      <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-zinc-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute -right-14 -bottom-14 h-36 w-36 rounded-full border-[24px] border-white/60 transition-transform duration-500 group-hover:scale-110" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => handleCategoryClick("all")}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-300 sm:hidden"
      >
        Shop all products
        <FaArrowRight className="text-xs" />
      </button>
    </section>
  );
}
