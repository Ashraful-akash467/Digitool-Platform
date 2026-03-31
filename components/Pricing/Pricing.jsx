import React from "react";
const Pricing = () => {
  return (
    
        <div>

            {/* 3steps section */}
            <section class="bg-white py-16 px-4 font-sans">
        <div class="max-w-6xl mx-auto text-center">
            
            <h2 class="text-4xl font-extrabold text-gray-900 mb-4">
            Get Started In 3 Steps
            </h2>
            <p class="text-gray-500 text-lg mb-12">
            Start using premium digital tools in minutes, not hours.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                01
                </span>
                <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">

                
                <img src="../project_assets/assets/user.png"
                alt="AI Tech"
                class="w-8 h-8 text-purple-600"/>

                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
                <p class="text-gray-500 leading-relaxed">
                Sign up for free in seconds. No credit card required to get started.
                </p>
            </div>

            <div class="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                02
                </span>
                <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="../project_assets/assets/package.png"
                alt="AI Tech"
                class="w-8 h-8 text-purple-600"/>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
                <p class="text-gray-500 leading-relaxed">
                Browse our catalog and select the tools that fit your needs.
                </p>
            </div>

            <div class="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                03
                </span>
                <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="../project_assets/assets/rocket.png"
                alt="AI Tech"
                class="w-8 h-8 text-purple-600"/>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
                <p class="text-gray-500 leading-relaxed">
                Download and start using your premium tools immediately.
                </p>
            </div>

            </div>
        </div>
            </section>

            <section class="bg-gray-100 py-20">
  
  <div class="max-w-6xl mx-auto px-6 text-center">
    
    {/* -- Title -- */}
    <h2 class="text-3xl font-bold text-gray-800">
      Simple, Transparent Pricing
    </h2>

    {/* -- Subtitle -- */}
    <p class="text-gray-500 mt-2 text-sm">
      Choose the plan that fits your needs. Upgrade or downgrade anytime.
    </p>

    {/* -- Pricing Cards -- */}
    <div class="mt-12 grid md:grid-cols-3 gap-6">
      
      {/* -- Starter -- */}
      <div class="bg-white p-6 rounded-xl shadow-sm text-left">
        <h3 class="text-lg font-semibold text-gray-800">Starter</h3>
        <p class="text-sm text-gray-400">Perfect for getting started</p>

        <h2 class="text-3xl font-bold mt-4">$0<span class="text-sm font-normal text-gray-500">/Month</span></h2>

        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Access to 10 free tools</li>
          <li>✔ Basic templates</li>
          <li>✔ Community support</li>
          <li>✔ 1 project per month</li>
        </ul>

        <button class="btn mt-6 w-full py-2 rounded-full bg-purple-600 text-white text-sm">
          Get Started Free
        </button>
      </div>

      {/* -- Pro (Highlighted) -- */}
      <div class="relative p-6 rounded-xl text-white text-left shadow-lg
                  bg-gradient-to-b from-purple-600 to-indigo-600">

        <span class="absolute top-[-10px] left-1/2 -translate-x-1/2 
                     bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
          Most Popular
        </span>

        <h3 class="text-lg font-semibold">Pro</h3>
        <p class="text-sm opacity-80">Best for professionals</p>

        <h2 class="text-3xl font-bold mt-4">$29<span class="text-sm font-normal">/Month</span></h2>

        <ul class="mt-4 space-y-2 text-sm">
          <li>✔ Access to all premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
          <li>✔ Unlimited projects</li>
          <li>✔ Cloud sync</li>
          <li>✔ Advanced analytics</li>
        </ul>

        <button class="btn mt-6 w-full py-2 rounded-full bg-white text-purple-600 text-sm font-medium">
          Start Pro Trial
        </button>
      </div>

      {/* -- Enterprise -- */}
      <div class="bg-white p-6 rounded-xl shadow-sm text-left">
        <h3 class="text-lg font-semibold text-gray-800">Enterprise</h3>
        <p class="text-sm text-gray-400">For teams and businesses</p>

        <h2 class="text-3xl font-bold mt-4">$99<span class="text-sm font-normal text-gray-500">/Month</span></h2>

        <ul class="mt-4 space-y-2 text-sm text-gray-600">
          <li>✔ Everything in Pro</li>
          <li>✔ Team collaboration</li>
          <li>✔ Custom integrations</li>
          <li>✔ Dedicated support</li>
          <li>✔ SLA guarantee</li>
          <li>✔ Custom branding</li>
        </ul>

        <button class="btn mt-6 w-full py-2 rounded-full bg-purple-600 text-white text-sm">
          Contact Sales
        </button>
      </div>

    </div>

  </div>

            </section>

            
        </div>
        );
        };

        export default Pricing;