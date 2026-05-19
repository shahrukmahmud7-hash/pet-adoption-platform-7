import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import petLogoImg from "../../public/asset/pet-care-logo-2.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#0B1220] text-white">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          
          <div className="flex items-center gap-2 mb-3">
            <Image
              src={petLogoImg}
              alt="logo"
              width={35}
              height={35}
              className="rounded-full"
            />
            <h2 className="font-bold text-xl text-emerald-400">
              PetWorld
            </h2>
          </div>

          <p className="text-sm text-gray-300">
            Helping pets find caring homes while bringing families the joy of true companionship.
          </p>

          <ul className="flex flex-col gap-3 mt-6 text-sm text-gray-300 items-center sm:items-start">
            <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition">
              <FaFacebookSquare /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition">
              <FaSquareInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition">
              <BsTwitterX /> Twitter
            </li>
          </ul>
        </div>

        {/* Platform */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-semibold mb-3">Platform</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Explore Pets</p>
            <p>Share a Pet</p>
            <p>Adoption Requests</p>
            <p>Your Pet Posts</p>
            <p>My Paw Listings</p>
           
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-semibold mb-3">Company</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>About Us</p>
            <p>Pet Adoption</p>
            <p>Success Stories</p>
            <p>Support & Care</p>
            <p>Get in Touch</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-semibold mb-3">Contact Us</h3>

          <div className="space-y-2 text-sm text-gray-300">
            <p>Email: support@petworld.com</p>
            <p>Phone: +880 1234 567890</p>
            <p>Location: Rajshahi, Bangladesh</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="bg-[#020617] border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} PetWorld. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer; 