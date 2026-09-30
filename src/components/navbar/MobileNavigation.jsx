import { FaHome, FaInfoCircle, FaRegEnvelope, FaStore } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Home",
    to: "/",
    icon: FaHome,
  },
  {
    label: "Shop",
    to: "/#products",
    icon: FaStore,
  },
  {
    label: "About",
    to: "/about",
    icon: FaInfoCircle,
  },
  {
    label: "Contact",
    to: "/contact",
    icon: FaRegEnvelope,
  },
];

export default function MobileNavigation({ menuOpen, onClose }) {
  if (!menuOpen) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className="border-t border-zinc-100 py-3 lg:hidden"
    >
      <nav aria-label="Mobile navigation" className="flex flex-col">
        <div className="grid grid-cols-2 gap-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            if (item.label === "Shop") {
              return (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-500">
                    <Icon className="text-sm" />
                  </span>

                  {item.label}
                </a>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                        isActive
                          ? "bg-brand-100 text-brand-700"
                          : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      <Icon className="text-sm" />
                    </span>

                    {item.label}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 border-t border-zinc-100 pt-3">
          <NavLink
            to="/login"
            onClick={onClose}
            className="rounded-xl border border-zinc-200 px-4 py-2.5 text-center text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
          >
            Log in
          </NavLink>

          <NavLink
            to="/register"
            onClick={onClose}
            className="rounded-xl bg-zinc-950 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Sign up
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
