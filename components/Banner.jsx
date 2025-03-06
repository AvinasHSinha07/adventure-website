import React from "react";
import Image from "next/image";
import { FaSearch, FaStar, FaMapMarkerAlt, FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative flex h-screen items-center justify-center text-white">
    
      <div className="absolute inset-0">
        <Image
          src="/mountains.jpg"
          alt="Travel Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

   
      <div className="relative z-10 text-center max-w-2xl m-auto">
        <h1 className="text-5xl font-bold mb-2">Next Adventure</h1>
        <h1 className="text-5xl text-[#FF7902] font-bold mb-4">Is Waiting</h1>

        <p className="text-sm  mb-12">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem dignissimos, earum reiciendis ex asperiores, quaerat odio odit eaque ducimus numquam corrupti
        </p>

        <div className="relative w-full max-w-sm mx-auto bg-white rounded-lg">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm placeholder:text-xs" />
          <input
            type="text"
            placeholder="Enter your keywords..."
            className="w-full rounded-full border-none px-10 py-3 text-black focus:outline-none"
          />
        </div>
      </div>

      
      <div className="absolute flex items-center justify-center bottom-5 left-10 bg-[#0B6BC4] text-white text-4xl px-3 py-2 gap-1 rounded-lg">
        <FaPlayCircle className="w-4 h-4"/>
        <p className="text-sm">Handshake with us for the best services</p>
      </div>
      <div className="absolute bottom-5 right-10 text-white  text-4xl">
        <FaPlayCircle className="w-8 h-8"/>
      </div>
    </div>
  );
};

export default Banner;
