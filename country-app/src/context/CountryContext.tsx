import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Country } from "../interfaces/Country";
import { fetchAllCountries, fetchCountriesByRegion } from "../api";

export interface CountryContextProps {
  countries: Country[];
  fetchCountries: (region?: string) => void;
  addToTripPlan: (country: Country) => void;
  tripPlan: Country[];
  removeFromTripPlan: (country: Country) => void;
  handleDaysChange: (country: Country, days: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCountries: Country[];
  topDestinations: Country[];
}

const CountryContext = createContext<CountryContextProps | undefined>(
  undefined
);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [tripPlan, setTripPlan] = useState<Country[]>([]);
  const [topDestinations, setTopDestinations] = useState<Country[]>([]);

  const fetchCountries = async (region?: string) => {
    try {
      const data = region
        ? await fetchCountriesByRegion(region)
        : await fetchAllCountries();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredCountries(countries);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredCountries(filtered);
    }
  }, [searchQuery, countries]);

  useEffect(() => {
    const top = countries.slice(0, 10);
    setTopDestinations(top);
  }, [countries]);

  const addToTripPlan = (country: Country) => {
    if (!tripPlan.find((item) => item.name.common === country.name.common)) {
      setTripPlan([...tripPlan, country]);
    }
  };

  const removeFromTripPlan = (country: Country) => {
    const updatedTripPlan = tripPlan.filter(
      (item) => item.name.common !== country.name.common
    );
    setTripPlan(updatedTripPlan);
  };

  const handleDaysChange = (country: Country, days: number) => {
    console.log(`Change days for ${country.name.common} to ${days} days.`);
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        fetchCountries,
        addToTripPlan,
        tripPlan,
        removeFromTripPlan,
        handleDaysChange,
        searchQuery,
        setSearchQuery,
        filteredCountries,
        topDestinations,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
};
