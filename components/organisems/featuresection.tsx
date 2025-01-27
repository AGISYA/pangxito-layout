"use client";
import Image from "next/image";

const FeaturesSection = () => {
  const defaultAdventages = [
    {
      id: 1,
      title: "HARGA TERBAIK",
      description: "Pangsit berkualitas dengan harga yang terjangkau",
      image: "/images/harga.png",
    },
    {
      id: 1,
      title: "RASA ENAK",
      description: "Nikmati kelezatan pangsit tulang rangu 3in1 kami",
      image: "/images/lezat.png",
    },
    {
      id: 1,
      title: "TEREKOMENDASI",
      description: "Pelanggan puas dengan rasa dan kualitas kami",
      image: "/images/rekomend.png",
    },
  ];

  return (
    <div
      id="adventages-section"
      className="flex flex-col justify-center items-center min-h-screen py-16 bg-white"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 mt-14 sm:mt-0">
          Keunggulan Kami
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {defaultAdventages.map((adventages, index) => (
          <div
            key={adventages.id}
            className="flex flex-col items-center p-8 text-center transition-transform transform hover:scale-105 bg-gray-50 shadow-md rounded-lg"
          >
            <div className="flex items-center justify-center w-32 h-32 mb-6 overflow-hidden">
              <Image
                alt={`Gambar Produk ${index + 1}`}
                src={adventages.image}
                width={300}
                height={300}
                className="object-cover mb-6 cursor-pointer transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              {adventages.title || "Produk Unggulan"}
            </h3>
            <p className="text-gray-800 text-base md:text-lg max-w-xs">
              {adventages.description || "Deskripsi belum tersedia."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
