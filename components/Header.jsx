"use client";
import { useState, useEffect } from "react";
import { Menu, Dropdown, Drawer, Button } from "antd";
import { FiMenu } from "react-icons/fi";
import {
  AiOutlineDown,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlinePlus,
} from "react-icons/ai";
import { motion } from "framer-motion";
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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">YelpClone</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <Dropdown
                key={index}
                overlay={
                  <Menu>
                    {item.submenu.map((sub, i) => (
                      <Menu.Item key={i}>
                        {/* Use Next.js Link for correct navigation */}
                        <Link href={sub.link}>{sub.name}</Link>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["hover"]}
              >
                <a className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 cursor-pointer">
                  <span>{item.name}</span>
                  <AiOutlineDown className="text-sm" />
                </a>
              </Dropdown>
            ) : (
              <Link
                key={index}
                href={item.link}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                {item.name}
              </Link>
            )
          )}
          <div className="flex items-center ml-10">
            {/* Login Button */}
            <Button
              type="primary"
              size="middle"
              className="flex items-center gap-2"
            >
              <AiOutlineLogin />
              <a href="/login">Login</a>
            </Button>
            {/* Proper gap between Login and Register */}
            <div className="w-2"></div>
            {/* Register Button */}
            <Button
              type="default"
              size="middle"
              className="flex items-center gap-2"
            >
              <AiOutlineUserAdd />
              <a href="/register">Register</a>
            </Button>

            {/* Big gap before Add Listing */}
            <div className="ml-8">
              <Button
                type="default"
                size="middle"
                className="flex items-center gap-2 font-semibold text-blue-600"
              >
                <AiOutlinePlus />
                <a href="/addListing">Listing</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setOpen(true)}
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={() => setOpen(false)}
        open={open}
      >
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <span>{item.name}</span>
                    <AiOutlineDown className="transition group-open:rotate-180" />
                  </summary>
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="pl-4 mt-2 space-y-2 border-l border-gray-300"
                  >
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-600 block">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                </details>
              ) : (
                <a href={item.link} className="block">
                  {item.name}
                </a>
              )}
            </li>
          ))}

          {/* Auth Buttons (Login first, Register second) */}
          <li>
            <Button
              type="primary"
              block
              className="flex items-center justify-center gap-2"
            >
              <AiOutlineLogin />
              <a href="/login">Login</a>
            </Button>
          </li>

          <li>
            <Button
              block
              className="flex items-center justify-center gap-2 mt-2"
            >
              <AiOutlineUserAdd />
              <a href="/register">Register</a>
            </Button>
          </li>

          {/* Add Listing Button with space below */}
          <li className="mt-4">
            <Button
              block
              className="flex items-center justify-center gap-2 font-semibold text-blue-600"
            >
              <AiOutlinePlus />
              <a href="/add-listing">Add Listing</a>
            </Button>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;
