import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer",
      company: "Your Company Name",
      duration: "Month Year - Present",
      responsibilities: [
        "Develop and maintain full-stack web applications using React, Node.js, and MongoDB",
        "Collaborate with cross-functional teams to deliver high-quality software solutions",
        "Implement responsive UI components and optimize application performance",
        "Write clean, maintainable code following best practices and coding standards"
      ]
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Previous Company",
      duration: "Month Year - Month Year",
      responsibilities: [
        "Built responsive web applications using React.js and Tailwind CSS",
        "Integrated REST APIs and implemented state management solutions",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Participated in code reviews and contributed to team best practices"
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">My professional journey and key achievements</p>
        </div>

        <div className="space-y-8">
          {experiences.map(({ id, role, company, duration, responsibilities }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{role}</h3>
                  <p className="text-cyan-400 font-medium">{company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {duration}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2 text-gray-300">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Placeholder for additional experiences */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-dashed border-gray-600">
            <div className="text-center text-gray-400">
              <p className="text-lg font-medium mb-2">Add More Experiences</p>
              <p className="text-sm">You can easily add more job experiences here by updating the experiences array</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;