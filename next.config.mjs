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
      {
        protocol: "https",
        hostname: "www.revivalanimal.com",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "pet-health-content-media.chewy.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
