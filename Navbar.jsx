import React from "react";

function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Jay Ambe Restaurant</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#menu" className="hover:underline">Menu</a></li>
        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;