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
      <div className ="karla font-medium text-5xl">
        Projects
      </div>

      {/* <div className ="mt-100 font-medium text-5xl">
        Self Localizing Autonomous Robot
      </div> */}

      </div>
  )
}

export default Projects
