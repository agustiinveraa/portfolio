import React from 'react'
import Avatar from './Avatar'
import SocialIcons from './SocialIcons'
import { personalInfo } from '../config/personalInfo'

export default function Hero({ name, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 relative">
      {/* Efecto de destello detrás del avatar */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500 opacity-20 filter blur-3xl"></div>
      
      {/* Tag animado - Disponible para trabajar */}
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-6 z-10 pointer-events-none"> 
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> 
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-white bg-green-950 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          Disponible para trabajar
        </div> 
      </span>
      
      <Avatar imageUrl={personalInfo.avatarUrl} altText={personalInfo.name} />
      
      {/* Nombre con efecto de texto */}
      <h1 
        className="text-5xl font-bold text-center relative"
        style={{ 
          textShadow: '0 0 10px rgba(255,255,255,0.3)', 
          background: 'linear-gradient(to right, #60a5fa, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {name || personalInfo.name}
      </h1>
      
      {/* Subtítulo con el rol */}
      <h2 className="text-2xl font-medium text-blue-300 text-center -mt-4">
        {personalInfo.role}
      </h2>
      
      {/* Descripción */}
      <p 
        className="text-xl text-gray-300 max-w-lg text-center p-5"
        style={{
          letterSpacing: '0.3px',
          lineHeight: '1.6'
        }}
      >
        {description || personalInfo.description}
      </p>
      
      {/* Iconos sociales */}
      <SocialIcons />
    </div>
  )
}
