import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import frame from "../assets/frame.png";

function PeopleSaying() {
  const testimonials = [
    {
      desc: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbPmdWCCI3x-yeBgweA5J6M5STCX3AnG41A&s",
      name: "David Fincher",
      role: "On Capterra",
    },
    {
      desc: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. Highly recommend it for reliable lead management!",
      img: "https://img.freepik.com/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg?semt=ais_hybrid&w=740&q=80",
      name: "Lillian Williams",
      role: "On Capterra",
    },
    {
      desc: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80",
      name: "Michael",
      role: "On Capterra",
    },
    {
      desc: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. Highly recommend it for reliable lead management!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbPmdWCCI3x-yeBgweA5J6M5STCX3AnG41A&s",
      name: "David Fincher",
      role: "On Capterra",
    },
    {
      desc: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
      name: "Lillian Williams",
      role: "On Capterra",
    },
  ];

  // Carousel state
  const [startIndex, setStartIndex] = useState(0);

  // Responsive visible count
  const visibleCount = window.innerWidth < 768 ? 1 : 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, testimonials.length - visibleCount)
    );
  };

  return (
    <div className="px-4 md:px-10 py-14">
      {/* Header + Carousel buttons */}
      <div className="flex items-center justify-between w-full gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What people are saying about LeadCRM
        </h2>

        {/* Carousel buttons – always inline */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-[#090F4E] hover:text-white disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= testimonials.length - visibleCount}
            className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-[#090F4E] hover:text-white disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Carousel Cards */}
      <div className="mt-10 flex gap-6 overflow-hidden">
        {testimonials
          .slice(startIndex, startIndex + visibleCount)
          .map((item, index) => (
            <div
              key={index}
              className="bg-[#F9F0F8] rounded-xl shadow-md px-4 py-8 flex-1 flex flex-col min-w-[280px] md:min-w-0"
            >
              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Stars + frame */}
              <div className="flex items-start gap-2 mt-4">
                <img
                  src={frame}
                  alt="frame"
                  className="h-10 w-10 mb-6 rounded-full object-cover"
                />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#090F4E" stroke="none" />
                  ))}
                </div>
              </div>

              {/* Divider – mt-4 (not mt-15) */}
              <div className="w-full h-px bg-gray-200 mt-15"></div>

              {/* User info */}
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#090F4E]">{item.name}</p>
                  <p className="text-sm text-[#696969]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PeopleSaying;
