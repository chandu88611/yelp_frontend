"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaTwitter,
  FaRss,
  FaYoutube,
  FaLinkedinIn,
  FaGooglePlusG,
  FaRegHeart,
  FaStar,
  FaExclamationCircle,
  FaPhoneAlt,
  FaHeart,
  FaEye,
  FaClock,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaEnvelope,
  FaGlobe,
  FaPhone,
  FaUserGraduate,
  FaUsers,
  FaCalendarAlt,
  FaShareAlt,
  FaPrint,
  FaExclamationTriangle,
  FaPencilAlt,
  FaUser,
} from "react-icons/fa";
import { SlBriefcase, SlCalender } from "react-icons/sl";
import { CiHeart, CiShare2, CiUser } from "react-icons/ci";
import { LiaExclamationCircleSolid, LiaPrintSolid } from "react-icons/lia";
import { IoEyeOutline, IoLocationOutline } from "react-icons/io5";
import StarRating from "@/components/StarRatings";
import ProductSlider from "@/components/ProductSlider";
import Reviews from "@/components/Review";

export default function Business() {
  return (
    <>
      <div className="pattern-img">
        <div className="relative sptb-12 pattern2 bg-[#024588] bg-[url('/images/pattern.jpg')] bg-cover bg-blend-overlay">
          <div className="absolute inset-0 bg-[#04417f] opacity-80"></div>
          <div className="header-text1 mb-0">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
                  <div className="text-center text-white">
                    <h1 className="mb-2 text-white font-semibold">
                      Bizdire University
                    </h1>
                    <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4">
                      <StarRating rating={4.5} />
                      <a
                        className="text-white text-sm md:text-base hover:underline"
                        href="javascript:void(0)"
                      >
                        4 reviews
                      </a>
                    </div>
                    <ul className="flex flex-wrap justify-center sm:justify-center items-center gap-1 sm:gap-2 mb-4">
                      <li className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#001f3f]">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <FaFacebookF className="text-white text-sm sm:text-md" />
                        </a>
                      </li>
                      <li className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#001f3f]">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <FaTwitter className="text-white text-sm sm:text-md" />
                        </a>
                      </li>
                      <li className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#001f3f]">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <FaRss className="text-white text-sm sm:text-md" />
                        </a>
                      </li>
                      <li className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#001f3f]">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <FaYoutube className="text-white text-sm sm:text-md" />
                        </a>
                      </li>
                      <li className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#001f3f]">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <FaLinkedinIn className="text-white text-sm sm:text-md" />
                        </a>
                      </li>
                      <li className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#001f3f]">
                        <a
                          href="#"
                          className="flex items-center justify-center w-full h-full"
                        >
                          <FaGooglePlusG className="text-white text-sm sm:text-md" />
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2">
                      <a
                        href="#"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg !bg-sky-500 hover:!bg-sky-600 text-white text-xs sm:text-sm shadow-md transition w-fit"
                      >
                        <FaRegHeart className="text-white text-xs sm:text-sm" />
                        Add Wishlist
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="flex items-center gap-1 px-3 py-2 rounded-lg !bg-green-500 hover:!bg-green-600 text-white text-xs sm:text-sm shadow-md transition w-fit"
                      >
                        <FaStar className="text-white text-xs sm:text-sm" />
                        Write Review
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="flex items-center gap-1 px-3 py-2 rounded-lg !bg-red-500 hover:!bg-red-600 text-white text-xs sm:text-sm shadow-md transition w-fit"
                      >
                        <FaExclamationCircle className="text-white text-xs sm:text-sm" />
                        Report Abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details-absolute">
            <div className="container flex flex-col sm:flex-row items-center justify-between text-white text-xs sm:text-sm">
              <a
                href="javascript:void(0)"
                className="flex items-center gap-2 text-white"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#283653]">
                  <IoLocationOutline className="text-white text-sm" />
                </span>
                Mp-214, New York, NY 10012, US-52014
              </a>
              <a
                href="javascript:void(0)"
                className="flex items-center gap-2 mt-2 sm:mt-0 text-white"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#3b4c70]">
                  <FaPhoneAlt className="text-white text-sm" />
                </span>
                +154 256-635-654
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg mx-auto mt-2">
        <div className="container mx-auto">
          <div className="page-header">
            <h4 className="text-lg font-semibold text-gray-800">Business</h4>
            <nav className="mt-2">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <a href="javascript:void(0)" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>/</li>
                <li className="text-blue-500 font-medium">Business</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              {/*Business Overview*/}
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-5">
                {/* Ribbon (Perfect Cross Alignment) */}
                <div className="absolute top-0 right-0 overflow-hidden w-24 h-24">
                  <div className="absolute top-2 right-[-36px] w-48 bg-red-600 text-white text-xs font-semibold text-center px-10 py-1 rotate-45 shadow-md">
                    Featured
                  </div>
                </div>
                {/* Card Body */}
                <div className="card-body">
                  <div className="item-det mb-4">
                    <a href="javascript:void(0)" className="text-dark">
                      <h3>Bizdire University</h3>
                    </a>
                    <div className="d-md-flex mt-2">
                      <ul className="d-md-flex mb-0 flex-wrap text-gray-600 text-sm">
                        <li className="me-5 flex items-center gap-1">
                          <SlBriefcase className="text-gray-500" />
                          Education
                        </li>
                        <li className="me-5 flex items-center gap-1">
                          <IoLocationOutline className="text-gray-500" />
                          USA
                        </li>
                        <li className="me-5 flex items-center gap-1">
                          <SlCalender className="text-gray-500" />5 hours ago
                        </li>
                        <li className="me-5 flex items-center gap-1">
                          <IoEyeOutline className="text-gray-500" />
                          765
                        </li>
                        {/* Rating & Likes (Same Alignment) */}
                        <li className="me-5 flex items-center gap-1">
                          <StarRating rating={4.5} /> 4.0
                        </li>
                      </ul>

                      <div className="d-flex flex items-center gap-1">
                        <div className="me-2">
                          <FaHeart className="text-red-600" />
                        </div>
                        135
                      </div>
                    </div>
                  </div>
                  <ProductSlider />
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4">
                {/* Card Header */}
                <div className="border-b border-gray-200 px-6 py-4 bg-white">
                  <h3 className="text-lg font-semibold text-dark-grey">
                    Overview
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 text-gray-700">
                  {/* Description */}
                  <p className="text-black">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atcorrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga.
                  </p>
                  <p className="mt-4 text-black">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will.
                  </p>

                  {/* Business Details Section */}

                  <h4 className="text-lg font-semibold mt-6 mb-4 text-black">
                    Business Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 border-b border-gray-200 pb-4">
                    {/* Company Name */}
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <FaBuilding className="text-gray-500 text-lg" />
                      </div>
                      <span className="text-black">Bizdire Corporation</span>
                    </div>

                    {/* Industry */}
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <FaUserGraduate className="text-gray-500 text-lg" />
                      </div>

                      <span className="text-black">Education & Consulting</span>
                    </div>

                    {/* Established Year */}
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <FaCalendarAlt className="text-gray-500 text-lg" />
                      </div>

                      <span className="text-black">Established: 2012</span>
                    </div>

                    {/* Employee Count */}
                    <div className="flex items-center space-x-3 ">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <FaUsers className="text-gray-500 text-lg" />
                      </div>

                      <span className="text-black">Employees: 500+</span>
                    </div>
                  </div>

                  {/* Contact Info Section */}
                  <h4 className="text-lg font-semibold mt-6 mb-4 text-black">
                    Contact Info
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 border-b border-gray-200 pb-4">
                    {/* Address */}
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <IoLocationOutline className="text-gray-500 text-lg" />
                      </div>
                      <a
                        href="#"
                        className="text-black hover:text-blue-600 transition duration-200"
                      >
                        Mp-214, New York, NY 10012, US-52014
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <FaEnvelope className="text-gray-500 text-lg" />
                      </div>
                      <a
                        href="mailto:spruko123@gmail.com"
                        className="text-black hover:text-blue-600 transition duration-200"
                      >
                        spruko123@gmail.com
                      </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <FaPhoneAlt className="text-gray-500 text-lg" />
                      </div>
                      <a
                        href="tel:+123456789"
                        className="text-black hover:text-blue-600 transition duration-200"
                      >
                        +1 234 567 890
                      </a>
                    </div>

                    {/* Website */}
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
                        <FaGlobe className="text-gray-500 text-lg" />
                      </div>
                      <a
                        href="https://www.bizdire.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-600 transition duration-200"
                      >
                        www.bizdire.com
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mt-6 mb-4 text-black">
                    More Business Info
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300">
                      <tbody>
                        <tr className="border-b">
                          <td className="font-medium py-2 px-4 bg-gray-100">
                            Established Year
                          </td>
                          <td className="py-2 px-4">1981</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 px-4 bg-gray-100">
                            Services
                          </td>
                          <td className="py-2 px-4">Education, Courses</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 px-4 bg-gray-100">
                            Payment Methods
                          </td>
                          <td className="py-2 px-4">
                            VISA, Mastercard, Discover, American Express
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 px-4 bg-gray-100">
                            Fax
                          </td>
                          <td className="py-2 px-4">+25 485-9865-85</td>
                        </tr>
                        <tr className="border-b">
                          <td className="font-medium py-2 px-4 bg-gray-100">
                            Toll-Free
                          </td>
                          <td className="py-2 px-4">+25 485-9865-85</td>
                        </tr>
                        <tr>
                          <td className="font-medium py-2 px-4 bg-gray-100">
                            Certification
                          </td>
                          <td className="py-2 px-4">ISO Certified</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Business ID Section */}
                    <div className="mt-6 p-3 border-b border-gray-300">
                      <div className="flex flex-wrap justify-between gap-2 text-sm text-gray-700">
                        <span>
                          Business ID: <strong>#8256358</strong>
                        </span>
                        <span className="flex flex-wrap items-center gap-1">
                          Posted By{" "}
                          <strong className="text-black ml-1">
                            Individual
                          </strong>{" "}
                          / 21st Dec 2019
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-300 bg-white px-2 py-4 mt-6">
                    <div className="flex flex-wrap justify-start gap-2">
                      {/* Share Link */}
                      <a
                        href="#"
                        className="flex items-center space-x-1 !bg-[#42aedf] border !border-[#42aedf] text-white hover:!bg-[#0284c7] px-3 py-2 rounded-md shadow transition"
                      >
                        <CiShare2 className="text-lg" />
                        <span>Share Ad</span>
                      </a>

                      {/* Like Link */}
                      <a
                        href="#"
                        className="flex items-center space-x-1 !bg-[#ed477e] border !border-[#ed477e] text-white hover:!bg-[#c2185b] px-3 py-2 rounded-md shadow transition"
                      >
                        <CiHeart className="text-lg" />
                        <span>678</span>
                      </a>

                      {/* Print Link */}
                      <a
                        href="#"
                        className="flex items-center space-x-1 !bg-[#202588] border !border-[#202588] text-white hover:!bg-[#262549] px-3 py-2 rounded-md shadow transition"
                      >
                        <LiaPrintSolid className="text-lg" />
                        <span>Print</span>
                      </a>

                      {/* Report Link */}
                      <a
                        href="#"
                        className="flex items-center space-x-1 !bg-[#ef4444] border !border-[#ef4444] text-white hover:!bg-[#dc2626] px-3 py-2 rounded-md shadow transition"
                        data-bs-toggle="modal"
                        data-bs-target="#report"
                      >
                        <LiaExclamationCircleSolid className="text-lg" />
                        <span>Report Abuse</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-5xl mx-auto p-4">
                <h3 className="mt-5 mb-4 text-xl font-semibold">
                  Related Posts
                </h3>
                <div className="flex gap-4 overflow-x-auto p-1">
                  {/* Card 1 */}
                  <div className="relative w-[350px] shrink-0 bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Ribbon */}
                    <div className="absolute top-14 -left-4 bg-gray-600 text-white text-xs px-4 py-1 z-10 transform -rotate-45 origin-top-left">
                      Featured
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-58 overflow-hidden">
                      <img
                        src="/images/products/b3.png"
                        alt="img"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:brightness-50"
                      />
                      <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-md z-10">
                        Beauty & Spa
                      </div>
                    </div>
                    {/* Icons */}
                    <div className="absolute top-2 right-2 flex gap-2 z-10">
                      <button className="bg-black  bg-opacity-70 rounded-full p-1 shadow">
                        <CiHeart className="text-white" />
                      </button>
                      <button className="bg-black  bg-opacity-70 rounded-full p-1 shadow">
                        <FaPencilAlt className="text-white" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 mb-2">
                      <div className="text-gray-500 text-sm">
                        <StarRating />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 mt-2  flex items-center">
                        Goozer Beauty & Spa
                        <span className="inline-flex items-center justify-center ml-2 w-4 h-4 bg-green-500 text-white text-[10px] rounded-full">
                          ✓
                        </span>
                      </h4>
                      {/* Row and Column Alignment */}
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <IoLocationOutline className="mr-2" />
                          New York
                        </div>
                        <div className="flex items-center">
                          <SlCalender className="mr-2" />2 hours ago
                        </div>
                        <div className="flex items-center">
                          <CiUser className="mr-2" />
                          Clara Pixley
                        </div>
                        <div className="flex items-center">
                          <FaPhoneAlt className="mr-2" />
                          256-654-6859{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="relative w-[360px] shrink-0 bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Ribbon */}
                    <div className="absolute top-16 -left-4 bg-red-600 text-white text-xs px-4 py-1 z-10 transform -rotate-45 origin-top-left">
                      Negotiable
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-58 overflow-hidden">
                      <img
                        src="/images/products/ed2.jpg"
                        alt="img"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:brightness-50"
                      />
                      <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded-md z-10">
                        Education
                      </div>
                    </div>

                    {/* Icons */}
                    <div className="absolute top-2 right-2 flex gap-2 z-10">
                      <button className="bg-black  bg-opacity-70 rounded-full p-1 shadow">
                        <CiHeart className="text-white" />
                      </button>
                      <button className="bg-black  bg-opacity-70 rounded-full p-1 shadow">
                        <FaPencilAlt className="text-white" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="text-gray-500 text-sm">
                        <StarRating />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 mt-2 flex items-center">
                        Pg University
                        <span className="inline-flex items-center justify-center ml-2 w-4 h-4 bg-green-500 text-white text-[10px] rounded-full">
                          ✓
                        </span>
                      </h4>
                      {/* Row and Column Alignment */}
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <IoLocationOutline className="mr-2" />
                          Los Angeles
                        </div>
                        <div className="flex items-center">
                          <SlCalender className="mr-2" />5 hours ago
                        </div>
                        <div className="flex items-center">
                          <CiUser className="mr-2" />
                          Sally Peake
                        </div>
                        <div className="flex items-center">
                          <FaPhoneAlt className="mr-2" />
                          567 987 608
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Reviews />
              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                {/* Header */}
                <div className="border-b pb-4 mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Add a Review
                  </h3>
                </div>

                {/* Body */}
                <div>
                  <p className="text-gray-600 mb-2">
                    Add Your Rating for the Business
                  </p>
                  <StarRating />
                  <h4 className="text-lg font-medium text-gray-700 mb-2 mt-4">
                    Review
                  </h4>

                  {/* Form */}
                  <div className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        id="name1"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition placeholder-gray-500"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition placeholder-gray-500"
                      />
                    </div>

                    {/* Textarea */}
                    <div>
                      <textarea
                        name="example-textarea-input"
                        rows={6}
                        placeholder="Write Review"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition placeholder-gray-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                    >
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
