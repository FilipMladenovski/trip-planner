import React from "react";
import { useCountryContext } from "../context/CountryContext";
import { Country } from "../interfaces/Country";
import CountryItem from "./CountryItem";

interface Props {
  region: string;
}

const ContinentContainer: React.FC<Props> = ({ region }) => {
  const { countries, fetchCountries, addToTripPlan } = useCountryContext();

  React.useEffect(() => {
    fetchCountries(region);
  }, [region, fetchCountries]);

  return (
    <main className="flex-1 p-5">
      <h2 className="text-2xl font-bold mb-5 text-center">{region} Page</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((country: Country) => (
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
    </main>
  );
};

export default ContinentContainer;
