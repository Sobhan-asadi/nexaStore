export default function CheckoutSection({
  number,
  title,
  description,
  children,
}) {
  return (
    <section className="rounded-[26px] border border-zinc-200 bg-white p-5 sm:p-7">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-[11px] font-bold text-white">
          {number}
        </div>

        <div>
          <h2 className="font-display text-lg font-bold tracking-[-0.02em] text-zinc-950">
            {title}
          </h2>

          <p className="mt-1 text-xs leading-5 text-zinc-500">{description}</p>
        </div>
      </div>

      {children}
    </section>
  );
}
