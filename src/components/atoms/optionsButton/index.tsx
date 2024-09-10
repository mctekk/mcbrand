'use client'
import { translate } from "@/locales";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Options {
  name: string;
  link: string;
}

interface ButtonWithOptionsProps {
  options: Options[];
}

function ButtonOptions({ options }: ButtonWithOptionsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative hidden lg:flex -mt-1">
      <button
        onClick={toggleMenu}
        className=" text-gray-400 pt-4 px-4 hover:text-white font-semibold flex"
      >
        {translate("mcnavbar.section.Product")}<div className="mt-1"><MdKeyboardArrowDown /></div> 
      </button>
      {isMenuOpen && (
        <div className="absolute  mt-12 bg-white border border-gray-300 rounded-xl shadow-lg w-64">
          <ul className="py-2">
            {options.map((option, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 transition-all duration-200">
                <a
                  className="block text-gray-700 hover:text-mctekk-100 font-medium"
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-mctekk-100 text-white flex items-center justify-center font-bold">
                      {option.name[0]}
                    </div>
                    <span>{option.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ButtonOptions;
