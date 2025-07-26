import React, { useState, useEffect } from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [, setProfessionIndex] = useState(0);
  const professions = ["Software Developer", "Full Stack Developer", "React Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section name="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left fade-in-up">
            <div className="space-y-4">
              <p className="text-primary-600 font-medium text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-secondary-900 leading-tight">
                Mit Chauhan
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary-700 min-h-[3rem] flex items-center justify-center lg:justify-start">
                <span className="mr-2">I'm a</span>
                <span className="text-gradient">
                  <Typewriter
                    options={{
                      strings: professions,
                      autoStart: true,
                      loop: true,
                      pauseFor: 3000,
                      deleteSpeed: 50,
                      delay: 80,
                    }}
                  />
                </span>
              </div>
            </div>

            <p className="text-secondary-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Crafting scalable software with React, Node.js, and modern web technologies. 
              I specialize in building full-stack applications that deliver exceptional user 
              experiences through clean code, robust architecture, and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-medium hover:scale-105 cursor-pointer"
              >
                View My Work
                <MdOutlineKeyboardArrowRight 
                  size={20} 
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                />
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium rounded-full transition-all duration-300 hover:shadow-medium hover:scale-105 cursor-pointer"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong floating-animation">
                <img
                  src={HeroImage}
                  alt="Mit Chauhan - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-4 border-primary-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
