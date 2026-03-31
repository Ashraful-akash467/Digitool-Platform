import React from "react";
const ProductCart = () => {
  return (
    
    <div>


    <section class="bg-gray-100 py-20 flex justify-center">
  
  <div class="bg-gray-200 w-full max-w-4xl text-center py-16 px-6 rounded-md shadow-sm">
    
    {/* -- Title -- */}
    <h1 class="text-3xl font-bold text-gray-800">
      Premium Digital Tools
    </h1>

    {/* -- Subtitle -- */}
    <p class="text-gray-500 mt-2 text-sm">
      Choose from our curated collection of premium digital products designed 
      <br class="hidden sm:block"/>
      to boost your productivity and creativity.
    </p>

    {/* -- Buttons -- */}
    <div class="mt-6 flex justify-center gap-3">
      
      {/* -- Active Button -- */}
      <button class="btn px-5 py-2 bg-purple-600 text-white text-sm rounded-full shadow-md">
        Products
      </button>

      {/* -- Inactive Button -- */}
      <button class="btn px-5 py-2 bg-white text-gray-700 text-sm rounded-full border border-gray-300">
        Cart (2)
      </button>

    </div>

  </div>

    </section>


    <section class="bg-gray-50 py-16 px-4">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        
        <div class="flex justify-between items-start mb-6">
          <div class="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center text-2xl">
            📝 </div>
          <span class="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Best Seller
          </span>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">AI Writing Pro</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-6">
            Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
          </p>
          
          <div class="flex items-baseline mb-6">
            <span class="text-3xl font-extrabold text-gray-900">$29</span>
            <span class="text-gray-400 font-medium ml-1">/Mo</span>
          </div>

          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-sm text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Unlimited AI generations
            </li>
            <li class="flex items-center text-sm text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              50+ writing templates
            </li>
            <li class="flex items-center text-sm text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Grammar checker
            </li>
          </ul>
        </div>

        <button class="w-full bg-[#8B2CFF] hover:bg-[#7a25e0] text-white font-bold py-4 rounded-2xl transition-all duration-200">
          Buy Now
        </button>
      </div>
      </div>
  </div>
      </section>

    </div>

  );
};

export default ProductCart;