import React from 'react'
import { personalInfo } from '../config/personalInfo'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { projects } = personalInfo
  
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">{projects.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.list.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}
