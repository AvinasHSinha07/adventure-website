"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Awards = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 bg-[#F4F4F4] flex flex-col md:flex-row lg:gap-2 gap-4">
      {/* Left Side - Awards Content */}
      <div className="md:w-1/2">
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#E67002] mb-1">Checkout</h3>
          <h3 className="text-lg font-bold text-[#0A2540] mb-5">Spectural Destination</h3>
          <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed mb-6 w-full md:w-11/12">
            Gravida placerat faucibus hac natoque at ullamcorper. Ac proin ultrices risus tellus rhoncus tellus risus. Vel non proin lectus a; nulla per blandit. Integer habitant vitae enim at aliquet. Himenaeos class iaculis lectus nostra interdum feugiat id elementum. Scelerisque aenean egestas porta sapien, nullam laoreet eleifend. Sociosqu in fames fames in efficitur ornare morbi, nostra eleifend.
          </p>
          <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed mb-6 w-full md:w-11/12">
            Amet arcu laoreet a himenaeos blandit senectus platea. Hendrerit taciti scelerisque nunc metus mollis. Porttitor consequat justo enim litora blandit. Convallis elementum phasellus dignissim suscipit phasellus massa. Duis sociosqu magna eros elementum fermentum ad. Posuere curabitur accumsan etiam torquent litora; dui turpis senectus. Fermentum habitasse curae vestibulum, consequat ultrices pharetra efficitur ex dui. Nostra volutpat diam lacinia per cubilia feugiat. Vitae condimentum arcu est sed convallis ad scelerisque.
          </p>
          <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed mb-6 w-full md:w-11/12">
            Mollis potenti convallis et volutpat; ullamcorper metus dictum inceptos. Inceptos feugiat turpis est elit per nam. Sit quam facilisi penatibus diam feugiat placerat neque. Vivamus nec lacinia luctus nam sed etiam. Amet ex arcu et fermentum eu id rhoncus. Pharetra dis ornare rhoncus, auctor nascetur habitasse. Sapien efficitur dapibus eget, mollis varius lacus cursus. Rhoncus primis suspendisse dictum varius cursus consequat fringilla. Senectus sit urna ad hendrerit posuere feugiat, fames turpis torquent.
          </p>
          <button className="flex items-center bg-[#0B6BC4] text-white px-4 py-3 mt-4 rounded-sm hover:bg-[#E67002] gap-2">
            <span className="font-semibold text-sm">View More</span>
            <FontAwesomeIcon className="w-4 h-4 ml-1" icon={faArrowRight} />
          </button>
          <h3 className="text-xl mt-4">We are affiliated with</h3>
          <div className="w-full flex gap-4 sm:gap-6 md:gap-2 mt-4 flex-wrap">
  <div className="w-[100px] h-[60px] bg-white flex items-center justify-center rounded-xs">
    <Image src="/Rectangle.png" width={50} height={50} className="object-contain" />
  </div>
  <div className="w-[100px] h-[60px] bg-white flex items-center justify-center rounded-xs">
    <Image src="/Rectangle.png" width={50} height={50} className="object-contain" />
  </div>
  <div className="w-[100px] h-[60px] bg-white flex items-center justify-center rounded-xs">
    <Image src="/Rectangle.png" width={50} height={50} className="object-contain" />
  </div>
  <div className="w-[100px] h-[60px] bg-white flex items-center justify-center rounded-xs">
    <Image src="/Rectangle.png" width={50} height={50} className="object-contain" />
  </div>
  <div className="w-[100px] h-[60px] bg-white flex items-center justify-center rounded-xs">
    <Image src="/Rectangle.png" width={50} height={50} className="object-contain" />
  </div>
</div>

        </div>
      </div>

      {/* Right Side - 2x2 Grid */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2">
        {/* Grid Item 1 */}
        <div className="bg-white rounded-xs flex flex-col items-left gap-3 justify-center p-4 h-full">
          <div className="w-[50px] h-[50px] mb-3">
            <Image src="/award.png" alt="Award 1" width={50} height={50} className="object-contain" />
          </div>
          <h4 className="text-sm font-semibold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. 
          </p>
        </div>

        {/* Grid Item 2 */}
        <div className="bg-white rounded-xs flex flex-col items-left gap-3 justify-center px-4 h-full lg:mt-4">
          <div className="w-[50px] h-[50px] mb-3">
            <Image src="/award.png" alt="Award 1" width={50} height={50} className="object-contain" />
          </div>
          <h4 className="text-sm font-semibold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. 
          </p>
        </div>

        {/* Grid Item 3 */}
        <div className="bg-white rounded-xs flex flex-col items-left gap-3 justify-center p-4 h-full">
          <div className="w-[50px] h-[50px] mb-3">
            <Image src="/award.png" alt="Award 1" width={50} height={50} className="object-contain" />
          </div>
          <h4 className="text-sm font-semibold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-[#0A2540] mt-2 text-xs font-normal leading-relaxed w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. Neque
          </p>
        </div>

        {/* Grid Item 4 */}
        <div className="bg-white rounded-xs flex flex-col items-left gap-3 justify-center p-4 h-full lg:mt-4">
          <div className="w-[50px] h-[50px] mb-3">
            <Image src="/award.png" alt="Award 1" width={50} height={50} className="object-contain" />
          </div>
          <h4 className="text-sm font-semibold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-xs text-[#0A2540] leading-relaxed w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. Neque consequuntur necessitatibu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
