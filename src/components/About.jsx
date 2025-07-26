import React from "react";
import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-primary-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern standards."
    },
    {
      icon: <FaLightbulb className="text-accent-600" size={24} />,
      title: "Problem Solving",
      description: "Analytical approach to complex challenges with innovative and efficient solutions."
    },
    {
      icon: <FaUsers className="text-primary-600" size={24} />,
      title: "Collaboration",
      description: "Strong team player with excellent communication and project management skills."
    },
    {
      icon: <FaRocket className="text-accent-600" size={24} />,
      title: "Innovation",
      description: "Always exploring new technologies and pushing boundaries of what's possible."
    }
  ];

  return (
    <section name="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-secondary-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-6">
              <p className="text-lg text-secondary-600 leading-relaxed">
                I'm a passionate <span className="text-gradient font-semibold">Software Developer</span> with a strong foundation in both frontend and backend technologies. 
                My journey began with frontend development, where I mastered React.js and modern CSS frameworks, 
                but I've since expanded my expertise to include full-stack development with Node.js, Express, and MongoDB.
              </p>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                What sets me apart is my ability to bridge the gap between beautiful user interfaces and robust backend systems. 
                I thrive on solving complex problems, writing clean and maintainable code, and creating seamless user experiences 
                that scale effectively.
              </p>

              <p className="text-lg text-secondary-600 leading-relaxed">
                I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible. 
                <span className="text-gradient font-semibold"> Let's collaborate and build something amazing together!</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium">Full Stack Development</span>
              <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-medium">UI/UX Design</span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium">Problem Solving</span>
              <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-medium">Team Leadership</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-in-right">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 border border-secondary-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-secondary-50 rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{feature.title}</h3>
                </div>
                <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-up">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">3+</div>
            <div className="text-secondary-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-secondary-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">15+</div>
            <div className="text-secondary-600 font-medium">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-secondary-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
