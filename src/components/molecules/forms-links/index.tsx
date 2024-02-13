import React from 'react';

const CenteredButtons: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-x-4">
        <a href="https://financeagents.com/funding/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir a Ruta 1
        </a>
        <a href="https://financeagents.com/retirement-rollover/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ir a Ruta 2
        </a>
      </div>
    </div>
  );
};

export default CenteredButtons;
