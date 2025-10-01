import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdCallMade } from "react-icons/md";

const Social = () => {
  return (
    <div className="flex items-center w-full mt-[32px] md:mt-[72px]">
      <div className="w-[48px] h-[48px] mr-[35px] rounded-full bg-gray relative">
        <span className="box-border block overflow-hidden bg-none relative border-0 m-0 p-0"></span>
        <img
          alt=""
          src="/profile-pic.jpg"
          className="rounded-full absolute top-0 left-0 bottom-0 right-0 box-border"
        />
      </div>
      <ul className="flex -mx-[16px] text-white">
        <li className="mx-[16px] text-white">
          <a
            href="https://www.linkedin.com/in/nimrod-misiani/"
            className="flex items-center"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="inline" />
            <span className="ml-2">LinkedIn</span>
            <span className="w-[16px] p-[2px] ml-2">
              <MdCallMade className="inline" />
            </span>
          </a>
        </li>
        <li className="mx-[16px] text-white">
          <a
            href="https://github.com/CodieMisiani"
            className="flex items-center"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillGithub className="inline" />
            <span className="text-sm ml-2">GitHub</span>
            <span className="w-[16px] p-[2px] ml-2">
              <MdCallMade className="inline" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
