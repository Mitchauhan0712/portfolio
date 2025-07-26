import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Mongodb from "../assets/Mongodb.png"
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const frontendTechs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
  ];

  const backendTechs = [
    {
      id: 6,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      title: "Express",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: Mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
  ];

  const tools = [
    {
      id: 9,
      src: github,
      title: "Git/GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      title: "VS Code",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      title: "Postman",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I work with</p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Frontend Development</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
            {frontendTechs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-16 h-16 mx-auto object-contain" />
                <p className="mt-4 text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">Backend Development</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center">
            {backendTechs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-16 h-16 mx-auto object-contain" />
                <p className="mt-4 text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Tools & Technologies</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center">
            {tools.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-16 h-16 mx-auto object-contain" />
                <p className="mt-4 text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
