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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-0 text-white">
            {/* Column 2: Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Nepal
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Tibet
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Bhutan
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Multi Country
                </li>
              </ul>
            </div>

            {/* Column 3: Activities */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Activities</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Trekking
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Climbing
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Mountaineering
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                Sightseeinghover
                </li>
               </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 hidden md:block">
                &nbsp;
              </h4>

              <ul className="space-y-2 text-sm">
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Trekking
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Climbing
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Mountaineering
                </li>
                <li className="hover:text-white text-[#8A6A9B] cursor-pointer transition">
                  Sightseeing
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
           

<div>
  <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
  <ul className="space-y-2 text-sm">
    <li className="flex items-center gap-2 hover:text-white text-[#8A6A9B] cursor-pointer transition">
      <FaPhoneAlt className="text-[#8A6A9B]" />
      +977 98510 99 000
    </li>
    <li className="flex items-center gap-2 hover:text-white text-[#8A6A9B] cursor-pointer transition">
      <FaEnvelope className="text-[#8A6A9B]" />
      info@gmail.com
    </li>
    <li className="flex items-center gap-2 hover:text-white text-[#8A6A9B] cursor-pointer transition">
      <FaMapMarkerAlt className="text-[#8A6A9B]" />
      Thamel, Bhagwati Bahal <br />  Kathmandu, Nepal
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
