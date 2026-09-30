import { FaLock } from "react-icons/fa";

export default function OrderSummary({
  items,
  subtotal,
  shippingPrice,
  total,
}) {
  return (
    <aside className="lg:sticky lg:top-32">
      <div className="rounded-[26px] border border-zinc-200 bg-white p-5 sm:p-6">
        <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-zinc-950">
          Order summary
        </h2>

        <div className="mt-6 max-h-[330px] space-y-5 overflow-y-auto pr-1">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-zinc-50 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />

                <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-950 px-1 text-[10px] font-bold text-white">
                  {item.quantity}
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <p className="line-clamp-2 text-xs leading-5 font-semibold text-zinc-800">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  ${item.price.toFixed(2)} each
                </p>
              </div>

              <p className="shrink-0 text-sm font-bold text-zinc-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="my-6 border-t border-zinc-200" />

        <div className="space-y-4 text-sm">
          <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />

          <SummaryRow
            label="Shipping"
            value={
              shippingPrice === 0 ? "Free" : `$${shippingPrice.toFixed(2)}`
            }
            highlight={shippingPrice === 0}
          />
        </div>

        <div className="my-6 border-t border-zinc-200" />

        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold text-zinc-950">Total</p>

            <p className="mt-1 text-[11px] text-zinc-400">USD</p>
          </div>

          <span className="text-2xl font-extrabold tracking-tight text-zinc-950">
            ${total.toFixed(2)}
          </span>
        </div>

        <button
          type="submit"
          className="hover:bg-brand-600 mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition"
        >
          <FaLock className="text-xs" />
          Place demo order
        </button>

        <div className="mt-4 flex items-start justify-center gap-2 text-center">
          <FaLock className="mt-0.5 shrink-0 text-[10px] text-zinc-400" />

          <p className="text-[11px] leading-5 text-zinc-400">
            Portfolio demonstration only. No payment information is collected or
            processed.
          </p>
        </div>
      </div>
    </aside>
  );
}

function SummaryRow({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-zinc-500">{label}</span>

      <span
        className={`font-semibold ${
          highlight ? "text-brand-700" : "text-zinc-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
