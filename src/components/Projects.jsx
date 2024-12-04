/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Box } from 'lucide-react';

const ProjectCard = ({ project, isVisible, index }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-1000 hover:shadow-xl
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative group">
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src="/api/placeholder/400/300"
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-green-600 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-6 h-6 text-green-600" />
            </a>
            {project.live && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-300"
              >
                <ExternalLink className="w-6 h-6 text-green-600" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Application de Réseau Social pour Tailleur",
      description: "Une plateforme sociale dédiée aux tailleurs, permettant le partage de créations et la collaboration.",
      technologies: ["React.js", "Node.js", "MongoDB", "Prisma", "Cloudinary"],
      github: "https://github.com/Bakemono-san/socialtailorapp-react",
      image: "/project1.jpg"
    },
    {
      title: "API de Gestion des Apprenants",
      description: "API REST complète pour la gestion des apprenants avec documentation Swagger.",
      technologies: ["Node.js", "Firebase", "MySQL", "Swagger", "Prisma"],
      github: "https://laravelapprenant.onrender.com/swagger/index.html",
      live: "https://laravelapprenant.onrender.com/swagger/index.html",
      image: "/project2.jpg"
    },
    {
      title: "Application de Gestion de Dette",
      description: "Système de gestion des dettes avec notifications automatiques.",
      technologies: ["Laravel", "Node.js", "PostgreSQL", "Firebase"],
      github: "https://github.com/AbdouazizDEV/DetteLaravel",
      image: "/project3.jpg"
    },
    {
      title: "Système de Gestion des Apprenants",
      description: "Application complète de gestion des apprenants avec interface administrative.",
      technologies: ["Laravel", "Node.js", "MySQL", "Firebase", "Cloudinary"],
      github: "https://github.com/AbdouazizDEV/Abdou_Aziz",
      image: "/project4.jpg"
    },
   /*  {
      title: "Système de Gestion des Apprenants",
      description: "Application complète de gestion des apprenants avec interface administrative.",
      technologies: ["Laravel", "Node.js", "MySQL", "Firebase", "Cloudinary"],
      github: "https://github.com/AbdouazizDEV/Abdou_Aziz",
      image: "/project5.jpg"
    }, */
    /* {
      title: "Système de Gestion des Apprenants",
      description: "Application complète de gestion des apprenants avec interface administrative.",
      technologies: ["Laravel", "Node.js", "MySQL", "Firebase", "Cloudinary"],
      github: "https://github.com/AbdouazizDEV/Abdou_Aziz",
      image: "/project6.jpg"
    } */
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -z-10 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
             style={{ top: '20%', left: '10%' }} />
        <div className="absolute -z-10 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
             style={{ bottom: '20%', right: '10%' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full transform transition-transform duration-500 hover:scale-x-150" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents, démontrant mes compétences en développement full-stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;