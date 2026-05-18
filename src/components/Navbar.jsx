import Image from "next/image";
import Link from "next/link";
import React from "react";
import petLogo from '../../public/asset/pet-logo.jpg'

const Navbar = () => {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo + Site Name */}
        <div className="flex items-center gap-2">
          <Image
            src={petLogo}
            width={40}
            height={40}
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-xl font-bold text-gray-800">
            PetWorld
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/all-pets" className="hover:text-blue-500">All Pets</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header> 
  );
};

export default Navbar; 