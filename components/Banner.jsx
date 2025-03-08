"use client";
import { FaSearch, FaPlayCircle } from "react-icons/fa";
import React from "react";
import Image from "next/image";

import { AiOutlineLike } from "react-icons/ai";
import { Tooltip } from 'react-tooltip';

const Banner = () => {
  return (
    <div className="relative flex h-screen items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mountains.jpg"
          alt="Travel Background"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Next Adventure
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#FF7902] font-bold mb-4">
          Is Waiting
        </h1>

        <p className="text-xs sm:text-sm md:text-sm mb-8 sm:mb-12 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
          dignissimos, earum reiciendis ex asperiores, quaerat odio odit eaque
          ducimus numquam corrupti
        </p>

        {/* Input with Tooltip */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm mx-auto bg-white rounded-sm shadow-md">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
          <input
            type="text"
            placeholder="Enter your keywords..."
            className="w-full rounded-lg border-none pl-12 pr-4 py-2 sm:py-4 text-black text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF7902]"
            data-tooltip-id="search-tooltip" // Assign tooltip ID
          />
          {/* Tooltip Component */}
          <Tooltip
            id="search-tooltip"
            place="bottom" // Position tooltip at the bottom
            clickable // Allow interaction if needed
            openOnClick // Show tooltip only on click 
            style={{
              backgroundColor: "#ffffff", // White background
              color: "#000000", // Black text
              padding: "12px 12px", // Padding for better appearance
              borderRadius: "4px", // Rounded corners
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
              zIndex: 20, // Ensure it appears above other elements
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
             <span className="text-xs text-[#0A2540] font-semibold mb-2">Annapurna Base Camp Tracking <span className="text-[#828282] text-xs font-light ml-4">10 days</span> </span>
             <span className="text-xs text-[#0A2540] font-semibold mb-2">Annapurna Base Camp Tracking <span className="text-[#828282] text-xs font-light ml-4">10 days</span> </span>
             <span className="text-xs text-[#0A2540] font-semibold">Annapurna Base Camp Tracking <span className="text-[#828282] text-xs font-light ml-4">10 days</span> </span>
            </div>
          </Tooltip>
        </div>
      </div>

      {/* Bottom Left Section */}
      <div className="absolute bottom-4 sm:bottom-5 left-2 sm:left-4 md:left-10 bg-[#0B6BC4] text-white flex items-center px-2 sm:px-3 py-1 sm:py-2 gap-1 sm:gap-2 rounded-sm">
        <AiOutlineLike className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        <p className="text-[10px] sm:text-xs md:text-xs">
          Handshake with us for the best services
        </p>
      </div>

      {/* Bottom Right Play Button */}
      <div className="absolute bottom-4 sm:bottom-5 right-2 sm:right-4 md:right-10">
        <FaPlayCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white hover:text-[#FF7902] cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner;