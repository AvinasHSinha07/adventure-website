'use client'
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const eventsData = [
  { title: "Tracking ", imgUrl: "/slide1.jpg" },
  { title: "Safari ", imgUrl: "/slide1.jpg" },
  { title: "Sightseeing ", imgUrl: "/slide1.jpg" },
  { title: "Helicopter ", imgUrl: "/slide1.jpg" },
  { title: "Mountain ", imgUrl: "/slide1.jpg" },
  { title: "Beach ", imgUrl: "/slide1.jpg" },
  { title: "City ", imgUrl: "/slide1.jpg" },
  { title: "Luxury ", imgUrl: "/slide1.jpg" },
];

const Events = () => {
  return (
    <div className="md:px-10 md:py-10 px-2 py-10  bg-[#E7F0F9] flex flex-col ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:flex-row bg-white rounded-lg overflow-hidden group min-h-[160px] w-full"
          >
            {/* Image Column */}
            <div className="relative sm:w-[150px] sm:h-auto flex-shrink-0">
              <Image
                src={event.imgUrl}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="h-full w-full"
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-black/80 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <FaArrowRight className="text-white text-xl sm:text-2xl transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </div>
            </div>

            {/* Text Content Column */}
            <div className="p-4 flex flex-col justify-center flex-grow">
              <h4 className="text-sm sm:text-base font-bold text-[#0A2540]  mb-2 hover:text-[#FF7902] cursor-pointer transition-colors duration-200">
                {event.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#0A2540] font-semibold mb-2">13 Tours</p>
              <p className="text-xs sm:text-sm text-[#0A2540] font-semibold">18 Reviews</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
