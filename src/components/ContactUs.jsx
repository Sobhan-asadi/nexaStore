export default function ContactUs() {
  return (
    <div className="mx-auto mt-20 max-w-4xl rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-sky-500">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
              placeholder="your.email@example.com"
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-sky-500">
              Our Office
            </h3>
            <p>1234 Web Street</p>
            <p>Cityville, Country 56789</p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-sky-500">
              Telegram
            </h3>
            <p>https://t.me/SobhanAsadi</p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-sky-500">Email</h3>
            <p>sobhanasadi703@gmail.com</p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-sky-500">
              Follow Us
            </h3>
            <p>Facebook | Twitter | LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
