import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  const icons = [
    { icon: <FaFacebookF />, color: "#1877F2" },
    { icon: <FaTwitter />, color: "#1DA1F2" },
    { icon: <FaGoogle />, color: "#DB4437" },
    { icon: <FaYoutube />, color: "#FF0000" },
    { icon: <FaInstagram />, color: "#C13584" },
  ];
  return (
    <div className="bg-[#160220] ">
      <div className=" bg-[#160220] flex items-center flex-col md:flex-row">
        <div className="lg:w-1/3 w-full border-e-1 border-[#350050] md:pl-10 md:pr-0  md:py-10 px-4 py-10">
          {/* Ensure height is set */}
          <Image
            src="/footer.png"
            alt="footer logo"
            width={170}
            height={130}
            className="object-cover w-48 transition duration-300 group-hover:scale-105"
          />
          <p className="text-[#FFFFFF] mt-2 text-xs font-normal leading-relaxed mb-6 w-11/12">
            Himalayan Leisure is a boutique travel company specializing in
            adventure and cultural tours across the Himalayan region. Known for
            its personalized services, expert guides, and deep local knowledge,
            the company offers trekking, mountaineering, and sightseeing
            experiences in Nepal, Bhutan, Tibet, and India. Himalayan Leisure
            focuses on providing safe and memorable journeys.
          </p>
          <div className="flex justify-start gap-4 ">
            {icons.map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition duration-300"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-2/3 w-full lg:px-2 md:py-10 py-10 px-4 flex flex-col items-start gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/image 8.png"
              alt="footer logo"
              width={170}
              height={130}
              className="object-cover w-12 h-12 transition duration-300 group-hover:scale-105"
            />
            <p className="text-[#FFFFFF] text-xs font-normal leading-relaxed">
              We would like to be in touch. Let us know your doubts or queries
              24/7
            </p>
            <FontAwesomeIcon
              className="w-8 h-8 text-[#FFFFFF]"
              icon={faArrowRight}
            />
          </div>
          {/* Grid Layout */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-white justify-between">
                     {/* Destinations */}
                     <div>
                       <h4 className="text-base md:text-lg font-semibold mb-4 text-center md:text-left">Destinations</h4>
                       <ul className="space-y-2 text-sm text-center md:text-left">
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Nepal</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Tibet</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Bhutan</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Multi Country</li>
                       </ul>
                     </div>
         
                     {/* Activities 1 */}
                     <div>
                       <h4 className="text-base md:text-lg font-semibold mb-4 text-center md:text-left">Activities</h4>
                       <ul className="space-y-2 text-sm text-center md:text-left">
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Trekking</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Climbing</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Mountaineering</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Sightseeing</li>
                       </ul>
                     </div>
         
                     {/* Activities 2 (Hidden on small screens) */}
                     <div className="hidden md:block">
                       <h4 className="text-base md:text-lg font-semibold mb-4 text-center md:text-left invisible"> </h4>
                       <ul className="space-y-2 text-sm text-center md:text-left">
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Trekking</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Climbing</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Mountaineering</li>
                         <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">Sightseeing</li>
                       </ul>
                     </div>
         
                     {/* Contact Us */}
                     <div>
                       <h4 className="text-base md:text-lg font-semibold mb-4 text-center md:text-left">Contact Us</h4>
                       <ul className="space-y-2 text-sm text-center md:text-left">
                         <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white text-[#8A6A9B] cursor-pointer transition">
                           <FaPhoneAlt className="text-[#8A6A9B]" />
                           +977 98510 99 000
                         </li>
                         <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white text-[#8A6A9B] cursor-pointer transition">
                           <FaEnvelope className="text-[#8A6A9B]" />
                           info@gmail.com
                         </li>
                         <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white text-[#8A6A9B] cursor-pointer transition">
                           <FaMapMarkerAlt className="text-[#8A6A9B]" />
                           <span>Thamel, Bhagwati Bahal <br /> Kathmandu, Nepal</span>
                         </li>
                       </ul>
                     </div>
                   </div>
          <div className="flex flex-col md:flex-row items-start lg:gap-28 gap-4 w-full">
            {/* Email Input with Button */}
            <div className="flex flex-col items-start">
              {/* Email input and button */}
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-sm px-2 py-2 rounded-r-none rounded-l-xs focus:outline-none bg-white"
                />
                <button className="bg-[#FF7902] text-white text-sm rounded-l-none rounded-r-xs px-2 hover:bg-[#e06b00] transition">
                  Subscribe
                </button>
              </div>

              {/* Text for privacy policy */}
              <p className="text-xs text-white mt-2">
                By subscribing, you agree with our &nbsp;
                <span className="font-bold text-[#FF7902] cursor-pointer">
                  privacy policy*
                </span>
              </p>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center">
              <p className="text-[#0A2540] bg-white text-xs font-normal leading-relaxed px-4 py-2 rounded-xs">
                This area is reserved for contents to be published in the
                future.
              </p>
            </div>
          </div>

          {/* Two Column Text Section */}
        </div>
      </div>

      <div className="text-white md:px-10 md:py-10 px-4 py-10  flex items-start md:items-center  justify-between flex-col md:flex-row border-t-1 border-[#350050]">
        <div>
          <p className="text-white text-xs font-normal leading-relaxed">
            &copy; Copyright 2024, The Website Company, Inc.
          </p>
          <p className="text-white  text-xs font-normal leading-relaxed w-10/12">
            Prohibited from copying and reproducing whole or part of the website
            without our written agreement.
          </p>
        </div>
        <div className="flex items-start md:items-center md:gap-8 gap-4 flex-col md:flex-row mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <p className="text-[10px] text-[#FF7902]  ">Secured By</p>
            <Image
              src="/Layer_1.png"
              alt="footer logo"
              width={170}
              height={130}
              className="object-cover w-32 h-8 transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white p-2">
              <Image
                src="/Visa.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-14 transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-2">
              <Image
                src="/Amex.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-14 transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-2">
              <Image
                src="/PayPal.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-14 transition duration-300 group-hover:scale-105"
              />{" "}
            </div>
            <div className="bg-white p-2">
              <Image
                src="/Mastercard.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-14 transition duration-300 group-hover:scale-105"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;




"use client";
import { FaSearch, FaPlayCircle } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css"
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
            place="bottom-start" // Position tooltip at the bottom
            clickable // Allow interaction if needed
            openOnClick // Show tooltip only on click 
            className={`${styles.react-tooltip-arrow}`}
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
             <span>Annapurna Base Camp Tracking <span>10 days</span> </span>
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