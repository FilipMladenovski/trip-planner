import React from 'react';

interface MainProps {
  region: string;
}

const Main: React.FC<MainProps> = ({ region }) => {
  return (
    <main className="flex-1 p-5 text-center">
      <h2 className="text-2xl font-bold">{region} Page</h2>
    </main>
  );
};

export default Main;
