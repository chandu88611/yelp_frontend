import { Input, Button } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
  FaPinterestP,
} from "react-icons/fa";

import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiDiscover,
  SiPaypal,
} from "react-icons/si";
import { FaFax } from "react-icons/fa"; // Importing fax icon

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {/* About Section */}
        <div>
          <h3
            className="text-white font-semibold mb-4"
            style={{ fontSize: "20px" }}
          >
            Yelp Clone
          </h3>
          <p>
            Discover local businesses, restaurants, spas, gyms, and more with
            Yelp Clone.
          </p>
        </div>

        {/* Categories - Auto flow, responsive and no overlap */}
        <div>
          <h3
            className="text-white font-semibold mb-4"
            style={{ fontSize: "20px" }}
          >
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Spa",
              "Restaurants",
              "Salons",
              "Clinics",
              "Gyms",
              "Shops",
              "Hotels",
              "Hospitals",
            ].map((category) => (
              <button
                key={category}
                className="inline-flex items-center justify-center border border-gray-600 rounded-full px-3 py-1 text-xs truncate hover:bg-blue-600 hover:text-white transition"
                style={{ borderRadius: "12px", whiteSpace: "nowrap" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Listings - Single line links, flexible width */}
        <div className="min-w-0 w-full">
          <h3
            className="text-white font-semibold mb-4"
            style={{ fontSize: "20px" }}
          >
            {" "}
            Popular Listings
          </h3>
          <ul className="space-y-2">
            {[
              "Luxury Spa & Wellness",
              "Top Restaurants",
              "Premium Salons",
              "24/7 Medical Clinics",
              "Fitness & Yoga Centers",
              "Pet Care Services",
            ].map((listing) => (
              <li
                key={listing}
                className="flex items-center whitespace-nowrap overflow-hidden overflow-ellipsis"
                style={{ maxWidth: "100%" }} // This helps prevent overflow issues.
              >
                <span className="text-blue-500 font-bold">»</span>
                <span className="ml-2">{listing}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3
            className="text-white font-semibold mb-4"
            style={{ fontSize: "20px" }}
          >
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <EnvironmentOutlined className="mr-2" /> 456 7th Avenue, New York,
              NY 10018, USA
            </li>
            <li className="flex items-center">
              <PhoneOutlined className="mr-2" /> +1 (212) 555-7890
            </li>
            <li className="flex items-center">
              <MailOutlined className="mr-2" /> support@yelpclone.com
            </li>
            {/* Fax with icon */}
            <li className="flex items-center">
              <FaFax className="mr-2" /> +1 (212) 555-7891
            </li>
          </ul>
        </div>
        {/* Subscribe & Payment Section */}
        <div className="w-full max-w-lg">
          {" "}
          {/* Set a maximum width for the section */}
          <h3
            className="text-white font-semibold mb-4"
            style={{ fontSize: "20px" }}
          >
            Subscribe
          </h3>
          <div className="flex items-center mb-4">
            <Input
              placeholder="Email"
              className="flex-grow rounded-l-lg text-gray-800 px-3 py-2 text-sm"
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height: "40px",
              }}
            />
            <Button
              type="primary"
              className="rounded-r-lg text-xs"
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                height: "40px",
                width: "70px", // Adjusted button width
              }}
            >
              Subscribe
            </Button>
          </div>
          <h4 className="text-white text-md font-semibold mb-3">We Accept</h4>
          <div className="flex space-x-3 text-white">
            <SiVisa size={28} />
            <SiMastercard size={28} />
            <SiAmericanexpress size={28} />
            <SiDiscover size={28} />
            <SiPaypal size={28} />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-700 pt-6 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-grey-400 !important text-sm">
            {[
              "How it works",
              "About Us",
              "Pricing",
              "Listing Categories",
              "Privacy Policy",
              "Terms & Conditions",
              "Blog",
              "Contact Us",
              "Premium Ads",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 !important hover:text-blue-500 !important"
              >
                <span className="underline underline-offset-4 decoration-white">
                  {link}
                </span>
              </a>
            ))}
          </div>

          <div className="text-center text-grey mt-5">
            © {new Date().getFullYear()} Yelp Clone. All Rights Reserved.
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTelegramPlane size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
