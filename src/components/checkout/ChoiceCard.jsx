export default function ChoiceCard({
  name,
  value,
  checked,
  onChange,
  icon: Icon,
  title,
  description,
  price,
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${
        checked
          ? "border-brand-500 bg-brand-50/50 ring-brand-500 ring-1"
          : "border-zinc-200 hover:border-zinc-300"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          checked ? "bg-brand-100 text-brand-700" : "bg-zinc-100 text-zinc-600"
        }`}
      >
        <Icon className="text-sm" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-zinc-900">{title}</p>

        <p className="mt-1 text-xs leading-5 text-zinc-500">{description}</p>
      </div>

      <span
        className={`shrink-0 text-xs font-bold ${
          checked ? "text-brand-700" : "text-zinc-700"
        }`}
      >
        {price}
      </span>
    </label>
  );
}
