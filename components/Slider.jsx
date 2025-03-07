import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Beach Paradise",
      description: "Relax on the serene beaches with crystal-clear waters.",
      image: "/slide1.jpg",
    },
    {
      id: 2,
      title: "Mountain Escape",
      description: "Enjoy breathtaking views from the top of the world.",
      image: "/slide2.jpg",
    },
    {
      id: 3,
      title: "City Adventures",
      description: "Discover the vibrant life of iconic cities worldwide.",
      image: "/slide3.jpg",
    },
    {
      id: 4,
      title: "Desert Safari",
      description: "Explore the golden dunes and experience a thrilling ride.",
      image: "/slide1.jpg",
    },
    {
      id: 5,
      title: "Tropical Retreat",
      description: "Immerse yourself in lush greenery and exotic wildlife.",
      image: "/slide2.jpg",
    },
  ];

  return (
    
    <Carousel className="w-full h-full relative">
      <CarouselContent className=" ">
        {slides.map((slide) => (
          <CarouselItem key={slide.id} className=" md:basis-1/2 lg:basis-1/3 pl-4 rounded-sm">
            <div className="rounded-2xl">
              <Card className="relative group overflow-hidden py-0  rounded-sm">
                
                {/* Background Image */}
                <div className="relative w-[415px] h-[485px] rounded-sm">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover w-full h-full transition duration-300 group-hover:scale-105 rounded-sm"
                  />
                </div>

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center  text-center z-0">
                  <h2 className="text-white text-2xl font-bold text-center">{slide.title}</h2>
                  <p className="text-white mt-2 text-sm">{slide.description}</p>
                </div>

                {/* Title and Button */}
                <CardContent className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white">
                  <h2 className="text-xl font-bold hidden">{slide.title}</h2>
                  <button className="bg-[#0B6BC4]  text-white px-4 absolute bottom-12 py-3 rounded-xs text-sm font-semibold mt-auto opacity-90 hover:opacity-100 transition">
                    07 Tours
                  </button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 z-10 bg-[#FF7902] text-white border-none"/>
      <CarouselNext className="absolute right-5 z-10 bg-[#FF7902] text-white border-none"/>
    </Carousel>
  );
};

export default Slider;
