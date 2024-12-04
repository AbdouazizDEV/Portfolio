/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
/* import { Contact } from 'lucide-react';
 */

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact/>
      <footer className="py-12 bg-gray-200 text-center">
        <p>�� 2024 ardouaziz.dev</p>
      </footer>
    </div>
  );
};

export default App;