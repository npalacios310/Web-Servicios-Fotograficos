import React from 'react';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-6 py-4">
      <Link to="/" className="flex items-center space-x-2 text-white">
        <Camera className="h-8 w-8" />
        <span className="text-2xl font-bold">FotoArt Studio</span>
      </Link>
      <div className="flex space-x-6 text-white">
        <a href="#servicios" className="hover:text-yellow-400 transition">Servicios</a>
        <a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a>
        <a href="#contacto" className="hover:text-yellow-400 transition">Contacto</a>
        <Link to="/admin" className="hover:text-yellow-400 transition">Admin</Link>
      </div>
    </nav>
  );
}