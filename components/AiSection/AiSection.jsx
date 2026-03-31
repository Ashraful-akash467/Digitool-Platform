import React from "react";

const AiSection = () => {
    return (

        

        <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

    {/* <!-- Left Content --> */}
    <div>
      <span class="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
        <i class="fa-regular fa-circle-dot"></i>  New: AI-Powered Tools Available
      </span>

      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
        Supercharge Your <br/> Digital Workflow
      </h1>

      <p class="text-gray-500 mb-6">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. 
        Start creating faster today.
      </p>

      <a href="#" class="text-purple-600 font-medium mb-6 inline-block">
        Explore Products
      </a>

      <div class="flex gap-4 mt-4">
        <button class="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition">
          Explore Products
        </button>

        <button class="btn border border-purple-500 text-purple-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-50 transition">
          ▶ Watch Demo
        </button>
      </div>
    </div>

    {/* <!-- Right Image --> */}
    <div class="flex justify-center justify-end">
      <img src="../project_assets/assets/banner.png"
           alt="AI Tech"
           class="rounded-2xl shadow-lg w-full max-w-md object-cover opacity-80"/>
    </div>

        </section>


    );
};
export default AiSection;