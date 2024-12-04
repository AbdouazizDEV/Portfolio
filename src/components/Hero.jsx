//import React from 'react';
import { Code, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const CodeAnimation = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-xl transform hover:scale-105 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <code className="text-green-400">
        <p className="typing-animation">const developer = {'{'}</p>
        <p className="typing-animation delay-1000">&nbsp;&nbsp;name: "Abdou Aziz Diop",</p>
        <p className="typing-animation delay-2000">&nbsp;&nbsp;skills: ["React", "Node.js", "Laravel", "Tailwind CSS","Angular"],</p>
        <p className="typing-animation delay-3000">&nbsp;&nbsp;passion: "Web Development"</p>
        <p className="typing-animation delay-4000">{'}'}</p>
      </code>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center md:justify-start animate-fade-in-up delay-500">
      <a 
        href="https://github.com/AbdouaziDEV" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-green-600 transform hover:scale-110 transition-all"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-green-600 transform hover:scale-110 transition-all"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 bg-[size:20px_20px] opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl text-green-600 font-medium animate-fade-in-up">
                Hello, je suis
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-fade-in-up delay-100">
                Abdou Aziz Diop
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 animate-fade-in-up delay-200">
                Développeur Full-Stack
              </p>
            </div>

            <p className="text-gray-600 text-lg animate-fade-in-up delay-300">
              Passionné par le développement web avec une expertise en React, Node.js, et Laravel.
              Je crée des solutions web modernes et performantes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
              <a href="#projects" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all flex items-center gap-2">
                <Code size={20} />
                Voir mes projets
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transform hover:scale-105 transition-all flex items-center gap-2">
                <Mail size={20} />
                Me contacter
              </a>
            </div>

            <SocialLinks />
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 animate-fade-in-up delay-300">
            <div className="relative">
              <div className="absolute -z-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -z-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <CodeAnimation />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-green-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;