import Link from "next/link";
import Image from "next/image";
import { Separator } from "@heroui/react";


const AllPetsCard = ({ pet }) => {

   const { _id, petName, imageUrl, age, gender, location, adoptionFee, breed } = pet;

    return (
     <div className="w-full max-w-sm mx-auto  bg-[#FFF8F3]  rounded-2xl
       shadow-md overflow-hidden hover:shadow-xl transition">
     
           {/* Image */}
           <Image
             src={imageUrl}
             width={400}
             height={250}
             alt={petName}
             className="w-full h-48 object-fill"
           />
     
           {/* Content */}
           <div className="p-5 space-y-2 bg-[#0b251c] ">
             <h2 className="text-xl font-bold text-gray-400">
               {petName}
             </h2>
     
             <p className="text-gray-500 text-sm">
               {breed} • {age} Years • {gender}
             </p>
             <p className="text-gray-500 text-sm">
               {location}
             </p>
             <p className="text-pink-600 font-semibold">
               ${adoptionFee} Adoption Fee
             </p>
                   <Separator/>
             {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <Link
             href={`/all-pets/${pet._id}`}
            className="flex-1 border border-gray-300 py-2 rounded-xl
             hover:bg-black hover:text-white transition text-center"
            >
                 View Details
             </Link>

             <button className="flex-1 bg-pink-500 text-white py-2 
             rounded-xl hover:bg-pink-600 transition">
                 Adopt Now
               </button>
             </div>
     
           </div>
         </div>
    );
};

export default AllPetsCard;