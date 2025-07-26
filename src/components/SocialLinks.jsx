import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <div className="flex items-center justify-between w-full">
          <span>LinkedIn</span>
          <FaLinkedin size={20} />
        </div>
      ),
      href: "https://www.linkedin.com/in/mit-chauhan-69a451210",
      style: "bg-blue-600 hover:bg-blue-700",
      label: "LinkedIn Profile"
    },
    {
      id: 2,
      child: (
        <div className="flex items-center justify-between w-full">
          <span>GitHub</span>
          <FaGithub size={20} />
        </div>
      ),
      href: "https://github.com/Mitchauhan0712",
      style: "bg-gray-800 hover:bg-gray-900",
      label: "GitHub Profile"
    },
    {
      id: 3,
      child: (
        <div className="flex items-center justify-between w-full">
          <span>Email</span>
          <HiOutlineMail size={20} />
        </div>
      ),
      href: "mailto:mitchauhan108@gmail.com",
      style: "bg-red-600 hover:bg-red-700",
      label: "Send Email"
    },
    {
      id: 4,
      child: (
        <div className="flex items-center justify-between w-full">
          <span>Resume</span>
          <BsFillPersonLinesFill size={20} />
        </div>
      ),
      href: "/Resume.pdf",
      style: "bg-green-600 hover:bg-green-700",
      label: "Download Resume",
      download: true
    },
  ];

  return (
    <div className="hidden xl:flex flex-col fixed top-1/2 left-4 transform -translate-y-1/2 z-40">
      <ul className="space-y-2">
        {links.map(({ id, child, href, style, label, download }) => (
          <li key={id} className="group">
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`
                flex items-center w-14 h-14 rounded-full ${style}
                text-white font-medium transition-all duration-300
                hover:w-44 hover:rounded-full shadow-soft hover:shadow-medium
                group-hover:scale-110
              `}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <div className="xl:hidden group-hover:block">
                  {child}
                </div>
                <div className="xl:block group-hover:hidden">
                  {React.cloneElement(child.props.children[1], { size: 20 })}
                </div>
              </div>
              <div className="hidden group-hover:block flex-1 px-4 text-sm font-medium">
                {child.props.children[0]}
              </div>
            </a>
          </li>
        ))}
      </ul>
      
      {/* Floating indicator */}
      <div className="mt-8 flex justify-center">
        <div className="w-1 h-16 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default SocialLinks;