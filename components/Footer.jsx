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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const icons = [
    { icon: <FaFacebookF />, color: "#1877F2" },
    { icon: <FaTwitter />, color: "#1DA1F2" },
    { icon: <FaGoogle />, color: "#DB4437" },
    { icon: <FaYoutube />, color: "#FF0000" },
    { icon: <FaInstagram />, color: "#C13584" },
  ];

  return (
    <div className="bg-[#160220]">
      <div className="bg-[#160220] flex flex-col md:flex-row items-center justify-center ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 border-r-0 md:border-r border-[#350050] py-6 md:py-10 md:pl-6 lg:pl-10">
          <Image
            src="/footer.png"
            alt="footer logo"
            width={170}
            height={130}
            className="object-cover w-40 md:w-48 transition duration-300 group-hover:scale-105 mx-auto md:mx-0"
          />
          <p className="text-[#FFFFFF] mt-4 text-xs font-normal leading-relaxed mb-6 text-center md:text-left">
            Himalayan Leisure is a boutique travel company specializing in
            adventure and cultural tours across the Himalayan region. Known for
            its personalized services, expert guides, and deep local knowledge,
            the company offers trekking, mountaineering, and sightseeing
            experiences in Nepal, Bhutan, Tibet, and India. Himalayan Leisure
            focuses on providing safe and memorable journeys.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {icons.map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition duration-300"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 py-6 md:py-10 px-4  flex flex-col gap-8">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Image
              src="/image 8.png"
              alt="footer logo"
              width={170}
              height={130}
              className="object-cover w-10 h-10 md:w-12 md:h-12 transition duration-300 group-hover:scale-105"
            />
            <p className="text-[#FFFFFF] text-xs font-normal leading-relaxed text-center md:text-left">
              We would like to be in touch. Let us know your doubts or queries
              24/7
            </p>
            <FontAwesomeIcon
              className="w-6 h-6 md:w-8 md:h-8 text-[#FFFFFF] hidden md:block"
              icon={faArrowRight}
            />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-6 md:gap-8 text-white justify-between">
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

          {/* Subscribe Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 w-full">
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <div className="flex w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-sm px-2 py-2 w-full rounded-r-none rounded-l-sm focus:outline-none bg-white"
                />
                <button className="bg-[#FF7902] text-white text-sm rounded-l-none rounded-r-sm px-4 hover:bg-[#e06b00] transition">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white mt-2 text-center md:text-left">
                By subscribing, you agree with our  
                <span className="font-bold text-[#FF7902] cursor-pointer">
                  privacy policy*
                </span>
              </p>
            </div>

            <div className="flex flex-col justify-center w-full md:w-auto">
              <p className="text-[#0A2540] bg-white text-xs font-normal leading-relaxed px-4 py-2 rounded-sm text-center">
                This area is reserved for contents to be published in the future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-white px-4 py-6 md:px-6 md:py-10 lg:px-10 flex flex-col md:flex-row xl:items-start items-center justify-between border-t border-[#350050] gap-6">
        <div className="text-center md:text-left">
          <p className="text-white text-xs font-normal leading-relaxed">
            © Copyright 2024, The Website Company, Inc.
          </p>
          <p className="text-white text-xs font-normal leading-relaxed mt-2 w-10/12">
            Prohibited from copying and reproducing whole or part of the website
            without our written agreement.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
          <div className="flex items-center gap-2 justify-center">
            <p className="text-[10px] text-[#FF7902]">Secured By</p>
            <Image
              src="/Layer_1.png"
              alt="footer logo"
              width={170}
              height={130}
              className="object-cover w-24 md:w-32 h-6 md:h-8 transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <div className="bg-white p-1 md:p-2">
              <Image
                src="/Visa.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-12 md:w-14 transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-1 md:p-2">
              <Image
                src="/Amex.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-12 md:w-14 transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-1 md:p-2">
              <Image
                src="/PayPal.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-12 md:w-14 transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-1 md:p-2">
              <Image
                src="/Mastercard.png"
                alt="footer logo"
                width={170}
                height={130}
                className="object-cover w-12 md:w-14 transition duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;