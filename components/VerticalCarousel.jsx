import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "Lal Bahadur is the Best Guide Ever for the Himalayas...",
    review:
      "When I met my guide Lal Gurung and then my porter Buddha Tamang, they gave me advice on how to successfully arrive at the EBC. I was a bit afraid because of a recent back injury, but following their advice, it went perfectly. We had an incredible time in Nepal during the trek.",
    user: "Anonymous User",
    date: "17 May, 2024",
    source: "TripAdvisor",
    rating: 4,
    image: "/Profile Img.png",
  },
  {
    id: 2,
    title: "An Amazing Experience with a Great Guide!",
    review:
      "The trek was absolutely beautiful, and our guide was extremely knowledgeable. The entire journey felt safe and well-planned. Highly recommended!",
    user: "John Doe",
    date: "10 June, 2024",
    source: "Google Reviews",
    rating: 5,
    image: "/Profile Img.png",
  },
  {
    id: 3,
    title: "A Once-in-a-Lifetime Adventure",
    review:
      "We had an unforgettable time trekking with this team! Everything was well organized, and we got to see breathtaking views along the way.",
    user: "Emily Smith",
    date: "25 April, 2024",
    source: "Yelp",
    rating: 5,
    image: "/Profile Img.png",
  },
  {
    id: 4,
    title: "A Once-in-a-Lifetime Adventure",
    review:
      "We had an unforgettable time trekking with this team! Everything was well organized, and we got to see breathtaking views along the way.",
    user: "Emily Smith",
    date: "25 April, 2024",
    source: "Yelp",
    rating: 5,
    image: "/Profile Img.png",
  },
  {
    id: 5,
    title: "A Once-in-a-Lifetime Adventure",
    review:
      "We had an unforgettable time trekking with this team! Everything was well organized, and we got to see breathtaking views along the way.",
    user: "Emily Smith",
    date: "25 April, 2024",
    source: "Yelp",
    rating: 5,
    image: "/Profile Img.png",
  },
];

const VerticalCarousel = () => {
  return (
    <div className="w-full">
      <Carousel opts={{ align: "start" }} orientation="vertical">
        <CarouselContent className="-mt-1 h-[650px] sm:h-[650px] md:h-[650px] lg:h-[650px]">
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="pt-1 md:basis-1/4 basis-1/2 sm:basis-1/2">
              <div className="">
                <Card className="bg-white rounded-sm overflow-hidden border py-0 border-gray-200">
                  <CardContent className="flex px-0 flex-col sm:flex-row">
                    {/* Profile Image */}
                    <div className="relative xl:w-[130px] xl:h-[150px] h-48 rounded-sm w-full sm:w-[130px] ">
                      <Image
                        src={review.image}
                        alt={review.title}
                        fill
                        className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 flex items-start justify-center px-4 flex-col py-4">
                      {/* Title and Rating */}
                      <div className="flex md:items-center md:justify-center flex-col-reverse md:flex-row gap-2 mb-2 ">
                        <h3 className="text-xs font-semibold text-[#0A2540] text-[10px] sm:text-xs md:text-sm">
                          {review.title}
                        </h3>
                        <div className="rating rating-xs">
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
                      </div>

                      {/* Review Text */}
                      <p className="text-[10px] font-normal text-[#0A2540]  sm:text-[10px] md:text-xs line-clamp-3">
                        {review.review}
                      </p>

                      {/* User Info */}
                      <div className="mt-2 text-xs flex items-center  flex-row gap-1 sm:gap-2">
                        <span className="text-[#FF7902] text-xs font-bold mr-4 text-[8px] sm:text-xs">
                          {review.user}
                        </span>
                        <span className="text-[#828282] text-xs font-semibold mr-4 text-[8px] sm:text-xs">
                          {review.date}
                        </span>
                        <span className="text-[#828282] text-xs font-semibold text-[8px] sm:text-xs">
                          {review.source}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Uncomment if needed */}
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default VerticalCarousel;