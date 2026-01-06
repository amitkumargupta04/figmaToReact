import React from "react";
import cross from "../assets/cross.png";
import img1 from "../assets/hand.png";
import img2 from "../assets/waterfall.png";
import img3 from "../assets/user.png";
import img4 from "../assets/mapping.png";
import prospectors from "../assets/prospectors.png";
import prospectors1 from "../assets/prospectors1.png";
import halflogo from "../assets/halflogo.png";
import prosimg from "../assets/prosimg.png";

function Prospectors() {
  const div1Items = [
    {
      title: "Manual Data Entry",
      time: "3+ Hours wasted daily",
      desc: "Copying LinkedIn contacts to CRM manually plus losing conversation history",
    },
    {
      title: "Incomplete Data",
      time: "60% Data Incomplete",
      desc: "LinkedIn profiles missing Email and Phones from 700M+ Database",
    },
    {
      title: "No CRM Visibility",
      time: "Zero context available",
      desc: "No visibility of CRM data on LinkedIn profiles",
    },
    {
      title: "Limited Productivity",
      time: "No smart assistance",
      desc: "Manual messages with no AI replies, invites or comments",
    },
  ];

  const div2Items = [
    {
      img: img1,
      title: "Complete Bi-Directional Sync",
      desc: "Automatically sync contacts, messages and notes between LinkedIn and CRM",
    },
    {
      img: img2,
      title: "700M+ Contacts + Enrichment",
      desc: "Get verified emails and phone numbers from a global database",
    },
    {
      img: img3,
      title: "CRM Overlay on LinkedIn",
      desc: "View full CRM insights directly on LinkedIn profiles",
    },
    {
      img: img4,
      title: "AI Responses + Templates",
      desc: "AI replies, templates and bulk exports to save time",
    },
  ];

  return (
    <div className="px-4 md:px-10 py-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#090F4E] text-center">Every LinkedIn Prospector faces these daily challenges</h1>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 mt-10">
        {/* ===== LEFT CARD ===== */}
        <div
          className="
            bg-[#FFF7F8] rounded-xl shadow-md
            p-2 md:p-6 w-full md:max-w-md
            border border-transparent
            transition-all duration-300
            hover:border-red-400 hover:-translate-y-2
          "
        >
          <img
            src={prospectors1}
            alt="Without LeadCRM"
            className="w-full rounded-md"
          />

          <p className="text-xl font-semibold text-[#D24B68] mt-4">
            Without LeadCRM
          </p>

          <div className="mt-5 space-y-4">
            {div1Items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4"
              >
                <img src={cross} alt="cross" className="h-4 w-4 mt-1" />

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <span className="text-[#FF4C51] bg-[#FFDCD4] text-xs font-medium px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-[#4C4C4C] text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== VS DIVIDER ===== */}
        <div className="relative hidden md:flex items-center justify-center py-6">
          {/* Vertical line (desktop only) */}
          <div className="h-full w-px bg-gray-300"></div>

          {/* VS text */}
          <span className="absolute bg-white px-3 py-1 text-gray-500 font-semibold text-sm rounded-full">
            VS
          </span>
        </div>

        {/* ===== RIGHT CARD ===== */}
        <div
          className="
            bg-white rounded-xl shadow-md
            p-4 md:p-6 w-full md:max-w-md
            border border-transparent
            transition-all duration-300
            hover:border-green-400 hover:-translate-y-2
          "
        >
          <img
            src={prospectors}
            alt="With LeadCRM"
            className="w-full rounded-md"
          />

          {/* Heading row */}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            {/* Text */}
            <p className="text-lg font-semibold text-[#097737]">With LeadCRM</p>

            {/* Logo image */}
            <img
              src={halflogo}
              alt="LeadCRM Logo"
              className="h-8 w-8 object-contain"
            />

            {/* Green badge text */}
            <span className="bg-[#E6FFF1] text-[#097737] text-sm font-semibold px-4 py-1.5 rounded-full">
              Smart Automation
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {div2Items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-10 w-10 flex-shrink-0"
                />

                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-[#4C4C4C] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ===== Center row below cards ===== */}
      <div className="mt-5 flex justify-center items-center ml-4">
        <div className="flex items-center gap-1">
          {/* Box 1 – TEXT ONLY */}
          <div className="bg-[#B3FC6A] text-[#000000] px-6 py-4 rounded-xl text-sm font-medium">
            Start Using LeadCRM Now
          </div>
          {/* Box 2 – IMAGE ONLY */}
          <img
            src={prosimg}
            alt="icon"
            className=" w-36  md:w-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Prospectors;