export default function CheckoutField({
  label,
  name,
  type = "text",
  value,
  error,
  onChange,
  required = true,
  autoComplete,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold text-zinc-800"
      >
        {label}

        {!required && (
          <span className="ml-1 font-normal text-zinc-400">(optional)</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-zinc-900 transition outline-none placeholder:text-zinc-400 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
            : "focus:border-brand-500 focus:ring-brand-500/10 border-zinc-200 focus:ring-4"
        }`}
      />

      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
