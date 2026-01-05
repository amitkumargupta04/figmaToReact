import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import avaliableinChrome from "../assets/availableInchrome.png";

function Footer() {
  return (
    <div className="bg-[#01B2D838]">
      <div className="px-4 md:px-8 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row gap-14 justify-between items-center lg:items-start">
          {/* ================= DIV 1 ================= */}
          <div className="flex flex-col gap-4 max-w-sm text-center lg:text-left items-center lg:items-start">
            <img src={logo} alt="company-logo" className="w-32" />

            <p className="text-lg text-gray-700 leading-relaxed">
              LeadCRM is a LinkedIn integration tool built to sync your CRM
              effortlessly.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              {[FaFacebook, FaTwitter,  FaLinkedinIn, FaInstagram,].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-[#01B2D8] p-3 rounded-full cursor-pointer hover:scale-110 transition"
                  >
                    <Icon className="text-white text-lg" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* ================= DIV 2 ================= */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-14
              text-center lg:text-left
            "
          >
            {/* Column 1 */}
            <div className="flex flex-col space-y-5 items-center lg:items-start">
              <h3 className="font-bold text-[#090F4E] text-xl">Integrations</h3>
              <p>HubSpot</p>
              <p>Salesforce</p>
              <p>Pipedrive</p>
              <p>
                Close.io
                <span className="ml-2 px-2 py-1 text-xs bg-[#BDFFC6] rounded-full border border-amber-50">
                  Coming soon
                </span>
              </p>
              <p>
                Insightly
                <span className="ml-2 px-2 py-1 text-xs bg-[#BDFFC6] rounded-full border border-amber-50">
                  Coming soon
                </span>
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-4 items-center lg:items-start">
              <h3 className="font-bold text-[#090F4E] text-xl">Alternatives</h3>
              <p>Surfe vs LeadCRM</p>
              <p>Linkmatch Alternative</p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-4 items-center lg:items-start">
              <h3 className="font-bold text-[#090F4E] text-xl">Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>

          {/* ================= DIV 3 ================= */}
          <div
            className="
    relative
    flex flex-col
    justify-between
    space-y-4
    text-center lg:text-left
    items-center lg:items-start
    lg:-ml-10
    min-h-[220px]
  "
          >
            {/* Content */}
            <div className="space-y-3 mr-15">
              <h3 className="font-bold text-[#090F4E] text-xl">Contact Us</h3>

              <p className="flex items-center gap-2 text-[#01B2D8]">
                <FaEnvelope className="text-[#01B2D8]" />
                <span className="text-black">support@leadcrm.io</span>
              </p>

              <p className="flex items-center gap-2 text-[#01B2D8]">
                <FaPhone className="text-[#01B2D8]" />
                <span className="text-black">+1 231-538-7466</span>
              </p>

              <p className="flex items-center gap-2 text-[#01B2D8]">
                <FaQuestionCircle className="text-[#01B2D8]" />
                <span className="text-black">Help Center</span>
              </p>
            </div>

            {/* ✅ Image fixed at bottom-right INSIDE div */}
            <img
              src={avaliableinChrome}
              alt="chrome"
              className="
      absolute
      bottom-0
      right-0
      md:h-16
      object-contain
      mt-8
    "
            />
          </div>
        </div>

        <p className="px-4 text-[#54595F] text-sm mt-10">Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.</p>
        <div className="w-full h-[1.5px] bg-[#8D8D8D94] mt-2"></div>
        <p className="text-sm items-center text-center text-[#7A7A7A] mt-2">Copyright © 2025 LeadCRM. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
