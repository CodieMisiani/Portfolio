import React, { useState, useEffect } from "react";

const Intro = () => {
  // Step 1: List of titles to rotate
  const titles = [
    "Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "@Codie Misiani",
    "Problem Solver",
  ];

  // Step 2: Track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Step 3: Update index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // cleanup
  }, [titles.length]);

  return (
    <div>
      <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none title-color">
        Nimrod Misiani
      </h1>

      {/* Animated subtitle */}
      <h2 className="mt-[16px] sm:text-2xl text-[20px] font-semibold leading-tight title-color transition-opacity duration-500 ease-in-out">
        {titles[currentIndex]}
      </h2>
    </div>
  );
};

export default Intro;
