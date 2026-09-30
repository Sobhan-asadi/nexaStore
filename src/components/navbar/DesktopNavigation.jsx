import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Shop",
    to: "/#products",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default function DesktopNavigation() {
  const navLinkClasses = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-colors ${
      isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"
    }`;

  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center justify-center gap-8"
    >
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
  );
}
