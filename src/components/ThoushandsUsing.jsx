import React from "react";
import topRightImg from "../assets/message2.png"; // right-end top image
import bannerImg from "../assets/thoushands.png";  // banner image
import { FaArrowRightLong } from "react-icons/fa6";

function ThoushandsUsing() {
  return (
    <div className="relative">
      {/* ===== Top right image ===== */}
      <div className="flex justify-end">
        <img
          src={topRightImg}
          alt="Top Right"
          className="h-24 w-24 md:h-32 md:w-32 object-contain"
        />
      </div>

      {/* ===== Gray banner div ===== */}
      <div className="bg-gray-200 rounded-xl p-6 shadow-md mt-4 md:mt-6 flex flex-col items-center">
        {/* Banner image full width */}
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full rounded-md object-cover"
        />

        {/* Button centered below image */}
        <div className="mt-6">
          <button className="bg-[#9EE25A] text-black px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-green-500 transition-colors">
            Get Started Today
            <FaArrowRightLong className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThoushandsUsing;
