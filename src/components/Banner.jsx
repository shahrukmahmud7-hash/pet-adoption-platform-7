'use client';

import Image from "next/image";
import bannerImage from '../../public/asset/banner1.jpg'

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-100
     via-white to-amber-100 min-h-[90vh] flex items-center">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-7 text-center lg:text-left">
            <div className="inline-block px-5 py-2 bg-orange-500/10 text-orange-600
             rounded-full font-semibold text-sm tracking-wide">
              🐾 Find Your Perfect Companion Today
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Give a Pet a <span className="text-orange-500">Loving Home</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover adorable pets waiting for a caring family. Adopt dogs,
              cats, birds, rabbits, and more through our trusted pet adoption
              platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 transition-al
              l duration-300 rounded-2xl text-white font-semibold shadow-lg hover:scale-105">
                Adopt Now
              </button>

              <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500
               hover:text-white transition-all duration-300 rounded-2xl font-semibold">
                Explore Pets
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0"> 
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-md text-center">
                <h2 className="text-2xl font-bold text-orange-500">500+</h2>
                <p className="text-gray-600 text-sm">Pets Adopted</p>
              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-md text-center">
                <h2 className="text-2xl font-bold text-orange-500">120+</h2>
                <p className="text-gray-600 text-sm">Happy Families</p>
              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-md text-center">
                <h2 className="text-2xl font-bold text-orange-500">24/7</h2>
                <p className="text-gray-600 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full"></div>

            <Image
              src={bannerImage}
              width={500}
              height={500}
              alt="Pet Banner"
              className="relative z-10 w-full max-w-xl drop-shadow-2xl "
            />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4 z-20">
              <Image
                src={bannerImage}
                width={56}
                height={56}
                alt="Dog"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Charlie</h3>
                <p className="text-sm text-gray-500">Looking for a loving home ❤️</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;