import React, { useState } from "react";

import {
  FaSpa,
  FaUtensils,
  FaRunning,
  FaCar,
  FaGraduationCap,
  FaHome,
  FaCocktail,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaHeartbeat,
  FaHotel,
  FaNetworkWired,
  FaLaptopCode,
  FaBalanceScale,
  FaPalette,
  FaMusic,
  FaPaw,
  FaBuilding,
  FaShoppingBag,
  FaBriefcase,
  FaTools,
  FaDumbbell,
  FaCameraRetro,
  FaTruck,
} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

const categories = [
  { name: "Beauty & Spas", icon: <FaSpa />, link: "#" },
  { name: "Restaurants", icon: <FaUtensils />, link: "#" },
  { name: "Active Life", icon: <FaRunning />, link: "#" },
  { name: "Automotive", icon: <FaCar />, link: "#" },
  { name: "Education", icon: <FaGraduationCap />, link: "#" },
  { name: "Home Services", icon: <FaHome />, link: "#" },
  { name: "Nightlife", icon: <FaCocktail />, link: "#" },
  { name: "Event Planning & Services", icon: <FaCalendarAlt />, link: "#" },
  { name: "Financial Services", icon: <FaMoneyCheckAlt />, link: "#" },
  { name: "Health & Medical", icon: <FaHeartbeat />, link: "#" },
  { name: "Hotels & Travel", icon: <FaHotel />, link: "#" },
  { name: "Internet Service Providers", icon: <FaNetworkWired />, link: "#" },
  { name: "IT Services & Computer Repair", icon: <FaLaptopCode />, link: "#" },
  { name: "Legal Services", icon: <FaBalanceScale />, link: "#" },
  { name: "Local Flavor", icon: <FaPalette />, link: "#" },
  { name: "Media & Entertainment", icon: <FaMusic />, link: "#" },
  { name: "Pets", icon: <FaPaw />, link: "#" },
  { name: "Real Estate", icon: <FaBuilding />, link: "#" },
  { name: "Shopping", icon: <FaShoppingBag />, link: "#" },
  { name: "Business Services", icon: <FaBriefcase />, link: "#" },
  { name: "Construction", icon: <FaTools />, link: "#" },
  { name: "Personal Trainers", icon: <FaDumbbell />, link: "#" },
  { name: "Photography", icon: <FaCameraRetro />, link: "#" },
  { name: "Courier & Delivery", icon: <FaTruck />, link: "#" },
];

import { motion, AnimatePresence } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CategoriesList = () => {
  const [showMore, setShowMore] = useState(false);

  // Handle 'More' button click to toggle additional categories
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-6xl p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-black">Categories</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.slice(0, 7).map((category, index) => (
            <div key={index} className="text-center w-full min-w-0">
              <a href={category.link} className="block h-full">
                <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center text-gray-900 transition-all hover:shadow-lg active:bg-gray-200 w-full h-full min-h-[140px]">
                  {/* Icon centered both horizontally and vertically */}
                  <div className="text-3xl mb-2 text-amber-500">
                    {category.icon}
                  </div>
                  {/* Text centered below the icon */}
                  <span className="font-semibold break-words">
                    {category.name}
                  </span>
                </div>
              </a>
            </div>
          ))}
          {/* "More" Box */}
          <div onClick={handleShowMore} className="text-center w-full min-w-0">
            <div
              className={`cursor-pointer border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all hover:shadow-lg ${
                showMore ? "bg-gray-200" : ""
              } w-full h-full min-h-[140px]`}
            >
              <div className="text-3xl mb-2 text-gray-500">
                <FiMoreHorizontal />
              </div>
              <span className="font-semibold text-black break-words">More</span>
            </div>
          </div>
        </div>

        {/* If 'More' is clicked, show additional categories without box shape */}
        {showMore && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 md:gap-y-16 gap-y-4">
            {categories.slice(8).map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.3, // 👈 cascade delay here!
                }}
                className="flex flex-col space-y-2 text-left"
              >
                <a
                  href={category.link}
                  className="block !text-gray-500 hover:!text-gray-700 hover:!underline"
                >
                  <div className="flex items-center">
                    <div className="text-2xl text-amber-500 mr-3">
                      {category.icon}
                    </div>
                    <span className="font-semibold break-words">
                      {category.name}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesList;
