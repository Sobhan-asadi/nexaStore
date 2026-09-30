import {
  FaHeadphones,
  FaShieldAlt,
  FaShippingFast,
  FaUndoAlt,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

import AllProduct from "../components/AllProduct";
import Category from "../components/Category";
import TrendingProducts from "../components/TrendingProducts";
import SliderMain from "../libs/Slider";

const storeBenefits = [
  {
    icon: FaShippingFast,
    title: "Free shipping",
    description: "On orders over $75",
  },
  {
    icon: FaUndoAlt,
    title: "Easy returns",
    description: "30-day return policy",
  },
  {
    icon: FaShieldAlt,
    title: "Secure checkout",
    description: "Protected checkout experience",
  },
  {
    icon: FaHeadphones,
    title: "Customer support",
    description: "We're here to help",
  },
];

export default function HomePage() {
  const products = useLoaderData();

  return (
    <div className="overflow-hidden bg-[#fafafa]">
      <SliderMain products={products} />

      <section className="page-container py-8 sm:py-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white md:grid-cols-4">
          {storeBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex items-center gap-3 p-4 sm:p-5 ${
                  index < storeBenefits.length - 1
                    ? "md:border-r md:border-zinc-100"
                    : ""
                } ${index < 2 ? "border-b border-zinc-100 md:border-b-0" : ""}`}
              >
                <div className="bg-brand-50 text-brand-700 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="text-base" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-zinc-900">
                    {benefit.title}
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="categories">
        <Category />
      </section>

      <TrendingProducts products={products} />

      <section id="products">
        <AllProduct products={products} />
      </section>

      <section className="page-container py-16 sm:py-20">
        <div className="bg-brand-50 flex flex-col items-start justify-between gap-6 rounded-[28px] px-6 py-10 sm:px-10 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
              Customer care
            </p>

            <h2 className="font-display mt-2 text-2xl font-bold tracking-[-0.04em] text-zinc-950 sm:text-3xl">
              Need help with your order?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
              Have a product question or need help before checkout? Get in touch
              with our support team.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Response("Unable to load products.", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response.json();
}
