"use client";
import { useState, useEffect } from "react";
import { Menu, Dropdown, Drawer, Button } from "antd";
import { FiMenu, FiSearch } from "react-icons/fi";
import {
  AiOutlineDown,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlinePlus,
} from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        {
          name: "Web Development",
          link: "/business?service=Web%20Development",
        },
        { name: "Graphic Design", link: "/business?service=Graphic%20Design" },
        {
          name: "SEO Optimization",
          link: "/business?service=SEO%20Optimization",
        },
      ],
    },
    { name: "About", submenu: ["Our Team", "Careers", "Contact Us"] },
    { name: "Blog", link: "/blog" },
  ];

  const renderMenuItems = () => (
    <ul className="flex flex-col lg:flex-row lg:space-x-6">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative transition hover:bg-gray-200 p-2 rounded-md"
        >
          {item.submenu ? (
            <Dropdown
              overlay={
                <Menu className="bg-white shadow-lg rounded-md">
                  {item.submenu.map((sub, i) => (
                    <Menu.Item key={i} className="hover:bg-gray-200">
                      <Link href={sub.link || "#"}>{sub.name || sub}</Link>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <a className="cursor-pointer flex items-center space-x-1">
                <span>{item.name}</span>
                <AiOutlineDown className="text-sm" />
              </a>
            </Dropdown>
          ) : (
            <Link href={item.link}>{item.name}</Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">YelpClone</div>

        {/* Desktop Search Field */}
        {!isMobile && (
          <div className="w-full max-w-3xl mx-6">
            <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md border border-gray-300">
              <input
                type="text"
                placeholder="Keywords"
                className="w-1/2 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-1/4 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-1/3 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Category</option>
                <option>Hotels</option>
                <option>Restaurant</option>
                <option>Events</option>
                <option>Cinema</option>
                <option>Gym</option>
                <option>Shop & Store</option>
                <option>Tours & Travels</option>
                <option>Cafe</option>
                <option>Mobile Store</option>
                <option>College</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 transition">
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button onClick={() => setOpen(true)} className="text-2xl">
            <FiMenu />
          </button>
        )}

        {/* Desktop Login/Register and Add Listing */}
        <div className="hidden lg:flex items-center space-x-6">
          <Button
            type="default"
            className="border border-gray-400 text-white bg-transparent px-4 py-2 flex items-center gap-2 rounded-md transition hover:bg-gray-100 hover:text-gray-800"
          >
            <AiOutlineLogin /> Login
          </Button>
          <Button
            type="default"
            className="border border-gray-400 text-white bg-transparent px-4 py-2 flex items-center gap-2 rounded-md transition hover:bg-gray-100 hover:text-gray-800"
          >
            <AiOutlineUserAdd /> SignUp
          </Button>
          <Button
            type="default"
            className="border border-gray-400 text-white bg-transparent px-4 py-2 flex items-center gap-2 rounded-md transition hover:bg-gray-100 hover:text-gray-800"
          >
            <AiOutlinePlus /> Listing
          </Button>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      {!isMobile && (
        <div className="w-full bg-transparent text-center py-2">
          {renderMenuItems()}
        </div>
      )}

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={() => setOpen(false)}
        visible={open}
      >
        <div className="mb-4">
          {/* Mobile Search Field */}
          <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md border border-gray-300 mb-4">
            <input
              type="text"
              placeholder="Keywords"
              className="w-1/2 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-1/4 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-1/3 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Category</option>
              <option>Hotels</option>
              <option>Restaurant</option>
              <option>Events</option>
              <option>Cinema</option>
              <option>Gym</option>
              <option>Shop & Store</option>
              <option>Tours & Travels</option>
              <option>Cafe</option>
              <option>Mobile Store</option>
              <option>College</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 transition">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div>
          {renderMenuItems()}
          <div className="mt-4 flex flex-col space-y-4">
            <Button
              type="default"
              className="border border-gray-400 text-white bg-transparent px-4 py-2 flex items-center gap-2 rounded-md transition hover:bg-gray-100 hover:text-gray-800"
            >
              <AiOutlineLogin /> Login
            </Button>
            <Button
              type="default"
              className="border border-gray-400 text-white bg-transparent px-4 py-2 flex items-center gap-2 rounded-md transition hover:bg-gray-100 hover:text-gray-800"
            >
              <AiOutlineUserAdd /> SignUp
            </Button>
            <Button
              type="default"
              className="border border-gray-400 text-white bg-transparent px-4 py-2 flex items-center gap-2 rounded-md transition hover:bg-gray-100 hover:text-gray-800"
            >
              <AiOutlinePlus /> Listing
            </Button>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
