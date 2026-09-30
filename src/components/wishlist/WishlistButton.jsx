import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { wishlistActions } from "../../store/wishlistSlice";

export default function WishlistButton({ product, className = "" }) {
  const dispatch = useDispatch();

  const isWishlisted = useSelector((state) =>
    state.wishlist.items.some((item) => item.id === product.id),
  );

  function handleToggleWishlist() {
    dispatch(wishlistActions.toggleWishlist(product));
  }

  return (
    <button
      type="button"
      onClick={handleToggleWishlist}
      aria-label={
        isWishlisted
          ? `Remove ${product.title} from wishlist`
          : `Add ${product.title} to wishlist`
      }
      aria-pressed={isWishlisted}
      className={`flex items-center justify-center transition ${className}`}
    >
      {isWishlisted ? (
        <FaHeart aria-hidden="true" className="text-red-500" />
      ) : (
        <FaRegHeart aria-hidden="true" />
      )}
    </button>
  );
}
