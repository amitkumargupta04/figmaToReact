import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

function Headers() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-3">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <img src={logo} alt="Logo" className="" />

          {/* Center: Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Product Dropdown */}
            <div className="relative group">
              <span className="flex items-center gap-1 cursor-pointer font-medium text-[#222222] leading-none">
                Product
                <IoChevronDown className="text-lg mt-[1px]" />
              </span>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                <p className="px-4 py-2 hover:bg-gray-100">Overview</p>
                <p className="px-4 py-2 hover:bg-gray-100">Features</p>
                <p className="px-4 py-2 hover:bg-gray-100">Integrations</p>
              </div>
            </div>

            {/* Pricing */}
            <span className="cursor-pointer font-medium text-[#222222]">
              Pricing
            </span>

            {/* Resources Dropdown */}
            <div className="relative group">
              <span className="flex items-center gap-1 cursor-pointer font-medium text-[#222222] leading-none">
                Resources
                <IoChevronDown className="text-lg mt-[1px]" />
              </span>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                <p className="px-4 py-2 hover:bg-gray-100">Blog</p>
                <p className="px-4 py-2 hover:bg-gray-100">Docs</p>
                <p className="px-4 py-2 hover:bg-gray-100">Guides</p>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <span className="flex items-center gap-1 cursor-pointer font-medium text-[#222222] leading-none">
                Company
                <IoChevronDown className="text-lg mt-[1px]" />
              </span>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                <p className="px-4 py-2 hover:bg-gray-100">About</p>
                <p className="px-4 py-2 hover:bg-gray-100">Careers</p>
                <p className="px-4 py-2 hover:bg-gray-100">Contact</p>
              </div>
            </div>
          </nav>

          {/* Right Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-[#2D96BC] text-white px-5 py-3 rounded-md">
              Get Your Free Account
            </button>
            <button className="flex items-center gap-1 px-3 py-2 font-medium text-[#2D96BC] border border-[#2D96BC] rounded-md">
              <FaArrowRightToBracket /> Login
            </button>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="md:hidden mt-4 bg-white shadow-md rounded-md p-4 space-y-3">
            <p>Product</p>
            <p>Pricing</p>
            <p>Resources</p>
            <p>Company</p>

            <button className="w-full bg-[#2D96BC] text-white py-2 rounded-md">
              Get Your Free Account
            </button>

            <button className="w-full flex justify-center items-center gap-1 py-2 border border-[#2D96BC] text-[#2D96BC] rounded-md">
              Login <HiArrowRight />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Headers;
