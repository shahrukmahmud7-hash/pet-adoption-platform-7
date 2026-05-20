import AllPetsCard from "@/components/AllPetsCard";
import { Plus } from "lucide-react";


const AllPetsPage = async () => {

      const res = await fetch("http://localhost:8000/pet")
//   , {
//     cache: "no-store",
//   });

  const pets = await res.json();
//   console.log(pets);

    return (
        <div>
           <div className="min-h-screen bg-white p-6 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <span className="bg-pink-500/20 text-pink-400 text-sm px-3 py-1 rounded-full">
            🐾 My Dashboard
          </span>

          <h1 className="text-4xl font-bold mt-3">
            My Listings
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your pet listings and adoption requests.
          </p>
        </div>

        {/* Button */}
        <button className="bg-pink-500 hover:bg-pink-600 transition px-5 py-3 rounded-2xl flex items-center gap-2 font-medium w-fit">
          <Plus size={18} />
          Add New Pet
        </button>

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Listings */}
        <div className="bg-[#111C33] border border-[#1E2A47] rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-xl mb-4">
              🐾
            </div>

            <h2 className="text-3xl font-bold">12</h2>

            <p className="text-gray-400 mt-2">
              Total Listings
            </p>

          </div>
        </div>

        {/* Available */}
        <div className="bg-[#111C33] border border-[#1E2A47] rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl mb-4">
              ✔
            </div>

            <h2 className="text-3xl font-bold">8</h2>

            <p className="text-gray-400 mt-2">
              Available
            </p>

          </div>
        </div>

        {/* Adopted */}
        <div className="bg-[#111C33] border border-[#1E2A47] rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col items-center justify-center text-center">
            
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xl mb-4">
              ❤
            </div>

            <h2 className="text-3xl font-bold">4</h2>

            <p className="text-gray-400 mt-2">
              Adopted
            </p>

          </div>
        </div>
      </div>
            {/* Grid Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-12">
        {pets?.map((pet) => (
          <AllPetsCard key={pet._id}  pet={pet} />
        ))}
      </div>
    </div>

        </div>
    );
};

export default AllPetsPage; 