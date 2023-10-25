import React, { useState } from "react";

interface ButtonWithOptionsProps {
  options: string[];
}

function ButtonOptions({ options }: ButtonWithOptionsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log("Option clicked:", option);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Show Options
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ButtonOptions;
