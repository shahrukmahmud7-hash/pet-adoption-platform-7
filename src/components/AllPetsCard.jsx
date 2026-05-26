"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const AllPetsCard = ({ pet }) => {
  const { data: session } = authClient.useSession();
  const { _id, petName, imageUrl, age, gender, location, adoptionFee, breed } =
    pet;

  return (
    <div
      className="w-full max-w-sm mx-auto  bg-[#FFF8F3]  rounded-2xl
       shadow-md overflow-hidden hover:shadow-xl transition"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          width={400}
          height={250}
          alt={petName}
          className="w-full h-48 object-fill"
        />
        <span
          className={`absolute top-3 right-3 ${pet?.status === "Available" ? "bg-green-500" : "bg-red-500"} text-[#052e16] text-xs font-bold px-3 py-1 rounded-full`}
        >
          {pet?.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2 bg-[#0b251c] ">
        <h2 className="text-xl font-bold text-gray-400">{petName}</h2>

        <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm" >{breed}</p>
        <p className="text-gray-500 text-sm">
            {age} Years • {gender}
        </p>
       
    </div>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="text-pink-600 font-semibold">
          ${adoptionFee} Adoption Fee
        </p>
        <Separator />
        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          {pet?.status === "Adopted" && (
            <div className="flex-1 text-white  py-2 rounded-xl hover:bg-black transition text-center">
              This pet is adopted
            </div>
          )}
          {pet?.status === "Available" && (
            <Link
              href={session?.user?.email ? `/all-pets/${pet._id}` : "/login"}
              className="flex-1 border border-gray-300 py-2 rounded-xl
             hover:bg-black hover:text-white transition text-center"
            >
              View Details
            </Link>
          )}
          {pet?.status === "Available" && (
            <Link
              href={session?.user?.email ? `/all-pets/${pet._id}` : "/login"}
              className="flex-1 bg-pink-500 text-white py-2 
             rounded-xl hover:bg-pink-600 transition text-center"
            >
              Adopt Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPetsCard;
