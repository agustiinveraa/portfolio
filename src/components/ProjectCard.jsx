import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 border border-gray-700 rounded-lg">
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-64 object-cover"
      />
      
      <div className="p-4">
        <a 
          href={project.repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block"
        >
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
            {project.name}
            <svg 
              className="w-4 h-4 transition-all transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </h3>
        </a>
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 rounded-full text-xs flex items-center gap-1 border"
              style={{
                backgroundColor: `${tech.color}15`,
                borderColor: `${tech.color}30`,
                color: tech.color
              }}
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-3 h-3"
                style={{ filter: tech.name === 'Express' || tech.name === 'GitHub' || tech.name === 'JWT' ? 'invert(1)' : 'none' }}
              />
              {tech.name}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
