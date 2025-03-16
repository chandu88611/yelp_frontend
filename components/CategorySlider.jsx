"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGraduationCap, FaLaptopCode, FaHeartbeat, FaWallet, FaBuilding, FaUtensils } from "react-icons/fa";

const categories = [
  { name: "Education", icon: <FaGraduationCap />, link: "/business-list" },
  { name: "Technology", icon: <FaLaptopCode />, link: "/business-list" },
  { name: "Health", icon: <FaHeartbeat />, link: "/business-list" },
  { name: "Finance", icon: <FaWallet />, link: "/business-list" },
  { name: "Real Estate", icon: <FaBuilding />, link: "/business-list" },
  { name: "Food & Drink", icon: <FaUtensils />, link: "/business-list" },
];

const CategoriesSlider = () => {
  return (
    <section className="categories py-10 bg-gray-100">
      <div className="container mx-auto relative">
    
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
        //   navigation={{
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={25}
          slidesPerView="auto"
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="w-[300px]">
              <div className="item">
                <div className="card ">
                  <div className="card-body">
                    <div className="card-item text-center flex items-center justify-center">
                      <a href={category.link}>
                        <div className="cat-img category-svg flex justify-center items-center text-blue-500 text-4xl">
                          {category.icon}
                        </div>
                        <h5 className="mb-0 mt-3">{category.name}</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesSlider;
