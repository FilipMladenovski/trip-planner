import React from 'react';
import { useCountryContext } from '../context/CountryContext';
import { Country } from '../interfaces/Country';

const TripPlan: React.FC = () => {
  const { tripPlan, removeFromTripPlan } = useCountryContext();

  const handleDaysChange = (country: Country, days: number) => {
    console.log(`Set ${days} days for ${country.name.common}`);
  };

  return (
    <main className="flex-1 p-5">
      <h2 className="text-2xl font-bold mb-5 text-center">Trip Plan</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tripPlan.map(country => (
          <li key={country.name.common} className="border-2 rounded-lg overflow-hidden border-blue-500 shadow-md bg-white hover:shadow-lg">
            <div className="flex items-center p-4">
              <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-20 h-auto mr-4 flex-shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{country.name.common}</h3>
                <div className="flex items-center mt-2">
                  <label htmlFor={`days-${country.name.common}`} className="mr-2">Days:</label>
                  <input
                    type="number"
                    id={`days-${country.name.common}`}
                    min="1"
                    max="30"
                    defaultValue="1"
                    onChange={(e) => handleDaysChange(country, parseInt(e.target.value))}
                    className="w-16 p-1 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={() => removeFromTripPlan(country)}
                    className="ml-2 px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TripPlan;
