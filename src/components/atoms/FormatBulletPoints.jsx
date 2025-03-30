"use client";

import { useEffect } from "react";

const FormatBulletPoints = () => {
  useEffect(() => {
    // Find all paragraphs containing bullet points
    const bulletLists = document.querySelectorAll('p, div');
    
    bulletLists.forEach(element => {
      if (element.textContent.includes('🛒') || 
          element.textContent.includes('✅') ||
          element.textContent.includes('📱') ||
          element.textContent.includes('🧠 Sync inventory')) {
        // Add CSS to preserve line breaks
        element.style.whiteSpace = 'pre-line';
      }
    });
  }, []);
  
  return null; // This component doesn't render anything
};

export default FormatBulletPoints;