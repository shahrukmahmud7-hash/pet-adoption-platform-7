"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const PetFilters = ({ defaultSearch, defaultSpecies, defaultSort }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(defaultSearch || "");

  const handleFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value !== "All Species" && value !== "Default") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/all-pets?${params.toString()}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    router.push(`/all-pets?${params.toString()}`);
  };

  return (
    <div
      className="mt-8 bg-[#111C33] border border-[#1E2A47]
      rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {/* Search */}
      <form className="relative">
        <label className="text-sm text-gray-300">Search by name</label>

        <input
          type="text"
          placeholder="Search pets..."
          value={search}
          onChange={handleSearch}
          className="w-full mt-2 p-3 rounded-xl bg-[#0B1220]
          border border-[#1E2A47] text-white outline-none"
        />
      </form>

      {/* Species */}
      <div>
        <label className="text-sm text-gray-300">Filter by species</label>

        <select
          defaultValue={defaultSpecies}
          onChange={(e) => handleFilter("species", e.target.value)}
          className="w-full mt-2 p-3 rounded-xl bg-[#0B1220]
          border border-[#1E2A47] text-white"
        >
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

        <select
          defaultValue={defaultSort}
          onChange={(e) => handleFilter("sort", e.target.value)}
          className="w-full mt-2 p-3 rounded-xl bg-[#0B1220]
          border border-[#1E2A47] text-white"
        >
          <option>Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default PetFilters;
