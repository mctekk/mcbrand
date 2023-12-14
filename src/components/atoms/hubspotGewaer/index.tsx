"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

const HubSpotMeetingsEmbed = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.onload = () => setLoading(false); // Marca como cargado cuando el script ha cargado

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Limpia el script cuando el componente se desmonta
    };
  }, []);

  return (
    <>
      
      {loading ? (
        <p className='m-96 text-center text-[2rem]'>Loading the calendar...</p>
      ) : (
        <><div className="meetings-iframe-container mt-7" data-src="https://meetings.hubspot.com/jennherasme/gewaer-leads?embed=true"></div><Script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script></>
      )}
    </>
  );
};

export default HubSpotMeetingsEmbed;
