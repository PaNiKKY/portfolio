import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import { PERSONAL_INFO, GithubIcon, LinkedInIcon, EmailIcon } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-16 md:py-24">
        <section className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-2">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-sky-400 font-semibold mb-4">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mb-6">
            {PERSONAL_INFO.shortBio}
          </p>
          <div className="flex justify-start gap-5">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="Email">
                <EmailIcon className="w-7 h-7" />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="GitHub">
                <GithubIcon className="w-7 h-7" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="w-7 h-7" />
            </a>
          </div>
        </section>

        <About />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;