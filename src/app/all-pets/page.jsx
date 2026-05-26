import AllPetsCard from "@/components/AllPetsCard";
import PetFilters from "@/components/PetFilters";

const AllPetsPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const species = params?.species || "";
  const sort = params?.sort || "";

  const query = new URLSearchParams();

  if (search) {
    query.append("search", search);
  }

  if (species && species !== "All Species") {
    query.append("species", species);
  }

  if (sort) {
    query.append("sort", sort);
  }

  const res = await fetch(`http://localhost:8000/pets?${query.toString()}`, {
    cache: "no-store",
  });

  const pets = await res.json();

  return (
    <div className="min-h-screen bg-[#FFF8F3] p-6">
      <div>
        <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-gray-900">
          Meet All <span className="text-orange-600">Pets</span>
        </h1>

        <p className="text-gray-600 text-lg mt-2">
          Pets available for adoption
        </p>
      </div>

      {/* Filters */}
      <PetFilters
        defaultSearch={search}
        defaultSpecies={species}
        defaultSort={sort}
      />

      {/* Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-12">
        {pets?.map((pet) => (
          <AllPetsCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
