import { useState, useEffect } from "react";
import { FaHeadphones, FaMusic, FaCompactDisc, FaStar, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const heroImages = [
  "https://dac.digital/wp-content/uploads/2024/02/enhanced-audio-quality-optimized.jpeg",
  "https://t3.ftcdn.net/jpg/08/78/42/84/360_F_878428485_cd69ONL2yQ51Kr9AHvYDPCMeKmW6zHnD.jpg",
  "https://img.freepik.com/free-photo/close-up-artist-making-music_23-2149199987.jpg?semt=ais_hybrid&w=740&q=80",
];

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "Amazing quality headphones! The rental process was seamless." },
  { name: "John D.", rating: 5, text: "Perfect for my podcast setup. Will definitely rent again!" },
  { name: "Emily R.", rating: 5, text: "Great customer service and top-notch audio equipment." },
];

const featuredProducts = [
  { name: "Sony WH-1000XM5", category: "Headphones", price: "$15/day", image: "🎧" },
  { name: "Bose QuietComfort", category: "Headphones", price: "$12/day", image: "🎧" },
  { name: "Audio-Technica AT2020", category: "Microphone", price: "$8/day", image: "🎤" },
  { name: "JBL Flip 6", category: "Speaker", price: "$10/day", image: "🔊" },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const nextImage = () => {
    setIsAutoplay(false);
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setIsAutoplay(false);
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Slideshow */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Background Images */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
        >
          <FaChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
        >
          <FaChevronRight className="text-2xl" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-white px-8 md:px-16 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Rent Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Favorite Audio
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-200">
              Experience premium sound quality with our curated collection of headphones, speakers, and music gear.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transition transform hover:scale-105 flex items-center gap-2">
                <FaPlay className="text-sm" />
                Browse Collection
              </button>
              <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 transition transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImage(index);
                setIsAutoplay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Audio Rentals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional-grade equipment for every audio need
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FaHeadphones,
              title: "Premium Headphones",
              desc: "Studio-quality headphones from leading brands for immersive listening.",
              gradient: "from-blue-500 to-indigo-600"
            },
            {
              icon: FaMusic,
              title: "Music Gear",
              desc: "Professional instruments and recording equipment for your projects.",
              gradient: "from-purple-500 to-pink-600"
            },
            {
              icon: FaCompactDisc,
              title: "Audio Collections",
              desc: "Extensive library of music and sound resources for creators.",
              gradient: "from-indigo-500 to-purple-600"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Featured Equipment
            </h2>
            <p className="text-gray-600 text-lg">
              Most popular rentals this month
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold text-xl">{product.price}</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by thousands of audio enthusiasts
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <p className="font-bold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Amazing Sound?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Sign up today and get 20% off your first rental. No commitment, cancel anytime.
          </p>
          <button className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-full shadow-2xl hover:bg-gray-100 transition transform hover:scale-105 text-lg">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Audio Rentals. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}