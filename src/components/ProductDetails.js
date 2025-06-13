import React from 'react';

const ProductDetails = ({ product, products, onBack, onContactSeller, onProductSelect }) => {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F6F1]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Product not found</h2>
          <button 
            onClick={onBack}
            className="px-6 py-2 bg-[#8B5E3C] text-white rounded hover:bg-[#6D4A32] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6F1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <img 
                  className="max-w-full max-h-full object-contain p-4" 
                  src={product.image} 
                  alt={product.name}
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-6 md:p-8 md:w-1/2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block bg-[#F0E6D9] text-[#8B5E3C] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {product.category.replace('-', ' ')}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold text-[#5A3E36] mb-2">
                    {product.name}
                  </h1>
                  <p className="text-2xl text-[#D2691E] font-bold mb-6">
                    {product.price}
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-semibold text-[#5A3E36] mb-3">Description</h3>
                <p className="text-gray-700">
                  {product.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onContactSeller(product);
                  }}
                  className="w-full bg-[#D2691E] hover:bg-[#8B5E3C] text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Seller</span>
                </button>
                
                <button
                  onClick={onBack}
                  className="w-full border border-[#D2691E] text-[#D2691E] hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Back to Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#333] mb-6">You May Also Like</h2>
          <div className="relative">
            <div className="relative">
              <div className="flex space-x-4 pb-6 overflow-x-auto scroll-smooth -mx-4 px-4" style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#C19A6B #f1f1f1',
                msOverflowStyle: 'none',
              }}>
                {products
                  .filter(p => p.id !== product.id) // Exclude current product
                  .map((item) => (
                    <div 
                      key={item.id} 
                      className="flex-none w-48 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                      onClick={() => onProductSelect(item)}
                    >
                      <div className="h-32 bg-gray-100 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm text-gray-800 mb-1 line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-[#D2691E] font-bold text-sm">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <style jsx>{`
                .overflow-x-auto::-webkit-scrollbar {
                  height: 6px;
                }
                .overflow-x-auto::-webkit-scrollbar-track {
                  background: #f1f1f1;
                  border-radius: 4px;
                }
                .overflow-x-auto::-webkit-scrollbar-thumb {
                  background: #C19A6B;
                  border-radius: 4px;
                }
                .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                  background: #8B5E3C;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
