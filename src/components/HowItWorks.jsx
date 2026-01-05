import React from "react";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
import group4 from "../assets/group4.png";
import group5 from "../assets/group5.png";

import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import threeCombo from "../assets/threcombo.png";
import { HiArrowRight } from "react-icons/hi";
import ball from "../assets/ball.png";

function HowItWorks() {
  return (
    <div className="bg-[#EAEFFA] relative">
      <img src={ball} alt="Ball" className="absolute  right-0 -bottom-14" />
      <div className="py-8 px-4 md:px-6 lg:px-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-[#090F4E] font-bold">
          How it Works
        </h1>
        <p className="text-sm text-[#A2A2A2] mt-2">
          From setup to success in{" "}
          <span className="text-gray-500 font-bold">4 simple steps</span>
        </p>
        {/* <img src={arrowthree} alt="Arrow" className="w-full absolute z-0" /> */}
        {/* Cards starts from here parent  */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 z-20 relative">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 gap-4">
            <img src={one} alt="Step 1" />
            <h2 className="text-[#090F4E] font-bold text-xl">
              Install the Extension
            </h2>
            <p className="text-sm  md:px-4 lg:px-6 text-[#4C4C4C]">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
            <img src={group5} alt="group -5" />
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 gap-4">
            <img src={two} alt="Step 1" />
            <h2 className="text-[#090F4E] font-bold text-xl">
              Browse LinkedIn
            </h2>
            <p className="text-sm  md:px-4 lg:px-6 text-[#4C4C4C]">
              Use LinkedIn normally, our extension auto-captures data and
              reveals CRM contacts instantly.
            </p>
            <img src={group4} alt="group -5" />
          </div>
          {/* Card 3 */}
          <div className="relative flex flex-col items-center justify-center bg-white rounded-2xl p-4 gap-4">
            <img src={three} alt="Step 1" />
            <h2 className="text-[#090F4E] font-bold text-xl">
              Get Enriched Data
            </h2>
            <p className="text-sm md:px-4 lg:px-6 text-[#4C4C4C]">
              Enrich profiles with verified emails, phones, and company data
              with 95%+ accuracy guaranteed.
            </p>

            {/* Group3 wrapper */}
            <div className="relative">
              <img src={group3} alt="group -5" />
              <img
                src={threeCombo}
                alt="three combo"
                className="absolute -top-4 right-0  object-contain"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 gap-4">
            <img src={four} alt="Step 1" />
            <h2 className="text-[#090F4E] font-bold text-xl">
              Sync to CRM Instantly
            </h2>
            <p className="text-sm  md:px-4 lg:px-6 text-[#4C4C4C]">
              Prospect data syncs to your CRM instantly with history, tracking,
              and AI powered insights for better follow ups.
            </p>
            <img src={group2} alt="group -5" />
          </div>
        </div>
        {/* Button Center */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-[#B3FC6A] text-[#1A1A1A] py-3 px-7 rounded-2xl mt-10 font-medium">
            Try LeadCRM Now
            <HiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
