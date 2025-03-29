import { useState } from "react";
import { Star, MessageSquare } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const spaCenters = [
  {
    name: "Serenity Spa & Wellness",
    rating: 4.8,
    reviewCount: 95,
    status: "Open",
    openUntil: "9:00 PM",
    review:
      "Serenity Spa offers a tranquil atmosphere and outstanding massages. The therapists are professional and attentive to your needs. The aroma therapy and hot stone massage are must-tries for a truly relaxing experience. Perfect for unwinding after a stressful week.",
    services: [
      "Aroma Therapy",
      "Hot Stone Massage",
      "Facial Treatment",
      "Deep Tissue Massage",
    ],
  },
  {
    name: "Blissful Retreat Spa",
    rating: 4.5,
    reviewCount: 75,
    status: "Closed",
    opensAt: "10:00 AM",
    review:
      "Blissful Retreat Spa is known for its serene setting and skilled staff. Their facial treatments left my skin glowing and refreshed. The ambiance is calming, with soft music and aromatic scents filling the air.",
    services: ["Swedish Massage", "Facials", "Reflexology", "Steam Bath"],
  },
  {
    name: "Zen Garden Spa",
    rating: 4.6,
    reviewCount: 130,
    status: "Open",
    openUntil: "10:30 PM",
    review:
      "Zen Garden Spa provides a beautiful garden ambiance along with holistic treatments. The couples massage is a favorite! The herbal teas served after treatments add to the peaceful vibe. Truly rejuvenating.",
    services: ["Couples Massage", "Shiatsu", "Body Scrub", "Herbal Therapy"],
  },
  {
    name: "Ocean Breeze Spa",
    rating: 4.4,
    reviewCount: 60,
    status: "Open",
    openUntil: "8:00 PM",
    review:
      "Ocean Breeze Spa offers beachfront views with excellent body scrubs and hydrotherapy sessions. The sea salt scrubs and ocean-scented oils make every treatment extra special.",
    services: [
      "Hydrotherapy",
      "Sea Salt Scrub",
      "Aroma Therapy",
      "Thai Massage",
    ],
  },
  {
    name: "Heavenly Touch Spa",
    rating: 4.9,
    reviewCount: 150,
    status: "Open",
    openUntil: "11:00 PM",
    review:
      "The Heavenly Touch Spa exceeded all expectations. The deep tissue massage worked wonders on my back pain. Highly skilled therapists and premium oils used. A must-visit.",
    services: ["Deep Tissue Massage", "Reflexology", "Facials", "Hot Stones"],
  },
  {
    name: "Tranquil Waters Spa",
    rating: 4.3,
    reviewCount: 85,
    status: "Closed",
    opensAt: "9:30 AM",
    review:
      "Tranquil Waters Spa specializes in aquatic therapies and body wraps. The calming water features and soothing atmosphere make it an ideal spot for relaxation.",
    services: ["Hydrotherapy", "Mud Wrap", "Aromatherapy", "Lymphatic Massage"],
  },
  {
    name: "Lotus Blossom Spa",
    rating: 4.7,
    reviewCount: 110,
    status: "Open",
    openUntil: "9:00 PM",
    review:
      "Lotus Blossom Spa offers a serene escape with signature herbal massages. The staff is welcoming and the environment is clean and relaxing. I loved their flower-scented body oils.",
    services: ["Herbal Massage", "Body Scrub", "Hot Stone Therapy", "Shiatsu"],
  },
  {
    name: "Pure Escape Wellness",
    rating: 4.6,
    reviewCount: 102,
    status: "Open",
    openUntil: "10:00 PM",
    review:
      "Pure Escape Wellness delivers top-notch spa services. Their skin detox treatments and relaxing aromatherapy helped me feel fully rejuvenated. The spa has a clean, modern aesthetic.",
    services: [
      "Detox Facial",
      "Swedish Massage",
      "Aroma Therapy",
      "Scalp Treatment",
    ],
  },
  {
    name: "Elysian Spa Lounge",
    rating: 4.8,
    reviewCount: 135,
    status: "Closed",
    opensAt: "11:00 AM",
    review:
      "Elysian Spa Lounge feels like a luxury getaway. From calming herbal teas to premium massage techniques, this spa pampers you from start to finish. Perfect for self-care days.",
    services: [
      "Couples Massage",
      "Deep Tissue",
      "Body Wraps",
      "Hot Oil Massage",
    ],
  },
  {
    name: "Cloud Nine Day Spa",
    rating: 4.4,
    reviewCount: 70,
    status: "Open",
    openUntil: "8:30 PM",
    review:
      "Cloud Nine Day Spa specializes in day packages including full-body massages and facial therapies. The relaxing environment makes it great for unwinding after a busy week.",
    services: [
      "Day Spa Packages",
      "Facials",
      "Hot Stone",
      "Relaxation Massage",
    ],
  },
  {
    name: "Harmony Healing Spa",
    rating: 4.3,
    reviewCount: 55,
    status: "Closed",
    opensAt: "10:00 AM",
    review:
      "Harmony Healing Spa offers reiki and holistic treatments. Their calming decor and expert staff help relieve stress and promote inner peace. Loved their energy balancing session.",
    services: ["Reiki", "Shiatsu", "Energy Healing", "Herbal Facial"],
  },
  {
    name: "Calm Oasis Spa",
    rating: 4.5,
    reviewCount: 90,
    status: "Open",
    openUntil: "9:00 PM",
    review:
      "Calm Oasis Spa delivers relaxing massages with an emphasis on client wellness. The aromatherapy-infused rooms and gentle background music set the perfect mood.",
    services: [
      "Aroma Therapy",
      "Deep Tissue Massage",
      "Reflexology",
      "Body Polish",
    ],
  },
  {
    name: "The Relaxation Hub",
    rating: 4.6,
    reviewCount: 98,
    status: "Open",
    openUntil: "10:00 PM",
    review:
      "The Relaxation Hub combines modern techniques with traditional therapies. Their signature bamboo massage left me feeling fully refreshed. Highly recommend their evening sessions.",
    services: ["Bamboo Massage", "Foot Reflexology", "Mud Wraps", "Steam Bath"],
  },
  {
    name: "Glow & Go Spa",
    rating: 4.2,
    reviewCount: 62,
    status: "Closed",
    opensAt: "9:00 AM",
    review:
      "Glow & Go Spa is perfect for a quick skin refresh or a deep cleansing facial. Their express services are affordable and well-executed. Ideal for busy professionals.",
    services: ["Express Facial", "Mini Massage", "Detox Wrap", "Hand Therapy"],
  },
  {
    name: "Zenith Wellness Spa",
    rating: 4.7,
    reviewCount: 112,
    status: "Open",
    openUntil: "9:30 PM",
    review:
      "Zenith Wellness Spa features expert massages in a peaceful, candle-lit environment. The staff focuses on personalized care and offers herbal teas post-session.",
    services: ["Shiatsu", "Deep Tissue", "Reflexology", "Aromatherapy"],
  },
  {
    name: "Blue Lagoon Spa",
    rating: 4.4,
    reviewCount: 74,
    status: "Open",
    openUntil: "8:00 PM",
    review:
      "Blue Lagoon Spa specializes in aquatic therapies and calming massages. The hydrotherapy pool is the highlight, making you feel like you're floating in serenity.",
    services: ["Hydrotherapy", "Full Body Massage", "Facials", "Seaweed Wrap"],
  },
  {
    name: "Nature’s Touch Spa",
    rating: 4.5,
    reviewCount: 83,
    status: "Closed",
    opensAt: "10:30 AM",
    review:
      "Nature’s Touch Spa uses organic products for all treatments. Their signature nature-inspired therapies left me feeling grounded and refreshed. Excellent service and clean facilities.",
    services: [
      "Organic Facial",
      "Nature Massage",
      "Body Scrub",
      "Hot Oil Treatment",
    ],
  },
  {
    name: "Moonlight Wellness Center",
    rating: 4.6,
    reviewCount: 99,
    status: "Open",
    openUntil: "10:00 PM",
    review:
      "Moonlight Wellness Center offers late-night massages and relaxation therapies. The ambient lighting and calming music create a peaceful retreat for evening relaxation.",
    services: [
      "Evening Massage",
      "Shiatsu",
      "Deep Relaxation",
      "Foot Reflexology",
    ],
  },
  {
    name: "Vitality Spa & Massage",
    rating: 4.5,
    reviewCount: 65,
    status: "Open",
    openUntil: "9:00 PM",
    review:
      "Vitality Spa offers sports recovery massages and invigorating body wraps. Ideal for athletes or anyone needing muscle relief after a workout.",
    services: [
      "Sports Massage",
      "Detox Wrap",
      "Reflexology",
      "Cupping Therapy",
    ],
  },
  {
    name: "Aura Bliss Spa",
    rating: 4.8,
    reviewCount: 142,
    status: "Open",
    openUntil: "11:00 PM",
    review:
      "Aura Bliss Spa provides a luxurious spa experience with premium services like crystal therapy and energy healing. The staff was incredibly attentive and knowledgeable.",
    services: ["Crystal Healing", "Reiki", "Deep Tissue Massage", "Facials"],
  },
];

export default function SpaCenterList() {
  const [currentPage, setCurrentPage] = useState(1);
  const centersPerPage = 5;
  const totalPages = Math.ceil(spaCenters.length / centersPerPage);

  const [spaCenter, setSpaCenter] = useState(
    spaCenters.map((r) => ({ ...r, showFullReview: false }))
  );

  const indexOfLast = currentPage * centersPerPage;
  const indexOfFirst = indexOfLast - centersPerPage;
  const currentCenters = spaCenter.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleReadMore = (index) => {
    setSpaCenter((prev) =>
      prev.map((r, i) =>
        i === index ? { ...r, showFullReview: !r.showFullReview } : r
      )
    );
  };

  return (
    <div className="space-y-6">
      {currentCenters.map((center, index) => (
        <div
          key={index}
          className="flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          {/* Left Image */}
          <div className="w-1/4">
            <img
              src={`https://source.unsplash.com/400x300/?spa,wellness,${index}`}
              alt={center.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Details */}
          <div className="w-3/4 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {center.name}
              </h3>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 mr-1 ${
                      i < Math.round(center.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm font-semibold text-gray-700 ml-1">
                  {center.rating} ({center.reviewCount} reviews)
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-2">
                {center.status === "Open" ? (
                  <span className="text-green-600 font-semibold">Open</span>
                ) : (
                  <span className="text-red-500 font-semibold">Closed</span>
                )}{" "}
                {center.status === "Open"
                  ? ` - Closes at ${center.openUntil}`
                  : ` - Opens at ${center.opensAt}`}
              </p>

              <p className="text-gray-700 text-sm">
                {center.showFullReview
                  ? center.review
                  : `${center.review.slice(0, 120)}...`}
                {center.review.length > 120 && (
                  <span
                    onClick={() => toggleReadMore(index)}
                    className="text-gray-500 cursor-pointer hover:underline text-xs ml-1"
                  >
                    {center.showFullReview ? "Read Less" : "Read More"}
                  </span>
                )}
              </p>

              <div className="flex flex-wrap gap-2">
                {center.services.map((service, i) => (
                  <span
                    key={i}
                    className="px-2 py-2 text-xs rounded-full border border-gray-300 text-black cursor-pointer hover:bg-gray-200 hover:text-gray-900 hover:scale-y-105 transition-all duration-200 ease-in-out inline-block"
                    >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-1 mt-6">
        <div
          onClick={handlePrev}
          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
            currentPage === 1
              ? "text-gray-400 pointer-events-none"
              : "hover:bg-gray-200 text-gray-700"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </div>

        {[...Array(totalPages)].map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 flex items-center justify-center text-sm cursor-pointer ${
              currentPage === i + 1
                ? "bg-blue-600 text-white rounded-md"
                : "hover:underline text-gray-700"
            }`}
          >
            {i + 1}
          </div>
        ))}

        <div
          onClick={handleNext}
          className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
            currentPage === totalPages
              ? "text-gray-400 pointer-events-none"
              : "hover:bg-gray-200 text-gray-700"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
