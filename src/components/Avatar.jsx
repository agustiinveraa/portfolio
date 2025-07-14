import React from 'react'

export default function Avatar({ imageUrl, altText }) {
  return (
    <div className="relative z-10">
      <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-blue-500 shadow-lg shadow-blue-500/40 relative z-20">
        <img 
          src={imageUrl || "https://via.placeholder.com/300"} 
          alt={altText || "Foto de perfil"} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Efecto de brillo alrededor del avatar */}
      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-40 -z-10 animate-pulse"></div>
    </div>
  )
}
