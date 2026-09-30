import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const shopLinks = [
  { label: "Shop all", to: "/#products" },
  { label: "Trending", to: "/#trending" },
  { label: "Shopping cart", to: "/cart" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="page-container">
        <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-10">
          <div>
            <Link
              to="/"
              className="font-display inline-flex text-2xl font-extrabold tracking-[-0.04em]"
            >
              Nexa
              <span className="text-brand-400">Store.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              A modern storefront experience built around simple product
              discovery, responsive shopping, and a streamlined checkout flow.
            </p>

            <a
              href="mailto:sobhanasadi703@gmail.com"
              className="hover:text-brand-400 mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-zinc-300 transition"
            >
              <FiMail />
              sobhanasadi703@gmail.com
            </a>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />

          <FooterColumn title="Explore" links={companyLinks} />

          <div>
            <p className="text-sm font-bold text-white">Built for the web</p>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Designed and developed as a front-end e-commerce portfolio
              project.
            </p>

            <a
              href="https://github.com/Sobhan-asadi"
              target="_blank"
              rel="noreferrer"
              className="hover:border-brand-500 hover:text-brand-400 mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2.5 text-xs font-bold text-zinc-200 transition"
            >
              <FaGithub className="text-base" />
              GitHub
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-zinc-800 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexa Store. Portfolio project.</p>

          <p>Designed &amp; developed by Sobhan Asadi</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-bold text-white">{title}</p>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="hover:text-brand-400 text-sm text-zinc-400 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
