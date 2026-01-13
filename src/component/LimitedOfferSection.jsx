import React from "react"
import offerImage from "../assets/images/img-5.jpeg"

const LimitedOfferSection = () => {
  return (
    <section className="bg-gray-500 p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-10">
      <div className="flex justify-center">
        <img
          src={offerImage}
          alt="Limited Offer Product"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-xl"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-[hsl(var(--offer-foreground))]">Limited Offer</h2>
        <p className="font-bold text-xl md:text-2xl text-[hsl(var(--offer-foreground))] mt-4">
          35% off on this for the first 30 Customers
        </p>
        <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-muted transition mt-6">
          Shop Now →
        </button>
      </div>
    </section>
  );
};

export default LimitedOfferSection;
