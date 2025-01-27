"use client";
import Image from "next/image";

const ProductSection = () => {
  const defaultProducts = [
    {
      id: 1,
      name: "Pangsit Goreng",
      image: "/images/product1.png",
      price: 15000,
      weight: 250,
    },
    {
      id: 2,
      name: "Pangsit Kuah",
      image: "/images/product2.png",
      price: 18000,
      weight: 250,
    },
  ];

  return (
    <div id="product-section" className="py-14">
      <div className="container mx-auto mt-14 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          Produk Kami
        </h1>
      </div>

      <div className="mt-20">
        <div className="container overflow-x-auto flex flex-row md:flex-row justify-start md:justify-center gap-10 mx-auto px-6">
          {defaultProducts.map((product, index) => (
            <div key={index} className="flex flex-col items-center md:mx-24">
              <Image
                alt={`Gambar Produk ${index + 1}`}
                src={product.image}
                width={300}
                height={300}
                className="object-cover mb-6 cursor-pointer transition-transform duration-500 hover:scale-105"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-red-600 mb-1 text-center">
                {product.name}
              </h3>
              <p className="text-lg md:text-xl lg:text-xl text-gray-700 mb-4">
                Rp{" "}
                {product.price
                  ? product.price.toLocaleString()
                  : "Harga tidak tersedia"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
