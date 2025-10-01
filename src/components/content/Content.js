import Footer from "../footer/Footer";
import About from "./About/About";
import ExperienceList from "./Experiences/ExperienceList";
import ProjectList from "./Projects/ProjectList";
import SkillList from "./Skills/SkillsList";

const Content = () => {
  return (
    <div className="static p-[24px] sm:p-[32px] md:max-w-[536px] lg:max-w-[736px] xl:min-w-[736px] md:absolute md:right-0 lg:py-[88px] lg:pr-[88px] md:pl-0">
      <About />
      <ProjectList />
      <ExperienceList />
      <SkillList />
      <Footer />
    </div>
  );
};

export default Content;
