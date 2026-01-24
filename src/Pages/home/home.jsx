import { useState, useEffect } from "react";
import { FaHeadphones, FaMusic, FaCompactDisc } from "react-icons/fa";

const heroImages = [
  "https://dac.digital/wp-content/uploads/2024/02/enhanced-audio-quality-optimized.jpeg",
  "https://t3.ftcdn.net/jpg/08/78/42/84/360_F_878428485_cd69ONL2yQ51Kr9AHvYDPCMeKmW6zHnD.jpg",
  "https://img.freepik.com/free-photo/close-up-artist-making-music_23-2149199987.jpg?semt=ais_hybrid&w=740&q=80",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    },6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen font-sans">
      {/* Hero Section with Slideshow */}
      <div
        className="w-full h-[500px] relative flex flex-col justify-center items-center text-center text-white px-4 transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 transition-all duration-1000"></div>

        {/* Text */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4">Rent Your Favorite Audio!</h1>
          <p className="text-lg max-w-xl mb-6">
            Explore top-quality headphones, speakers, and music gear for rent. Experience sound like never before.
          </p>
          <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition">
            Browse Audio
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Audio Rentals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <FaHeadphones className="text-indigo-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Headphones</h3>
            <p>Rent premium headphones for your personal or professional use.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <FaMusic className="text-indigo-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Music Gear</h3>
            <p>High-quality instruments and equipment available for short-term rental.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <FaCompactDisc className="text-indigo-600 text-6xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audio Discs</h3>
            <p>Access a library of music CDs and audio collections for your projects.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Amazing Sound?</h2>
        <p className="mb-6 max-w-xl mx-auto">Sign up today and get exclusive discounts on your first rental.</p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
