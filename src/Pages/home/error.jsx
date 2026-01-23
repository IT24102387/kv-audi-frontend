import { Link } from "react-router-dom";

export default function ErrorNotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-pink-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">
        
        <h1 className="text-7xl font-extrabold text-orange-500">404</h1>
        
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 mt-2">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300"
        >
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
}
