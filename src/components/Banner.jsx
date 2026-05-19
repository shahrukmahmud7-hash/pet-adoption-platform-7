"use client";

import HeroSliderImage from "./HeroSliderImage";
import Link from "next/link";

const PetHero = () => {
  return (
    <div className="w-full bg-[#FFF8F3] 
     rounded-2xl p-10 shadow-lg border border-gray-200">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 
      lg:grid-cols-2 gap-10 items-center">

        {/* LEFT - SLIDER */}
        <HeroSliderImage />

        {/* RIGHT BANNER */}
        <div className="bg-gradient-to-br from-white via-gray-50
         to-gray-100 rounded-2xl p-10 shadow-lg border border-gray-200">

          <h1 className="text-4xl font-bold leading-snug text-gray-900">
            Give a Pet a <br />
            <span className="text-orange-600">Second Chance</span>
          </h1>

          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Every pet deserves a loving home. Adoption not only saves lives but also
            brings unconditional joy to your family. Explore thousands of pets waiting
            for someone like you.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-gray-600">
            <div className="bg-white p-3 rounded-lg shadow-sm">🐾 Verified Adoption Center</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">❤️ Safe & Trusted Process</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">🏠 Thousands of Pets</div>
            <div className="bg-white p-3 rounded-lg shadow-sm">🌍 Nationwide Listings</div>
          </div>

          <div className="mt-8 flex gap-4">
            <div
         
              className="bg-orange-600 hover:bg-orange-700 
              text-white px-6 py-3 rounded-full font-medium transition"
            >
              Adopt Now
            </div>

            <div
            
              className="bg-gray-900 hover:bg-black 
              text-white px-6 py-3 rounded-full font-medium transition"
            >
              Donate
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PetHero; 