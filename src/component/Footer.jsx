import React from "react";
import facebookIcon from "../assets/icons/fb.png"; 
import twitterIcon from "../assets/icons/twitter.png";
import LinkedInIcon from "../assets/icons/li.png";
import xIcon from "../assets/icons/x.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide">SHEIN</h2>
          <p className="mt-4 text-gray-300">
            Your trusted destination for fashion, trends, and premium quality styles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-75 transition"> <img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-75 transition"><img src={twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-75 transition"><img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-75 transition"><img src={xIcon} alt="X" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Nostra.com — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
