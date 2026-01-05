import React, { useState } from "react";

import crm from "../assets/settings1.png";
import sync from "../assets/bulk.png";
import exportImg from "../assets/brain.png";
import ai from "../assets/reset.png";
import group1 from "../assets/group1.png";

import sales1 from "../assets/sales1.png";
import sales2 from "../assets/sales2.png";
import sales3 from "../assets/sales3.png";

function LinkedInSales() {
  const toggles = [
    { title: "CRM Data Enrichment", icon: crm },
    { title: "CRM Data Sync", icon: sync },
    { title: "Bulk Export & Enrichment", icon: exportImg },
    { title: "AI Productivity", icon: ai },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* ================= TOP SECTION (UNTOUCHED) ================= */}
      <div className="flex items-center mt-8">
        <img src={group1} alt="Group" />
        <div className="mx-auto text-center">
          <h1 className="text-[#090F4E] text-xl md:text-2xl lg:text-3xl font-bold">
            Complete LinkedIn Sales Solutions
          </h1>
          <p className="text-sm text-[#4D4D4D] mt-2">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>
      </div>

      {/* ================= TOGGLES (FULL WIDTH, SCROLLABLE ON MOBILE, START FROM RIGHT) ================= */}
      <div className="w-full border-b border-gray-200 mt-5 px-2 md:px-4 lg:px-8">
        <div
          className="
      flex
      flex-nowrap
      overflow-x-auto
      scrollbar-hide
      md:justify-between
      rtl
    "
        >
          {toggles.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="
          relative
          flex
          items-center
          gap-2
          pb-3
          text-sm
          font-medium
          min-w-[160px]
          ltr
        "
            >
              <img src={item.icon} alt={item.title} className="w-5 h-5" />
              <span
                className={
                  activeIndex === index ? "text-[#090F4E]" : "text-gray-500"
                }
              >
                {item.title}
              </span>
              {activeIndex === index && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-[5px] bg-[#090F4E] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ================= ACTIVE CONTENT ================= */}
      <div className="px-2 md:px-4 lg:px-8 py-8">
        <p className="text-[#4D4D4D] text-sm md:text-base lg:text-lg">
          It’s hard to find the accurate contact data for every prospects by{" "}
          <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#FFDCD4] text-[#FF4C51] text-xs md:text-sm">
            Incomplete Data
          </span>
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-2 md:items-stretch">
          {/* ye Div1*/}
          <div className="bg-[#F0F4FD] rounded-2xl p-6 flex flex-col justify-between md:flex-1 h-full">
            <div>
              <p className="font-medium text-[#090F4E]">
                Here is how LeadCRM tackles that situation.
              </p>
              <p className="text-[#097737] font-semibold mt-1 cursor-pointer">
                Try LeadCRM Data Enrichment &gt;
              </p>
            </div>

            {/*  IMAGES ALWAYS TOGETHER — keep side-by-side on all sizes */}
            <div className="flex gap-4 mt-6 flex-row items-start">
              <img
                src={sales1}
                alt="sales1"
                className="w-1/2 h-auto object-contain"
              />
              <img
                src={sales2}
                alt="sales2"
                className="w-1/2 h-auto object-contain"
              />
            </div>
          </div>

          {/* ye Div2*/}
          <div className="flex items-center justify-center overflow-hidden md:flex-1">
            <img
              src={sales3}
              alt="sales3"
              className="max-w-full h-auto md:max-w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedInSales;
