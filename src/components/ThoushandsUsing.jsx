import React from "react";
import bannerImg from "../assets/thoushands.png"; 
import { HiArrowRight } from "react-icons/hi";

function ThoushandsUsing() {
  return (
    <div className="pb-25 pt-10">
      <div className="bg-[#EAEFFA]">
        <div className="px-4 md:px-6 lg:px-10 py-8 ">
          <p className="text-xl md:text-2xl lg:text-3xl text-[#090F4E] font-bold">
            Join Thousands of Professionals Using LeadCRM
          </p>
          <div>
            <img src={bannerImg} alt="banner missed" className="mt-6 w-full" />
          </div>

          <div className="flex items-center justify-center mt-8">
            <button className="flex items-center gap-2 bg-[#9EE25A] text-[#171717] px-5 py-3 rounded-md font-semibold">
              Get Started Today
              <HiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThoushandsUsing;
