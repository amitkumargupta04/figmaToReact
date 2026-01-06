import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

function Headers() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* HEADER ROW */}
        <div className="flex items-center justify-between h-16 flex-nowrap overflow-hidden">
          {/* LOGO */}
          <img src={logo} alt="Logo" className="h-10 md:h-16" />

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 min-w-0">
            {/* PRODUCT */}
            <div className="relative group">
              <div className="flex items-center gap-1 font-semibold cursor-pointer">
                Product <IoChevronDown />
              </div>
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md w-44 hidden group-hover:block">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Overview
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Features
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Integrations
                </p>
              </div>
            </div>

            {/* PRICING */}
            <span className="font-semibold cursor-pointer">Pricing</span>

            {/* RESOURCES */}
            <div className="relative group">
              <div className="flex items-center gap-1 font-semibold cursor-pointer">
                Resources <IoChevronDown />
              </div>
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md w-44 hidden group-hover:block">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Blog
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Docs
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Guides
                </p>
              </div>
            </div>

            {/* COMPANY */}
            <div className="relative group">
              <div className="flex items-center gap-1 font-semibold cursor-pointer">
                Company <IoChevronDown />
              </div>
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md w-44 hidden group-hover:block">
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  About
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Careers
                </p>
                <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Contact
                </p>
              </div>
            </div>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex gap-3 flex-none">
            <button className="bg-[#2D96BC] text-white px-5 py-2 rounded-md whitespace-nowrap">
              Get Your Free Account
            </button>

            <button className="flex items-center gap-2 border border-[#2D96BC] text-[#2D96BC] px-4 py-2 rounded-md whitespace-nowrap">
              <FaArrowRightToBracket />
              Login
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="lg:hidden mt-3 bg-white shadow-md rounded-md p-4 space-y-3">
            <p className="font-medium">Product</p>
            <p className="font-medium">Pricing</p>
            <p className="font-medium">Resources</p>
            <p className="font-medium">Company</p>

            <button className="w-full bg-[#2D96BC] text-white py-2 rounded-md">
              Get Your Free Account
            </button>

            <button className="w-full flex justify-center items-center gap-2 py-2 border border-[#2D96BC] text-[#2D96BC] rounded-md">
              <FaArrowRightToBracket />
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Headers;
