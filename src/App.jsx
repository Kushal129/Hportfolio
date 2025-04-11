import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Shield, Globe, ChevronDown, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import myimg from '../public/myimg.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav
       initial={{ scale: 0.5, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a 
              href="#"
              className="text-xl font-bold text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              HK
            </motion.a>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-600 hover:text-blue-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : ''
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 h-[calc(100vh-4rem)] flex items-center justify-center relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-600/20 p-1 shadow-xl">
                <img 
                  src={myimg}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Henvi Kaklotar
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
                Cybersecurity Aficionado
                <span className="mx-3 text-blue-600">&</span>
                Web Developer
              </h2>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            >
              <motion.a 
                href="/Henvi_KaklotarResume.pdf" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </motion.a>
              <motion.a 
                href="#about" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
                <ChevronDown className="group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="text-blue-600" size={32} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About Me
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-12 gap-12 items-start">
              {/* Main Content */}
              <div className="md:col-span-7 space-y-8">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      I'm Henvi Kaklotar, a dedicated cybersecurity enthusiast with a fresh perspective and strong foundation in Information Technology. I recently completed my Master's in Cyber Security from Dr. Babasaheb Ambedkar Open University (August 2024), building upon my B.Sc IT background.
                    </p>
                    <p className="leading-relaxed">
                      My journey began in web development, where I've built several real-world applications including e-commerce platforms and college projects. This hands-on experience has given me valuable insights into frontend and backend technologies, while sparking my interest in secure coding practices.
                    </p>
                    <p className="leading-relaxed">
                      Currently seeking entry-level opportunities in cybersecurity, I'm excited to learn and grow while contributing to real-world security solutions. My combined background in web development and security gives me a unique perspective on application security.
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    <ul className="space-y-3">
                      <li>
                        <p className="font-medium">Master's in Cyber Security</p>
                        <p className="text-blue-100">Dr. Babasaheb Ambedkar Open University</p>
                        <p className="text-sm text-blue-200">2024 - Present</p>
                      </li>
                      <li>
                        <p className="font-medium">B.Sc in Information Technology</p>
                        <p className="text-blue-100">Gujarat University</p>
                        <p className="text-sm text-blue-200">2021-2024</p>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>Network Security</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>Web App Security</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>Penetration Testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span>Security Analysis</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="md:col-span-5 space-y-6">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Security Tools</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Nmap', 'Burp Suite', 'Wireshark', 'Metasploit', 'OWASP ZAP'].map((tool, index) => (
                          <motion.div 
                            key={tool} 
                            className="bg-gray-50 px-4 py-2 rounded-lg text-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {tool}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Web Development</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['React.js', 'JavaScript', 'HTML/CSS', 'PHP', 'SQL'].map((tech, index) => (
                          <motion.div 
                            key={tech} 
                            className="bg-gray-50 px-4 py-2 rounded-lg text-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-4">Additional Skills</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Git', 'Linux', 'Network Protocols', 'API Security'].map((skill, index) => (
                          <motion.div 
                            key={skill} 
                            className="bg-gray-50 px-4 py-2 rounded-lg text-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my journey through cybersecurity and web development, featuring hands-on projects and practical implementations.
            </p>
          </motion.div>

          {/* Cybersecurity Projects */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Shield className="text-blue-600" size={28} />
              <h3 className="text-3xl font-bold text-gray-800">Cybersecurity Projects</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {cyberProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-700 font-medium">Key Learnings:</p>
                      <p className="text-blue-600 mt-1">{project.learned}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Web Development Projects */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Globe className="text-blue-600" size={28} />
              <h3 className="text-3xl font-bold text-gray-800">Web Development Projects</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {webProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Mail, href: "mailto:henvikk81@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/henvi-kaklotar-005597215/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/kaklotarhenvi", label: "GitHub" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
            
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ExternalLink size={18} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p className="mb-2">© {new Date().getFullYear()} Henvi Kaklotar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const cyberProjects = [
  {
    title: "Vulnerability Assessment Lab",
    description: "Simulated real-world cyber attacks using OWASP Juice Shop, identifying and exploiting XSS, SQL Injection, and Broken Authentication vulnerabilities.",
    learned: "Improved understanding of web app vulnerabilities and security-focused testing approaches.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Custom Nmap Script Development",
    description: "Created and executed custom NSE scripts for network reconnaissance, performing TTL-based scans and service detection.",
    learned: "Advanced network enumeration techniques and custom script development.",
    image: "https://portfoliobykushal.netlify.app/assets/cli-BOlUaTsM.png",
  },
  {
    title: "Password Security Analysis",
    description: "Utilized tools like Hydra and John the Ripper to test system resilience against weak credentials in a secure lab environment.",
    learned: "Practical knowledge in ethical password auditing and secure authentication systems.",
    image: "https://res.cloudinary.com/day0qlfda/image/upload/v1744364543/hwe4catd1xxobtagxqwo.png",
  },
  {
    title: "Web App Penetration Testing",
    description: "Worked with DVWA and HackTheBox labs to simulate real-world web attacks using Burp Suite and browser dev tools.",
    learned: "Enhanced ability to detect and exploit web application vulnerabilities.",
    image: "https://hacksheets.in/wp-content/uploads/2023/04/Web-Application-Security8.png",
  }
];

const webProjects = [
  {
    title: "Perfume Store",
    description: "A modern e-commerce platform with secure payment integration, user authentication, and responsive design.",
    tech: ["React.js", "Tailwind CSS"],
    image: "https://portfoliobykushal.netlify.app/assets/perfume-D4RjF235.png",
  },
  {
    title: "Auction System",
    description: "Real-time bidding platform with live updates, secure payment processing, and user authentication.",
    tech: ["ASP.Net", "C#", "SQL Database"],
    image: "https://portfoliobykushal.netlify.app/assets/ams-BYrn2h_H.png",
  },
  {
    title: "Bus Pass System",
    description: "Digital solution for managing bus passes with QR code generation and secure user verification.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    image: "https://portfoliobykushal.netlify.app/assets/bpms-BvzPkImR.png",
  },
  {
    title: "Cricket Scoreboard",
    description: "Real-time cricket scoring application with live updates, statistics, and team management.",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Redux"],
    image: "https://portfoliobykushal.netlify.app/assets/cricket-CHoG9arH.png",
  }
];

export default App;