import Card from '@/components/atoms/card';
import { InfoCard } from '@/components/atoms/info-card';
import React from 'react'

const cardsData = [
  {
    imageSrc: '/images/Call Us.svg',
    title: '',
    text: 'Call us at',
    info: '+1 809-732-2630',
  },
  {
    imageSrc: '/images/Calendar.svg',
    title: '',
    text: 'Schedule an appointment',
    info: 'Schedule',
    direction:"https://meetings.hubspot.com/jennifer-herasme",
    button: true
  },
  {
    imageSrc: '/images/Mail.svg',
    title: '',
    text: 'Mail us at',
    info: 'contact@mctekk.com',
  },
];

export default function ContactCards() {
  return (
    <div className="container mx-auto p-4 section">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <InfoCard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          text={card.text}
          info={card.info}
          button={card.button}
          direction={card.direction}
        />
      ))}
    </div>
  </div>
  )
}

