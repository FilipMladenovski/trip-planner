import React from "react";
import { HomeIcon, GlobeAmericasIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-5 text-center">
      <h1
        className="text-6xl mb-10 font-serif font-bold text-center"
        style={{ fontFamily: "Great Vibes, cursive" }}
      >
        Trip Planner
      </h1>
      <nav>
        <ul className="flex justify-between items-center">
          <li className="text-lg font-sans">
            <Link
              to="/"
              className="flex items-center justify-start hover:text-gray-300"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              <HomeIcon className="h-5 w-5 mr-1 text-gray-400" />
              Home
            </Link>
          </li>
          <div className="flex-grow flex justify-center">
            <li className="mx-2">
              <Link to="/europe" className="hover:text-gray-300">
                Europe
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/asia" className="hover:text-gray-300">
                Asia
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/africa" className="hover:text-gray-300">
                Africa
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/americas" className="hover:text-gray-300">
                Americas
              </Link>
            </li>
            <li className="mx-2">
              <Link to="/oceania" className="hover:text-gray-300">
                Oceania
              </Link>
            </li>
          </div>
          <div className="ml-auto">
            <li className="mx-2">
              <Link to="/trip-plan" className="flex items-center hover:text-gray-300">
                <GlobeAmericasIcon className="h-5 w-5 mr-1 text-gray-400" />
                Trip Plan
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
