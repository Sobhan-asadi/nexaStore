import { FaArrowLeft, FaExclamationTriangle, FaHome } from "react-icons/fa";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError();

  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  const title = isNotFound ? "Page not found" : "Something went wrong";

  const description = isNotFound
    ? "The page or product you're looking for doesn't exist or may have been moved."
    : "We couldn't load this page. Please try again or return to the store.";

  return (
    <main className="page-container flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-700">
          <FaExclamationTriangle className="text-2xl" />
        </div>

        {isNotFound && (
          <p className="text-brand-700 mt-6 text-sm font-bold tracking-[0.18em] uppercase">
            Error 404
          </p>
        )}

        <h1 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="hover:bg-brand-600 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition"
          >
            <FaHome className="text-xs" />
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-sm font-bold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <FaArrowLeft className="text-xs" />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}
