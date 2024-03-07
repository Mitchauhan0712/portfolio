import React, { useState, useEffect } from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [, setProfessionIndex] = useState(0);
  const professions = ["Frontend Developer", "Web Designer", "React Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b space-y-4 md:space-y-0 md:space-x-4 from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center gap-6 h-full px-4">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-5xl md:text-5xl transition-opacity duration-500 ease-in-out font-bold text-white">
            I'm a&nbsp;
            <Typewriter
              options={{
                strings: professions,
                autoStart: true,
                loop: true,
                pauseFor: 3000, // Pause for 3 seconds before each loop
              }}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My expertise centers on React and Tailwind CSS, where I excel in
            utilizing React's component-based architecture and Tailwind's
            utility-first approach. With these tools, I craft scalable,
            maintainable user interfaces, elevating web development to new
            heights, delivering exceptional experiences efficiently and
            elegantly.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-72 h-80 rounded-full overflow-hidden ml-4 ">
          <img
            src={HeroImage}
            alt="my profile"
            className="object-cover w-72 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
