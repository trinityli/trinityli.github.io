'use client';
import React, { useState, useEffect } from "react";


const Home = () => {
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
        }`}
      >
      <h1 className='inter font-semibold text-7xl mb-10 tracking-wide'> Hi! I'm Trinity. </h1>
      <p className="karla font-regular text-2xl mb-3">I'm a recent graduate of Mechanical Engineering from the University of Waterloo. </p>
      <p className="karla font-regular text-2xl mb-3">Currently seeking full time opportunities :&#41; </p>
    </div>
  )
}

export default Home