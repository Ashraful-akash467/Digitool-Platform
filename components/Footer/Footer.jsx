import React from "react";

const Footer = () => {
  return (

    <div>
             {/* footer section */}

      <section class="bg-[#8B2CFF] py-20 px-4 text-center text-white">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
      Ready To Transform Your Workflow?
    </h2>
    <p class="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
      Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
    </p>
    
    <div class="flex flex-wrap justify-center gap-4 mb-6">
      <button class="btn bg-white text-[#8B2CFF] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
        Explore Products
      </button>
      <button class="bg-transparent border-2 border-white/40 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all btn">
        View Pricing
      </button>
    </div>
    
    <p class="text-purple-200 text-sm">
      14-day free trial • No credit card required • Cancel anytime
    </p>
  </div>
      </section>

      <footer class="bg-[#0F172A] text-white pt-20 pb-10 px-4">
  <div class="max-w-7xl mx-auto">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
      <div class="lg:col-span-2">
        <h3 class="text-3xl font-extrabold mb-6">DigiTools</h3>
        <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-6">Product</h4>
        <ul class="space-y-4 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white transition">Features</a></li>
          <li><a href="#" class="hover:text-white transition">Pricing</a></li>
          <li><a href="#" class="hover:text-white transition">Templates</a></li>
          <li><a href="#" class="hover:text-white transition">Integrations</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-6">Company</h4>
        <ul class="space-y-4 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white transition">About</a></li>
          <li><a href="#" class="hover:text-white transition">Blog</a></li>
          <li><a href="#" class="hover:text-white transition">Careers</a></li>
          <li><a href="#" class="hover:text-white transition">Press</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-lg mb-6">Resources</h4>
        <ul class="space-y-4 text-gray-400 text-sm mb-8">
          <li><a href="#" class="hover:text-white transition">Documentation</a></li>
          <li><a href="#" class="hover:text-white transition">Help Center</a></li>
          <li><a href="#" class="hover:text-white transition">Community</a></li>
          <li><a href="#" class="hover:text-white transition">Contact</a></li>
        </ul>
        
        <h4 class="font-bold text-lg mb-4">Social Links</h4>
        <div class="flex gap-3">
          <div class="w-8 h-8 bg-white text-[#0F172A] rounded-full flex items-center justify-center cursor-pointer">
            <i class="fa-brands fa-instagram"></i>  </div>
          <div class="w-8 h-8 bg-white text-[#0F172A] rounded-full flex items-center justify-center cursor-pointer">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div class="w-8 h-8 bg-white text-[#0F172A] rounded-full flex items-center justify-center cursor-pointer text-xl">
            𝕏
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-gray-500 text-xs">
        © 2026 Digitools. All rights reserved.
      </p>
      <div class="flex gap-6 text-gray-500 text-xs">
        <a href="#" class="hover:text-white">Privacy Policy</a>
        <a href="#" class="hover:text-white">Terms of Service</a>
        <a href="#" class="hover:text-white">Cookies</a>
      </div>
    </div>
    
  </div>
      </footer>
    </div>

        );
        };

export default Footer;