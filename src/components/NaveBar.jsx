import { useState } from "react";
import {
  FaBars,
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaShoppingBag,
  FaTimes,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/#products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function NaveBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useSelector((state) => state.cart.items);

  const cartQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const navLinkClasses = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-colors ${
      isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl">
      {/* Announcement bar */}
      <div className="border-b border-zinc-100 bg-zinc-950">
        <div className="page-container flex min-h-9 items-center justify-center text-center text-xs font-medium text-white sm:text-sm">
          <span>Free shipping on orders over $75</span>

          <span className="mx-2 text-zinc-500">•</span>

          <span>30-day easy returns</span>
        </div>
      </div>

      <div className="page-container">
        {/* Desktop navbar */}
        <div className="hidden h-20 grid-cols-[1fr_auto_1fr] items-center lg:grid">
          {/* Logo */}
          <div className="flex justify-start">
            <Link
              to="/"
              aria-label="Nexa Store home"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
                N
              </div>

              <span className="font-display text-xl font-extrabold tracking-[-0.05em] text-zinc-950">
                NEXA
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-8">
            {navigation.map((item) =>
              item.label === "Shop" ? (
                <a
                  key={item.label}
                  href={item.to}
                  className="relative py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className={navLinkClasses}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}

                      {isActive && (
                        <span className="bg-brand-500 absolute right-0 bottom-0 left-0 mx-auto h-0.5 w-4 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ),
            )}
          </nav>

          {/* Desktop actions */}
          <div className="flex items-center justify-end gap-2">
            <form
              className="relative w-full max-w-[240px]"
              onSubmit={(event) => event.preventDefault()}
            >
              <FaSearch
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-zinc-400"
              />

              <input
                type="search"
                placeholder="Search products..."
                aria-label="Search products"
                className="focus:border-brand-500 focus:ring-brand-500/10 h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pr-4 pl-10 text-sm text-zinc-900 transition outline-none placeholder:text-zinc-400 focus:bg-white focus:ring-4"
              />
            </form>

            <Link
              to="/login"
              aria-label="Account"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              <FaRegUser className="text-lg" />
            </Link>

            <button
              type="button"
              aria-label="Wishlist"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              <FaRegHeart className="text-lg" />
            </button>

            <Link
              to="/cart"
              aria-label={`Shopping cart with ${cartQuantity} items`}
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              <FaShoppingBag className="text-lg" />

              {cartQuantity > 0 && (
                <span className="bg-brand-500 absolute -top-0.5 -right-0.5 flex min-h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white ring-2 ring-white">
                  {cartQuantity > 99 ? "99+" : cartQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Tablet / Mobile navbar */}
        <div className="flex h-[72px] items-center justify-between lg:hidden">
          <Link
            to="/"
            aria-label="Nexa Store home"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
              N
            </div>

            <span className="font-display text-xl font-extrabold tracking-[-0.05em] text-zinc-950">
              NEXA
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/login"
              aria-label="Account"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 sm:flex"
            >
              <FaRegUser className="text-lg" />
            </Link>

            <button
              type="button"
              aria-label="Wishlist"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 sm:flex"
            >
              <FaRegHeart className="text-lg" />
            </button>

            <Link
              to="/shoppingCart"
              aria-label={`Shopping cart with ${cartQuantity} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              <FaShoppingBag className="text-lg" />

              {cartQuantity > 0 && (
                <span className="bg-brand-500 absolute -top-0.5 -right-0.5 flex min-h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white ring-2 ring-white">
                  {cartQuantity > 99 ? "99+" : cartQuantity}
                </span>
              )}
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100"
            >
              {menuOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form
          className="relative mb-4 lg:hidden"
          onSubmit={(event) => event.preventDefault()}
        >
          <FaSearch
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-zinc-400"
          />

          <input
            type="search"
            placeholder="Search products..."
            aria-label="Search products"
            className="focus:border-brand-500 focus:ring-brand-500/10 h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pr-4 pl-10 text-sm text-zinc-900 transition outline-none placeholder:text-zinc-400 focus:bg-white focus:ring-4"
          />
        </form>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-zinc-100 py-4 lg:hidden"
          >
            <nav className="flex flex-col">
              {navigation.map((item) =>
                item.label === "Shop" ? (
                  <a
                    key={item.label}
                    href={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-brand-50 text-brand-700"
                          : "text-zinc-700 hover:bg-zinc-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-zinc-100 pt-4">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-zinc-200 px-4 py-2.5 text-center text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Log in
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-zinc-950 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default NaveBar;
