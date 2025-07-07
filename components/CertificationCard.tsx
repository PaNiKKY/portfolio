import React from 'react';
import type { Certification } from '../types';
import { CertificateIcon, ExternalLinkIcon } from '../constants';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-gray-950/50 rounded-lg p-5 border border-gray-800/50 flex items-center gap-5 transition-colors duration-300 hover:border-sky-500/50">
        <div className="flex-shrink-0 text-sky-400">
            <CertificateIcon className="w-8 h-8"/>
        </div>
        <div className="flex-grow">
            <h3 className="font-bold text-gray-100">{certification.name}</h3>
            <p className="text-gray-400 text-sm">{certification.issuer}</p>
            <p className="text-gray-500 text-xs">{certification.date}</p>
        </div>
        {certification.credentialUrl && (
            <a 
                href={certification.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-shrink-0 text-gray-400 hover:text-sky-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="View Credential"
            >
                <ExternalLinkIcon className="w-5 h-5" />
            </a>
        )}
    </div>
  );
};

export default CertificationCard;