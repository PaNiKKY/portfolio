import React from 'react';
import Section from './Section';
import CertificationCard from './CertificationCard';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
        <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
                <CertificationCard key={index} certification={cert} />
            ))}
        </div>
    </Section>
  );
};

export default Certifications;