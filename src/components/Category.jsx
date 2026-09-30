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
    image: "/images (1).jpg",
    icon: FaLaptop,
  },
  {
    id: 4,
    title: "Jewelry",
    category: "jewelery",
    description: "Simple finishing touches for every occasion.",
    image: "/images.jpg",
    icon: FaGem,
  },
];

export default function Category() {
  function handleCategoryClick(category) {
    const productsSection = document.getElementById("products");

    if (!productsSection) return;

    window.dispatchEvent(
      new CustomEvent("nexa:category-change", {
        detail: category,
      }),
    );

    productsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
              className={`group relative overflow-hidden rounded-[24px] bg-zinc-900 text-left ${
                item.featured
                  ? "min-h-[340px] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[520px]"
                  : "min-h-[250px]"
              }`}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                  <Icon />
                </div>

                <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
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
