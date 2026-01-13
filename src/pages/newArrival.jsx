import React, { useState } from "react";
import TopBanner from "../component/TopBanner";

import Footer from "../component/Footer";

// Import product images
import sum1 from "../assets/images/wsum-1.jpg";
import sum2 from "../assets/images/wsum-2.jfif";
import sum3 from "../assets/images/wsum-3.jfif";

import wint1 from "../assets/images/wwint-1.webp";
import wint2 from "../assets/images/wwint-2.jfif";
import wint3 from "../assets/images/wwint-3.webp";

import party1 from "../assets/images/wparty-1.webp";
import party2 from "../assets/images/wparty-2.webp";
import party3 from "../assets/images/wparty-3.webp";

export default function NewArrival() {
  // Load More state
  const [visibleCount, setVisibleCount] = useState(6);

  const products = [
    { id: 1, img: sum1, name: "Floral summer shirt", price: "$20" },
    { id: 2, img: sum2, name: "Summer green", price: "$20" },
    { id: 3, img: sum3, name: "Party floral", price: "$20" },

    { id: 4, img: wint1, name: "Printed party wear", price: "$20" },
    { id: 5, img: wint2, name: "Party floral", price: "$20" },
    { id: 6, img: wint3, name: "Winter floral", price: "$20" },

    { id: 7, img: party1, name: "Winter dress", price: "$20" },
    { id: 8, img: party2, name: "Winter party", price: "$20" },
    { id: 9, img: party3, name: "Winter party", price: "$20" },
  ];

  const visibleProducts = products.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
     

      <h1 className="text-3xl font-bold text-center mt-10 mb-8">New Arrivals</h1>

      {/* Product Grid */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProducts.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.img}
              className="w-full h-80 object-cover hover:shadow-xl transform hover:-translate-y-2 transition"
            />
            <h2 className="mt-2 font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="text-center my-10">
          <button
            onClick={loadMore}
            className="bg-black text-black text-xl border border-solid px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Load More
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
