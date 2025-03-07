import React from "react";
import DetailsCard from "./DetailsCard";

const TourDetails = () => {
  return (
    <div className="md:px-10 md:py-10 px-2 py-10    ">
      <h1 className="text-2xl font-bold text-[#0A2540] text-center mb-6">Popular Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
      </div>
    </div>
  );
};

export default TourDetails;
