import React from 'react';


const ActiveUser = () => {
    return (
    
    <section class="bg-gradient-to-r from-purple-600 to-purple-500 py-10">
  <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">

    {/* -- Item 1 -- */}
    <div class="py-4 md:border-r border-white/30">
      <h2 class="text-3xl font-bold">50K+</h2>
      <p class="text-sm opacity-80 mt-1">Active Users</p>
    </div>

    {/* -- Item 2 -- */}
    <div class="py-4 md:border-r border-white/30">
      <h2 class="text-3xl font-bold">200+</h2>
      <p class="text-sm opacity-80 mt-1">Premium Tools</p>
    </div>

    {/* -- Item 3 -- */}
    <div class="py-4">
      <h2 class="text-3xl font-bold">4.9</h2>
      <p class="text-sm opacity-80 mt-1">Rating</p>
    </div>

  </div>
    </section>
        
    );
};

export default ActiveUser; 