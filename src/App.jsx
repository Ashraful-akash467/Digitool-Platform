import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

   
     <nav class="w-full bg-white border-b border-teal-400">
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















      <section class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

    {/* <!-- Left Content --> */}
    <div>
      <span class="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
        ● New: AI-Powered Tools Available
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

     

      

     
    </>
  )
}

export default App
