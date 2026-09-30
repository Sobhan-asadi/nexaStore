export default function PageLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] items-center justify-center px-6"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative h-11 w-11">
          <div className="absolute inset-0 rounded-full border-2 border-zinc-200" />

          <div className="border-t-brand-500 absolute inset-0 animate-spin rounded-full border-2 border-transparent" />
        </div>

        <p className="mt-4 text-sm font-semibold text-zinc-700">Loading...</p>

        <span className="sr-only">Page content is loading</span>
      </div>
    </div>
  );
}
