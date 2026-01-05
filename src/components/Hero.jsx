import React from "react";
import heroBg from "../assets/heroimage.png";
import roket from "../assets/rocket.png";
import line1 from "../assets/line1.png";
import groups from "../assets/groups.png";
import salesforce from "../assets/salesforce.png";
import vectorp from "../assets/vectorp.png";
import { Star } from "lucide-react";
import chrome1 from "../assets/chrome1.png";
import playstore from "../assets/playstore.png";
import playstore1 from "../assets/playstore1.png";

function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Container wrapper for max width + horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">

        {/* 1️⃣ Rocket Badge */}
        <div className="flex items-center justify-center gap-2 mt-12 px-3 py-2 
                        rounded-[20px] bg-white border border-[#9ACCFF] text-center">
          <img src={roket} alt="Rocket Icon" />
          <p className="text-[#63657E]">
            Thousands of Professional using LeadCRM
          </p>
        </div>

        {/* 2️⃣ Headings */}
        <div className="mt-2 space-y-2.5 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#121212]">
            LinkedIn CRM Integration
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#121212]">
            Capture, Sync and Enrich in{" "}
            <span className="relative inline-block text-[#2D96BC]">
              Both Ways
              {/* Underline image */}
              <img
                src={line1}
                alt="underline"
                className="absolute left-3 -bottom-5 w-full"
              />
            </span>
          </h1>
        </div>

        {/* 3️⃣ Paragraph */}
        <div className="mt-6 text-[#363636] text-center max-w-3xl">
          <p className="text-sm md:text-base leading-relaxed">
            Automatically sync LinkedIn prospects to your CRM and overlay
            existing CRM contacts on LinkedIn profiles. Complete
            bi-directional integration with HubSpot, Salesforce, and Pipedrive.
          </p>
        </div>

        {/* 4️⃣ Gradient "Works with" box */}
        <div
          className="rounded-[20px] px-6 py-5 mt-2
                     bg-gradient-to-r from-blue-500 to-purple-600
                     flex flex-col sm:flex-row items-center gap-4 sm:gap-10"
        >
          {/* Left Text */}
          <p className="text-[#2E2E2E] text-base md:text-lg font-medium">
            Works with
          </p>

          {/* Right Images */}
          <div className="flex items-center gap-5">
            <img src={groups} alt="Groups" className="h-14 w-auto" />
            <div className="bg-[#21844A] p-4 rounded-full flex items-center justify-center">
              <img src={vectorp} alt="P icon" className="h-6 w-6" />
            </div>
            <img src={salesforce} alt="Salesforce" className="h-14 w-auto" />
          </div>
        </div>

        {/* 5️⃣ Ratings row */}
        <div className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-4">
          {/* Block 1 */}
          <div className="flex items-center gap-2">
            <div className="bg-white w-10 h-10 rounded-sm flex items-center justify-center">
              <img src={playstore1} alt="Frame Icon"  />
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FACC15" stroke="none" />
              ))}
              <span className="text-sm font-medium text-[#63657E]">5/5</span>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex items-center gap-2">
            <div className="bg-white w-10 h-10 rounded-sm flex items-center justify-center">
              <img src={playstore} alt="Frame Icon"  />
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FACC15" stroke="none" />
              ))}
              <span className="text-sm font-medium text-[#63657E]">5/5</span>
            </div>
          </div>
        </div>

        {/* 6️⃣ CTA Cards */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 w-full py-6">
          
          {/* Left Card */}
          <div
            className="relative bg-[#373737] text-white rounded-2xl px-3 py-4 
                       flex items-center justify-between gap-4 w-full sm:w-[260px]"
          >
            <p className="text-sm leading-snug">
              Available in <br /> Chrome Web Store
            </p>

            {/* Chrome image */}
            <div className="relative">
              <img
                src={chrome1}
                alt="Chrome"
                className="h-10 w-10 z-10 relative"
              />
            </div>
          </div>

          {/* Right Card */}
          <div
            className="bg-[#B3FC6A] text-black rounded-2xl pl-3 py-4 
                       flex items-center w-full sm:w-[260px] font-medium"
          >
            Get a Free Trial Now!
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
