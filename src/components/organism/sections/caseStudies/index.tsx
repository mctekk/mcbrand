import React from 'react';
import { BsArrow90DegRight, BsArrowBarRight, BsArrowUpRight } from 'react-icons/bs';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  tags: string[];
}

function CardSe({ title, image, tags, subtitle, link }: CardProps) {
  const getRandomColor = () => {
    const colors = ['#026aa2', '#f9a61e', '#8a5a9b'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="w-96 rounded overflow-hidden m-12 ">
      <img className="h-96 object-cover ml-6" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className=" text-gray-400 mb-2">{subtitle}</div>
        <a href={link} rel="noopener noreferrer" className="w-96 rounded overflow-hidden m-4 cursor-pointer">
        <div className="font-bold flex justify-between"><p>Read the case study</p> <div className='mt-1'><BsArrowUpRight/></div> </div>
        </a>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 bg-gray-200`}
              style={{ color: getRandomColor() }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSe;
