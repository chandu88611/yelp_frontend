import {
  FaStar,
  FaCheckCircle,
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

const Reviews = () => {
  const ratings = [
    { stars: 5, percentage: 100, count: 9232, color: "bg-green-600" },
    { stars: 4, percentage: 80, count: 8125, color: "bg-sky-400" },
    { stars: 3, percentage: 60, count: 6263, color: "bg-blue-900" },
    { stars: 2, percentage: 30, count: 3463, color: "bg-amber-400" },
    { stars: 1, percentage: 20, count: 1456, color: "bg-rose-500" },
  ];

  return (
    <div className="border bg-white rounded-lg p-4">
      {/* Rating Section */}
      <div className="space-y-3">
        {ratings.map((rating, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Number + Star */}
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex items-center justify-center w-7 h-6 bg-gray-200 p-2 rounded-md">
                <span className="text-xs font-medium text-gray-600">
                  {rating.stars}
                </span>
                <FaStar className="ml-1 text-gray-600" />
              </div>
            </div>

            {/* Percentage Bar */}
            <div className="w-full h-4 bg-gray-200 overflow-hidden">
              <div
                className={`h-full ${rating.color} flex items-center justify-center`}
                style={{ width: `${rating.percentage}%` }}
              >
                <span className="text-xs text-white">{rating.count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Section */}
      <h4 className="text-lg font-semibold mt-4">3 Reviews</h4>
      <div className="space-y-4 mt-4">
        {[
          {
            name: "Joanne Scott",
            rating: 4.5,
            date: "Dec 21st",
            time: "13:00",
            location: "Brazil",
            comment:
              "Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.",
            avatar: "/images/products/1.jpg",
          },
          {
            name: "Rose Slater",
            rating: 4,
            date: "Dec 21st",
            time: "16:35",
            location: "UK",
            comment:
              "Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat.",
            avatar: "/images/products/2.jpg",
          },
          {
            name: "Edward",
            rating: 4,
            date: "Dec 21st",
            time: "16:35",
            location: "UK",
            comment:
              "Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.",
            avatar: "/images/products/3.jpg",
          },
        ].map((review, index) => (
          <div
            key={index}
            className="flex p-4 border rounded-md bg-gray-50 space-x-4"
          >
            {/* Avatar */}
            <img
              src={review.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-semibold">
                    {review.name}
                    <FaCheckCircle className="inline-block ml-2 text-green-500" />
                    <span className="text-sm text-yellow-400">
                      {review.rating} <FaStar />
                    </span>
                  </h5>
                  <span className="text-xs text-gray-500">
                    <FaCalendar className="inline-block mr-1" /> {review.date}
                    <FaClock className="inline-block mx-2" /> {review.time}
                    <FaMapMarkerAlt className="inline-block mx-2" />
                    {review.location}
                  </span>
                </div>
              </div>
              {/* Comment */}
              <p className="text-sm mt-2 text-gray-700">{review.comment}</p>
              {/* Actions */}
              <div className="flex items-center mt-2 space-x-3 gap-2">
                <button className="text-xs px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                  Helpful
                </button>
                <button className="text-xs px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                  Comment
                </button>
                <button className="text-xs px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                  Report
                </button>
                <div className="ml-auto flex items-center space-x-2">
                  <button className="flex items-center justify-center w-80 h-5 p-2 border border-gray-300 rounded-full text-gray-500 hover:text-gray-700 hover:border-gray-700 transition">
                    <FaThumbsUp className="text-sm" />
                  </button>
                  <button className="flex items-center justify-center w-80 h-5 p-2 border border-gray-300 rounded-full text-gray-500 hover:text-gray-700 hover:border-gray-700 transition">
                    <FaThumbsDown className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
