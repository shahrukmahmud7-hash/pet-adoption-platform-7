"use client";

import { Eye, Edit3, Users, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import RequestModal from "@/components/RequestModal";
import Swal from "sweetalert2";

const MyListingsPage = () => {
  const [isRefetch, setIsRefetch] = useState(false);
  const [requestModalId, setRequestModalId] = useState(null);
  const { data: session } = authClient.useSession();
  const [pets, setPets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadPets = async () => {
      const res = await fetch("http://localhost:8000/my-listing", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.session?.token}`,
        },
      });
      const data = await res.json();
      setPets(data);
    };
    loadPets();
  }, [session, isRefetch]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:8000/pet/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setPets(pets.filter((p) => p._id !== id));
        }
      }
    });
  };

  return (
    <div className="p-6">
      {requestModalId && (
        <RequestModal
          setIsRefetch={setIsRefetch}
          requestId={requestModalId}
          setRequestModalId={setRequestModalId}
        />
      )}
    
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Total Listings */}
  <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-md flex flex-col items-center justify-center">
    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mb-3">
      <span className="text-pink-400 text-lg">📋</span>
    </div>
    <h2 className="text-gray-400 text-sm">Total Listings</h2>
    <p className="text-2xl font-bold text-white">{pets.length}</p>
  </div>

  {/* Available Pets */}
  <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-md flex flex-col items-center justify-center">
    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
      <span className="text-green-400 text-lg">🐾</span>
    </div>
    <h2 className="text-gray-400 text-sm">Available</h2>
    <p className="text-2xl font-bold text-white">
      {pets?.filter((p) => p.status === "Available").length}
    </p>
  </div>

  {/* Adopted Pets */}
  <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 shadow-md flex flex-col items-center justify-center">
    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mb-3">
      <span className="text-red-400 text-lg">❤️</span>
    </div>
    <h2 className="text-gray-400 text-sm">Adopted</h2>
    <p className="text-2xl font-bold text-white">
      {pets?.filter((p) => p.status === "Adopted").length}
    </p>
  </div>
</div>

      <div className=" max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-3  gap-4">
        {pets.map((pet) => (
          <div key={pet._id} className="p-3 rounded-lg">
            <div className="card w-80 text-white shadow-xl overflow-hidden rounded-2xl">
              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={pet.imageUrl}
                  width={400}
                  height={300}
                  alt={pet.petName}
                  className="w-full h-full object-fill rounded-2xl"
                />

                <span
                  className={`absolute top-3 right-3 ${pet?.status === "Available" ? "bg-green-500" : "bg-red-500"} text-[#052e16] text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {pet?.status}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 bg-[#0b251c]">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-xl font-bold">{pet.petName}</h2>
                  <span className="text-[#f43f5e] font-bold">
                    ${pet.adoptionFee}
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => router.push(`/all-pets/${pet._id}`)}
                    className="btn btn-sm bg-[#1e293b] text-white rounded-xl flex items-center gap-2"
                  >
                    <Eye size={16} />
                    View
                  </button>

                  {/* EDIT */}
                  <button
                    onClick={() =>
                      router.push(`/dashboard/add-pet?edit=${pet._id}`)
                    }
                    className="btn btn-sm bg-[#1e293b] text-white rounded-xl flex items-center gap-2"
                  >
                    <Edit3 size={16} />
                    Edit
                  </button>

                  <button
                    onClick={() => setRequestModalId(pet?._id)}
                    className="btn btn-sm btn-outline text-white rounded-xl flex items-center gap-2"
                  >
                    <Users size={16} />
                    Requests
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(pet._id)}
                    className="btn btn-sm bg-[#7f1d1d] text-white rounded-xl flex justify-center"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingsPage;
