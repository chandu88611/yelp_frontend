"use client";
import { useState, useEffect } from "react";
import { Menu, Dropdown, Drawer, Button } from "antd";
import { FiMenu } from "react-icons/fi";
import { AiOutlineDown, AiOutlineLogin } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", submenu: ["Web Development", "Graphic Design", "SEO Optimization"] },
    { name: "About", submenu: ["Our Team", "Careers", "Contact Us"] },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">YelpClone</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <Dropdown
                key={index}
                overlay={
                  <Menu className="w-48">
                    {item.submenu.map((sub, i) => (
                      <Menu.Item key={i}>
                        <a href="#">{sub}</a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["hover"]}
              >
                <a className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 transition">
                  {item.name} <AiOutlineDown className="text-sm" />
                </a>
              </Dropdown>
            ) : (
              <a key={index} href={item.link} className="text-gray-700 hover:text-blue-500 transition">
                {item.name}
              </a>
            )
          )}
          <Button type="primary" className="ml-4 flex items-center gap-2">
            <AiOutlineLogin /> Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700" onClick={() => setOpen(true)}>
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
                    className="pl-4 mt-2 space-y-2 border-l border-gray-300 cursor-pointer "
                  >
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-600 block">{sub}</a>
                      </li>
                    ))}
                  </motion.ul>
                </details>
              ) : (
                <a href={item.link} className="block">{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;
