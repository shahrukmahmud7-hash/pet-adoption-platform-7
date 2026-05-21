"use client";

import { Eye, Edit3, Users, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MyListingsPage = () => {
  const [pets, setPets] = useState([]);
  const router = useRouter();

  const loadPets = async () => {
    const res = await fetch("http://localhost:8000/pet");
    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    loadPets();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:8000/pet/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setPets(pets.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Listings</h1>

      <div className="grid grid-cols-4 gap-4">
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

                <span className="absolute top-3 right-3 bg-[#10b981] text-[#052e16] text-xs font-bold px-3 py-1 rounded-full">
                  Available
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

                  <button className="btn btn-sm bg-[#1e293b] text-white rounded-xl flex items-center gap-2">
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

                  <button className="btn btn-sm btn-outline text-white rounded-xl flex items-center gap-2">
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