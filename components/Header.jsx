"use client";
import { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { FiChevronDown, FiMapPin, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";

import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1024);
      }
    };

    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      submenu: [
        { name: "Business", link: "/business?service=Web%20Development" },
        { name: "Business Listings", link: "/listing" },
      ],
    },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f336d] via-[#073d80] to-[#023fa0] text-white shadow-lg backdrop-blur-sm border-b border-white/10 transition-all duration-300">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-50">YelpClone</div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <div key={index} className="relative group">
                <button className="text-white font-medium flex items-center gap-1 hover:text-gray-300 transition duration-300">
                  {item.name}
                  <FiChevronDown className="text-white group-hover:text-gray-300 transition duration-300" />
                </button>
                <div className="absolute left-4 top-full hidden group-hover:flex flex-col bg-gray-200 text-black shadow-lg rounded-lg p-2 min-w-[200px] transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.link}
                      className="px-4 py-3 text-xs block border-b border-gray-300 last:border-none transition-all duration-300 ease-in-out 
                !text-gray-600 hover:!text-black no-underline"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.link}
                className="text-white font-medium hover:text-gray-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Search Input with Location Field (Hidden in Mobile) */}
        <div className="hidden lg:flex w-1/3">
          <div className="flex w-full bg-gray-100 rounded-md overflow-hidden">
            {/* Business Directory Search */}
            <div className="flex items-center w-[70%] border-r border-gray-200">
              <input
                type="text"
                placeholder="Find a business or service..."
                className="w-full px-3 py-2 text-gray-700 focus:outline-none border-none placeholder:text-sm"
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center w-[55%]">
              <input
                type="text"
                placeholder="Bangalore, Karnataka"
                className="w-full px-3 py-2 text-gray-700 focus:outline-none border-none placeholder:text-sm"
              />
              <TbCurrentLocation size={18} className="text-blue-500 mr-4" />
            </div>

            {/* Search Button */}
            <button className="px-3 bg-blue-600 text-white">
              <FiSearch size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-blue-600"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={
          <FiX
            size={24}
            className=" text-blue-600 absolute top-4 right-4 cursor-pointer"
          />
        }
        className="lg:hidden bg-black"
      >
        <div className="flex flex-col space-y-4 p-4">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <div key={index}>
                <button
                  className="font-medium text-blue-600 flex justify-between items-center w-full px-2 py-2 rounded-md hover:bg-gray-800 transition"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  {item.name}
                  <FiChevronDown
                    className={`transform transition-transform ${
                      expanded === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`${
                    expanded === index ? "flex" : "hidden"
                  } flex-col space-y-2 ml-4`}
                >
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.link}
                      className="block text-gray-300 hover:text-blue-400 px-4 py-2 transition border-b border-white/50 last:border-none"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.link}
                className=" text-blue-600 font-medium hover:text-blue-400 transition px-2 py-2"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
