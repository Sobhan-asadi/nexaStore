export default function Register() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-indigo-600">
        Create an Account
      </h2>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="example@mail.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Create a password"
            required
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <button className="font-semibold text-indigo-600 hover:underline">
          Login
        </button>
      </div>
    </div>
  );
}
