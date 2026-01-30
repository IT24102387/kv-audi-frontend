import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaHeadphones } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/items", label: "Items" },
        { to: "/gallery", label: "Gallery" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img 
                                src="download.png" 
                                alt="logo" 
                                className="w-14 h-14 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300" 
                            />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                                Audio Rentals
                                <FaHeadphones className="text-yellow-300" />
                            </h1>
                            <p className="text-xs text-white/80">Premium Sound Equipment</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className="relative px-6 py-2 text-white font-semibold text-lg group overflow-hidden rounded-lg"
                            >
                                <span className="relative z-10 group-hover:text-indigo-600 transition-colors duration-300">
                                    {link.label}
                                </span>
                                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white text-3xl focus:outline-none hover:scale-110 transition-transform"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden bg-indigo-700 overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col px-4 py-4 space-y-2">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white font-semibold text-lg py-3 px-4 rounded-lg hover:bg-white/20 transition-colors duration-300 border-b border-white/10"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button className="bg-white text-indigo-600 font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-2">
                        Get Started
                    </button>
                </nav>
            </div>
        </header>
    );
}