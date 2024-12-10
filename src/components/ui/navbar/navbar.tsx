"use client";
import React, { useState } from "react";
import logo from "../../../assets/Group.jpg"
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
        <Image src={logo} alt="" />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
      {[
        { name: "All Category", href: "/category" },
        { name: "Coupon", href: "/coupon" },
        { name: "Support", href: "/support" },
      ].map((item, index) => (
        <li key={index}>
          <a
            className={`text-sm ${
              pathname === item.href
                ? "text-blue-600 font-bold"
                : "text-gray-400"
            } hover:text-gray-500`}
            href={item.href}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
        <div className="hidden lg:inline-block">
          <a
            className="lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className="py-2 px-6 bg-blue-500  hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                {/* <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8284 9162 c-2 -207 -55 -427 -161 -667 ..."
                  />
                </svg> */}
                <Image src={logo} alt="" />
              </a>
              <button
                className="navbar-close"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 text-gray-400 hover:text-gray-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Close</title>
                  <path
                    fill="currentColor"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul>
      {[
        { name: "All Category", href: "/category" },
        { name: "Coupon", href: "/coupon" },
        { name: "Support", href: "/support" },
      ].map((item, index) => (
        <li key={index} className="mb-1">
          <a
            className={`block p-4 text-sm font-semibold rounded ${
              pathname === item.href
                ? "text-blue-600 bg-blue-50"
                : "text-gray-400 hover:bg-blue-50 hover:text-blue-600"
            }`}
            href={item.href}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
