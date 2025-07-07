import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-950/50 rounded-lg border border-gray-800/50 transition-colors duration-300 hover:border-gray-700/80 flex flex-col h-full overflow-hidden">
      {project.imageUrl && (
        <img src={project.imageUrl} alt={`${project.title} workflow diagram`} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
        </div>
        
        <div className="mt-auto">
          {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-4 items-center mb-4">
                  {project.githubUrl && (
                      <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 bg-gray-800 text-gray-200 font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 transition-colors duration-300 text-sm"
                      >
                          <GithubIcon className="w-5 h-5" />
                          <span>GitHub</span>
                      </a>
                  )}
                  {project.liveUrl && (
                      <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 text-sky-400 font-semibold py-2 px-4 rounded-md hover:bg-sky-900/50 transition-colors duration-300 text-sm border border-sky-800"
                      >
                          <ExternalLinkIcon className="w-5 h-5" />
                          <span>Dashboard</span>
                      </a>
                  )}
              </div>
          )}

          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
            {project.tags.map(tag => (
              <span key={tag} className="bg-gray-800 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;