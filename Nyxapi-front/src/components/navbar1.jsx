import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-lg p-5 rounded-full max-w-5xl mx-auto flex justify-between items-center shadow-lg absolute top-6 inset-x-0 z-20">
      {/* Logo */}
      <div className="text-white text-xl font-semibold tracking-wide">NyxAPI</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-300">
        <a href="#how-it-works" className="hover:text-white">Home</a>
        <a href="#products" className="hover:text-white">Subscription</a>
        <a href="#about" className="hover:text-white">About Us</a>
        <a href="#resources" className="hover:text-white">Resources</a>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
