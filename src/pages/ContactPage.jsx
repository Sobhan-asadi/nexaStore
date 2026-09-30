import { useState } from "react";
import { FaCheck, FaEnvelope, FaGithub, FaPaperPlane } from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstErrorField = Object.keys(validationErrors)[0];

      document.querySelector(`[name="${firstErrorField}"]`)?.focus();

      return;
    }

    setErrors({});
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <main className="bg-[#fafafa]">
      <section className="page-container py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-700 text-xs font-bold tracking-[0.18em] uppercase">
            Contact
          </p>

          <h1 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] text-zinc-950 sm:text-5xl">
            Have something to say?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            This contact page is part of the Nexa Store front-end demo. Use the
            form to explore its validation and interaction states.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl overflow-hidden rounded-[30px] border border-zinc-200 bg-white lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="relative overflow-hidden bg-zinc-950 p-7 text-white sm:p-10">
            <div className="bg-brand-500/20 absolute -top-20 -left-20 h-60 w-60 rounded-full blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div>
                <p className="text-brand-400 text-xs font-bold tracking-[0.16em] uppercase">
                  Get in touch
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Let&apos;s connect.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                  Nexa Store is a portfolio project designed and developed by
                  Sobhan Asadi.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                <ContactLink
                  href="mailto:sobhanasadi703@gmail.com"
                  icon={FaEnvelope}
                  label="Email"
                  value="sobhanasadi703@gmail.com"
                />

                <ContactLink
                  href="https://github.com/Sobhan-asadi"
                  icon={FaGithub}
                  label="GitHub"
                  value="github.com/Sobhan-asadi"
                  external
                />
              </div>

              <div className="mt-auto pt-12">
                <p className="text-xs leading-6 text-zinc-500">
                  The form on this page is a front-end demonstration and does
                  not send data to a server.
                </p>
              </div>
            </div>
          </aside>

          <div className="p-6 sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-zinc-950">
                Send a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Fill out the form below to test the contact experience.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="border-brand-200 bg-brand-50 mt-6 flex items-start gap-3 rounded-2xl border p-4"
              >
                <div className="bg-brand-600 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white">
                  <FaCheck className="text-xs" />
                </div>

                <div>
                  <p className="text-brand-900 text-sm font-bold">
                    Demo message submitted
                  </p>

                  <p className="text-brand-700 mt-1 text-xs leading-5">
                    Validation passed successfully. No message was sent to a
                    server.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <ContactField
                  label="Name"
                  name="name"
                  value={form.name}
                  error={errors.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                />

                <ContactField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <ContactField
                label="Subject"
                name="subject"
                value={form.subject}
                error={errors.subject}
                onChange={handleChange}
                placeholder="What is this about?"
              />

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold text-zinc-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm leading-6 text-zinc-900 transition outline-none placeholder:text-zinc-400 ${
                    errors.message
                      ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                      : "focus:border-brand-500 focus:ring-brand-500/10 border-zinc-200 focus:ring-4"
                  }`}
                />

                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="hover:bg-brand-600 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-bold text-white transition sm:w-fit"
              >
                Submit demo message
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactField({
  label,
  name,
  type = "text",
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

function ContactLink({ href, icon, label, value, external = false }) {
  const Icon = icon;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group hover:border-brand-500/40 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
    >
      <div className="text-brand-400 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-zinc-500">{label}</p>

        <p className="mt-1 truncate text-sm font-semibold text-zinc-200">
          {value}
        </p>
      </div>
    </a>
  );
}

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}
