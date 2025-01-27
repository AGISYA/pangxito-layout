"use client";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between pt-6 pb-10 md:py-8">
          {/* Main Title and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 text-red-600">PANGXITO</h2>
            <div className="text-gray-700 mb-4">
              Nikmati pangsit lezat setiap hari. Hubungi kami untuk informasi
              lebih lanjut!
            </div>
          </div>
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              Navigasi
            </h3>
            <ul>
              {["Home", "Packages", "About Us", "Contact Us"].map((item) => (
                <li key={item} className="mb-1">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-red-500 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              Ikuti Kami
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-red-500 transition duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-red-500 transition duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-red-500 transition duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
