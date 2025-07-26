import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary-600" />,
      title: "Email",
      details: "mitchauhan108@gmail.com",
      link: "mailto:mitchauhan108@gmail.com"
    },
    {
      icon: <FaPhone className="text-green-600" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-600" />,
      title: "Location",
      details: "Your City, State",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-600" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mit-chauhan-69a451210",
      followers: "500+"
    },
    {
      icon: <FaGithub className="text-gray-800" />,
      name: "GitHub",
      url: "https://github.com/Mitchauhan0712",
      followers: "200+"
    },
    {
      icon: <FaTwitter className="text-blue-400" />,
      name: "Twitter",
      url: "#",
      followers: "100+"
    }
  ];

  return (
    <section name="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-secondary-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="slide-in-left">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Let's Connect</h3>
              <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and development.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary-100 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-secondary-600 hover:text-primary-600 transition-colors duration-300"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Follow Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 border border-secondary-100 text-center group"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-1">{social.name}</h4>
                    <p className="text-secondary-500 text-sm">{social.followers} followers</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-secondary-100">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 hover:shadow-medium hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with cutting-edge technology and exceptional user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mitchauhan108@gmail.com"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-medium hover:bg-primary-50 transition-colors duration-300 hover:scale-105"
              >
                Email Me Directly
              </a>
              <a
                href="/Resume.pdf"
                download
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary-600 transition-colors duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;