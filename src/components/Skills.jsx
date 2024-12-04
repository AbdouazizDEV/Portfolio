/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Code, Database, Layout, Globe, Cpu } from 'lucide-react';

const SkillBar = ({ skill, percentage, isVisible }) => (
  <div className={`mb-6 transform transition-all duration-1000 ${
    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
  }`}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700 font-medium">{skill}</span>
      <span className="text-green-600 font-bold">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-green-600 rounded-full transition-all duration-1000 ease-out"
        style={{ 
          width: isVisible ? `${percentage}%` : '0%'
        }}
      />
    </div>
  </div>
);

const SkillCategory = ({ title, skills, icon: Icon, isVisible, delay = 0 }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-1000 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
  }`}
  style={{ transitionDelay: `${delay}ms` }}>
    <div className="flex items-center gap-2 mb-6">
      <Icon className="w-6 h-6 text-green-600" />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    {skills.map((skill, index) => (
      <SkillBar 
        key={index}
        skill={skill.name}
        percentage={skill.level}
        isVisible={isVisible}
      />
    ))}
  </div>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Angular", level: 80 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "PHP", level: 80 }
      ]
    },
    {
      title: "Outils & Technologies",
      icon: Cpu,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "REST API", level: 90 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "firebase", level: 70 },
      ]
    },
    {
      title: "Divers",
      icon: Globe,
      skills: [
        { name: "Anglais", level: 85 },
        { name: "Français", level: 90 },
        { name: "Espagnol", level: 70 }
      ]
    },
    /* Ajoutez ici d'autres catégories de skills les securité JWT, Authentification firebase facebook google telephone ... */
    {
      title: "Securité",
      icon: Code,
      skills: [
        { name: "JWT", level: 90 },
        { name: "Authentification firebase", level: 85 },
        { name: "Authentification google", level: 80 },
        { name: "Authentification facebook", level: 75 },
      ]
    }

  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative">
      {/* Fond animé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -z-10 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
             style={{ top: '20%', left: '10%' }} />
        <div className="absolute -z-10 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
             style={{ bottom: '20%', right: '10%' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full transform transition-transform duration-500 hover:scale-x-150" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              {...category}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;