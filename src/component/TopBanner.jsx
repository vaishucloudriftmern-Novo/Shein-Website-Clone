import React from "react";

const TopBanner = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen z-50 bg-black px-4 py-2 flex items-center justify-center">
      <p className="text-white text-sm md:text-base text-center">
        Sign up and get <span className="font-semibold">20% OFF</span> on your first order
      </p>

      <button
        onClick={onClose}
        aria-label="Close banner"
        className="absolute right-4 bg-black text-black w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
      >
        X
      </button>
    </div>
  );
};

export default TopBanner;
