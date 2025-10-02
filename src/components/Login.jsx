export default function Login() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-indigo-600">
        Login to Your Account
      </h2>

      <form className="space-y-6">
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
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              className="form-checkbox rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span>Remember Me</span>
          </label>
          <a href="#" className="text-indigo-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center text-gray-600">
        Don't have an account?{" "}
        <button className="font-semibold text-indigo-600 hover:underline">
          Sign Up
        </button>
      </div>
    </div>
  );
}
