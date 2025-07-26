import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiJavascript, SiExpress, SiNextdotjs, SiPostgresql, SiSocketdotio, SiStripe } from "react-icons/si";
import Dashboard from "../assets/Heading.gif";
import WeatherApp from "../assets/WeatherappHeading.gif";
import PortfolioHeading from "../assets/PortfolioHeading.gif";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Admin Dashboard",
      description: "A comprehensive admin dashboard with analytics, user management, and real-time data visualization built with React and modern UI libraries.",
      fullDescription: "Modern admin dashboard featuring real-time analytics, user management system, data visualization with Chart.js, and responsive design. Built with React and integrated with Firebase for backend services.",
      category: "frontend",
      techStack: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> }
      ],
      image: Dashboard,
      demoLink: "https://mit-dashboard.netlify.app/",
      codeLink: "https://github.com/Mitchauhan0712/Dashboard",
      featured: true
    },
    {
      id: 2,
      title: "Weather Application",
      description: "A responsive weather app that provides real-time weather information with location-based forecasts and interactive maps.",
      fullDescription: "Real-time weather application with location-based forecasts, interactive maps, and beautiful UI. Features include current weather, 7-day forecast, and weather alerts.",
      category: "frontend",
      techStack: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> }
      ],
      image: WeatherApp,
      demoLink: "https://mit-wheather-app.netlify.app",
      codeLink: "https://github.com/Mitchauhan0712/Wheather-App",
      featured: true
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      fullDescription: "Modern portfolio website with smooth animations, responsive design, and interactive elements. Features include project showcase, skills display, and contact form.",
      category: "frontend",
      techStack: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> }
      ],
      image: PortfolioHeading,
      demoLink: "https://mitchauhan-portfolio-app.netlify.app",
      codeLink: "https://github.com/Mitchauhan0712/portfolio",
      featured: false
    }
  ];

  const placeholderProjects = [
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and user authentication.",
      fullDescription: "Complete e-commerce platform with user authentication, product management, shopping cart, payment integration with Stripe, and admin dashboard.",
      category: "fullstack",
      techStack: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Stripe", icon: <SiStripe className="text-purple-500" /> }
      ],
      placeholder: true
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      fullDescription: "Real-time task management application with team collaboration, progress tracking, notifications, and project management features.",
      category: "fullstack",
      techStack: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-600" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-gray-800" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> }
      ],
      placeholder: true
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.",
      fullDescription: "Comprehensive social media management dashboard with analytics, post scheduling, engagement tracking, and performance metrics across multiple platforms.",
      category: "fullstack",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
      ],
      placeholder: true
    }
  ];

  const allProjects = [...projects, ...placeholderProjects];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <section name="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-secondary-900 mb-4">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Check out some of my work and upcoming projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-medium'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600 shadow-soft'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105 overflow-hidden border border-secondary-100 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-secondary-100 overflow-hidden">
                {project.placeholder ? (
                  <div className="w-full h-full bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                    <div className="text-6xl text-secondary-300">
                      <FaEye />
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-secondary-50 rounded-full text-xs font-medium text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.placeholder ? (
                    <>
                      <button className="flex-1 bg-secondary-100 text-secondary-400 px-4 py-2 rounded-full text-sm font-medium cursor-not-allowed">
                        Coming Soon
                      </button>
                      <button className="flex-1 bg-secondary-100 text-secondary-400 px-4 py-2 rounded-full text-sm font-medium cursor-not-allowed">
                        In Progress
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <FaGithub size={12} />
                        Code
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with modern web technologies
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-medium hover:bg-primary-50 transition-colors duration-300 hover:scale-105">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;