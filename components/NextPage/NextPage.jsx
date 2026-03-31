import React from "react";
const NextPage = () => {
  return (

    
    <div>
    
    {/* next page cart */}

            
            <section class="bg-white py-16 px-4 font-sans">
        <div class="max-w-3xl mx-auto">
            
            <div class="text-center mb-10">
            <h2 class="text-3xl font-extrabold text-gray-900 mb-3">Premium Digital Tools</h2>
            <p class="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
            </div>

            <div class="flex justify-center mb-10">
            <div class="bg-gray-50 p-1 rounded-full flex items-center border border-gray-100">
                <button class="px-6 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
                Products
                </button>
                <button class="px-6 py-2 text-sm font-bold text-white bg-[#8B2CFF] rounded-full shadow-lg shadow-purple-200">
                Cart (2)
                </button>
            </div>
            </div>

            <div class="bg-white border border-gray-100 rounded-3xl shadow-sm p-8">
            <h3 class="text-lg font-bold text-gray-900 mb-6">Your Cart</h3>

            <div class="space-y-4 mb-8">
                
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    📝
                    </div>
                    <div>
                    <h4 class="text-sm font-bold text-gray-900">AI Writing Pro</h4>
                    <p class="text-xs text-gray-400 font-medium">$29</p>
                    </div>
                </div>
                <button class="text-xs font-bold text-red-400 hover:text-red-500 transition">Remove</button>
                </div>

                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    🎨
                    </div>
                    <div>
                    <h4 class="text-sm font-bold text-gray-900">Design Templates Pack</h4>
                    <p class="text-xs text-gray-400 font-medium">$49</p>
                    </div>
                </div>
                <button class="text-xs font-bold text-red-400 hover:text-red-500 transition">Remove</button>
                </div>
            </div>

            <div class="flex justify-between items-center mb-8 px-2">
                <span class="text-gray-400 text-sm font-medium">Total:</span>
                <span class="text-2xl font-extrabold text-gray-900">$78</span>
            </div>

            <button class="w-full bg-[#8B2CFF] hover:bg-[#7a25e0] text-white text-sm font-bold py-4 rounded-2xl transition-all shadow-lg shadow-purple-100">
                Proceed To Checkout
            </button>
            </div>

        </div>
            </section>

    </div>
    


  );
};
export default NextPage;