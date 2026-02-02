export default function ProductCard({ item }) {
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Product Image */}
      <img
        src={item.image?.[0]}
        alt={item.name}
        className="w-full h-44 object-cover"
      />

      {/* Card Body */}
      <div className="p-4 space-y-2">
        
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-500 capitalize">
          Category: {item.category}
        </p>

        {/* Price */}
        <p className="text-lg font-bold text-green-600">
          Rs. {item.price}
        </p>

        {/* Availability */}
        <span
          className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
            item.availability
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.availability ? "Available" : "Out of Stock"}
        </span>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {item.description}
        </p>

        {/* Button */}
        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition">
          View Details
        </button>
      </div>
    </div>
  );
}
