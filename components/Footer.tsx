import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-gray-800 mt-16 md:mt-24">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-6 text-center text-gray-500 text-sm">
                <p>&copy; {currentYear} {PERSONAL_INFO.name}.</p>
            </div>
        </footer>
    );
};

export default Footer;