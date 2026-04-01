import Cart from "../Cart/Cart"; // ✅ correct component
import { useEffect, useState } from "react";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {products.map(product => (
          <Cart key={product.id} product={product} /> 
        ))
        }

      </div>
    </div>
  );
};

export default ProductSection;