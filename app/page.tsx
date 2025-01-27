import Booxing from "@/components/organisems/booking";
import FeaturesSection from "@/components/organisems/featuresection";
import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";
import ProductSection from "@/components/organisems/productsection";
import RecipesPangxito from "@/components/organisems/recipes";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative flex items-center justify-center h-screen">
        <div className="relative w-full h-full">
          <Image
            alt="Hero Image"
            src="/images/1.jpg"
            layout="fill"
            className="absolute top-0 left-0 w-full h-full object-cover bg-center z-10"
            loading="lazy"
          />

          <div className=" mx-10 relative  pt-16 md:pt-24">
            <div className="flex justify-start">
              <div className="relative bg-white p-3 md:p-4 rounded-lg text-center shadow-md z-10 max-w-xs">
                <h1 className="font-playfair text-lg md:text-2xl text-red-600 mb-1 md:mb-2 font-extrabold">
                  Pangxito
                </h1>
                <div className="text-black mb-2 md:mb-3 text-xs md:text-sm">
                  pangsit 3in1
                </div>
                <button className="bg-red-600 text-white py-1 px-4 rounded-full text-xs md:text-sm shadow hover:bg-red-500 transition duration-300">
                  PESAN SEKARANG
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 bg-yellow-200 p-4 md:p-6 rounded-xl w-64 md:w-72 shadow-lg z-10">
            <div className="flex items-start mb-4">
              <div>
                <h4 className="text-black font-bold text-lg mb-1">
                  Abdiagisya
                </h4>
                <p className="text-gray-800 text-sm italic">
                  lezat banget dan gurih
                </p>
              </div>
            </div>
            <div className="text-yellow-500 flex justify-center mb-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="border-t border-yellow-300 pt-2">
              <p className="text-gray-600 text-xs text-center">
                - Customer Feedback -
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="product-section" className="px-4 md:px-8">
        <ProductSection />
      </div>
      <div id="features" className="px-4 md:px-8">
        <FeaturesSection />
      </div>
      <div id="pangxito" className="px-4 md:px-8">
        <RecipesPangxito />
      </div>
      <div id="pesan-sekarang" className="px-4 md:px-8">
        <Booxing />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
