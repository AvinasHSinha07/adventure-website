"use client"
import React, { useState } from "react";
import { FaHome, FaArrowRight, FaAlignRight, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar bg-base-100 shadow-md relative z-50">
      <div className="container 2xl:max-w-full">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button - Visible on small screens */}
          

          {/* Center Menu - Hidden on mobile, visible on large screens */}
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-1 flex-nowrap">
              <li>
                <a className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md text-sm">
                  <FaHome className="mr-2" /> Home
                </a>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md text-sm cursor-pointer">
                    Destination
                  </summary>
                  <ul className="p-2 bg-base-100 shadow-lg rounded-md w-40 absolute">
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Europe
                      </a>
                    </li>
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Asia
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md text-sm cursor-pointer">
                    Activities
                  </summary>
                  <ul className="p-2 bg-base-100 shadow-lg rounded-md w-40 absolute">
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Hiking
                      </a>
                    </li>
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Surfing
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md text-sm cursor-pointer">
                    Support
                  </summary>
                  <ul className="p-2 bg-base-100 shadow-lg rounded-md w-40 absolute">
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md text-sm">
                  Blogs
                </a>
              </li>
              <li>
                <a className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side - Always visible */}
          <div className="navbar-end flex items-center space-x-2 sm:space-x-4">
            <button className="btn bg-[#0B6BC4] text-white hover:bg-[#094d8f] text-xs sm:text-sm px-2 sm:px-4 py-2 flex items-center">
              Manual Deposit <FaArrowRight className="ml-2" />
            </button>
            <div className="sm:block">
            <button
              onClick={toggleMobileMenu}
              className="btn btn-ghost p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaAlignRight className="w-6 h-6" />
              )}
            </button>
          </div>
          </div>
        </div>

        {/* Mobile Menu - Visible when toggled on small screens */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-base-100 shadow-md pb-4">
            <ul className="menu p-2">
              <li>
                <a className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm">
                  <FaHome className="mr-2" /> Home
                </a>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                    Destination
                  </summary>
                  <ul className="p-2 bg-base-200 rounded-md ml-4">
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Europe
                      </a>
                    </li>
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Asia
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                    Activities
                  </summary>
                  <ul className="p-2 bg-base-200 rounded-md ml-4">
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Hiking
                      </a>
                    </li>
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Surfing
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="dropdown">
                  <summary className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer">
                    Support
                  </summary>
                  <ul className="p-2 bg-base-200 rounded-md ml-4">
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a className="px-3 py-2 hover:bg-gray-100 text-sm">
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm">
                  Blogs
                </a>
              </li>
              <li>
                <a className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;