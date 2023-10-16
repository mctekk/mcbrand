import React from "react";

type Props ={
    progress?: number
}

export default function Circle({progress}:Props) {
  
  return (
    <svg viewBox="0 0 160 160" className='transform -rotate-90'>
    <circle
        className="percent fifty stroke-orange-500 "
        cx="80" cy="80" r="72"
        fill="none"
        strokeWidth="4"
        pathLength="100"
        strokeDashoffset={progress || 100}
        strokeDasharray={100}
    />
</svg>
  );
}