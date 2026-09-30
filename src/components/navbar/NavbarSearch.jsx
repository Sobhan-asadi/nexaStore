import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NavbarSearch({ className = "", onSearch }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      return;
    }

    onSearch?.();

    navigate(`/?search=${encodeURIComponent(query)}#products`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`relative ${className}`}
    >
      <FaSearch
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-zinc-400"
      />

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className="focus:border-brand-500 focus:ring-brand-500/10 h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pr-4 pl-10 text-sm text-zinc-900 transition outline-none placeholder:text-zinc-400 focus:bg-white focus:ring-4"
      />
    </form>
  );
}
