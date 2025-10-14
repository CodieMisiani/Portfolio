import React, { useState, useEffect } from "react";
import { personalInfo } from "../../config/personal";

const Intro = () => {
  const titles = personalInfo.titles; // ✅ use titles from personalInfo
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);

  return (
    <div>
      <h1
        className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none title-color"
        role="heading"
        aria-level="1"
      >
        {personalInfo.name} {/* ✅ dynamic name */}
      </h1>

      <h2 className="mt-[16px] sm:text-2xl text-[20px] font-semibold leading-tight title-color">
        {displayText}
        <span className="animate-pulse">|</span> {/* blinking cursor */}
      </h2>
    </div>
  );
};

export default Intro;
