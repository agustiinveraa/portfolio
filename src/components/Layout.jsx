import React from 'react'
import AnimatedBackground from './AnimatedBackground'
import './wavy-background.css'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-white relative">
      {/* Fondo animado */}
      <AnimatedBackground />
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 content-overlay">
        {children}
      </div>
    </div>
  )
}
