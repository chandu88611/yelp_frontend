"use client";
import { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgb(0,0,0,.7)] shadow-md">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">YelpClone</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <div key={index} className="relative group">
          <button className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 transition duration-300">
          {item.name}
          <FiChevronDown className="text--500 group-hover:text-blue-600 transition duration-300" />
        </button>               
                    <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-black shadow-xl rounded-lg p-3 min-w-[220px] transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
              {item.submenu.map((sub, subIndex) => (
                <Link
                  key={subIndex}
                  href={sub.link}
                  className="px-4 py-2 hover:bg-gray-800 text-blue-600 block border-b border-white/30 last:border-none"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
              </div>
            ) : (
              <Link key={index} href={item.link} className="text-gray-700 font-medium">
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Search Input (Hidden in Mobile) */}
        <div className="hidden lg:flex w-1/3">
          <div className="flex w-full bg-gray-100 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 text-gray-700 focus:outline-none"
            />
            <button className="px-3 bg-blue-600 text-white">
              <FiSearch size={18} />
            </button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-blue-600" onClick={() => setOpen(true)}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        closeIcon={<FiX size={24} className=" text-blue-600 absolute top-4 right-4 cursor-pointer" />}
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
                    className={`transform transition-transform ${expanded === index ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                <div className={`${expanded === index ? "flex" : "hidden"} flex-col space-y-2 ml-4`}>
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
              <Link key={index} href={item.link} className=" text-blue-600 font-medium hover:text-blue-400 transition px-2 py-2">
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
