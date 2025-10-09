import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { MdCallMade } from "react-icons/md";

const Social = () => {
  return (
    <div className="flex items-center w-full mt-[32px] md:mt-[72px]">
      {/* Profile Picture */}
      <div className="w-12 h-12 mr-6 rounded-full overflow-hidden border border-gray-600 flex-shrink-0">
        <img
          src="/favicon2.jpeg"
          alt="Nimrod Misiani - Profile"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Social Links */}
      <ul className="flex -mx-[16px] text-white">
        {/* LinkedIn */}
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

        {/* GitHub */}
        <li className="mx-[16px] text-white">
          <a
            href="https://github.com/CodieMisiani"
            className="flex items-center"
            rel="noopener noreferrer"
            target="_blank"
          >
            <AiFillGithub className="inline" />
            <span className="ml-2">GitHub</span>
            <span className="w-[16px] p-[2px] ml-2">
              <MdCallMade className="inline" />
            </span>
          </a>
        </li>

        {/* Gmail */}
        <li className="mx-[16px] text-white">
          <a
            href="mailto:nimrodmisiani42@gmail.com"
            className="flex items-center"
            rel="noopener noreferrer"
          >
            <AiOutlineMail className="inline" />
            <span className="ml-2">Gmail</span>
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
