import React from "react";
import { Country } from "../interfaces/Country";

interface Props {
  country: Country;
}

const CountryItem: React.FC<Props> = ({ country }) => {
  return (
    <li
      className={`border-2 rounded-lg overflow-hidden ${
        country.landlocked ? "border-green-500" : "border-blue-500"
      } shadow-md bg-white hover:shadow-lg`}
    >
      <div className="flex items-center p-4">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-20 h-auto mr-4 flex-shrink-0"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{country.name.common}</h3>
          {country.capital && (
            <p className="text-sm text-gray-600">
              <strong>Capital:</strong> {country.capital.join(", ")}
            </p>
          )}
          <p className="text-sm text-gray-600">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Area:</strong> {country.area.toLocaleString()} km²
          </p>
          <p className="text-sm text-gray-600">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Landlocked:</strong> {country.landlocked ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CountryItem;
