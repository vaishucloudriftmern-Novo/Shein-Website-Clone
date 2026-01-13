import { Link } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";
import React from "react";

const Navbar = ({ wishlistCount, user, onLogout, onOpenSignup, onOpenLogin,bannerVisible }) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "New Arrival", href: "/newarrival" },
    { name: "Most Wanted", href: "/mostwanted" },
    { name: "Collections", href: "/collections" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={`sticky z-40 w-full bg-white shadow-xl ${bannerVisible ? "top-[40px]" : "top-0"}`}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">SHEIN</h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 whitespace-nowrap">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-black">
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <div className="hidden md:flex items-center border rounded-full px-3 py-1">
            <Search size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none text-sm w-32"
            />
          </div>

          {/* Wishlist */}
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Cart */}
          <ShoppingBag className="cursor-pointer hover:text-black" size={20} />

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-semibold text-black">Hi, {user.name}</span>
              <button
                onClick={onLogout}
                className="bg-red-500 text-black px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenLogin}
                className="bg-blue-600 text-black px-3 py-1 rounded hover:bg-blue-700"
              >
                Login
              </button>
              <button
                onClick={onOpenSignup}
                className="bg-green-600 text-black px-3 py-1 rounded hover:bg-green-700"
              >
                Signup
              </button>
            </div>
          )}
          </div>
      </div>
    </nav>
  );
}

          export default Navbar;