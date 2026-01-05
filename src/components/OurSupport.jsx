import React from "react";
import message1 from "../assets/message1.png";
import topRightImg from "../assets/message2.png"; 

function OurSupport() {
  return (
    <div className="w-full py-16 mt-4 relative">
      <div className="absolute  -right-4 -bottom-18">
        <img
          src={topRightImg}
          alt="Top Right"
          className="h-24 w-24 md:h-32 md:w-32 object-contain "
        />
      </div>
      {/* ===== TOP CONTENT (CENTERED) ===== */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        {/* H2 container with relative positioning */}
        <div className="relative inline-block whitespace-nowrap">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#090F4E]">
            Our Supported LeadCRM
          </h2>

          {/* Image positioned above H2 text end */}
          <img
            src={message1}
            alt="support-icon"
            className="w-16 h-16 object-contain absolute -top-16 -right-8"
          />
        </div>

        {/* Description */}
        <p className="mt-4 text-[#4D4D4D]">
          LeadCRM provides Native Integrations with popular CRM tools to make
          the most out of your LinkedIn prospecting. We <br /> don’t want you to
          miss any revenue opportunity on the internet!
        </p>
      </div>

      {/* ===== WIDE IMAGE (FULL WIDTH FEEL) ===== */}
      <div className="w-full mt-4 px-2 md:px-6">
        <img
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-1536x636.png"
          alt="support-banner"
          className="w-full rounded-xl object-cover"
        />
      </div>

      {/* ===== BUTTON CENTER ===== */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#B3FC6A] text-black px-6 py-4 rounded-xl font-medium">
          Lets Integrate your CRM Now!
        </button>
      </div>
    </div>
  );
}

export default OurSupport;
