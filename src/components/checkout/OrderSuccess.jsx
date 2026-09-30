import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function OrderSuccess({ order }) {
  const totalItems = order.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <main className="bg-[#fafafa]">
      <div className="page-container flex min-h-[680px] items-center justify-center py-16">
        <div className="w-full max-w-xl rounded-[30px] border border-zinc-200 bg-white p-6 text-center sm:p-10">
          <div className="bg-brand-50 text-brand-700 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
            <FaCheck className="text-2xl" />
          </div>

          <p className="text-brand-700 mt-7 text-xs font-bold tracking-[0.18em] uppercase">
            Order confirmed
          </p>

          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-[-0.04em] text-zinc-950">
            Thanks for your order
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500">
            Your demo order has been created successfully. No real payment was
            processed.
          </p>

          <div className="mt-7 rounded-2xl bg-zinc-50 p-5 text-left">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">Order number</span>

              <span className="text-sm font-bold text-zinc-900">
                {order.id}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">Total</span>

              <span className="text-sm font-bold text-zinc-900">
                ${order.total.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">Items</span>

              <span className="text-sm font-bold text-zinc-900">
                {totalItems}
              </span>
            </div>
          </div>

          <Link
            to="/#products"
            className="hover:bg-brand-600 mt-8 inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-bold text-white transition"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
