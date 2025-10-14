import { useEffect } from "react";
import Main from "./components/main/Main";
import Content from "./components/content/Content";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("#navbar");
      if (!nav) return; // Stop if navbar doesn’t exist yet

      if (window.scrollY <= 10) {
        nav.className = "shift-0";
      } else {
        nav.className = "-shift-y-64";
      }
    };

    // Add the event listener once
    window.addEventListener("scroll", handleScroll);

    // Cleanup to prevent duplicate listeners
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // empty dependency array → runs only once when App mounts

  return (
    <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-[1440px] md:flex-row">
      <Main />
      <Content />
    </div>
  );
}

export default App;
