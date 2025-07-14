import React from 'react'
import { personalInfo } from '../config/personalInfo'

export default function Experience() {
  const { experience } = personalInfo
  
  return (
    <div className="p-6 h-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{experience.title}</h2>
      
      <div className="space-y-6">
        {experience.jobs.map((job, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-4">
            <h3 className="text-xl font-bold text-white">{job.position}</h3>
            <h4 className="text-lg font-medium text-blue-300">{job.company}</h4>
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <span>{job.location}</span>
              <span className="mx-2">•</span>
              <span>{job.period}</span>
            </div>
            <p className="text-gray-300 mb-3">{job.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
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
                    style={{ filter: tech.name === 'Express' || tech.name === 'GitHub' ? 'invert(1)' : 'none' }}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
