import React from "react";
import DetailsCard from "./DetailsCard";

const TourDetails = () => {
  return (
    <div className="md:px-10 md:py-10 px-2 py-10    ">
       <h3 className="text-xl font-bold text-[#E67002] mb-1">Checkout</h3>
       <h3 className="text-lg font-bold text-[#0A2540] mb-5">Spectural Destination</h3>
       <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed mb-6 w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae voluptas libero ut tempora sit, necessitatibus cumque quisquam, reprehenderit accusamus expedita repudiandae error alias. Recusandae ratione nulla neque, cum, expedita possimus iste veniam aliquam numquam quidem, repudiandae aliquid impedit.</p>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
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
