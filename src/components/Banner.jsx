'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import bannerImage from '../../public/asset/banner1.jpg';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-100 via-white to-amber-100 min-h-[90vh] flex items-center">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-7 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-5 py-2 bg-orange-500/10 text-orange-600 rounded-full font-semibold text-sm tracking-wide"
            >
              🐾 Find Your Perfect Companion Today
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Give a Pet a <span className="text-orange-500">Loving Home</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Discover adorable pets waiting for a caring family. Adopt dogs,
              cats, birds, rabbits, and more through our trusted pet adoption platform.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-2xl text-white font-semibold shadow-lg"
              >
                Adopt Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-2xl font-semibold"
              >
                Explore Pets
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { number: "500+", label: "Pets Adopted" },
                { number: "120+", label: "Happy Families" },
                { number: "24/7", label: "Support" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-md text-center"
                >
                  <h2 className="text-2xl font-bold text-orange-500">
                    {item.number}
                  </h2>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full"></div>

            <Image
              src={bannerImage}
              width={500}
              height={500}
              alt="Pet Banner"
              className="relative z-10 w-full max-w-xl drop-shadow-2xl"
            />

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4 z-20"
            >
              <Image
                src={bannerImage}
                width={56}
                height={56}
                alt="Dog"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">Charlie</h3>
                <p className="text-sm text-gray-500">
                  Looking for a loving home ❤️
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;