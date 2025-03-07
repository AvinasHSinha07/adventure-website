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

const Slider2 = () => {
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
    <Carousel className="w-full">
      <CarouselContent className="-ml-2">
        {slides.map((slide) => (
          <CarouselItem key={slide.id} className="md:basis-1/2 lg:basis-1/5 px-2 flex justify-center">
            <Card className="overflow-hidden py-0 w-[400px] rounded-sm">
              {/* Image Container */}
              <div className="flex justify-center items-center w-full h-[300px] rounded-sm">
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
      <CarouselPrevious className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-[#FF7902] text-white border-none" />
      <CarouselNext className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-[#FF7902] text-white border-none" />
    </Carousel>
  );
};

export default Slider2;
