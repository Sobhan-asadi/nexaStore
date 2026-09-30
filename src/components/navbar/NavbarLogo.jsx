import { Link } from "react-router-dom";

export default function NavbarLogo({ onClick }) {
  return (
    <Link
      to="/"
      aria-label="Nexa Store home"
      onClick={onClick}
      className="inline-flex items-center gap-2"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
        N
      </div>

      <span className="font-display text-xl font-extrabold tracking-[-0.05em] text-zinc-950">
        NEXA
      </span>
    </Link>
  );
}
