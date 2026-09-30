import {
  FaArrowLeft,
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaShoppingBag,
  FaTrashAlt,
  FaTruck,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartActions } from "../store/cartSlice";

const FREE_SHIPPING_THRESHOLD = 75;

export default function ShoppingCart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const remainingForFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - subtotal,
    0,
  );

  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );

  function handleIncrease(productId) {
    dispatch(cartActions.increaseQuantity(productId));
  }

  function handleDecrease(productId) {
    dispatch(cartActions.decreaseQuantity(productId));
  }

  function handleRemove(productId) {
    dispatch(cartActions.removeItem(productId));
  }

  if (items.length === 0) {
    return (
      <main className="bg-[#fafafa]">
        <div className="page-container flex min-h-[650px] items-center justify-center py-16">
          <div className="w-full max-w-lg text-center">
            <div className="bg-brand-50 text-brand-700 mx-auto flex h-24 w-24 items-center justify-center rounded-full">
              <FaShoppingBag className="text-3xl" />
            </div>

            <p className="text-brand-700 mt-8 text-xs font-bold tracking-[0.18em] uppercase">
              Your cart
            </p>

            <h1 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500">
              Looks like you haven't added anything yet. Explore the collection
              and find something you like.
            </p>

            <Link
              to="/#products"
              className="hover:bg-brand-600 mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-7 text-sm font-bold text-white transition"
            >
              Start shopping
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#fafafa]">
      <div className="page-container py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 border-b border-zinc-200 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
              Your selection
            </p>

            <h1 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
              Shopping cart
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              {totalQuantity} {totalQuantity === 1 ? "item" : "items"} in your
              cart
            </p>
          </div>

          <Link
            to="/#products"
            className="flex w-fit items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-zinc-950"
          >
            <FaArrowLeft className="text-xs" />
            Continue shopping
          </Link>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px] xl:gap-12">
          {/* Cart items */}
          <section>
            <div className="space-y-4">
              {items.map((item) => {
                const itemSubtotal = item.price * item.quantity;

                return (
                  <article
                    key={item.id}
                    className="relative rounded-[24px] border border-zinc-200 bg-white p-4 sm:p-5"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      {/* Image */}
                      <Link
                        to={`/products/${item.id}`}
                        className="flex h-28 w-24 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 p-3 sm:h-36 sm:w-32 sm:p-5"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-contain"
                        />
                      </Link>

                      {/* Information */}
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="pr-8">
                          <p className="text-[10px] font-bold tracking-[0.12em] text-zinc-400 uppercase">
                            {item.category}
                          </p>

                          <Link
                            to={`/products/${item.id}`}
                            className="mt-1 block"
                          >
                            <h2 className="hover:text-brand-700 line-clamp-2 text-sm leading-6 font-bold text-zinc-900 transition sm:text-base">
                              {item.title}
                            </h2>
                          </Link>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemove(item.id)}
                          aria-label={`Remove ${item.title} from cart`}
                          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-red-50 hover:text-red-500"
                        >
                          <FaTrashAlt className="text-xs" />
                        </button>

                        <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <p className="text-xs text-zinc-400">
                              ${item.price.toFixed(2)} each
                            </p>

                            <p className="mt-1 text-lg font-extrabold tracking-tight text-zinc-950">
                              ${itemSubtotal.toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity */}
                          <div className="flex w-fit items-center rounded-full border border-zinc-200 bg-zinc-50 p-1">
                            <button
                              type="button"
                              onClick={() => handleDecrease(item.id)}
                              aria-label={`Decrease quantity of ${item.title}`}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white hover:text-zinc-950 hover:shadow-sm"
                            >
                              <FaMinus className="text-[9px]" />
                            </button>

                            <span className="min-w-9 text-center text-sm font-bold text-zinc-900">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => handleIncrease(item.id)}
                              aria-label={`Increase quantity of ${item.title}`}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white hover:text-zinc-950 hover:shadow-sm"
                            >
                              <FaPlus className="text-[9px]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => dispatch(cartActions.clearCart())}
              className="mt-5 flex items-center gap-2 text-xs font-semibold text-zinc-400 transition hover:text-red-500"
            >
              <FaTrashAlt />
              Clear cart
            </button>
          </section>

          {/* Summary */}
          <aside className="lg:sticky lg:top-32">
            <div className="rounded-[26px] border border-zinc-200 bg-white p-5 sm:p-6">
              <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-zinc-950">
                Order summary
              </h2>

              {/* Free shipping */}
              <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-brand-50 text-brand-700 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                    <FaTruck className="text-sm" />
                  </div>

                  <div className="min-w-0 flex-1">
                    {remainingForFreeShipping > 0 ? (
                      <p className="text-xs leading-5 font-medium text-zinc-600">
                        Add{" "}
                        <span className="font-bold text-zinc-950">
                          ${remainingForFreeShipping.toFixed(2)}
                        </span>{" "}
                        more to qualify for free shipping.
                      </p>
                    ) : (
                      <p className="text-brand-700 text-xs leading-5 font-bold">
                        You've qualified for free shipping.
                      </p>
                    )}

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-200">
                      <div
                        className="bg-brand-500 h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${shippingProgress}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Prices */}
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Subtotal</span>

                  <span className="font-semibold text-zinc-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Shipping</span>

                  <span
                    className={
                      subtotal >= FREE_SHIPPING_THRESHOLD
                        ? "text-brand-700 font-semibold"
                        : "font-semibold text-zinc-900"
                    }
                  >
                    {subtotal >= FREE_SHIPPING_THRESHOLD
                      ? "Free"
                      : "Calculated at checkout"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Estimated tax</span>

                  <span className="text-xs font-medium text-zinc-400">
                    Calculated at checkout
                  </span>
                </div>
              </div>

              <div className="my-6 border-t border-zinc-200" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-bold text-zinc-950">
                    Estimated total
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-400">
                    Taxes calculated at checkout
                  </p>
                </div>

                <span className="text-2xl font-extrabold tracking-tight text-zinc-950">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="group hover:bg-brand-600 mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition"
              >
                Proceed to checkout
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="mt-4 text-center text-[11px] leading-5 text-zinc-400">
                Shipping and final order details will be confirmed at checkout.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
