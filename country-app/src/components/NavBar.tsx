import React from 'react';

interface NavBarProps {
  onSelectPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectPage }) => {
  const regions = ['Home', 'Asia', 'Europe', 'Africa', 'Americas', 'Oceania'];

  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        {regions.map(region => (
          <li
            key={region}
            onClick={() => onSelectPage(region)}
            className="cursor-pointer text-blue-400 hover:text-blue-600"
          >
            {region}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
