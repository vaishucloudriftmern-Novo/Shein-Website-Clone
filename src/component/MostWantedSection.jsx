import React from "react";

// Import your images from assets folder
import img1 from "../assets/images/product-1.jpg";
import img2 from "../assets/images/product-2.jpg";
import img3 from "../assets/images/product-3.jpg";
import img4 from "../assets/images/product-4.jpg";

const MostWantedSection = () => {
  const products = [img1, img2, img3, img4];

  return (
    <div id="mostwanted">
      <h1 className="font-bold text-2xl mt-5 p-5">Most Wanted</h1>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 m-2 p-5">
        {products.map((image, index) => (
          <div key={index} className="relative w-full h-70">
            <img
              src={image}
              alt={`Most Wanted ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />

            <button className="absolute bottom-2 flex items-center justify-center">
              <span className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                Shop Now →
              </span>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MostWantedSection;
