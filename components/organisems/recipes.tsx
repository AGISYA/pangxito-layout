"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const RecipesPangxito: React.FC = () => {
  const defaultRecipes = [
    {
      id: 2,
      title: "Pangsit Kuah",
      description: "Lezat disajikan dengan kuah hangat yang gurih dan nikmat",
    },
    {
      id: 3,
      title: "Pangsit Goreng",
      description: "Kriuk dan renyah, cocok untuk camilan maupun lauk",
    },
    {
      id: 1,
      title: "Pangsit Rebus",
      description: "Cocok juga dijadikan pangsit rebus yang lembut dan kenyal",
    },
  ];

  return (
    <div className="container mx-auto py-10 bg-white mt-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-8">
        Pangxito 3in1
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start">
        {/* Hero Image */}
        <div className="relative mb-6 md:w-1/2 w-full flex justify-center md:mt-16">
          <Image
            alt="Hero Image"
            src="/images/3.jpg"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-[70%] md:w-[500px] h-auto transform transition-transform duration-1000 hover:scale-105"
          />
        </div>
        {/* List Recipes */}
        <div className="w-full md:w-1/2 px-6 md:mt-56">
          {defaultRecipes.map((product) => (
            <div key={product.id} className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-xl md:text-xl font-semibold text-red-600 mb-1">
                  {product.title || "PANGXITO REBUS"}
                </h5>
                <p className="text-sm md:text-lg text-black leading-relaxed">
                  {product.description ||
                    "Cocok juga dijadikan pangsit rebus yang lembut dan kenyal"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPangxito;
