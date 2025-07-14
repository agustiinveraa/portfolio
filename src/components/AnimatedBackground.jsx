import React, { useEffect } from 'react'
import './wavy-background.css'

const AnimatedBackground = () => {
  // Función para crear partículas flotantes
  useEffect(() => {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    // Crear 50 partículas con posiciones aleatorias
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Posición aleatoria
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.5 + 0.1;
      
      // Asignar estilos
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;
      
      // Animación de flotar
      const duration = Math.random() * 60 + 30;
      const direction = Math.random() > 0.5 ? 1 : -1;
      
      particle.style.animation = `float ${duration}s ease-in-out ${direction * Math.random() * 20}s infinite`;
      
      container.appendChild(particle);
    }
    
    return () => {
      // Limpiar partículas al desmontar el componente
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []);
  
  return (
    <div className="wavy-background">
      {/* Blobs de gradiente animados */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
      
      {/* Contenedor para partículas */}
      <div className="particles-container"></div>
    </div>
  )
}

export default AnimatedBackground
