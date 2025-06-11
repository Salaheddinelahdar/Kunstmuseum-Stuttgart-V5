import React, { useState, useEffect } from "react";

// Import images
import chairImg from "../images/vintage wooden chair used.jpg";
import lampImg from "../images/antique table lamp.jpg";
import bikeImg from "../images/used mountain bike.jpg";
import sofaImg from "../images/second-hand sofa.jpg";
import recordPlayerImg from "../images/old vinyl record player.jpg";
import cameraImg from "../images/used dslr camera.jpg";
import tableImg from "../images/antero stump coffee Table.jpg";
import clockImg from "../images/classic wall clock.jpg";
import mixerImg from "../images/kitchen mixer (used).jpg";
import booksImg from "../images/second-hand books (set of 5 ).jpg";
import deskImg from "../images/old school desk.jpg";
import strollerImg from "../images/used baby stroller.jpg";

// Add categories to items
const itemsWithCategories = [
  {
    id: 1,
    name: "Vintage Wooden Chair",
    price: "$45",
    category: "furniture",
    description: "Classic wooden chair, sturdy and stylish. Perfect for any vintage decor.",
    image: chairImg
  },
  {
    id: 2,
    name: "Antique Table Lamp",
    price: "$30",
    category: "home-decor",
    description: "Beautiful antique lamp, adds a warm glow to any room.",
    image: lampImg
  },
  {
    id: 3,
    name: "Used Mountain Bike",
    price: "$120",
    category: "sports",
    description: "Reliable mountain bike, ready for new adventures.",
    image: bikeImg
  },
  {
    id: 4,
    name: "Second-hand Sofa",
    price: "$95",
    category: "furniture",
    description: "Comfortable sofa, gently used, perfect for your living room.",
    image: sofaImg
  },
  {
    id: 5,
    name: "Old Vinyl Record Player",
    price: "$65",
    category: "electronics",
    description: "Vintage record player, works well, great for music lovers.",
    image: recordPlayerImg
  },
  {
    id: 6,
    name: "Used DSLR Camera",
    price: "$180",
    category: "electronics",
    description: "DSLR camera in good condition, perfect for photography enthusiasts.",
    image: cameraImg
  },
  {
    id: 7,
    name: "Rustic Coffee Table",
    price: "$55",
    category: "furniture",
    description: "Handcrafted rustic wood coffee table, unique and charming.",
    image: tableImg
  },
  {
    id: 8,
    name: "Classic Wall Clock",
    price: "$25",
    category: "home-decor",
    description: "Classic wall clock, keeps perfect time, elegant design.",
    image: clockImg
  },
  {
    id: 9,
    name: "Kitchen Mixer (Used)",
    price: "$35",
    category: "appliances",
    description: "Used kitchen mixer, works great for all your baking needs.",
    image: mixerImg
  },
  {
    id: 10,
    name: "Second-hand Books (Set of 5)",
    price: "$12",
    category: "books",
    description: "Set of 5 classic books, gently used, great for readers.",
    image: booksImg
  },
  {
    id: 11,
    name: "Old School Desk",
    price: "$40",
    category: "furniture",
    description: "Vintage school desk, solid wood, full of character.",
    image: deskImg
  },
  {
    id: 12,
    name: "Used Baby Stroller",
    price: "$28",
    category: "baby",
    description: "Second-hand baby stroller, clean and in good working order.",
    image: strollerImg
  }
];

// Extract unique categories
const categories = [...new Set(itemsWithCategories.map(item => item.category))];

function ProductList({ setCurrentPage: setAppPage }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? itemsWithCategories 
    : itemsWithCategories.filter(item => item.category === selectedCategory);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="w-full bg-[#F9F6F1] py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8B5E3C] mb-6 text-center">Items for Sale</h2>
        
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-2 px-2">
          <div className="flex flex-nowrap space-x-2 sm:space-x-3 px-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? "bg-[#8B5E3C] text-white shadow-md"
                  : "bg-white text-[#8B5E3C] border border-[#C19A6B] hover:bg-gray-50"
              }`}
            >
              All Items
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-[#8B5E3C] text-white shadow-md"
                    : "bg-white text-[#8B5E3C] border border-[#C19A6B] hover:bg-gray-50"
                }`}
              >
                {category.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {paginatedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {paginatedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E8D9C0] rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:border-[#8B5E3C] hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                <div className="relative pt-[100%] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#8B5E3C] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.category.replace("-", " ")}
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-base font-semibold text-[#5A3E36] mb-1 line-clamp-2 h-10 sm:h-12 flex items-center">
                    {item.name}
                  </h3>
                  <p className="text-[#D2691E] font-bold text-base sm:text-lg mb-2 sm:mb-3">
                    {item.price}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 flex-grow">
                    {item.description}
                  </p>
                  <button
                    className="mt-auto w-full py-2 px-3 sm:py-2.5 bg-[#D2691E] hover:bg-[#8B5E3C] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1.5"
                    onClick={() => {
                      if (typeof setAppPage === 'function') {
                        setAppPage('contact');
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Seller</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 sm:mt-10">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-[#C19A6B] bg-white text-[#8B5E3C] font-medium hover:bg-[#F9F6F1] transition-colors text-sm sm:text-base"
                >
                  Previous
                </button>
              )}
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show first page, last page, current page, and pages around current page
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                if (pageNum > 0 && pageNum <= totalPages) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded border ${
                        currentPage === pageNum
                          ? 'bg-[#8B5E3C] text-white border-[#8B5E3C]'
                          : 'bg-white text-[#8B5E3C] border-[#C19A6B] hover:bg-[#F9F6F1]'
                      } font-medium transition-colors text-sm sm:text-base`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                return null;
              })}
              
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-[#C19A6B] bg-white text-[#8B5E3C] font-medium hover:bg-[#F9F6F1] transition-colors text-sm sm:text-base"
                >
                  Next
                </button>
              )}
            </div>
          </div>
      )}
      </div>
    </section>
  );
}

export default ProductList;
