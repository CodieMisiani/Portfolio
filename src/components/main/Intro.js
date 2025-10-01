import React, { useState, useEffect } from "react";

const Intro = () => {
  const titles = [
    "Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "@Codie Misiani",
    "Problem Solver",
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Which title we are on
  const [displayText, setDisplayText] = useState(""); // What is currently shown
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting or typing

  useEffect(() => {
    const currentTitle = titles[currentIndex]; // Current phrase
    let typingSpeed = isDeleting ? 50 : 100; // Speed: faster when deleting

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentTitle.length) {
        // Typing characters
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        // Deleting characters
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentTitle.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText.length === 0) {
        // Move to next title
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);

  return (
    <div>
      <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none title-color">
        Nimrod Misiani
      </h1>
      <h2 className="mt-[16px] sm:text-2xl text-[20px] font-semibold leading-tight title-color">
        {displayText}
        <span className="animate-pulse">|</span> {/* Blinking cursor */}
      </h2>
    </div>
  );
};

export default Intro;
