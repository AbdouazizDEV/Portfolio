/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactForm = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Form submitted:', formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`bg-white rounded-lg shadow-lg p-8 transform transition-all duration-1000
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
            placeholder="Votre nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
            placeholder="Sujet de votre message"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
            placeholder="Votre message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Envoyer le message
        </button>
      </div>
    </form>
  );
};

const ContactInfo = ({ isVisible }) => {
  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Téléphone",
      value: "+221 77 298 01 05",
      link: "tel:+221772980105"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "abdouazizdiop583@gmail.com",
      link: "mailto:abdouazizdiop583@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Localisation",
      value: "Dakar, Sénégal"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/AbdouaziDEV",
      label: "Github"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://linkedin.com",
      label: "LinkedIn"
    }
  ];

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-8 transform transition-all duration-1000 delay-300
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Informations de Contact
      </h3>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg text-green-600">
              {detail.icon}
            </div>
            <div>
              <h4 className="text-gray-800 font-medium">{detail.title}</h4>
              {detail.link ? (
                <a 
                  href={detail.link}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-600">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-gray-800 font-medium mb-4">Me suivre</h4>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -z-10 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
             style={{ top: '20%', left: '10%' }} />
        <div className="absolute -z-10 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
             style={{ bottom: '20%', right: '10%' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Me Contacter
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full transform transition-transform duration-500 hover:scale-x-150" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">N'hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité de collaboration.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ContactForm isVisible={isVisible} />
          <ContactInfo isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Contact;