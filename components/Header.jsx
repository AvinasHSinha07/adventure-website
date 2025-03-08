import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaUserCircle } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
const Header = () => {
  return (
    <header className="w-full">
      <div className="flex flex-col md:flex-row ">
        {/* Left Side - Logo and Notification */}
        <div className="md:w-2/12 flex-col hidden md:flex  bg-gray-100">
  <div className="bg-[#FF7902] py-6 text-center">
    <p className="text-white text-xs font-bold">Notification Bar Tag</p>
  </div>
  <div className="flex items-center justify-center w-full h-full">
    <Image
      src="/Logo.png"
      alt="Company Logo"
      width={120}
      height={80}
      className="object-contain" // Changed from object-cover to object-contain
    />
  </div>
</div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col">
          {/* Mobile Logo */}
          <div className="md:hidden bg-gray-100 py-2 flex justify-center items-center">
            <Image
              src="/Logo.png"
              alt="Company Logo"
              width={100}
              height={60}
              className="object-cover"
            />
          </div>

          {/* Top Banner */}
          <div className="bg-[#0A2540] text-white px-2 sm:px-4 py-3 flex items-center justify-between">
            <p className="text-[10px] sm:text-xs md:text-xs mr-2 md:w-9/12 w-1/2">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed optio, nulla hic rem, animi quidem minus dolores itaque voluptatibus eligendi
            </p>
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="bg-white text-blue-950 px-2 md:px-4 py-2 sm:py-3 rounded-xs hover:bg-[#E67002] flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold">
                View More
                <FontAwesomeIcon className="w-3 h-3 sm:w-4 sm:h-4" icon={faArrowRight} />
              </button>
              <FaRegTimesCircle className="text-white w-5 h-5 sm:w-5 sm:h-5 cursor-pointer" />
            </div>
          </div>

          {/* Contact & User Section */}
          <div className="bg-[#0B6BC4] text-white px-2 sm:px-4 py-2 sm:py-3 flex flex-row md:flex-col lg:flex-row justify-between  items-center gap-2 sm:gap-0">
            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
              <div className="flex items-center gap-2">
                {/* <MdEmail  /> */}
                <SiMinutemailer className="w-4 h-4 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-xs font-semibold">email@example.com</span>
              </div>
              <div className="flex items-center gap-2">
              <FaWhatsapp className="w-4 h-4 sm:w-4 sm:h-4"/>
                <span className="text-xs sm:text-xs font-semibold">+123 456 7890</span>
              </div>
            </div>

            {/* User Options */}
            <div className="flex items-center gap-3 sm:gap-6">
              <FaWhatsapp className="w-4 h-4 sm:w-4 sm:h-4 cursor-pointer" />
              <select className="bg-transparent text-xs sm:text-xs border-none font-bold outline-none">
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
              </select>
              <FaUserCircle className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
            </div>
          </div>

          {/* Navbar */}
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;