import React from 'react';


const Navbar = () => {
    return (
    
        <nav class="w-full bg-white border-b border-teal-400     fixed top-0 left-0  z-50">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* -- Logo -- */}
    <div class="text-2xl font-bold text-purple-600">
      DigiTools
    </div>

    {/* -- Menu -- */}
    <ul class="hidden md:flex items-center gap-8 text-gray-600 font-medium">
      <li><a href="#" class="hover:text-purple-600">Products</a></li>
      <li><a href="#" class="hover:text-purple-600">Features</a></li>
      <li><a href="#" class="hover:text-purple-600">Pricing</a></li>
      <li><a href="#" class="hover:text-purple-600">Testimonials</a></li>
      <li><a href="#" class="hover:text-purple-600">FAQ</a></li>
    </ul>

    {/* -- Right Side -- */}
    <div class="flex items-center gap-5">

      {/* Cart Icon */}
      <ul><a className='btn'><i class="fa-solid fa-cart-shopping"></i></a></ul>

      {/* Login */}
      <a href="#" class="btn text-gray-600 hover:text-purple-600 font-medium">
        Login
      </a>

      {/* Button */}
      <a href="#" class="btn bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-medium shadow-md transition">
        Get Started
      </a>

    </div>
  </div>
    </nav>
    
    );
};

export default Navbar;       




