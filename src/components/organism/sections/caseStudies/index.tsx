import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  tags: string[];
}

function CardSe({ title, image, tags, subtitle, link }: CardProps) {
  const getRandomColor = () => {
    const colors = ['#25A327', '#0000FF', '#E94B29'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="w-96 rounded overflow-hidden m-12 ">
      <img className="h-96 object-cover ml-6" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className=" text-gray-400 mb-2">{subtitle}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-96 rounded overflow-hidden m-4 cursor-pointer">
        <div className="font-bold mb-2">Read the case study</div>
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
