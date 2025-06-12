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

function ProductList({ setCurrentPage: setAppPage, searchQuery = '', onSearchChange }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Update search query when it changes
  useEffect(() => {
    if (searchQuery) {
      setSelectedCategory('all');
      setCurrentPage(1);
    }
  }, [searchQuery]);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Filter items based on selected category and search query
  const filteredItems = itemsWithCategories.filter(item => {
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    // If there's a search query, filter by it
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        (item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower.replace(/\s+/g, '-'))) &&
        matchesCategory
      );
    }
    
    return matchesCategory;
  });

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Scroll handler for horizontal scrolling
  const scrollContainerRef = React.useRef(null);
  const [showLeftScroll, setShowLeftScroll] = React.useState(false);
  const [showRightScroll, setShowRightScroll] = React.useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, [filteredItems]);

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <section className="w-full bg-[#F9F6F1] py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8B5E3C] mb-2 text-center">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Items for Sale'}
        </h2>
        {searchQuery ? (
          <p className="text-center text-sm text-gray-600 mb-6">
            {filteredItems.length === 0 
              ? 'No items found. Try a different search term.'
              : `Found ${filteredItems.length} ${filteredItems.length === 1 ? 'item' : 'items'}`}
          </p>
        ) : (
          <p className="text-center text-sm text-gray-600 mb-6">
            Swipe or scroll horizontally to explore all items
          </p>
        )}
        
        {/* Category Filter Buttons */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative w-full max-w-4xl">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex space-x-2 sm:space-x-3 px-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium capitalize transition-all whitespace-nowrap ${
                    selectedCategory === 'all'
                      ? "bg-[#8B5E3C] text-white shadow-md transform scale-105"
                      : "bg-white text-[#8B5E3C] border border-[#C19A6B] hover:bg-gray-50 hover:shadow-sm"
                  }`}
                >
                  All Items
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium capitalize transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-[#8B5E3C] text-white shadow-md transform scale-105"
                        : "bg-white text-[#8B5E3C] border border-[#C19A6B] hover:bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    {category.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>
            <div className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F9F6F1] to-transparent pointer-events-none transition-opacity duration-300 ${
              showLeftScroll ? 'opacity-100' : 'opacity-0'
            }`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F9F6F1] to-transparent pointer-events-none transition-opacity duration-300 ${
              showRightScroll ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>
        </div>

        {/* Horizontal Scrollable Product List */}
        {filteredItems.length > 0 ? (
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className="flex space-x-6 py-1">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-64 bg-white border border-[#E8D9C0] rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md hover:border-[#8B5E3C] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 bg-[#8B5E3C]/90 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                        {item.category.replace("-", " ")}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-sm font-semibold text-[#5A3E36] mb-1 line-clamp-2 h-10 flex items-center">
                        {item.name}
                      </h3>
                      <p className="text-[#D2691E] font-bold text-base mb-2">
                        {item.price}
                      </p>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2 flex-grow">
                        {item.description}
                      </p>
                      <button
                        className="mt-auto w-full py-2 bg-[#D2691E] hover:bg-[#8B5E3C] text-white text-xs font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1.5"
                        onClick={() => {
                          if (typeof setAppPage === 'function') {
                            setAppPage('contact');
                          }
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Contact Seller</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;
