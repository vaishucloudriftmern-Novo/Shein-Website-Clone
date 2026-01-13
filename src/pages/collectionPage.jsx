import React, { useState } from "react";
import TopBanner from "../component/TopBanner";

import Footer from "../component/Footer";

// Import product images
import sum1 from "../assets/images/sum-1.jpg";
import sum2 from "../assets/images/sum-2.jfif";
import sum3 from "../assets/images/sum-3.webp";

import wint1 from "../assets/images/wint-1.webp";
import wint2 from "../assets/images/wint-2.jpg";
import wint3 from "../assets/images/wint-3.jfif";

import party1 from "../assets/images/party-1.jpg";
import party2 from "../assets/images/party-2.webp";
import party3 from "../assets/images/party-3.jpeg";

export default function CollectionPage() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // Filter options (dynamic)
  const filterOptions = ["summer", "winter", "party"];

  const [filters, setFilters] = useState({
    summer: false,
    winter: false,
    party: false,
  });

  const toggleFilter = (type) => {
    setFilters((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const products = [
    { id: 1, type: "summer", img: sum1, name: "Floral summer shirt", price: "$20" },
    { id: 2, type: "summer", img: sum2, name: "Summer green", price: "$20" },
    { id: 3, type: "summer", img: sum3, name: "Party floral", price: "$20" },

    { id: 4, type: "party", img: wint1, name: "Printed party wear", price: "$20" },
    { id: 5, type: "party", img: wint2, name: "Party floral", price: "$20" },
    { id: 6, type: "party", img: wint3, name: "Winter floral", price: "$20" },

    { id: 7, type: "winter", img: party1, name: "Winter dress", price: "$20" },
    { id: 8, type: "winter", img: party2, name: "Winter party", price: "$20" },
    { id: 9, type: "winter", img: party3, name: "Winter party", price: "$20" },
  ];

  // Active filters
  const activeFilters = filterOptions.filter((f) => filters[f]);

  // Filtered products
  const filteredProducts =
    activeFilters.length === 0
      ? products
      : products.filter((p) => activeFilters.includes(p.type));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <TopBanner />

   

      {/* Side Navbar */}
      <section
        className={`bg-gray-500 fixed z-20 top-0 transition-all duration-700 h-screen w-1/2 md:w-1/4 ${
          isSideNavOpen ? "left-0" : "-left-1/2"
        }`}
      >
        <div className="p-5 text-left">
          <p
            className="inline cursor-pointer text-xl font-bold"
            onClick={() => setIsSideNavOpen(false)}
          >
            X
          </p>
        </div>

        <ul className="flex flex-col gap-5 p-5 text-gray-900">
          <li><a className="hover:underline hover:text-black" href="/">Home</a></li>
          <li><a className="hover:underline hover:text-black" href="/collections">Collections</a></li>
          <li><a className="hover:underline hover:text-black" href="/contact">Contact Us</a></li>
        </ul>
      </section>

      {/* Button to open sidenav */}
      <button
        className="bg-black text-white px-4 py-2 rounded mb-5"
        onClick={() => setIsSideNavOpen(true)}
      >
        Open Menu
      </button>

      {/* Product Section */}
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="flex">

        {/* Sidebar Filter */}
        <aside className="w-1/4 pr-6 border-r border-gray-950 hidden md:block">
          <h2 className="text-xl font-semibold mb-4">Occasion</h2>

          <div className="space-y-3">
            {filterOptions.map((option) => (
              <label key={option} className="flex items-center capitalize">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters[option]}
                  onChange={() => toggleFilter(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
          {filteredProducts.map((product) => (
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

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
