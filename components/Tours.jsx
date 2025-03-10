"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FaSquareWhatsapp } from "react-icons/fa6";
import React from "react"
import { IoSettings } from "react-icons/io5";
import Slider from "@/components/Slider"
import { IoSettingsOutline } from "react-icons/io5";
const Tours = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center md:px-10 md:py-10 px-2 py-10  relative ">
      {/* Left Side - Text Content */}
      <div className="md:col-span-1 md:mt-12 mt-16">
        <h3 className="text-xl font-bold text-[#E67002] mb-1">Checkout</h3>
        <h3 className="text-lg font-bold text-[#0A2540] mb-5">Spectural Destination</h3>
        <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum asperiores ut itaque ipsa, aspernatur dicta ab facilis a est tempore ratione veritatis quo nostrum exercitationem deleniti placeat cum natus qui aliquid incidunt excepturi eum culpa. Officiis perferendis,  
        </p>

        {/* WhatsApp Icon and Text positioned at the left */}
      

        <button className="flex items-center bg-[#0B6BC4] text-white px-4 py-4 mt-4 rounded-sm hover:bg-[#E67002] gap-2">
          <span className="font-bold text-xs">View More</span>
          <FontAwesomeIcon className="w-4 h-4" icon={faArrowRight} />
        </button>
      </div>

      {/* Right Side - Carousel (3 Columns) */}
      <div className="md:col-span-3 ">
        <Slider></Slider>
      </div>


      <div className="absolute left-0 md:top-10 top-0  flex items-center gap-2 mb-4">
          <FaSquareWhatsapp className="w-10 h-10 text-green-500" />  
       
        </div>

        {/* Settings Icon and Text positioned at the left */}
        <div className="absolute left-0 md:top-20 top-10 flex items-center gap-2 mb-4 pr-4 py-1 bg-[#0B6BC4] text-white">
          <IoSettingsOutline className="w-10 h-10 text-white"/>
          <span className="text-sm font-bold ">Tour customization</span>
        </div>
    </div>
  )
}

export default Tours
