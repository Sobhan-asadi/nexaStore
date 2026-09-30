import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FaShoppingBag,
    title: "Complete shopping flow",
    description:
      "Product discovery, filtering, product details, persistent cart, and a simulated checkout experience.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive by design",
    description:
      "Layouts and interactions are designed to work across mobile, tablet, and desktop screens.",
  },
  {
    icon: FaCode,
    title: "Modern front-end stack",
    description:
      "Built with React, Redux Toolkit, React Router, Tailwind CSS, and reusable component architecture.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#fafafa]">
      <section className="page-container py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
              About Nexa Store
            </p>

            <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">
              A modern e-commerce experience built for the web.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
              Nexa Store is a front-end portfolio project focused on creating a
              polished and practical online shopping experience. The project
              combines product discovery, cart management, responsive design,
              and a simulated checkout flow in one cohesive storefront.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/#products"
                className="hover:bg-brand-600 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition"
              >
                Explore products
                <FaArrowRight className="text-xs" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-bold text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-zinc-950 p-7 sm:p-10">
            <div className="bg-brand-500/20 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl" />

            <div className="relative">
              <div className="bg-brand-400 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-extrabold text-zinc-950">
                N
              </div>

              <p className="font-display mt-10 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
                NEXA
                <span className="text-brand-400"> STORE</span>
              </p>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                Designed as a realistic storefront interface rather than a
                collection of isolated UI screens.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                <Stat value="100%" label="Responsive" />
                <Stat value="React" label="Front-end" />
                <Stat value="Redux" label="Cart state" />
                <Stat value="Demo" label="Checkout" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="page-container py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
              Project highlights
            </p>

            <h2 className="section-title mt-3">More than a product grid.</h2>

            <p className="section-description">
              The project covers the core interactions expected from a modern
              storefront while keeping the implementation focused on the
              front-end.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[24px] border border-zinc-200 bg-[#fafafa] p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-950/5 sm:p-7"
                >
                  <div className="bg-brand-50 text-brand-700 flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon />
                  </div>

                  <h3 className="font-display mt-6 text-lg font-bold tracking-[-0.02em] text-zinc-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-container py-16 sm:py-20">
        <div className="bg-brand-50 rounded-[30px] px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-zinc-950 sm:text-3xl">
              Want to explore the storefront?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600">
              Browse the catalog, open a product, add it to the cart, and walk
              through the demo checkout flow.
            </p>
          </div>

          <Link
            to="/#products"
            className="bg-brand-600 hover:bg-brand-700 mt-7 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-white transition lg:mt-0"
          >
            Start shopping
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="font-display text-lg font-extrabold text-white">{value}</p>

      <p className="mt-1 text-xs text-zinc-500">{label}</p>
    </div>
  );
}
