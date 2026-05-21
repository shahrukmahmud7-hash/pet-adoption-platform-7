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
         <div className="min-h-screen bg-[#FFF8F3]  text-white p-6">
            
        <div>
          <h1 className="mt-3 text-3xl sm:text-5xl
           font-bold text-gray-900">
            Meet All <span className="text-orange-600">Pets</span>
          </h1>
          <p className="text-gray-600 text-lg mt-2">Pets available for adoption</p>
        </div>


      {/* Filter Section */}
      <div className="mt-8 bg-[#111C33] border border-[#1E2A47] 
      rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}
        <div>
          <label className="text-sm text-gray-300">Search by name</label>
          <input
            type="text"
            placeholder="Search pets..."
            className="w-full mt-2 p-3 rounded-xl bg-[#0B1220] border border-[#1E2A47] text-white outline-none"
          />
        </div>

        {/* Filter */}
        <div>
          <label className="text-sm text-gray-300">Filter by species</label>
          <select className="w-full mt-2 p-3 rounded-xl bg-[#0B1220] border border-[#1E2A47] text-white">
            <option>All Species</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Rabbit</option>
            <option>Hamster</option>
            <option>Guinea Pig</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="text-sm text-gray-300">Sort by fee</label>
          <select className="w-full mt-2 p-3 rounded-xl bg-[#0B1220] border border-[#1E2A47] text-white">
            <option>Default</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
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