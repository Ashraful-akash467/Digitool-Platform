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
      <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">0 items</span>
          
        </div>
      </div>
    </div>
  </div>
    

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




