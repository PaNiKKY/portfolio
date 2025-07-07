import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[75vh] flex items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4 animate-fade-in-down">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl text-sky-400 font-semibold mb-6 animate-fade-in-up delay-200">
          {PERSONAL_INFO.title}
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-400">
          {PERSONAL_INFO.shortBio}
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up delay-600">
          <a href="#projects" className="bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="bg-gray-800 text-gray-100 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;