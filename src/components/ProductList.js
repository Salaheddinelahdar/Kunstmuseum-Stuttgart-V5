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
    <section className="w-full bg-[#F9F6F1] py-8">
      <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6 px-8 text-center">Items for Sale</h2>
      
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
            selectedCategory === 'all'
              ? "bg-[#8B5E3C] text-white"
              : "bg-white text-[#8B5E3C] border border-[#C19A6B] hover:bg-gray-50"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              selectedCategory === category
                ? "bg-[#8B5E3C] text-white"
                : "bg-white text-[#8B5E3C] border border-[#C19A6B] hover:bg-gray-50"
            }`}
          >
            {category.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
        {paginatedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#C19A6B] rounded-2xl shadow-md hover:shadow-lg hover:border-[#8B5E3C] hover:-translate-y-1 transition flex flex-col items-center p-5"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-44 object-contain rounded-xl mb-4 shadow"
            />
            <h3 className="text-lg font-semibold text-[#8B5E3C]">{item.name}</h3>
            <p className="text-[#D2691E] font-bold text-xl">{item.price}</p>
            <p className="text-gray-600 text-center mt-2 mb-4">{item.description}</p>
            <button
              className="mt-auto px-4 py-2 rounded bg-[#D2691E] text-white font-semibold shadow hover:bg-[#8B5E3C] transition"
              onClick={() => {
                if (typeof setAppPage === 'function') {
                  setAppPage('contact');
                }
              }}
            >
              Contact
            </button>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              className={`px-4 py-2 rounded border border-[#C19A6B] font-semibold transition-colors ${currentPage === idx + 1 ? 'bg-[#C19A6B] text-white' : 'bg-white text-[#8B5E3C] hover:bg-[#F9F6F1]'}`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
