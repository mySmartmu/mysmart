
'use client';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Get all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute('href');
      
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get the height of the navbar
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        
        // Calculate the position to scroll to
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        
        // Scroll to the target position minus navbar height and some extra padding
        window.scrollTo({
          top: targetPosition - navbarHeight - 16, // 16px extra padding
          behavior: 'smooth'
        });
      }
    };
    
    // Add click event listeners to all anchor links
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });
    
    // Clean up event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
  
  return null; // This component doesn't render anything
}