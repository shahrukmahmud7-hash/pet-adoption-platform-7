"use client";
import { authClient } from "@/lib/auth-client";
import { Delete, Edit3, Eye, Trash2, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyRequestPage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const loadPets = async () => {
      const res = await fetch("https://pet-adoption-server-7.vercel.app/my-request", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.session?.token}`,
        },
      });
      const data = await res.json();
      setPets(data);
    };
    loadPets();
  }, [session]);

  const handleCancelRequest = (petId) => {
    fetch(`https://pet-adoption-server-7.vercel.app/cancel-request/${petId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.session?.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const updatedPets = pets.filter((pet) => pet.petId !== petId);
          setPets(updatedPets);
          toast.success("Request canceled successfully!");
        }
      });
  };

  return (
   <div className="max-w-7xl mx-auto from-[#0F172A] via-[#111827] to-[#0B1220] p-4 sm:p-6">
  <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-black">
    My Request
  </h1>

  {/* REQUEST CARDS */}
  {pets.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pets.map((pet) => (
        <div key={pet._id} className="w-full">
          <div className="bg-white shadow-2xl overflow-hidden rounded-3xl h-full flex flex-col">
            
            {/* IMAGE */}
            <div className="relative w-full h-56">
              <Image
                src={pet?.pet?.imageUrl}
                width={400}
                height={300}
                alt={pet?.pet?.petName}
                className="w-full h-full object-cover"
              />

              <span
                className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white
                ${
                  pet?.status === "Pending"
                    ? "bg-yellow-500"
                    : pet?.status === "Approved"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {pet?.status}
              </span>
            </div>

            {/* CONTENT */}
            <div className=" p-5 bg-[#0b251c] text-white flex flex-col flex-grow">
              
              {/* TOP */}
              <div className="flex justify-between items-start mb-3 gap-3">
                <h2 className="text-xl font-bold break-words">
                  {pet?.pet?.petName}
                </h2>

                <span className="text-[#f43f5e] font-bold whitespace-nowrap">
                  ${pet?.pet?.adoptionFee}
                </span>
              </div>

              {/* INFO */}
              <div className="flex flex-col gap-2 text-sm sm:text-base mb-5 text-gray-200">
                <span>
                  Requested Date: {pet?.requestDate}
                </span>

                <span>
                  Pickup Date: {pet?.pickupDate}
                </span>
              </div>

              {/* BUTTONS */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button
                  onClick={() => router.push(`/all-pets/${pet?.petId}`)}
                  className="btn btn-sm bg-[#1e293b] border-none hover:bg-[#0f172a] text-white
                   rounded-xl flex items-center gap-2"
                >
                  <Eye size={16} />
                  View
                </button>

                {pet?.status === "Pending" && (
                  <button
                    onClick={() => handleCancelRequest(pet?.petId)}
                    className="btn btn-sm btn-outline text-white rounded-xl flex items-center gap-2"
                  >
                    <Delete size={16} />
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    /* EMPTY STATE */
    <div className="w-full flex items-center justify-center py-16">
      <div className="bg-white border border-gray-200 shadow-2xl 
      rounded-3xl p-8 max-w-md w-full text-center">
        
        <div className="flex justify-center mb-5">
          <div className="bg-gray-100 p-5 rounded-full text-5xl">
            📭
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          No Request Found
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
          You have not added any request yet.
          <br />
          Click below to create a new request.
        </p>

        <button
          onClick={() => router.push("/all-pets")}
          className="bg-[#1e293b] hover:bg-[#0f172a] text-white px-6 py-3
           rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
        >
          + Add Request
        </button>
      </div>
    </div>
  )}
</div>
  );
};

export default MyRequestPage;
