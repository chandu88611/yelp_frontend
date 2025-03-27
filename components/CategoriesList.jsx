import React, { useState } from 'react';

import { 
  FaSpa, FaUtensils, FaRunning, FaCar, FaGraduationCap, FaHome, FaCocktail, FaCalendarAlt, 
  FaMoneyCheckAlt, FaHeartbeat, FaHotel, FaNetworkWired, FaLaptopCode, FaBalanceScale, 
  FaPalette, FaMusic, FaPaw, FaBuilding, FaShoppingBag, FaBriefcase, FaTools, FaDumbbell 
} from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

const categories = [
  { name: 'Beauty & Spas', icon: <FaSpa />, link: '#' },
  { name: 'Restaurants', icon: <FaUtensils />, link: '#' },
  { name: 'Active Life', icon: <FaRunning />, link: '#' },
  { name: 'Automotive', icon: <FaCar />, link: '#' },
  { name: 'Education', icon: <FaGraduationCap />, link: '#' },
  { name: 'Home Services', icon: <FaHome />, link: '#' },
  { name: 'Nightlife', icon: <FaCocktail />, link: '#' },
  { name: 'Event Planning & Services', icon: <FaCalendarAlt />, link: '#' },
  { name: 'Financial Services', icon: <FaMoneyCheckAlt />, link: '#' },
  { name: 'Health & Medical', icon: <FaHeartbeat />, link: '#' },
  { name: 'Hotels & Travel', icon: <FaHotel />, link: '#' },
  { name: 'Internet Service Providers', icon: <FaNetworkWired />, link: '#' },
  { name: 'IT Services & Computer Repair', icon: <FaLaptopCode />, link: '#' },
  { name: 'Legal Services', icon: <FaBalanceScale />, link: '#' },
  { name: 'Local Flavor', icon: <FaPalette />, link: '#' },
  { name: 'Media & Entertainment', icon: <FaMusic />, link: '#' },
  { name: 'Pets', icon: <FaPaw />, link: '#' },
  { name: 'Real Estate', icon: <FaBuilding />, link: '#' },
  { name: 'Shopping', icon: <FaShoppingBag />, link: '#' },
  { name: 'Business Services', icon: <FaBriefcase />, link: '#' },
  { name: 'Construction', icon: <FaTools />, link: '#' },
  { name: 'Personal Trainers', icon: <FaDumbbell />, link: '#' }
];

const CategoriesList = () => {
  const [showMore, setShowMore] = useState(false);

  // Handle 'More' button click to toggle additional categories
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-black">Categories</h2>
        </div>

{/* Grid for first 8 categories with box shapes */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {categories.slice(0, 7).map((category, index) => (
    <div key={index} className="text-center">
      <a href={category.link} className="block">
        <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center text-gray-900 transition-all hover:shadow-lg active:bg-gray-200">
          {/* Icon centered both horizontally and vertically */}
          <div className="text-3xl mb-2 text-amber-500">
            {category.icon}
          </div>
          {/* Text centered below the icon */}
          <span className="font-semibold">{category.name}</span>
        </div>
      </a>
    </div>
  ))}

{/* "More" box acting like other boxes */}
<div
      onClick={handleShowMore}
      className={`cursor-pointer border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all hover:shadow-lg ${
        showMore ? "bg-gray-200" : ""
      }`}
    >
      {/* Icon */}
      <div className="text-3xl mb-2 text-gray-500">
        <FiMoreHorizontal />
      </div>
      {/* Text */}
      <span className="font-semibold text-black">More</span>
    </div>
</div>


        {/* If 'More' is clicked, show additional categories without box shape */}
        {showMore && (
  <div className="mt-8 grid grid-cols-4 gap-4">
    {categories.slice(8).map((category, index) => (
      <div key={index} className="text-left">
        <a
          href={category.link}
          className="block !text-gray-500 hover:!text-gray-700 hover:!underline"
        >
          <div className="flex items-center">
            {/* Icon on the left */}
            <div className="text-2xl text-amber-500 mr-3">
              {category.icon}
            </div>

            {/* Text aligned left */}
            <span className="font-semibold">{category.name}</span>
          </div>
        </a>
      </div>
    ))}
  </div>
)}
      </div>
    </div>

  );
};

export default CategoriesList;
