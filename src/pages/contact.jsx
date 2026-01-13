import React, { useState } from "react";
import TopBanner from "../component/TopBanner";

import Footer from "../component/Footer";

export default function contact() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Top Banner */}
      <TopBanner />

     
      {/* Mobile Sidenav */}
      <section
        className={`bg-gray-500 fixed z-20 top-0 transition-all duration-700 h-screen w-1/2 md:w-1/4 ${
          isSideNavOpen ? "right-0" : "-right-1/2"
        }`}
      >
        <div className="text-right p-6">
          <p
            className="cursor-pointer text-xl font-bold"
            onClick={() => setIsSideNavOpen(false)}
          >
            X
          </p>
        </div>

        <ul className="flex flex-col gap-10 items-center text-black">
          <li>
            <a className="hover:underline hover:text-black" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-black" href="/collections">
              Collections
            </a>
          </li>
          <li>
            <a className="hover:underline hover:text-black" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </section>

      {/* Button to open sidenav */}
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded md:hidden m-5"
        onClick={() => setIsSideNavOpen(true)}
      >
        Menu
      </button>

      {/* Contact Form Section */}
      <section className="bg-white dark:bg-gray-900 flex-1">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback? Need details about our
            business plan? Let us know.
          </p>

          <form className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Let us know how we can help you"
                required
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Leave a comment..."
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-gray-800 hover:bg-gray-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
