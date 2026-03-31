import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar/Navbar';
import AiSection from '../components/AiSection/AiSection';
import ActiveUser from '../components/ActiveUser/ActiveUser'; 
import ProductCart from '../components/ProductCart/ProductCart';
import Pricing from '../components/Pricing/Pricing';
import Footer from '../components/Footer/Footer';

import NextPage from '../components/NextPage/NextPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   

      {/* nav bar */}
      <Navbar></Navbar>

      {/* ai section */}
      <AiSection></AiSection>

      {/* active users section */}
      <ActiveUser></ActiveUser>

      {/* product cart section */}
      <ProductCart></ProductCart>

      {/* pricing section */}
    
      <Pricing></Pricing>

      {/* next page cart */}
      {/* <NextPage></NextPage> */}

      {/* Footer */}
      <Footer></Footer>
     
    </>
  )
}

export default App
