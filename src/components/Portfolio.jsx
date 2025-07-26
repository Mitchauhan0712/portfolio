import React from "react";
import Dashboard from "../assets/Heading.gif";
import WeatherApp from "../assets/WeatherappHeading.gif";
import PortfolioHeading from "../assets/PortfolioHeading.gif";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Admin Dashboard",
      description: "A comprehensive admin dashboard with analytics, user management, and real-time data visualization built with React and modern UI libraries.",
      techStack: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
      src: Dashboard,
      demoLink: "https://mit-dashboard.netlify.app/",
      codeLink: "https://github.com/Mitchauhan0712/Dashboard",
    },
    {
      id: 2,
      title: "Weather Application",
      description: "A responsive weather app that provides real-time weather information with location-based forecasts and interactive maps.",
      techStack: ["React", "OpenWeather API", "Geolocation", "CSS3"],
      src: WeatherApp,
      demoLink: "https://mit-wheather-app.netlify.app",
      codeLink: "https://github.com/Mitchauhan0712/Wheather-App",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      src: PortfolioHeading,
      demoLink: "https://mitchauhan-portfolio-app.netlify.app",
      codeLink: "https://github.com/Mitchauhan0712/portfolio",
    },
  ];

  // Placeholder projects for easy extension
  const placeholderProjects = [
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and user authentication.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      placeholder: true,
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      techStack: ["React", "Express.js", "Socket.io", "PostgreSQL"],
      placeholder: true,
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Chart.js"],
      placeholder: true,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work and upcoming projects</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Existing Projects */}
          {portfolios.map(({ id, title, description, techStack, src, demoLink, codeLink }) => (
            <div key={id} className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src={src}
                alt={title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-700 text-white px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform duration-200 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform duration-200 text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder Projects */}
          {placeholderProjects.map(({ id, title, description, techStack }) => (
            <div key={id} className="bg-gray-800 rounded-lg shadow-lg border-2 border-dashed border-gray-600 overflow-hidden">
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400 text-6xl">+</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-md cursor-not-allowed text-sm">
                    Coming Soon
                  </button>
                  <button className="bg-gray-600 text-gray-300 px-4 py-2 rounded-md cursor-not-allowed text-sm">
                    In Progress
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
