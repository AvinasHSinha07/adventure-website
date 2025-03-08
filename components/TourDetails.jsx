import React from "react";
import DetailsCard from "./DetailsCard";
import styles from "../components/TourDetails.module.css"
const TourDetails = () => {
  return (
    <div className="relative md:px-10 md:py-10 px-2 py-10">
      {/* Outlined "Recommended" Text Behind */}
      <h1
  className={`${styles.outlinedText} absolute top-5 xl:block hidden     text-[5rem] font-extrabold text-gray-200 opacity-10 uppercase tracking-widest`}
>
  Recommended
</h1>   

      
      {/* Heading and description */}
      <h3 className="text-xl font-bold text-[#E67002] mb-1 relative z-10">Checkout</h3>
      <h3 className="text-lg font-bold text-[#0A2540] mb-5 relative z-10">Spectural Destination</h3>
      <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed mb-6 w-10/12 relative z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae voluptas libero ut tempora sit, necessitatibus cumque quisquam, reprehenderit accusamus expedita repudiandae error alias. Recusandae ratione nulla neque, cum, expedita possimus iste veniam aliquam numquam quidem, repudiandae aliquid impedit.
      </p>  

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center relative z-10">
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
