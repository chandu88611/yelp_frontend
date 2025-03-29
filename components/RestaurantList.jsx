import { useState } from "react";
import { Star, MessageSquare } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const restaurants = [
  {
    name: "The Gourmet Spot",
    rating: 4.5,
    reviewCount: 124,
    status: "Open",
    openUntil: "10:00 PM",
    review:
      "The Gourmet Spot offers an exceptional dining experience. The food was cooked to perfection, with balanced flavors and fresh ingredients. The staff were very attentive and ensured we had everything we needed. Highly recommend the desserts! The ambiance is modern yet cozy, making it a perfect place for both casual outings and special occasions. Will definitely return!",
    dishes: [
      "Grilled Salmon",
      "Pasta Primavera",
      "Chocolate Lava Cake",
      "Caesar Salad",
    ],
  },
  {
    name: "Urban Bites",
    rating: 3.8,
    reviewCount: 89,
    status: "Closed",
    opensAt: "11:00 AM",
    review:
      "Urban Bites has a vibrant atmosphere with a great variety of dishes to choose from. The burgers were juicy and well-seasoned, while the fries were crisp and golden. Service was a bit slow during peak hours but overall worth the wait. The decor adds a funky charm, perfect for hanging out with friends. Definitely coming back soon.",
    dishes: ["Beef Burger", "Truffle Fries", "Milkshake", "BBQ Wings"],
  },
  {
    name: "Casa Bella",
    rating: 4.7,
    reviewCount: 210,
    status: "Open",
    openUntil: "11:30 PM",
    review:
      "Casa Bella delivers an authentic Italian experience. The wood-fired pizzas were delicious, and the handmade pasta was al dente and flavorful. The wine selection perfectly complemented the meals. The servers were friendly and knowledgeable about the menu. A hidden gem for Italian cuisine lovers. Will recommend it to all my friends!",
    dishes: [
      "Margherita Pizza",
      "Spaghetti Carbonara",
      "Tiramisu",
      "Garlic Bread",
    ],
  },
  {
    name: "Spice & Herbs",
    rating: 4.2,
    reviewCount: 157,
    status: "Open",
    openUntil: "9:00 PM",
    review:
      "Spice & Herbs offers a fantastic range of international flavors. The curries were rich and aromatic, and the naan was soft and buttery. The spice level was adjustable, which was great for everyone at the table. The service was top-notch and made us feel right at home. A must-visit for foodies looking for authentic flavors!",
    dishes: ["Butter Chicken", "Paneer Tikka", "Mango Lassi", "Garlic Naan"],
  },
  {
    name: "Sunset Diner",
    rating: 4.0,
    reviewCount: 132,
    status: "Closed",
    opensAt: "8:00 AM",
    review:
      "Sunset Diner gives off a nostalgic vibe with its classic American diner menu. The pancakes were fluffy, and the coffee was strong. The servers are friendly and efficient, always wearing a smile. Great spot for weekend brunches or late-night cravings. I would recommend trying the milkshakes!",
    dishes: ["Pancakes", "Cheeseburger", "Vanilla Milkshake", "Club Sandwich"],
  },
  {
    name: "Bistro Verde",
    rating: 4.6,
    reviewCount: 180,
    status: "Open",
    openUntil: "10:30 PM",
    review:
      "Bistro Verde impressed me with its farm-to-table philosophy. Everything tasted fresh and vibrant. The salads were creative, and the mains were plated beautifully. The open-air patio is a great touch, perfect for sunny afternoons. The staff were kind and offered great wine pairings. Will come back soon!",
    dishes: [
      "Grilled Chicken Salad",
      "Risotto Verde",
      "Lemon Tart",
      "Herb Roasted Vegetables",
    ],
  },
  {
    name: "Curry House",
    rating: 4.1,
    reviewCount: 95,
    status: "Open",
    openUntil: "11:00 PM",
    review:
      "Curry House is my go-to for spicy Indian comfort food. Their lamb curry and biryani are absolutely spot on. The spice levels can be adjusted, which is a plus. The interior has traditional decor that creates a warm and inviting atmosphere. Prices are reasonable too. A solid choice for family dinners.",
    dishes: ["Lamb Biryani", "Chicken Korma", "Samosas", "Masala Chai"],
  },
  {
    name: "Sushi Zen",
    rating: 4.8,
    reviewCount: 223,
    status: "Closed",
    opensAt: "12:00 PM",
    review:
      "Sushi Zen is a paradise for sushi lovers. The fish was incredibly fresh, and the rolls were expertly crafted. The omakase experience is a must-try. The minimalist design and serene environment make dining here a pleasure. The chefs are very skilled and respectful of tradition.",
    dishes: ["Dragon Roll", "Nigiri Set", "Miso Soup", "Tempura Udon"],
  },
  {
    name: "Taco Fiesta",
    rating: 4.3,
    reviewCount: 140,
    status: "Open",
    openUntil: "9:30 PM",
    review:
      "Taco Fiesta has some of the best street-style tacos in town! The meats were tender and well-marinated, and the salsas were bursting with flavor. The casual and colorful setting makes it a fun place to visit. Quick service and great prices. Highly recommend the al pastor tacos!",
    dishes: ["Al Pastor Tacos", "Nachos", "Quesadilla", "Horchata"],
  },
  {
    name: "The Vegan Bowl",
    rating: 4.4,
    reviewCount: 115,
    status: "Closed",
    opensAt: "9:00 AM",
    review:
      "The Vegan Bowl is a haven for plant-based eaters. The bowls are creative, nutritious, and filling. Everything is beautifully presented and bursting with colors. The smoothies and juices are fresh and packed with flavor. Friendly staff and great vibes all around. Highly recommended!",
    dishes: [
      "Quinoa Power Bowl",
      "Avocado Toast",
      "Green Smoothie",
      "Vegan Brownie",
    ],
  },
  {
    name: "Sunset Grill",
    rating: 4.0,
    reviewCount: 142,
    status: "Closed",
    opensAt: "5:00 PM",
    review:
      "Sunset Grill is a perfect place to enjoy a relaxing evening. The grilled seafood platter is fresh and flavorful. The view during sunset is breathtaking. Service is courteous but sometimes a bit slow when it gets busy. The cocktails are creative and well-balanced, adding to the overall positive experience.",
    dishes: ["Grilled Shrimp", "Seafood Platter", "Margarita", "Key Lime Pie"],
  },
  {
    name: "Burger Haven",
    rating: 3.5,
    reviewCount: 95,
    status: "Open",
    openUntil: "12:00 AM",
    review:
      "Burger Haven serves classic American-style burgers that hit the spot every time. The buns are soft, and the patties are well-seasoned and juicy. Their special sauce elevates the flavor even more. The casual setting and fast service make it a popular spot for late-night bites.",
    dishes: [
      "Classic Cheeseburger",
      "Onion Rings",
      "Vanilla Shake",
      "Chicken Tenders",
    ],
  },
  {
    name: "Vegan Delights",
    rating: 4.6,
    reviewCount: 198,
    status: "Open",
    openUntil: "9:00 PM",
    review:
      "Vegan Delights is a paradise for plant-based eaters. The variety of dishes is impressive, from jackfruit tacos to vegan mac and cheese. Everything is fresh and bursting with flavor. The staff is knowledgeable about vegan alternatives and very welcoming. Great atmosphere for health-conscious diners.",
    dishes: [
      "Jackfruit Tacos",
      "Vegan Mac & Cheese",
      "Quinoa Salad",
      "Vegan Brownie",
    ],
  },
  {
    name: "Curry Junction",
    rating: 4.1,
    reviewCount: 134,
    status: "Closed",
    opensAt: "12:00 PM",
    review:
      "Curry Junction never disappoints when it comes to flavorful Indian cuisine. The butter chicken is rich and creamy, while the biryani is aromatic and well-spiced. The portions are generous, and the garlic naan is always a must-order. A perfect place for a comforting meal with family.",
    dishes: ["Butter Chicken", "Chicken Biryani", "Garlic Naan", "Mango Lassi"],
  },
  {
    name: "Sushi World",
    rating: 4.8,
    reviewCount: 289,
    status: "Open",
    openUntil: "10:00 PM",
    review:
      "Sushi World offers some of the freshest sushi in town. The rolls are beautifully presented and bursting with flavor. The wasabi and soy sauce pair perfectly with the expertly cut sashimi. The minimalist decor and quick service make it a fantastic dining spot for sushi lovers.",
    dishes: ["Dragon Roll", "Tuna Sashimi", "Miso Soup", "Edamame"],
  },
  {
    name: "The Pancake House",
    rating: 4.0,
    reviewCount: 115,
    status: "Open",
    openUntil: "3:00 PM",
    review:
      "The Pancake House is the go-to spot for breakfast lovers. The pancakes are fluffy and served with a variety of syrups and toppings. The coffee is strong and pairs perfectly with their signature omelets. A cozy spot to kick off the weekend mornings.",
    dishes: [
      "Blueberry Pancakes",
      "Omelet Deluxe",
      "Hash Browns",
      "French Toast",
    ],
  },
  {
    name: "BBQ Pit",
    rating: 4.3,
    reviewCount: 178,
    status: "Closed",
    opensAt: "4:00 PM",
    review:
      "BBQ Pit is a haven for barbecue enthusiasts. The brisket melts in your mouth, and the ribs are fall-off-the-bone tender. The house-made sauces add just the right kick. The rustic vibe and friendly service complete the authentic BBQ experience. Highly recommended for meat lovers!",
    dishes: ["Smoked Brisket", "BBQ Ribs", "Coleslaw", "Cornbread"],
  },
  {
    name: "Taco Fiesta",
    rating: 3.9,
    reviewCount: 106,
    status: "Open",
    openUntil: "11:00 PM",
    review:
      "Taco Fiesta brings bold and spicy flavors to the table. The tacos are filled with well-marinated meats and fresh toppings. The nachos are loaded and perfect for sharing. The lively ambiance makes it a fun hangout spot, especially during happy hour.",
    dishes: ["Chicken Tacos", "Loaded Nachos", "Guacamole", "Churros"],
  },
  {
    name: "Noodle House",
    rating: 4.4,
    reviewCount: 160,
    status: "Closed",
    opensAt: "1:00 PM",
    review:
      "Noodle House is an underrated gem for Asian noodle dishes. The ramen broth is rich and flavorful, and the portions are generous. The dumplings are handmade and steamed to perfection. The casual setting and reasonable prices make it a favorite among locals.",
    dishes: ["Tonkotsu Ramen", "Steamed Dumplings", "Fried Rice", "Bubble Tea"],
  },
  {
    name: "Mediterranean Breeze",
    rating: 4.2,
    reviewCount: 150,
    status: "Open",
    openUntil: "10:30 PM",
    review:
      "Mediterranean Breeze serves fresh and vibrant dishes with Mediterranean flair. The falafel is crispy, and the hummus is creamy and rich. The grilled kebabs are juicy and well-spiced. The outdoor seating is a plus, especially in the evenings.",
    dishes: ["Falafel Wrap", "Lamb Kebab", "Hummus Platter", "Baklava"],
  },
];

export default function RestaurantList() {
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 5;
  const totalPages = Math.ceil(restaurants.length / restaurantsPerPage);
  const [restaurant, setRestaurant] = useState(
    restaurants.map((r) => ({ ...r, showFullReview: false }))
  );
  const indexOfLast = currentPage * restaurantsPerPage;
  const indexOfFirst = indexOfLast - restaurantsPerPage;
  const currentRestaurants = restaurant.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const toggleReadMore = (index) => {
    setRestaurant((prev) =>
      prev.map((r, i) =>
        i === index ? { ...r, showFullReview: !r.showFullReview } : r
      )
    );
  };

  return (
    <div className="space-y-6">
      {currentRestaurants.map((rest, index) => {
        const realIndex = (currentPage - 1) * restaurantsPerPage + index;
        return (
          <div
            key={realIndex}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Left Image */}
            <div className="w-full md:w-1/4">
              <img
                src={`https://source.unsplash.com/400x300/?restaurant,food&sig=${realIndex}`}
                alt={rest.name}
                className="h-40 md:h-full w-full object-cover"
              />
            </div>

            {/* Right Details */}
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {rest.name}
                </h3>
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 md:w-4 md:h-4 mr-1 ${
                        i < Math.round(rest.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs md:text-sm font-semibold text-gray-700">
                    {rest.rating}{" "}
                    <span className="text-gray-500">
                      ({rest.reviewCount} reviews)
                    </span>
                  </span>
                </div>
                <p
                  className={`text-xs md:text-sm mb-2 ${
                    rest.status === "Open" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {rest.status === "Open"
                    ? `Open until ${rest.openUntil}`
                    : `Closed - Opens at ${rest.opensAt}`}
                </p>

                {/* Review Section */}
                <div className="flex items-start gap-3 mb-3">
                  <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      "
                      {rest.review.length > 100 && !rest.showFullReview
                        ? `${rest.review.slice(0, 100)}...`
                        : rest.review}
                      "
                      {rest.review.length > 100 && (
                        <span
                          onClick={() => toggleReadMore(index)}
                          className="text-gray-500 cursor-pointer hover:underline text-xs md:text-sm ml-1"
                        >
                          {rest.showFullReview ? "Show less" : "Read more"}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Dishes Section */}
                <div className="flex flex-wrap gap-2">
                  {rest.dishes.map((dish, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 md:py-2 text-xs md:text-sm rounded-full border border-gray-300 text-black cursor-pointer hover:bg-gray-200 hover:text-gray-900 hover:scale-y-105 transition-all duration-200 ease-in-out inline-block"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-1 mt-6">
        {/* Prev button */}
        <div
          onClick={handlePrev}
          className={`flex items-center justify-center w-8 h-8 cursor-pointer transition ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "hover:underline text-gray-700"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </div>

        {/* Numbered buttons */}
        {[...Array(totalPages)].map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 text-xs md:text-sm flex items-center justify-center cursor-pointer transition ${
              currentPage === i + 1
                ? "bg-blue-600 text-white rounded-md"
                : "text-gray-700 hover:underline"
            }`}
          >
            {i + 1}
          </div>
        ))}

        {/* Next button */}
        <div
          onClick={handleNext}
          className={`flex items-center justify-center w-8 h-8 cursor-pointer transition ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "hover:underline text-gray-700"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
