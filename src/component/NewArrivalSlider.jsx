import { useState } from "react";
import React from "react";
import arrival1 from "../assets/images/img-1.webp";
import arrival2 from "../assets/images/img-2.webp";
import arrival3 from "../assets/images/img-3.jfif";
import arrival4 from "../assets/images/img-4.jpg";
import arrival5 from "../assets/images/img-5.webp";
import arrival6 from "../assets/images/img-6.jfif";
import arrival7 from "../assets/images/img-7.jfif";
import arrival8 from "../assets/images/img-8.webp";


import saleIcon from "../assets/icons/sale.png";
import heartIcon from "../assets/icons/heart.png";

export default function NewArrivalSlider({ wishlist, toggleWishlist }) {
  const products = [
    { id: 1, img: arrival1 },
    { id: 2, img: arrival2 },
    { id: 3, img: arrival3 },
    { id: 4, img: arrival4 },
    { id: 5, img: arrival5 },
    { id: 6, img: arrival6 },
    { id: 7, img: arrival7 },
    { id: 8, img: arrival8 },
  ];


  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        New Arrivals
      </h1>

      <div className="overflow-x-auto scrollbar-hide whitespace-nowrap flex space-x-4 snap-x snap-mandatory">
        {products.map((product) => (
          <div
            key={product.id}
            className="inline-block w-1/2 sm:w-1/4 flex-shrink-0 relative snap-start"
          >
            <img
              src={product.img}
              className="w-full h-80 object-cover rounded-lg"
              alt="arrival"
            />

            <img
              src={saleIcon}
              className="absolute top-2 left-2 min-w-10 h-10"
              alt="sale"
            />

            <img
              src={heartIcon}
              onClick={() => toggleWishlist(product.id)}
              className={`absolute bottom-2 right-2 w-7 h-7 cursor-pointer transition 
                ${wishlist.includes(product.id) ? "filter-red" : ""}

              `}
             
            />
          </div>
        ))}
      </div>
    </section>
  );
}
