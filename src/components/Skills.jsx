import React from "react";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDocker
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-primary-500 to-blue-600",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" />, level: 95 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 90 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" />, level: 80 },
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
        { name: "Express", icon: <SiExpress className="text-gray-600" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, level: 75 },
      ]
    },
    {
      title: "Tools & Technologies",
      color: "from-accent-500 to-purple-600",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 90 },
        { name: "GitHub", icon: <FaGithub className="text-gray-800" />, level: 90 },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" />, level: 95 },
        { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 85 },
        { name: "Figma", icon: <FaFigma className="text-purple-500" />, level: 70 },
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 65 },
      ]
    }
  ];

  return (
    <section name="skills" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-secondary-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            These are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="text-center mb-12">
                <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 border border-secondary-100 group"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-secondary-900">{skill.name}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-secondary-600">Proficiency</span>
                        <span className="text-sm font-medium text-secondary-900">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 fade-in-up">
          <div className="bg-white p-8 rounded-2xl shadow-soft inline-block">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Ready to Work Together?</h3>
            <p className="text-secondary-600 mb-6">Let's discuss how these skills can bring your project to life</p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-full hover:shadow-medium hover:scale-105 transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
