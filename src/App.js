
import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
    },
    {
      title: "Project Two", 
      description: "Mobile-first responsive design with advanced animations",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Project Three",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Express", "Stripe"],
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
    }
  ];

  const skills = [
    "Java", "Python", "JavaScript", "C++", "Swift", "React", "Node.js",
    "HTML/CSS", "Git", "Docker", "Firebase APIs", "SQL"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#2D388A] via-[#00AEEF] to-[#00DDFF] bg-clip-text text-transparent">
              Nikhil Devarakonda
            </h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <a
                key={section}
                href={`#${section}`}
                className="capitalize transition-colors hover:text-blue-400 text-gray-300"
              >
                {section}
              </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-100">Developer</span>
              <br />
              <span className="text-gray-100">& Aspiring SWE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Full stack developer with a passion for hands-on projects using Python, Java, and C++.
              Eager to apply my technical skills and passion for innovation in a future career as a software engineer.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-[#2D388A] to-[#00AEEF] rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m a Computer Science and Economics student at the University of Illinois Urbana-Champaign, driven by a deep curiosity for how code can solve real-world problems. From building machine learning tools for AI-driven drug discovery to contributing to U.S. Air Force–backed battery safety research, I’ve applied my skills across cutting-edge projects that blend innovation and impact. 
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’ve worked with languages like Python, Java, C++, JS, and many more. I love exploring everything from full-stack development to embedded systems. Whether it’s developing with Flutter, tinkering with Raspberry Pi, or creating game logic in Godot, I’m passionate about turning ideas into powerful software. I'm actively seeking opportunities to grow as a software engineer and build technologies that matter.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-center border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-gray-400 hover:text-gray-300 transition-colors">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Let's Work Together</h3>
          <p className="text-gray-400 text-lg mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="mailto:nikhildevarakonda100.email@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/nikhil-devarakonda-8b47441b8" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Nikhil Devarakonda. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;