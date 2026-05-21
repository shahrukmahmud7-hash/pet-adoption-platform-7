import CardPage from "./Card";


const HomePageCard = async () => {
  const res = await fetch("http://localhost:8000/pets")
//   , {
//     cache: "no-store",
//   });

  const pets = await res.json();

  return (
    <div className=" bg-[#FFF8F3] px-4 sm:px-6 lg:px-8 py-10">

      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Find Your Perfect Pet for Adoption
        </h1>
        <p className="text-sm text-gray-600 font-medium mt-2">
          Adopt a loving pet and give them a safe, happy forever home.
          <br />
          Bring joy to your life by giving a pet a second chance.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {pets?.map((pet) => (
          <CardPage key={pet._id}  pet={pet} />
        ))}
      </div>

    </div>
  );
};

export default HomePageCard;