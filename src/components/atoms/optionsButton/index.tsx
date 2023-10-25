'use client'
import { translate } from "@/locales";
import React, { useState } from "react";
import {  MdKeyboardArrowDown } from "react-icons/md";

interface options {
  name: string;
  link: string;
}
interface ButtonWithOptionsProps {
  options: options[];
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
        <div className="absolute right-0 mt-12 bg-white border border-gray-300 rounded shadow-lg">
          <ul >
            {options.map((option, index) => (
              <li className="p-2">
              <a
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 "
                href={option.link}
              >
                {option.name}
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
