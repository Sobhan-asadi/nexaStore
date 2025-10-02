import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function NaveBar() {
  const state = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-white shadow-md">
      <div className="lg:px:24 container mx-auto flex items-center justify-between px-4 py-4 md:px-16">
        <div className="">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-[95px]" />
          </Link>
        </div>

        <div className="relative mx-4 flex-1">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border px-4 py-2"
            />
            <FaSearch className="absolute top-3 right-3 text-sky-500" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link className="relative" to="shoppingCart">
            <FaShoppingCart className="text-lg" />
            {state.length > 0 && (
              <span className="absolute -top-3.5 left-1.5 flex h-4 w-4 items-center justify-center rounded-2xl bg-sky-800 text-sm text-white">
                {state.length}
              </span>
            )}
          </Link>

          <button className="hidden cursor-pointer md:block">
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `hover:underline hover:decoration-sky-400 hover:decoration-2 hover:underline-offset-4 ${isActive ? "underline decoration-sky-400 decoration-2 underline-offset-4" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="contact"
          className={({ isActive }) =>
            `hover:underline hover:decoration-sky-400 hover:decoration-2 hover:underline-offset-4 ${isActive ? "underline decoration-sky-400 decoration-2 underline-offset-4" : ""}`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="about"
          className={({ isActive }) =>
            `hover:underline hover:decoration-sky-400 hover:decoration-2 hover:underline-offset-4 ${isActive ? "underline decoration-sky-400 decoration-2 underline-offset-4" : ""}`
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default NaveBar;
