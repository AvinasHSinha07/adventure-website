import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaDollarSign, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex h-40">
      {/* Left Side */}
      <div className="w-2/12 flex flex-col h-full">
        {/* Notification Bar */}
        <div className="bg-[#FF7902] py-2">
          <p className="text-white text-center text-lg font-semibold">Notification Bar Tag</p>
        </div>

        {/* Logo */}
        <div className="bg-gray-100 flex items-center justify-center flex-1">
          <Image
            src="/Logo.png"
            alt="Description of image"
            width={150}
            height={100}
            layout="intrinsic"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col h-full">
        {/* Top Banner */}
        <div className="flex items-center justify-between bg-[#0A2540] text-white px-4 py-2">
          <p className="text-xs w-9/12 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            reiciendis asperiores vitae doloremque a nisi pariatur amet deleniti
            quo id iusto! Quae reiciendis unde doloremque laborum earum fugit
            libero. Sunt!
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center bg-white text-blue-950 px-4 py-2 rounded-sm hover:bg-[#E67002] gap-2">
              <span className="font-bold text-sm">View More</span>
              <FontAwesomeIcon className="w-4 h-4" icon={faArrowRight} />
            </button>
            <div className="flex items-center justify-center w-8 h-8 cursor-pointer">
              <FaRegTimesCircle className="text-white text-xl" />
            </div>
          </div>
        </div>

        {/* Contact & User Section */}
        <div className="flex justify-between items-center bg-[#0B6BC4] text-white px-4 py-3">
          {/* Left Side - Contact Details */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MdEmail className="text-white w-5 h-5" />
              <span className="text-sm">email@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdPhone className="text-white w-5 h-5" />
              <span className="text-sm">+123 456 7890</span>
            </div>
          </div>

          {/* Right Side - User Options */}
          <div className="flex items-center space-x-6 mr-1">
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-white w-5 h-5" />
            </div>
            <div className="flex items-center space-x-2">
             
              <select className="bg-transparent text-sm font-semibold border-none outline-none">
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
              </select>
            </div>
            <div className="flex items-center ">
              <FaUserCircle className="text-white w-6 h-5" />
            </div>
          </div>
        </div>

        {/* Navbar Component */}
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
