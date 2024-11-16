'use client';
import React, { useState, useEffect } from "react";


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(()=> {
    setIsVisible(true);
  }, []);
  return (
      <div
        className={`flex flex-col justify-center items-center h-screen transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}> 
        </div>
  )
}

export default Projects
