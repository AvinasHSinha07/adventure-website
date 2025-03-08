"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaRegCirclePlay, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa6";

const ReviewSlider1 = () => {
  const slides = [
    { id: 1, image: "/About Bg.png", title: "John Doe", rating: 4.5 },
    { id: 2, image: "/About Bg-1.png", title: "Jane Smith", rating: 5 },
    { id: 3, image: "/About Bg.png", title: "Alex Johnson", rating: 4 },
    { id: 4, image: "/About Bg-1.png", title: "Emily Brown", rating: 4.5 },
    { id: 5, image: "/About Bg.png", title: "Michael Lee", rating: 5 },
    { id: 6, image: "/About Bg-1.png", title: "Chris Evans", rating: 4 },
    { id: 7, image: "/About Bg.png", title: "Sophia Martinez", rating: 5 },
  ];

  return (
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/3 px-2 flex justify-center"
            >
              <Card className="overflow-hidden py-0 w-[350px] border-none">
                {/* Image Container */}
                <div className="relative flex justify-center items-center w-full h-[400px] rounded-md overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition duration-300 hover:scale-105 rounded-md"
                  />

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaRegCirclePlay className="w-12 h-12 text-white hover:text-[#FF7902] cursor-pointer transition duration-300" />
                  </div>

                  {/* Bottom Overlay with Ratings & Text */}
                  <div className="absolute bottom-0 w-full bg-[#0B6BC4]/60 text-white p-4 text-left z-0"
                   style={{ clipPath: "polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%)" }}>
                    {/* Star Ratings */}
                    <div className="rating rating-xs z-20 mb-1">
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
                        


                    {/* Review Text */}
                    <p className="text-sm text-white z-20">
                      "Amazing experience! "
                    </p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <div className="absolute -bottom-12 left-1/2 flex py-4 gap-2 transform -translate-x-1/2">
          <CarouselPrevious className="text-white border-white border-2 bg-transparent p-2 rounded-full shadow-md">
            <span className="text-2xl">&#8592;</span>
          </CarouselPrevious>
          <CarouselNext className="text-white border-white border-2 bg-transparent p-2 rounded-full shadow-md">
            <span className="text-2xl">&#8594;</span>
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default ReviewSlider1;
