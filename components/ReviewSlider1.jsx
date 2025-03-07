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

const ReviewSlider1 = () => {
  const slides = [
    { id: 1, image: "/image 4.png" },
    { id: 2, image: "/image 6.png" },
    { id: 3, image: "/image 5.png" },
    { id: 4, image: "/image 2.png" },
    { id: 5, image: "/image 4.png" },
    { id: 6, image: "/image 3.png" },
    { id: 7, image: "/image 9.png" },
  ];

  return (
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent className="-ml-2">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="md:basis-1/2 lg:basis-1/2 px-2 flex justify-center"
            >
              <Card className="overflow-hidden py-0 w-[350px] rounded-sm">
                {/* Image Container */}
                <div className="flex justify-center items-center w-full h-[380px] rounded-sm">
                  <Image
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition duration-300 hover:scale-105 rounded-sm"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <div className="absolute -bottom-12 left-1/2  flex py-4 gap-0 ">
          <CarouselPrevious className=" text-white  border-white border-2 bg-transparent p-2 rounded-full shadow-md">
            {/* Left Arrow Icon */}
            <span className="text-2xl">&#8592;</span>
          </CarouselPrevious>
          <CarouselNext className="text-white  border-white border-2 bg-transparent p-2 rounded-full shadow-md">
            {/* Right Arrow Icon */}
            <span className="text-2xl">&#8594;</span>
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default ReviewSlider1;
