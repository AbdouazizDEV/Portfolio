/* eslint-disable no-unused-vars */
import React from 'react';
import { GraduationCap, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -z-10 w-72 h-72 bg-green-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob left-4 top-4" />
        <div className="absolute -z-10 w-72 h-72 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 right-4 top-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full transform transition-transform duration-500 hover:scale-x-150"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png" 
                  alt="Abdou Aziz Diop"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-lg -z-10 transform transition-all duration-500 group-hover:rotate-6"></div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Informations Personnelles</h3>
              <ul className="space-y-3">
                <li className="flex justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-gray-600">Âge : 25 ans</span>
                  <span>25 ans</span>
                </li>
                <li className="flex justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-gray-600">Langues : Français, Anglais, Wolof, Serrére</span>
                  <span>Français, Anglais, Wolof, Serrére</span>
                </li>
                <li className="flex justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                  <span className="font-medium text-gray-600">Disponibilité</span>
                  <span>Freelance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <GraduationCap className="text-green-600" />
                Formation
              </h3>
              <div className="space-y-4">
                {[
                  { year: "2024", title: "Sonatel Academi", desc: "Développement web/mobile" },
                  { year: "2023", title: "SunuCode", desc: "Développement web" },
                  { year: "2022-2023", title: "UCAD-FST", desc: "Licence 1 Mathématique informatique" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  >
                    <p className="text-green-600">{item.year}</p>
                    <h4 className="text-currentfont-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Code2 className="text-green-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Coursera", desc: "Introduction to Relational Database and SQL" },
                  { title: "Coursera", desc: "APIs in Node.js: Write a RESTful API Backend Application" },
                  { title: "Le programme FORCE-N", desc: "Certificat en Intelligence Artificielle" },
                  { title: "LinkedIn Learning", desc: "PHP : La programmation orientée objet" },
                  { title: "LinkedIn Learning", desc: "L'essentiel de Flutter" },
                  { title: "LinkedIn Learning", desc: "L'essentiel de React.js" }
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  >
                    <p className="font-semibold">{cert.title}</p>
                    <p className="text-gray-600">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;