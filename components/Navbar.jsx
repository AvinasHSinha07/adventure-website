import React from "react";
import { FaHome, FaArrowRight, FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  ">
      {/* Left side */}
     

      {/* Center Menu */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          <li>
            <a>
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <details>
              <summary>Destination</summary>
              <ul className="p-2">
                <li>
                  <a>Europe</a>
                </li>
                <li>
                  <a>Asia</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Activities</summary>
              <ul className="p-2">
                <li>
                  <a>Hiking</a>
                </li>
                <li>
                  <a>Surfing</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Support</summary>
              <ul className="p-2">
                <li>
                  <a>FAQs</a>
                </li>
                <li>
                  <a>Contact Support</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end flex space-x-4 mr-4">
        <button className="btn bg-[#0B6BC4] btn-outline text-white flex items-center">
          Manual Deposit <FaArrowRight className="ml-2" />
        </button>
        <button className=" flex items-center ">
        <FaAlignRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
