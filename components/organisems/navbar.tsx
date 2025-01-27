"use client";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className="fixed top-0 flex items-center justify-between p-4 bg-white w-full text-red-950 z-20 shadow-md">
      <div className="text-xl font-bold mx-2 text-yellow-500">PANGXITO</div>
      <nav className="hidden md:flex space-x-6 font-medium">
        {[
          "Home",
          "Products",
          "Advantages",
          "Pangxito Recipes",
          "Contact Us",
        ].map((item) => (
          <Link
            key={item}
            href={
              item === "Home"
                ? "/" // Link ke halaman utama
                : item === "Products"
                ? "#packages" // Link ke bagian Packages
                : item === "Advantages"
                ? "#features" // Link ke bagian About Us
                : item === "Pangxito Recipes"
                ? "#pangxito" // Link ke bagian Contact Us
                : item === "Contact Us"
                ? "#pesan-sekarang"
                : `#${item.toLowerCase().replace(" ", "")}`
            }
            className="text-red-950 hover:text-yellow-500 hover:scale-105 transition-transform duration-200"
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Link
          href="/cart"
          className="relative text-2xl text-black hover:text-yellow-500 transition-colors duration-200"
        >
          <RiShoppingCart2Line />
        </Link>
        <div className="hidden md:flex space-x-2">
          <Link
            href="/signin"
            className="bg-yellow-500 text-white px-3 py-1 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-white text-yellow-500 border border-yellow-500 px-3 py-1 rounded-full shadow-lg hover:bg-yellow-600 hover:text-white transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
