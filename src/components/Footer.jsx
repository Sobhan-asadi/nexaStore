import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-800 px-4 py-8 text-white md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="">
          <h3 className="text-xl font-semibold">Nexa-Store</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
            laborum praesentium iure sed animi dolores explicabo nesciunt
            veritatis aliquam!
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Link</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="transition-all hover:underline" to="home">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition-all hover:underline" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition-all hover:underline" to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="mt-4 flex space-x-4">
            <a className="transition-all hover:text-sky-400" href="#">
              <FaFacebook />
            </a>
            <a className="transition-all hover:text-sky-400" href="#">
              <FaTwitter />
            </a>
            <a className="transition-all hover:text-sky-400" href="#">
              <FaGithub />
            </a>
            <a className="transition-all hover:text-sky-400" href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-9 border-t border-r-gray-400 pt-4">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <p>&copy;2025 All rights reserved</p>
          <div className="flex space-x-4 md:mt-0">
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="hover:underline" href="">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
