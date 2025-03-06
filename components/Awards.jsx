"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Awards = () => {
  return (
    <div className="px-10 py-10 bg-[#F4F4F4] flex flex-col md:flex-row gap-8">
      {/* Left Side - Awards Content */}
      <div className="md:w-1/2">
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#E67002] mb-1">Checkout</h3>
          <h3 className="text-xl font-bold text-blue-950 mb-5">Spectural Destination</h3>
          <p className="text-[#0A2540] mt-2 text-sm mb-6 w-11/12 leading-relaxed">
          Gravida placerat faucibus hac natoque at ullamcorper. Ac proin ultrices risus tellus rhoncus tellus risus. Vel non proin lectus a; nulla per blandit. Integer habitant vitae enim at aliquet. Himenaeos class iaculis lectus nostra interdum feugiat id elementum. Scelerisque aenean egestas porta sapien, nullam laoreet eleifend. Sociosqu in fames fames in efficitur ornare morbi, nostra eleifend.
          </p>
          <p className="text-[#0A2540] mt-2 text-sm mb-6 w-11/12 leading-relaxed">
          Amet arcu laoreet a himenaeos blandit senectus platea. Hendrerit taciti scelerisque nunc metus mollis. Porttitor consequat justo enim litora blandit. Convallis elementum phasellus dignissim suscipit phasellus massa. Duis sociosqu magna eros elementum fermentum ad. Posuere curabitur accumsan etiam torquent litora; dui turpis senectus. Fermentum habitasse curae vestibulum, consequat ultrices pharetra efficitur ex dui. Nostra volutpat diam lacinia per cubilia feugiat. Vitae condimentum arcu est sed convallis ad scelerisque.
          </p>
          <p className="text-[#0A2540] mt-2 text-sm mb-6 w-11/12 leading-relaxed">
          Mollis potenti convallis et volutpat; ullamcorper metus dictum inceptos. Inceptos feugiat turpis est elit per nam. Sit quam facilisi penatibus diam feugiat placerat neque. Vivamus nec lacinia luctus nam sed etiam. Amet ex arcu et fermentum eu id rhoncus. Pharetra dis ornare rhoncus, auctor nascetur habitasse. Sapien efficitur dapibus eget, mollis varius lacus cursus. Rhoncus primis suspendisse dictum varius cursus consequat fringilla. Senectus sit urna ad hendrerit posuere feugiat, fames turpis torquent.
          </p>
          <button className="flex items-center bg-[#0B6BC4] text-white px-6 py-2 mt-4 rounded-sm hover:bg-[#E67002] gap-2">
            <span className="font-bold text-sm">View More</span>
            <FontAwesomeIcon className="w-4 h-4" icon={faArrowRight} />
          </button>
          <h3 className="text-xl mt-4">We are affiliated with</h3>
          <div className="w-[50px] h-[50px] flex gap-8 mt-4">
          <Image
            src="/Rectangle.png"
            
            width={50}
            height={50}
            className="object-cover rounded-md"
          />
          <Image
            src="/Rectangle.png"
            
            width={50}
            height={50}
            className="object-cover rounded-md"
          />
          <Image
            src="/Rectangle.png"
            
            width={50}
            height={50}
            className="object-cover rounded-md"
          />
          <Image
            src="/Rectangle.png"
            
            width={50}
            height={50}
            className="object-cover rounded-md"
          />
          <Image
            src="/Rectangle.png"
            
            width={50}
            height={50}
            className="object-cover rounded-md"
          />
        </div>
        </div>
      </div>

      {/* Right Side - 2x2 Grid */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6">
        {/* Grid Item 1 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-left gap-3 justify-center p-4 h-[320px] ">
          <div className="w-[50px] h-[50px] mb-3">
            <Image
              src="/award.png"
              alt="Award 1"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <h4 className="text-sm font-bold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-xs text-[#0A2540] leading-relaxed w-11/12">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. Neque consequuntur necessitatibus, sint optio tempora error suscipit ut in pariatur? Rerum, velit!
          </p>
        </div>

        {/* Grid Item 2 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-left gap-3 justify-center p-4 h-[320px] ">
          <div className="w-[50px] h-[50px] mb-3">
            <Image
              src="/award.png"
              alt="Award 1"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <h4 className="text-sm font-bold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-xs text-[#0A2540] leading-relaxed w-11/12">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. Neque consequuntur necessitatibus, sint optio tempora error suscipit ut in pariatur? Rerum, velit!
          </p>
        </div>

        {/* Grid Item 3 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-left gap-3 justify-center p-4 h-[320px] ">
          <div className="w-[50px] h-[50px] mb-3">
            <Image
              src="/award.png"
              alt="Award 1"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <h4 className="text-sm font-bold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-xs text-[#0A2540] leading-relaxed w-11/12">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. Neque consequuntur necessitatibus, sint optio tempora error suscipit ut in pariatur? Rerum, velit!
          </p>
        </div>
        {/* Grid Item 4 */}
        <div className="bg-white rounded-lg shadow-md flex flex-col items-left gap-3 justify-center p-4 h-[320px] ">
          <div className="w-[50px] h-[50px] mb-3">
            <Image
              src="/award.png"
              alt="Award 1"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <h4 className="text-sm font-bold text-[#0A2540] mb-2">Coastal Haven</h4>
          <p className="text-xs text-[#0A2540] leading-relaxed w-11/12">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit rem, hic quia consequuntur porro aperiam natus ducimus repellat a repellendus sunt quod tempora asperiores dolor tenetur. Neque consequuntur necessitatibus, sint optio tempora error suscipit ut in pariatur? Rerum, velit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;