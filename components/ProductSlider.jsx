import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
  "/images/products/ed1.jpg",
  "/images/products/ed2.jpg",
  "/images/products/ed3.jpg",
  "/images/products/ed4.jpg",
  "/images/products/ed5.jpg",
  "/images/products/ed6.jpg",
  "/images/products/ed7.jpg",
  "/images/products/ed8.jpg",
  "/images/products/ed9.jpg",
  "/images/products/ed10.jpg",
];

export default function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Price Tag */}
      <div className="absolute top-4 left-4 bg-[#001f3f] text-white px-4 py-2 text-sm font-semibold shadow-lg z-10 flex items-center rounded-md">
        <span>$539</span>
        <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#001f3f] ml-2" />
      </div>

     {/* Main Slider */}
<div className="relative group h-[450px]"> {/* Increased height */}
  <Swiper
    loop={true}
    navigation={{
      nextEl: ".main-next",
      prevEl: ".main-prev",
    }}
    thumbs={{ swiper: thumbsSwiper }}
    modules={[Navigation, Thumbs]}
    className="rounded-lg shadow-md h-full"
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={`Product ${index + 1}`}
          className="w-full h-[450px] object-cover rounded-lg" // Increased height
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Main Slider Navigation */}
  <button className="main-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full z-10">
    <FaChevronLeft size={24} />
  </button>
  <button className="main-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full z-10">
    <FaChevronRight size={24} />
  </button>
</div>

      {/* Thumbnail Slider */}
      <div className="relative mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={6}
          watchSlidesProgress
          modules={[Thumbs, Navigation]}
          navigation={{
            nextEl: ".thumb-next",
            prevEl: ".thumb-prev",
          }}
          className="rounded-md"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} onClick={() => thumbsSwiper?.slideTo(index)}>
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-20 object-cover rounded-md border-2 transition-all duration-300 cursor-pointer ${
                  activeIndex === index ? "border-blue-500 opacity-100" : "border-transparent opacity-50"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Navigation Arrows */}
        <button className="thumb-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-100 transition z-10">
          <FaChevronLeft size={16} />
        </button>
        <button className="thumb-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-100 transition z-10">
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
