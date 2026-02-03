// import { Link } from 'react-router'
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
 <header className="fixed top-0 left-0 w-full z-50  bg-sky-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              ProgHive
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-rose-600 transition">
              Home
            </a>
            <a href="#" className="text-white hover:text-rose-600 transition">
              Services
            </a>
            <a href="#" className="text-white hover:text-rose-600 transition">
              Portfolio
            </a>
            <a href="#" className="text-white hover:text-rose-600 transition">
              Contact
            </a>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-rose-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              Portfolio
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition">
              Contact
            </a>

            <a
              href="#"
              className="mt-4 bg-rose-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>

  )
}

export default Header