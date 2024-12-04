/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Briefcase, Code, Database, Server } from 'lucide-react';

const ExperienceCard = ({ date, title, company, description, tech, link, isVisible, isLeft }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-1000 transform
    ${isVisible 
      ? 'opacity-100 translate-x-0' 
      : `opacity-0 ${isLeft ? '-translate-x-[200%]' : 'translate-x-[200%]'}`
    }`}
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div className="flex items-center space-x-2">
        <Briefcase className="w-5 h-5 text-green-600" />
        <span className="text-green-600 font-bold">{date}</span>
      </div>
      <span className="text-gray-500">{company}</span>
    </div>
    
    <h3 className="text-xl font-bold text-gray-800 mb-3">
      {title}
    </h3>
    
    <p className="text-gray-600 mb-4">
      {description}
    </p>
    
    <div className="border-t border-gray-100 pt-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <Code className="w-4 h-4 text-green-600" />
        Technologies utilisées
      </h4>
      <div className="flex flex-wrap gap-2">
        {tech && tech.map((item, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-green-600 hover:text-green-700 transition-colors duration-300"
      >
        <Server className="w-4 h-4" />
        Voir le projet
      </a>
    )}
  </div>
);

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience');
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

  const experiences = [
    {
      date: "Novembre 2024",
      title: "Développeur FullStack",
      company: "Projet de groupe",
      description: "Mise en place d'une application Mobile de transfert d'argent.",
      tech: [ "Flutter","Laravel" ,"firebase", "Cloudinary"],
      link: "https://github.com/AbdouazizDEV/WaveCloneMobileVrai"
    },
    {
      date: "Novembre 2024",
      title: "Développeur front end",
      company: "Projet de groupe",
      description: "Mise en place d'une application de transfert d'argent.",
      tech: [ "Angular.js", "PostgreSQL", "MongoDB", "Mongoose", "Cloudinary"],
      link: "https://github.com/AbdouazizDEV/wavecloneFront"
    },
    {
      date: "Octobre 2024",
      title: "Développeur FullStack",
      company: "Projet de groupe",
      description: "Mise en place d'une application de Réseau Social pour Tailleur.",
      tech: ["Node.js", "React.js", "Prisma", "MongoDB", "Mongoose", "Cloudinary"],
      link: "https://github.com/Bakemono-san/socialtailorapp-react"
    },
    {
      date: "Août 2024",
      title: "Développeur Backend",
      company: "Projet Personnel",
      description: "Application Rest de gestion des Apprenants avec documentation Swagger",
      tech: ["Node.js", "Prisma", "Firebase", "MySQL", "Cloudinary"],
      link: "https://laravelapprenant.onrender.com/swagger/index.html"
    },
    {
      date: "Juillet 2024",
      title: "Développeur FullStack",
      company: "Projet Personnel",
      description: "Application de gestion de Dette avec système de notification",
      tech: ["Laravel", "Node.js", "Firebase", "PostgreSQL"],
      link: "https://github.com/AbdouazizDEV/DetteLaravel"
    },
    {
      date: "Juin 2024",
      title: "Développeur front end",
      company: "Projet Personnel",
      description: "Application de gestion des Apprenants avec interface administrative",
      tech: ["Laravel", "Node.js", "Prisma", "Firebase", "MySQL", "Cloudinary"],
      link: "https://github.com/AbdouazizDEV/Abdou_Aziz"
    },
    {
      date: "Avril 2024",
      title: "Développeur FullStack",
      company: "Projet Personnel",
      description: "Application de gestion des transport de cargaison avec interface utilisateur",
      tech: ["Laravel", "Node.js", "Prisma", "Firebase", "MySQL", "Cloudinary"],
      link: "https://github.com/AbdouazizDEV/Abdou_Aziz"
    },
    {
      date: "Mai 2024",
      title: "Développeur FullStack",
      company: "Projet Personnel",
      description: "Application de gestion des Apprenants avec interface utilisateur",
      tech: ["Laravel", "Node.js", "Prisma", "Firebase", "MySQL", "Cloudinary"],
      link: "https://github.com/AbdouazizDEV/Abdou_Aziz"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -z-10 w-96 h-96 bg-green-50 rounded-full 
          mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          style={{ top: '20%', left: '10%' }}
        />
        <div 
          className="absolute -z-10 w-96 h-96 bg-blue-50 rounded-full 
          mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full transform transition-transform duration-500 hover:scale-x-150" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div 
                    className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-green-600 transform transition-transform duration-300 hover:scale-150 hover:bg-green-500"
                    style={{
                      left: index % 2 === 0 ? '-2px' : 'auto',
                      right: index % 2 === 0 ? 'auto' : '-2px'
                    }}
                  >
                    {index % 2 === 0 ? 
                      <div className="absolute -left-12 w-12 h-0.5 bg-gray-200" /> :
                      <div className="absolute -right-12 w-12 h-0.5 bg-gray-200" />
                    }
                  </div>
                  
                  <ExperienceCard 
                    {...exp} 
                    isVisible={isVisible}
                    isLeft={index % 2 === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;