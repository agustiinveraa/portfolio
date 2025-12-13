import React from 'react'
import Logo from '../../public/assets/logo.png'
import { personalInfo } from '../config/personalInfo'

export default function Footer() {
    return (
        <footer className="py-8 px-4">
            <div className="flex justify-between items-center max-w-screen mx-auto">
                <img src={Logo} alt="Logo" className="w-64 h-64"/>
                <div className="flex gap-10">
                    <div className="flex flex-col"> 
                    <p className="text-lg font-medium mb-2 text-blue-400">Links</p>
                    <a href="#hero">Inicio</a>
                    <a href="#about">Sobre mí</a>
                    <a href="#projects">Proyectos</a>
                    </div>

                    <div className="flex flex-col"> 
                    <p className="text-lg font-medium mb-2 text-blue-400">Redes sociales</p>
                    <a href={personalInfo.socialLinks.linkedin}>LinkedIn</a>
                    <a href={personalInfo.socialLinks.github}>GitHub</a>
                    <a href={personalInfo.socialLinks.cv}>CV</a> 
                </div>
                </div>
            </div>
        </footer>
    )
}