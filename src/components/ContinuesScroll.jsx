import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import hand from "../assets/hand.png";
import waterfall from "../assets/waterfall.png";
import user from "../assets/user.png";
import mapping from "../assets/mapping.png";

function ContinuesScroll() {
  const items = [
    { img: hand, text: "Access to", text1: "700M+ Contacts" },
    { img: waterfall, text: "Advanced", text1: "Waterfall Enrichme" },
    { img: user, text: "Mapping", text1: "Custom Field" },
    { img: mapping, text: "One click push", text1: "to CRM" },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // move left by 50% of content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // speed, adjust as needed
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden w-full py-10">
      <div className="shadow-md bg-white p-4 rounded-xl">
        <motion.div
          animate={controls}
          whileHover={{ pause: true }} // pause on hover
          className="flex gap-6 md:gap-20"
        >
          {/* Duplicate items for seamless scroll */}
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap"
            >
              <img
                src={item.img}
                alt={item.text}
                className="h-10 w-10 flex-shrink-0"
              />
              <span className="inline-flex items-center gap-1 text-sm whitespace-nowrap">
                <span className="text-gray-500">{item.text}</span>
                <span className="text-gray-900 font-semibold">
                  {item.text1}
                </span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ContinuesScroll;
