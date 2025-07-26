import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "Your Company Name",
      location: "Remote",
      duration: "Jan 2024 - Present",
      type: "Full-time",
      logo: "https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=YC",
      responsibilities: [
        "Develop and maintain full-stack web applications using React, Node.js, and MongoDB",
        "Collaborate with cross-functional teams to deliver high-quality software solutions",
        "Implement responsive UI components and optimize application performance",
        "Write clean, maintainable code following best practices and coding standards",
        "Participate in code reviews and contribute to architectural decisions"
      ],
      achievements: [
        "Improved application performance by 40% through optimization techniques",
        "Led development of 3 major features that increased user engagement by 25%",
        "Mentored 2 junior developers on modern development practices"
      ],
      skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"]
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Previous Company",
      location: "City, State",
      duration: "Jun 2023 - Dec 2023",
      type: "Internship",
      logo: "https://via.placeholder.com/60x60/10B981/FFFFFF?text=PC",
      responsibilities: [
        "Built responsive web applications using React.js and Tailwind CSS",
        "Integrated REST APIs and implemented state management solutions",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Participated in daily standups and sprint planning meetings",
        "Contributed to component library and documentation"
      ],
      achievements: [
        "Developed reusable component library used across 5+ projects",
        "Reduced development time by 30% through component standardization",
        "Received excellent feedback from team lead and stakeholders"
      ],
      skills: ["React", "JavaScript", "Tailwind CSS", "Git", "Figma"]
    }
  ];

  const timelineItems = [
    { year: "2024", event: "Started as Software Developer", type: "work" },
    { year: "2023", event: "Completed Frontend Internship", type: "work" },
    { year: "2023", event: "Graduated with CS Degree", type: "education" },
    { year: "2022", event: "Started Learning Full Stack", type: "education" },
    { year: "2021", event: "First React Project", type: "project" }
  ];

  return (
    <section name="experience" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-secondary-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="mb-20 fade-in-up">
          <h3 className="text-2xl font-bold text-secondary-900 text-center mb-8">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></div>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                    item.type === 'work' ? 'bg-primary-600' : 
                    item.type === 'education' ? 'bg-accent-600' : 'bg-green-600'
                  } border-4 border-white shadow-lg`}></div>
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      index % 2 === 0 ? 'bg-primary-100 text-primary-700' : 'bg-white text-secondary-700 shadow-soft'
                    }`}>
                      {item.year}
                    </div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      index % 2 === 1 ? 'bg-primary-100 text-primary-700' : 'bg-white text-secondary-700 shadow-soft'
                    }`}>
                      {item.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden border border-secondary-100 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-1">{exp.role}</h3>
                      <p className="text-primary-600 font-semibold text-lg">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-secondary-600">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-primary-600" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-primary-600" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBriefcase className="text-primary-600" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-secondary-600 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-secondary-600 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-6 pt-6 border-t border-secondary-200">
                  <h4 className="text-lg font-semibold text-secondary-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Experience Placeholder */}
        <div className="mt-12 fade-in-up">
          <div className="bg-white rounded-2xl shadow-soft border-2 border-dashed border-secondary-200 p-8 text-center hover:border-primary-300 transition-colors duration-300">
            <div className="text-secondary-400 mb-4">
              <FaBriefcase size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-700 mb-2">Add More Experiences</h3>
            <p className="text-secondary-500 text-sm">
              You can easily add more job experiences by updating the experiences array
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;