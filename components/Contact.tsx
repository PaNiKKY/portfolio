import React from 'react';
import Section from './Section';
import { PERSONAL_INFO, GithubIcon, LinkedInIcon } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-xl mx-auto">
        <p className="text-lg text-gray-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
        </p>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 mb-10"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                <GithubIcon className="w-8 h-8" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                <LinkedInIcon className="w-8 h-8" />
            </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;