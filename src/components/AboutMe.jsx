import React from 'react'
import { personalInfo } from '../config/personalInfo'

export default function AboutMe() {
  const { aboutMe } = personalInfo
  
  return (
    <div className="p-6 h-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{aboutMe.title}</h2>
      
      <div className="space-y-4">
        {aboutMe.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-300">{paragraph}</p>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2 text-blue-400">Stack de desarrollo profesional</h3>
        <div className="flex flex-wrap gap-2">
          {aboutMe.techstackPrincipal.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 rounded-full text-sm flex items-center gap-2 border"
              style={{
                backgroundColor: `${skill.color}15`,
                borderColor: `${skill.color}30`,
                color: skill.color
              }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-4 h-4"
                style={{ filter: skill.name === 'Express' || skill.name === 'GitHub' ? 'invert(1)' : 'none' }}
              />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2 text-blue-400">Habilidades</h3>
        <div className="flex flex-wrap gap-2">
          {aboutMe.skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 rounded-full text-sm flex items-center gap-2 border"
              style={{
                backgroundColor: `${skill.color}15`,
                borderColor: `${skill.color}30`,
                color: skill.color
              }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-4 h-4"
                style={{ filter: skill.name === 'Express' || skill.name === 'GitHub' ? 'invert(1)' : 'none' }}
              />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
