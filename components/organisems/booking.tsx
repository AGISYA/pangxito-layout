"use client";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const Booxing = () => {
  const contactus = {
    title: "PANGXITO",
    address: "Jl. Kenangan No. 123, Jakarta",
    openingHours: "08:00 - 22:00",
    phone: "081234567890",
  };

  return (
    <div
      id="pesan-sekarang"
      className="bg-white py-16 text-center relative overflow-hidden"
    >
      <h1 className="text-2xl font-extrabold text-red-800 mb-4">
        {contactus.title || "Temukan Kenikmatan PANGXITO Hari Ini!"}
      </h1>
      <button className="bg-red-600 text-sm text-white py-3 px-10 rounded-lg uppercase font-bold shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500">
        Pesan Sekarang
      </button>
      <div className="mt-12">
        <h3 className="text-xl font-bold text-red-700 mb-4">Hubungi Kami</h3>
        <div className="flex flex-col md:flex-row justify-center items-start mx-5 md:items-center gap-4 mb-4 md:-mx-20 w-full">
          {/* Bagian Lokasi */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-2xl text-red-600" />
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              {contactus.address || "Jl. Contoh Alamat No. 123, Kota"}
            </p>
          </div>
          {/* Bagian Jam Operasional */}
          <div className="flex items-center space-x-2">
            <FaClock className="ml-0 md:ml-10 text-2xl text-red-600" />
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              {contactus.openingHours || "Senin - Jumat, 10:00 - 20:00"}
            </p>
          </div>
          {/* Bagian Kontak */}
          <div className="flex items-center space-x-2">
            <FaPhone className="ml-0 md:ml-10 text-2xl text-red-600" />
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              {contactus.phone || "(021) 123-4567"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booxing;
