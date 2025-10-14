import React, { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `I’m a creative problem solver who’s passionate about building
  meaningful, user-centered digital experiences. I love taking on
  challenges that involve complex problem-solving and transforming them
  into efficient, elegant code. For me, development is more than just
  writing code—it's about creating software that makes a difference,
  whether it's a well-designed interface or a back-end system that runs
  seamlessly. I'm always excited to learn new technologies and explore
  how they can be applied to solve real-world problems. Outside of
  building softwares, I’m always seeking new adventures. Whether it’s
  traveling to new places or trying out different activities, I believe
  in “remembering to live.” These experiences inspire my work and keep
  me grounded, giving me fresh perspectives and the energy to approach
  challenges with an open mind. I thrive on creativity, exploration, and
  making connections that inspire growth both in and out of the tech
  world.`;

  // Show only part of the text for mobile
  const shortText = fullText.slice(0, 180) + "...";

  return (
    <div className="leading-loose mb-96">
      {/* Mobile view: show toggle */}
      <p className="mt-[8px] text-base sm:text-lg font-medium leading-tight title-color block lg:hidden">
        {isExpanded ? fullText : shortText}
        <button
          className="text-blue-500 font-semibold ml-2"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Show less about me" : "Read more about me"}
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      </p>

      {/* Desktop view: always show full text */}
      <p className="hidden lg:block mt-[8px] text-2xl font-bold leading-tight title-color">
        {fullText}
      </p>
    </div>
  );
};

export default About;
