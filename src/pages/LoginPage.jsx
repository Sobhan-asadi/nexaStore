import { useState } from "react";
import {
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaShoppingBag,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateLogin(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstErrorField = Object.keys(validationErrors)[0];

      document.querySelector(`[name="${firstErrorField}"]`)?.focus();

      return;
    }

    navigate("/");
  }

  return (
    <main className="bg-[#fafafa]">
      <section className="page-container flex min-h-[720px] items-center justify-center py-12 sm:py-16">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[30px] border border-zinc-200 bg-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden overflow-hidden bg-zinc-950 p-10 text-white lg:flex lg:flex-col">
            <div className="bg-brand-500/20 absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" />

            <div className="relative">
              <Link
                to="/"
                className="font-display inline-flex text-2xl font-extrabold tracking-[-0.04em]"
              >
                Nexa
                <span className="text-brand-400">Store.</span>
              </Link>
            </div>

            <div className="relative my-auto py-16">
              <div className="bg-brand-400 flex h-14 w-14 items-center justify-center rounded-2xl text-zinc-950">
                <FaShoppingBag className="text-xl" />
              </div>

              <h1 className="font-display mt-7 max-w-sm text-4xl leading-tight font-extrabold tracking-[-0.05em]">
                Welcome back to your shopping experience.
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
                This demo sign-in experience demonstrates form validation and
                authentication UI without connecting to a real user backend.
              </p>
            </div>

            <div className="relative flex items-center gap-2 text-xs text-zinc-500">
              <FaLock />
              Demo authentication only
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="lg:hidden">
                <Link
                  to="/"
                  className="font-display inline-flex text-xl font-extrabold tracking-[-0.04em] text-zinc-950"
                >
                  Nexa
                  <span className="text-brand-600">Store.</span>
                </Link>
              </div>

              <p className="text-brand-700 mt-10 text-xs font-bold tracking-[0.18em] uppercase lg:mt-0">
                Account
              </p>

              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em] text-zinc-950">
                Sign in
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Enter any valid email and a password with at least 6 characters
                to test the demo.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-8 space-y-5"
              >
                <LoginField
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                />

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-xs font-bold text-zinc-800"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      placeholder="At least 6 characters"
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={
                        errors.password ? "password-error" : undefined
                      }
                      className={`h-12 w-full rounded-xl border bg-white pr-12 pl-4 text-sm text-zinc-900 transition outline-none placeholder:text-zinc-400 ${
                        errors.password
                          ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                          : "focus:border-brand-500 focus:ring-brand-500/10 border-zinc-200 focus:ring-4"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-700"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  {errors.password && (
                    <p
                      id="password-error"
                      className="mt-1.5 text-xs text-red-500"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="hover:bg-brand-600 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition"
                >
                  Continue
                  <FaArrowRight className="text-xs" />
                </button>
              </form>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
                <div className="flex items-start gap-3">
                  <FaLock className="mt-0.5 shrink-0 text-xs text-zinc-400" />

                  <p className="text-xs leading-5 text-zinc-500">
                    Portfolio demonstration only. Credentials are validated
                    locally and are not sent or stored.
                  </p>
                </div>
              </div>

              <p className="mt-7 text-center text-sm text-zinc-500">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-brand-700 hover:text-brand-800 font-bold transition"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LoginField({
  label,
  name,
  type,
  value,
  error,
  onChange,
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

function validateLogin(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
}
