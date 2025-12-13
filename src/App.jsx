import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ScrollIndicator from './components/ScrollIndicator'
import { personalInfo } from './config/personalInfo'
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      {/* Hero Section - Full Height */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center">
        <Hero 
          name={personalInfo.name} 
          description={personalInfo.description}
        />
        <ScrollIndicator />
      </section>
      
      {/* Content Section - Hidden initially, shown after scroll */}
      <section id="content">
        {/* About & Experience Section - Side by Side */}
        <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <AboutMe />
          <Experience/>
        </div>
        
        {/* Projects Section */}
        <div id="projects" className="mt-16">
          <Projects />
        </div>
      </section>
      {/* <Footer /> */}
      <Analytics />
    </Layout>
  )
}

export default App
