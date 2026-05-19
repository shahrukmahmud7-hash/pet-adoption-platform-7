"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/asset/banner1.jpg",
  "/asset/dog-2.avif",
  "/asset/cat-dog.avif",

];

const HeroSliderImage = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl 
    overflow-hidden shadow-2xl border border-white/10">

      {/* glow overlay (premium look) */}
      <div className="absolute inset-0 bg-gradient-to-t
       from-black/60 via-transparent to-black/20 z-10"></div>

      <Image
        src={images[index]}
        alt="pet banner"
        fill
        priority
        className={`object-fill scale-110 
        transition-all duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* text overlay (optional style boost) */}
      <div className="absolute bottom-6 left-6 z-20 text-white">
        <h2 className="text-2xl font-bold">Find Your Best Friend 🐾</h2>
        <p className="text-sm text-gray-200">
          Every pet deserves love and a home
        </p>
      </div>

    </div>
  );
};

export default HeroSliderImage;