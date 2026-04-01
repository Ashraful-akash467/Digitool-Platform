const Cart = ({ product }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">

      {/* Top */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
          {product.icon}
        </div>

        {product.tag && (
          <span className={`text-xs font-semibold px-3 py-1 rounded-full
            ${product.tagType === "warning" && "bg-yellow-100 text-yellow-600"}
            ${product.tagType === "secondary" && "bg-blue-100 text-blue-600"}
            ${product.tagType === "accent" && "bg-green-100 text-green-600"}
          `}>
            {product.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-gray-400 text-sm ml-1">
            /{product.period === "Monthly" ? "Mo" : "One-Time"}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition">
        Buy Now
      </button>
    </div>
  );
};
export default Cart;