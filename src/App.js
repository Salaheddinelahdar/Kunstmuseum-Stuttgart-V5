import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import About from './About';
import Contact from './Contact';

// Import images
import chairImg from "./images/vintage wooden chair used.jpg";
import lampImg from "./images/antique table lamp.jpg";
import bikeImg from "./images/used mountain bike.jpg";
import sofaImg from "./images/second-hand sofa.jpg";
import recordPlayerImg from "./images/old vinyl record player.jpg";
import cameraImg from "./images/used dslr camera.jpg";
import tableImg from "./images/antero stump coffee Table.jpg";
import clockImg from "./images/classic wall clock.jpg";
import mixerImg from "./images/kitchen mixer (used).jpg";
import booksImg from "./images/second-hand books (set of 5 ).jpg";
import deskImg from "./images/old school desk.jpg";
import strollerImg from "./images/used baby stroller.jpg";

// Product data
const products = [
  {
    id: 1,
    name: "Vintage Wooden Chair",
    price: "$45",
    category: "furniture",
    description: "Classic wooden chair, sturdy and stylish. Perfect for any vintage decor. Made from solid oak with a beautiful natural finish. Features a comfortable curved backrest and sturdy construction that will last for years to come.",
    image: chairImg
  },
  {
    id: 2,
    name: "Antique Table Lamp",
    price: "$30",
    category: "home-decor",
    description: "Beautiful antique lamp, adds a warm glow to any room. Features a hand-painted ceramic base with brass accents. Includes a fabric lampshade that diffuses light beautifully. Perfect for bedside tables or as an accent piece in your living room.",
    image: lampImg
  },
  {
    id: 3,
    name: "Used Mountain Bike",
    price: "$120",
    category: "sports",
    description: "Reliable mountain bike, ready for new adventures. Lightweight aluminum frame with 21-speed Shimano drivetrain. Front suspension fork smooths out bumps on trails. Includes water bottle holder and rear rack for storage. Perfect for weekend trail riding or daily commutes.",
    image: bikeImg
  },
  {
    id: 4,
    name: "Second-hand Sofa",
    price: "$95",
    category: "furniture",
    description: "Comfortable sofa, gently used, perfect for your living room. Features a classic design with rolled arms and tapered wooden legs. Upholstered in durable beige fabric that hides wear well. Seats three people comfortably. Great condition with no stains or tears.",
    image: sofaImg
  },
  {
    id: 5,
    name: "Vinyl Record Player",
    price: "$65",
    category: "electronics",
    description: "Vintage record player in great working condition. Includes built-in speakers, 3-speed turntable (33/45/78 RPM), and aux input. Features a classic wooden case with a hinged dust cover. Perfect for vinyl enthusiasts looking for a retro listening experience.",
    image: recordPlayerImg
  },
  {
    id: 6,
    name: "Used DSLR Camera",
    price: "$250",
    category: "electronics",
    description: "Professional DSLR camera with 18-55mm lens. Great condition with minimal signs of use. Features 24.2MP sensor, Full HD video recording, and built-in Wi-Fi. Includes camera bag, battery, and charger. Perfect for photography enthusiasts looking to upgrade.",
    image: cameraImg
  },
  {
    id: 7,
    name: "Antero Stump Coffee Table",
    price: "$85",
    category: "furniture",
    description: "Unique coffee table made from a real tree stump. One of a kind piece with natural wood grain and bark details. Sealed with a clear finish to protect the surface. Measures 36\" in diameter and 18\" tall. Adds a rustic, natural element to any living space.",
    image: tableImg
  },
  {
    id: 8,
    name: "Classic Wall Clock",
    price: "$25",
    category: "home-decor",
    description: "Vintage-style wall clock with Roman numerals. Battery operated with a quiet, sweeping second hand. Features an elegant black frame with gold accents. Perfect for adding a touch of classic style to any room. Requires one AA battery (not included).",
    image: clockImg
  },
  {
    id: 9,
    name: "Kitchen Mixer",
    price: "$40",
    category: "appliances",
    description: "Stand mixer in excellent condition. Includes all attachments: dough hook, flat beater, and wire whisk. Features 5-quart stainless steel bowl and 10-speed settings. Perfect for baking enthusiasts. Only used a handful of times. Original box and manual included.",
    image: mixerImg
  },
  {
    id: 10,
    name: "Book Collection (Set of 5)",
    price: "$15",
    category: "books",
    description: "Matching set of classic novels in good condition. Includes hardcover editions of 'Pride and Prejudice', 'Moby Dick', 'Jane Eyre', 'Great Expectations', and 'Wuthering Heights'. Beautiful display pieces for any home library. Some minor shelf wear but all pages are intact.",
    image: booksImg
  },
  {
    id: 11,
    name: "Vintage School Desk",
    price: "$55",
    category: "furniture",
    description: "Retro school desk with lift-up top. Great for small spaces or as a unique writing desk. Features a classic wooden finish with metal legs. The lift-top reveals a storage compartment for supplies. Adds a nostalgic touch to any room.",
    image: deskImg
  },
  {
    id: 12,
    name: "Baby Stroller",
    price: "$70",
    category: "baby",
    description: "Lightweight stroller in excellent condition. Features a large storage basket, adjustable canopy, and reclining seat. Easy to fold and transport. Includes rain cover and cup holder. Perfect for parents on the go. Clean and well-maintained.",
    image: strollerImg
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchQuery, setActiveSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleProductSelect = (product, goToContact = false) => {
    if (goToContact) {
      setCurrentPage('contact');
      window.scrollTo(0, 0);
    } else {
      setSelectedProduct(product);
      setCurrentPage('product-details');
    }
  };
  
  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setCurrentPage('home');
  };
  
  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu when navigating
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [currentPage, isMobileMenuOpen]);
  
  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F6F1] text-[#333333] overflow-x-hidden">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={(page) => {
          if (page === 'home') {
            setSelectedProduct(null);
          }
          setCurrentPage(page);
        }} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="flex-grow">
        {currentPage === 'about' ? (
          <About />
        ) : currentPage === 'contact' ? (
          <Contact />
        ) : currentPage === 'product-details' && selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            products={products}
            onBack={handleBackToProducts}
            onContactSeller={() => {
              setCurrentPage('contact');
              window.scrollTo(0, 0);
            }}
            onProductSelect={(item) => {
              setSelectedProduct(item);
              window.scrollTo(0, 0);
            }}
          />
        ) : (
          <>
            <HeroCarousel 
              searchQuery={searchQuery}
              onSearchChange={(query) => {
                setSearchQuery(query);
                setActiveSearchQuery(query);
              }}
              onSearchSubmit={() => {
                if (currentPage !== 'home') {
                  setCurrentPage('home');
                }
              }}
            />
            
            <section className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B5E3C] mb-4 md:mb-6">
                  Explore Unique Pre-Loved Items
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#5A3E36] max-w-3xl mx-auto leading-relaxed">
                  Welcome to our curated collection of quality second-hand items. 
                  Discover great deals on vintage finds and give old goods a new life. 
                  Buy or sell today!
                </p>
              </div>
            </section>
            
            <div id="products-section" className="pb-12 sm:pb-16 md:pb-20">
              <ProductList 
                products={products}
                onProductSelect={handleProductSelect}
                searchQuery={activeSearchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
          </>
        )}
      </main>
      
      {currentPage !== 'contact' && <Footer />}
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default App;
