import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a passionate Software Developer with a strong foundation in both frontend and backend technologies. 
          My journey began with frontend development, where I mastered React.js and modern CSS frameworks, 
          but I've since expanded my expertise to include full-stack development with Node.js, Express, and MongoDB.
        </p>

        <br />

        <p className="text-xl">
          What sets me apart is my ability to bridge the gap between beautiful user interfaces and robust backend systems. 
          I thrive on solving complex problems, writing clean and maintainable code, and creating seamless user experiences 
          that scale effectively. My technical skills are complemented by strong problem-solving abilities, attention to detail, 
          and a collaborative mindset that helps teams deliver exceptional results.
        </p>

        <br />

        <p className="text-xl">
          I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible. 
          Let's collaborate and build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
