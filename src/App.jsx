import { Suspense, useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar/Navbar';
import AiSection from '../components/AiSection/AiSection';
import ActiveUser from '../components/ActiveUser/ActiveUser'; 
import ProductCart from '../components/ProductCart/ProductCart';
import Pricing from '../components/Pricing/Pricing';
import Footer from '../components/Footer/Footer';

import ProductSection from '../components/ProductSection/ProductSection';


import NextPage from '../components/NextPage/NextPage';



  
const productsPromise =fetch('products.json')



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
  
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      

                  {/* nav bar     */}  
                  <Navbar></Navbar> <br />   <br />

                  {/* ai section   */}
                  <AiSection></AiSection>  

                  {/* active users section   */}
                  <ActiveUser></ActiveUser> 



                  {/* product cart section   */}
                     <ProductCart></ProductCart>



                   {/* product */}
                   

                   <ProductSection></ProductSection>

                   

                   


                  {/* next page cart   */}
                {/* <NextPage></NextPage>    */}
                
                

                  {/* pricing section   */}
                    <Pricing></Pricing>  





                  {/* Footer */}
                  <Footer></Footer> 
     

      




    </>
  );
};




















// Helper Component
const PriceCard = ({ title, price, features, featured = false }) => (
  <div className={`p-10 rounded-3xl border transition-all ${featured ? 'bg-purple-600 text-white scale-105 shadow-2xl border-purple-600' : 'bg-white border-slate-100 text-slate-900'}`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-4xl font-black">${price}</span>
      <span className={featured ? 'text-purple-200' : 'text-slate-400'}>/month</span>
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((f, i) => <li key={i} className="flex items-center gap-3 text-sm"><i className="fa-solid fa-circle-check"></i> {f}</li>)}
    </ul>
    <button className={`btn w-full rounded-2xl ${featured ? 'btn-white text-purple-600' : 'btn-outline border-slate-200'}`}>Get Started</button>
  </div>

   
);

export default App
