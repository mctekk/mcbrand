"use client"
import React, { useState, useEffect } from 'react';
import Script from 'next/script';

function HubSpotMeetingsEmbedEs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.onload = () => setLoading(false); 

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); 
    };
  }, []);

  return (
    <>
      
      {loading ? (
        <p className='m-96 text-center text-[2rem]'>Loading the calendar...</p>
      ) : (
        <><div className="meetings-iframe-container mt-7" data-src="https://meetings.hubspot.com/jennherasme/gewaer-espanol?embed=true"></div><Script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script></>
      )}
    </>
  );
};

export default HubSpotMeetingsEmbedEs;
