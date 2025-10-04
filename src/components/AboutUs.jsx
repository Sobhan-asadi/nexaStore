import { FaLightbulb, FaPhoneAlt, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="mx-auto mt-20 flex max-w-4xl items-center rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-indigo-600">
        About Us
      </h2>

      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div className="rounded-lg border p-6 transition-shadow hover:shadow-md">
          <FaUsers className="mx-auto mb-4 text-indigo-600" size={48} />
          <h3 className="mb-2 text-xl font-semibold">Our Team</h3>
          <p className="text-gray-700">
            We are a passionate group of developers committed to building
            high-quality web applications that enhance user experience.
          </p>
        </div>

        <div className="rounded-lg border p-6 transition-shadow hover:shadow-md">
          <FaLightbulb className="mx-auto mb-4 text-indigo-600" size={48} />
          <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to innovate and deliver seamless digital solutions
            that empower businesses and users worldwide.
          </p>
        </div>

        <div className="rounded-lg border p-6 transition-shadow hover:shadow-md">
          <FaPhoneAlt className="mx-auto mb-4 text-indigo-600" size={48} />
          <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
          <p className="text-gray-700">
            For inquiries, support, or feedback, feel free to reach out to us
            anytime. We're here to help!
          </p>
        </div>
      </div>
    </div>
  );
}
