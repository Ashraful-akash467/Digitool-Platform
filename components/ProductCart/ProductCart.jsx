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
      <button 
          onClick={() => setNextPage(true)} 
          className="btn px-5 py-2 bg-purple-600 text-white text-sm rounded-full shadow-md"
        >
          Products
        </button>

      {/* -- Inactive Button -- */}
      <button class="btn px-5 py-2 bg-white text-gray-700 text-sm rounded-full border border-gray-300">
        Cart (2)
      </button>

    </div>

  </div>

    </section>


    

    </div>

  );
};

export default ProductCart;