import React, { useState } from "react";
import { useCountryContext } from "../context/CountryContext";
import CountryItem from "./CountryItem";
import { Country } from "../interfaces/Country";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const Home: React.FC = () => {
  const { countries, addToTripPlan } = useCountryContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 10);

  return (
    <main className="flex-1 p-5">
      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 mr-1 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by country name..."
          className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <section className="mb-5">
        <h2 className="text-2xl font-bold mb-3 text-center">
          10 Most Popular Tourist Destinations
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCountries.map((country: Country) => (
            <li key={country.name.common}>
              <CountryItem country={country} />
              <button
                onClick={() => addToTripPlan(country)}
                className="mt-2 px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md"
              >
                Add to Trip Plan
              </button>
            </li>
          ))}
        </ul>
        {searchQuery !== "" && filteredCountries.length === 0 && (
          <p className="text-center mt-4">No countries found.</p>
        )}
      </section>
    </main>
  );
};

export default Home;
