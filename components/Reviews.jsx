import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
import ReviewSlider1 from "./ReviewSlider1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import VerticalCarousel from "./VerticalCarousel";

const Reviews = () => {
  return (
    <div className="relative w-full lg:min-h-[120vh]  flex items-center justify-center ">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png" // Replace with your image path
          alt="Background Image"
          layout="fill" // Ensures it fills the container
          objectFit="cover" // Ensures the image covers the entire container
          objectPosition="center" // Centers the image
        />
      </div>

      {/* Optional overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Main content container */}
      <div className="relative z-20 w-full h-full flex items-center justify-center flex-col lg:flex-row md:px-10 md:py-10 px-4 py-10">
        <div className="w-full md:w-1/2  text-white">
          {/* Left Column */}
          <h2
            className={`${styles.outlinedText} lg:text-7xl text-5xl mb-4 font-extrabold text-white opacity-80 uppercase tracking-widest`}
          >
            Reviews
          </h2>
          <p className="text-white text-xs font-normal leading-relaxed mb-6 ">
            An exhilarating adventure with stunning landscapes and a
            well-organized team. The guides were knowledgeable and supportive,
            making this a once-in-a-lifetime experience.
          </p>
          <ReviewSlider1 />
          <div className="mt-12 flex items-center justify-center">
            <button className="flex items-center bg-white text-[#0A2540] px-5 py-2 mt-4 rounded-xs gap-2">
              <span className="font-bold text-xs">More Reviews</span>
              <FontAwesomeIcon
                className="w-4 h-4 text-[#E67002]"
                icon={faArrowRight}
              />
            </button>
          </div>
          <div className="w-full flex items-center justify-center gap-4 sm:gap-6 md:gap-2 mt-4 flex-wrap">
            {/* First Image */}
            <div className="w-[100px] h-[30px] bg-white flex items-center justify-center rounded-xs">
              <Image
                src="/Rectangle 19.png"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Second Image */}
            <div className="w-[100px] h-[30px] bg-white flex items-center justify-center rounded-xs">
              <Image
                src="/Rectangle 18.png"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Third Image */}
            <div className="w-[100px] h-[30px] bg-white flex items-center justify-center rounded-xs">
              <Image
                src="/Rectangle 20.png"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 text-white">
          {/* Right Column */}
        <VerticalCarousel></VerticalCarousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
