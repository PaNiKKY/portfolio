import React from 'react';
import Section from './Section';
import { PERSONAL_INFO, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3">
          <p className="text-gray-400 leading-relaxed text-lg">
            {PERSONAL_INFO.about}
          </p>
        </div>
        <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-200 mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                    <span key={index} className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full border border-gray-800">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;