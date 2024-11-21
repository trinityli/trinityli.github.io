'use client';   
import React, { useState, useEffect, useRef } from "react";


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(()=> {
    setIsVisible(true);
  }, []);

  const myRef = useRef();
  // const [visibleElem, setVisibility] = useState();
  // useEffect(()=> {
  //   // if (myRef.current) {
  //   //   console.log('myRef:', myRef.current);
  //   // }

  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log('myRef:', myRef.current);
  //     console.log('entry:', entry);
  //   })
  //   observer.observe(myRef.current)
  // },[myRef]);
  return (
      // <div
      //   className={`flex flex-col justify-center items-center h-screen transition-all duration-1000 ease-out ${
      //     isVisible
      //       ? "opacity-100 translate-y-0"
      //       : "opacity-0 translate-y-10"
      //   }`}> 
      // <div className ="karla font-medium text-5xl">
      //   Projects
      // </div>

      // </div>
      // TODO: make the text move based on scroll, clip a demo of the videos
      <div
      className={`flex flex-col justify-start items-start mt-40 ml-40 h-screen transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
        }`}> 
    <div ref={myRef} className ="karla font-medium text-5xl mb-20">
        Projects
    </div>
    <div className="flex row align-start px-15">
      <div className="karla font-medium text-2xl leading-loose">
        Self-Localizing Autonomous Robot
        <ul className="karla font-regular text-base mt-3 list-disc list-outside ms-8 max-w-[50%] leading-loose">
          <li> Implemented a PID controller class for a Turtlebot using ROS2 and Python to create a closed-loop feedback
          controller that would self-correct based on positional data obtained from sensors and calculated error </li>
          <li> Created a particle filter using LiDAR, odometry, and SLAM mapping by creating a probabilistic motion model 
          for each particle and resampling and weighting the particles using the SLAM occupancy map </li>
        </ul>
        {/* <div className='karla font-regular text-base mt-3 text-wrap'>
          Implemented a PID controller class for a Turtlebot using ROS2 and Python to create a closed-loop feedback
          controller that would self-correct based on positional data obtained from sensors and calculated error
        </div>
        <div className='karla font-regular text-base mt-3 text-wrap'>
          Created a particle filter using LiDAR, odometry, and SLAM mapping by creating a probabilistic motion model 
          for each particle and resampling and weighting the particles using the SLAM occupancy map
        </div> */}
      </div>  
    </div>
    {/* <div className='flex col align-end px-15'>
      <div className='karla font-medium text-xl'>
        Placeholder
      </div>
    </div> */}
    </div>
    
  )
}

export default Projects
