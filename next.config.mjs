/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "www.vidavetcare.com",
      },
      {
        protocol: "https",
        hostname: "www.simpsonspremium.com",
      },
      {
        protocol: "https",
        hostname: "assets.elanco.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.animalfunfacts.net",
      },
      {
        protocol: "https",
        hostname: "a-z-animals.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
