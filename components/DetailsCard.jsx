"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaHeart } from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";

const DetailsCard = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false); // New state for tooltip visibility

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    setTooltipVisible(!tooltipVisible); // Toggle tooltip visibility when wishlist button is clicked
  };

  return (
    <div className="card bg-base-100 shadow-sm w-full ">
      {/* Image Section with Wishlist Icon and Hover Buttons */}
      <figure
        className="relative w-full h-56 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/tourimage.png"
          alt="Tour Image"
          fill
          className="object-cover rounded-t-lg"
        />
        {/* Wishlist Icon */}
        <button
          onClick={handleWishlistClick} // Handle wishlist button click
          className="absolute top-4 right-4 z-30 text-white tooltip tooltip-left"
          data-tip={
            tooltipVisible
              ? isWishlisted
                ? "Add to Wishlist"
                : "Add to Wishlist"
              : ""
          }
  
        >
          <BsBookmarkCheckFill className="text-white" />
        </button>

        {/* Hover Buttons */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-3 bg-black/50 transition-opacity">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0B6BC4] text-white font-bold text-xs rounded shadow-lg hover:bg-[#e66a00]">
              Book Now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0B6BC4] text-white font-bold text-xs rounded shadow-lg hover:bg-white hover:text-[#0B6BC4]">
              Quick Enquiry{" "}
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </button>
          </div>
        )}
      </figure>

      <div className="card-body p-4">
        <h2 className="text-sm font-bold text-[#0A2540] flex items-center gap-2">
          Island Peak Climbing
          <span className="text-[#828282] text-[10px] font-medium">
            18 Days
          </span>
        </h2>

        {/* Rating Section */}
        <div className="flex items-center mt-1">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-[#FF7902]"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-[#FF7902]"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-[#FF7902]"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-[#FF7902]"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-[#FF7902]"
            />
          </div>
          <span className="text-[#828282] text-[10px] font-medium ml-4">
            17 Reviews
          </span>
        </div>

        {/* Features Section */}
        <div className="flex justify-start items-start gap-6 md:gap-8 lg: mt-3">
          <div className="flex items-center gap-2 w-1/2 sm:w-auto">
            <CiGlobe className="text-2xl" />
            <div>
              <h3 className="text-xs text-[#0A2540] font-semibold">
                Destination
              </h3>
              <h3 className="text-xs text-[#0A2540] font-medium">
                MultiCountry
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 w-1/2 sm:w-auto">
            <BsGraphUpArrow className="text-2xl" />
            <div>
              <h3 className="text-xs text-[#0A2540] font-semibold">
                Difficulty
              </h3>
              <h3 className="text-xs text-[#0A2540] font-medium">
                Challenging
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <GiCommercialAirplane className="text-2xl" />
            <div>
              <h3 className="text-xs text-[#0A2540] font-semibold">Travel</h3>
              <h3 className="text-xs text-[#0A2540] font-medium">Flight</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing and Button */}
      <div className="flex items-center justify-between mt-3 h-14 bg-[#F0F0F0] w-full">
        <div className="text-sm text-[#0A2540] font-semibold ml-5">
          <p>
            From USD <del className="text-[#828282] text-xs">1900</del>{" "}
            <span className="text-sm text-[#0A2540] font-semibold">
              1700 / permax
            </span>
          </p>
        </div>
        <div
          className="flex items-center justify-center gap-3 pl-6 pr-3 h-14 bg-[#0B6BC4] text-white font-bold text-xs relative hover:bg-[#FF7902] cursor-pointer"
          style={{ clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <span>View More</span>
          <FontAwesomeIcon className="w-4 h-4" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
