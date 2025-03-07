'use client'
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const eventsData = [
  { title: "Tracking Tour", imgUrl: "/slide1.jpg" },
  { title: "Safari Tour", imgUrl: "/slide1.jpg" },
  { title: "Sightseeing Tour", imgUrl: "/slide1.jpg" },
  { title: "Helicopter Tour", imgUrl: "/slide1.jpg" },
  { title: "Mountain Adventure", imgUrl: "/slide1.jpg" },
  { title: "Beach Vacation", imgUrl: "/slide1.jpg" },
  { title: "City Exploration", imgUrl: "/slide1.jpg" },
  { title: "Luxury Cruise", imgUrl: "/slide1.jpg" },
];

const Events = () => {
  return (
    <div className="px-10 py-10 bg-[#E7F0F9] flex flex-col gap-8">
      {/* Events Section - Two rows, Four columns each */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {eventsData.slice(0, 4).map((event, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div className="relative w-[200px] h-[150px] flex-shrink-0">
              <Image
                src={event.imgUrl}
                alt={event.title}
               fill
                className="absolute inset-0 object-cover rounded-l-lg transition-all duration-300 group-hover:opacity-70"
                priority={index < 4} // Prioritize loading for first row
                onError={(e) => {
                  console.error(`Failed to load image: ${event.imgUrl}`);
                  e.target.src = "/slide1.jpg"; // Fallback image
                }}
              />
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black/80 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <FaArrowRight className="text-white text-2xl transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </div>
            </div>
            <div className="p-4 flex flex-col justify-center">
              <h4 className="text-sm font-bold text-blue-900 mb-2 hover:text-[#FF7902] cursor-pointer transition-colors duration-200">
                {event.title}
              </h4>
              <p className="text-xs text-gray-800 mb-1">13 Tours</p>
              <p className="text-xs text-gray-800">18 Reviews</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {eventsData.slice(4, 8).map((event, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div className="relative w-[200px] h-[150px]">
              <Image
                src={event.imgUrl}
                alt={event.title}
               fill
                className="absolute inset-0 object-cover rounded-l-lg transition-all duration-300 group-hover:opacity-70"
                onError={(e) => {
                  console.error(`Failed to load image: ${event.imgUrl}`);
                  e.target.src = "/slide1.jpg"; // Fallback image
                }}
              />
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black/80 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <FaArrowRight className="text-white text-2xl transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </div>
            </div>
            <div className="p-4 flex flex-col justify-center">
              <h4 className="text-sm font-bold text-blue-900 mb-2 hover:text-[#FF7902] cursor-pointer transition-colors duration-200">
                {event.title}
              </h4>
              <p className="text-xs text-gray-800 mb-1">13 Tours</p>
              <p className="text-xs text-gray-800">18 Reviews</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;