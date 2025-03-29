"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaThumbsUp,
  FaChevronDown,
} from "react-icons/fa";
const activities = [
  {
    user: "John D.",
    time: "5 minutes ago",
    businessName: "Sunset Cafe",
    rating: 4.5,
    likes: 12,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 24,
    description:
      "Sunset Cafe is the perfect destination to relax and unwind while enjoying a fresh cup of coffee and an array of delicious snacks. With its prime location and a welcoming atmosphere, it attracts locals and tourists alike who appreciate quality beverages, freshly baked goods, and a scenic view of the setting sun. The interior is cozy with warm lighting, making it an ideal spot for meetings or personal downtime. The outdoor seating is perfect for summer evenings.",
  },
  {
    user: "Emma W.",
    time: "10 minutes ago",
    businessName: "Urban Fitness",
    rating: 3.5,
    likes: 8,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 18,
    description:
      "Urban Fitness is a state-of-the-art gym designed for those who take their health and fitness seriously. Featuring modern equipment, personal training services, and a wide variety of fitness classes including HIIT, yoga, and strength training, it caters to beginners and seasoned athletes alike. Members love the clean facilities, energetic atmosphere, and helpful staff. The gym also offers nutritional advice and wellness workshops to help clients meet their goals.",
  },
  {
    user: "Liam T.",
    time: "20 minutes ago",
    businessName: "GreenLeaf Spa",
    rating: 4,
    likes: 15,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 20,
    description:
      "GreenLeaf Spa provides a sanctuary for those seeking relaxation and rejuvenation. Their professional therapists offer a variety of treatments including massages, facials, and holistic therapies using organic products. The calming ambiance, soft music, and aromatic scents transport guests to a world of tranquility. Whether you're looking for a quick escape or a full spa day, GreenLeaf ensures each visitor leaves refreshed and revitalized after every visit.",
  },
  {
    user: "Sophia M.",
    time: "30 minutes ago",
    businessName: "City Motors",
    rating: 5,
    likes: 22,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 30,
    description:
      "City Motors offers a diverse range of vehicles, from economy cars to luxury SUVs, with flexible leasing and financing options. Known for their outstanding customer service and competitive pricing, they ensure a hassle-free buying experience. City Motors also provides certified pre-owned vehicles, all inspected for quality and reliability, and a service department with experienced technicians for maintenance and repairs.",
  },
  {
    user: "Michael B.",
    time: "45 minutes ago",
    businessName: "Prime Realty",
    rating: 4,
    likes: 7,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 14,
    description:
      "Prime Realty specializes in residential and commercial real estate services. Their expert agents guide clients through buying, selling, and leasing properties, ensuring a smooth and efficient process. With a deep understanding of the local market, Prime Realty helps clients find the perfect property, whether it's a first home, an investment, or a new office space.",
  },
  {
    user: "Olivia C.",
    time: "1 hour ago",
    businessName: "Glow Salon",
    rating: 4.5,
    likes: 14,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 21,
    description:
      "Glow Salon offers high-end beauty services including hair styling, coloring, skincare, and makeup. With a team of experienced stylists and aestheticians, Glow Salon ensures each client leaves feeling confident and radiant. The salon uses premium products and stays updated on the latest trends to provide personalized and exceptional services in a chic and modern setting.",
  },
  {
    user: "James K.",
    time: "2 hours ago",
    businessName: "The Coffee Hub",
    rating: 3,
    likes: 9,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 10,
    description:
      "The Coffee Hub is a popular neighborhood café offering a wide selection of specialty coffees, teas, and freshly baked goods. Its cozy interior, friendly baristas, and free Wi-Fi make it a favorite among students, remote workers, and coffee enthusiasts. The café also hosts weekly open mic nights, fostering a lively community atmosphere.",
  },
  {
    user: "Ava R.",
    time: "3 hours ago",
    businessName: "Fresh Market",
    rating: 5,
    likes: 19,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 27,
    description:
      "Fresh Market is a local grocery store committed to providing fresh and organic produce, meats, and specialty goods. With a focus on sustainability and supporting local farmers, Fresh Market offers a wide variety of high-quality products at competitive prices. Shoppers appreciate the store's welcoming environment and attentive staff.",
  },
  {
    user: "William S.",
    time: "4 hours ago",
    businessName: "TechZone",
    rating: 4.2,
    likes: 11,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 19,
    description:
      "TechZone is a trusted electronics retailer offering the latest gadgets, accessories, and repair services. From smartphones and laptops to gaming consoles and smart home devices, TechZone provides expert advice and after-sales support. Their certified technicians handle repairs efficiently, ensuring devices are back in working order in no time.",
  },
  {
    user: "Ella F.",
    time: "5 hours ago",
    businessName: "Artisan Bakery",
    rating: 4.8,
    likes: 17,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 23,
    description:
      "Artisan Bakery is renowned for its handcrafted breads, pastries, and cakes made from high-quality, locally sourced ingredients. Each item is baked fresh daily, blending traditional techniques with modern flavors. Customers rave about the sourdough, croissants, and specialty desserts, all served in a rustic, welcoming setting.",
  },
  {
    user: "Noah L.",
    time: "6 hours ago",
    businessName: "Harmony Yoga",
    rating: 4.6,
    likes: 16,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 22,
    description:
      "Harmony Yoga offers a variety of classes including Vinyasa, Hatha, and Yin Yoga for practitioners of all levels. The studio is known for its serene environment, experienced instructors, and community-centered approach. Harmony Yoga also hosts wellness workshops, retreats, and meditation sessions to promote holistic well-being.",
  },
  {
    user: "Lucas M.",
    time: "7 hours ago",
    businessName: "Riverfront Bistro",
    rating: 4.7,
    likes: 20,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 26,
    description:
      "Riverfront Bistro is a waterfront restaurant known for its seafood and seasonal dishes. The menu features locally sourced ingredients, creative cocktails, and an extensive wine list. Diners enjoy the stunning river views from both the indoor dining room and the outdoor terrace, making it a top choice for romantic dinners and special occasions.",
  },
  {
    user: "Mia J.",
    time: "8 hours ago",
    businessName: "Bloom Florist",
    rating: 4.4,
    likes: 13,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 17,
    description:
      "Bloom Florist creates beautiful, custom floral arrangements for all occasions. From weddings and events to everyday bouquets, Bloom Florist combines fresh blooms with artistic flair. Customers appreciate the attention to detail, prompt delivery, and the florist's commitment to making each arrangement memorable and unique.",
  },
  {
    user: "Ethan P.",
    time: "9 hours ago",
    businessName: "Peak Performance",
    rating: 4.3,
    likes: 10,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 16,
    description:
      "Peak Performance offers athletic training and recovery services tailored to professional and amateur athletes. With cutting-edge equipment, certified trainers, and personalized programs, Peak Performance helps clients reach their physical potential and prevent injuries. Services include strength training, physiotherapy, and recovery treatments.",
  },
  {
    user: "Charlotte D.",
    time: "10 hours ago",
    businessName: "Skyline Rooftop Bar",
    rating: 4.9,
    likes: 25,
    userImg: "",
    businessImg: "https://via.placeholder.com/300x200",
    ratingCount: 32,
    description:
      "Skyline Rooftop Bar offers breathtaking city views, expertly crafted cocktails, and a lively atmosphere. Popular for after-work drinks and weekend nights out, the bar features a rotating lineup of DJs, special events, and a menu of small plates. Guests enjoy lounging under the stars while savoring signature drinks and soaking in the skyline.",
  },
];

export default function ActivityCard() {
  const [showAll, setShowAll] = useState(false);
  const [readMore, setReadMore] = useState({});

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  const getInitial = (name) => name?.charAt(0) || "?";

  const randomColor = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-yellow-500",
      "bg-indigo-500",
    ];
    const charCode = name.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  const toggleReadMore = (index) => {
    setReadMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Recent Activities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(showAll ? activities : activities.slice(0, 6)).map(
            (activity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border rounded-xl bg-white overflow-hidden"
              >
                {/* User Info */}
                <div className="flex items-center gap-2 p-4 border-b border-black/10">
                  {activity.userImg ? (
                    <img
                      src={activity.userImg}
                      alt={activity.user}
                      className="w-14 h-14 rounded-full object-cover border"
                    />
                  ) : (
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold border ${randomColor(
                        activity.user
                      )}`}
                    >
                      {getInitial(activity.user)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm  text-gray-700 leading-snug">
                      {activity.user}
                      <br />
                      <span className="text-xs font-light text-gray-500">
                        {activity.time}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Business Image */}
                <div className="h-48">
                  <img
                    src={activity.businessImg}
                    alt={activity.businessName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Business Details */}
                <div className="p-4 border-b border-black/10">
                  <h3 className="text-lg font-semibold mb-1">
                    {activity.businessName}
                  </h3>
                  <p className="text-gray-600 text-sm leading-snug">
                    {readMore[index]
                      ? activity.description
                      : activity.description.slice(0, 100) + "..."}
                  </p>
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-gray-500 text-xs underline"
                  >
                    {readMore[index] ? "Show less" : "Read more"}
                  </button>
                </div>

                {/* Rating & Likes */}
                <div className="flex justify-between items-center p-4">
                  <div>
                    <div className="flex items-center gap-1">
                      {renderStars(activity.rating)}
                      <span className="text-sm text-gray-600 ml-1">
                        ({activity.ratingCount})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaThumbsUp className="text-blue-500" />
                    <span>{activity.likes}</span>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-gray-600 text-sm hover:underline"
          >
            {showAll ? "Show Less Activities" : "More Activities"}{" "}
            <FaChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
