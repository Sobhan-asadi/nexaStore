import { FaHeart, FaRegHeart, FaRegUser, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavbarActions({
  showAccount = true,
  showWishlist = true,
  onOpenWishlist,
}) {
  const cartItems = useSelector((state) => state.cart.items);

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const wishlistQuantity = wishlistItems.length;

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {showAccount && (
        <Link
          to="/login"
          aria-label="Account"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
        >
          <FaRegUser className="text-lg" />
        </Link>
      )}

      {showWishlist && (
        <button
          type="button"
          onClick={onOpenWishlist}
          aria-label={`Wishlist with ${wishlistQuantity} items`}
          aria-haspopup="dialog"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
        >
          {wishlistQuantity > 0 ? (
            <FaHeart className="text-lg text-red-500" />
          ) : (
            <FaRegHeart className="text-lg" />
          )}

          {wishlistQuantity > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex min-h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
              {wishlistQuantity > 99 ? "99+" : wishlistQuantity}
            </span>
          )}
        </button>
      )}

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
  );
}
