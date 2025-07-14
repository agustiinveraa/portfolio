// Archivo de configuración para datos personales del portfolio

// Archivo de configuración para datos personales del portfolio

// Importación de imágenes
import avatar from "src/assets/agus.jpg";
import snippetflowImg from "src/assets/projects/snippetflow.png";
import slotsImg from "src/assets/projects/slots.png";
import bitllesImg from "src/assets/projects/bitlles.png";
import ecommerceImg from "src/assets/projects/ecommerce.png";


export const personalInfo = {
  name: "Agustín Vera Faustino",
  role: "Desarrollador Full Stack",
  description: "Desarrollo aplicaciones web completas, robustas y escalables, abarcando tanto el frontend como el backend, con enfoque en buenas prácticas, rendimiento y mantenibilidad.",
  avatarUrl: avatar, // Reemplaza con la URL de tu imagen
  socialLinks: {
    linkedin: "https://linkedin.com/in/agustiinveraa/",
    github: "https://github.com/tu-usuario",
    cv: "/tu-curriculum.pdf" // Coloca tu CV en la carpeta public
  },
  contact: {
    email: "averafaus05@gmail.com",
    phone: "+34 684 73 92 43",
    location: "Barcelona, España"
  },
  
  // Información para la sección "Sobre mí"
  aboutMe: {
    title: "Sobre mí",
    paragraphs: [
      "Desarrollador Full Stack con más de 1 año de experiencia en entornos ágiles y participación activa en proyectos reales. Durante mi etapa en Jaestic, SL, trabajé en el desarrollo y mantenimiento de sitios web con WordPress, así como en la creación de aplicaciones web y móviles con tecnologías como React, Laravel e Ionic.",
      "He trabajado tanto en frontend como en backend, desarrollando interfaces funcionales y APIs robustas con Node.js, Express y Laravel. También cuento con experiencia en control de versiones con Git, uso de metodologías ágiles y aplicación de patrones de diseño para garantizar soluciones escalables y mantenibles."
    ],
    skills: [
      { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue", color: "#4FC08D", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Laravel", color: "#FF2D20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "Java", color: "#ED8B00", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", color: "#6DB33F", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "MySQL", color: "#4479A1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", color: "#336791", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Oracle", color: "#F80000", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "PL/SQL", color: "#F80000", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "Ionic", color: "#3880FF", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
      { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", color: "#2496ED", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "TypeScript", color: "#3178C6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "WordPress", color: "#21759B", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "WooCommerce", color: "#96588A", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" }
    ]
  },
  
  // Experiencia laboral
  experience: {
    title: "Experiencia",
    jobs: [
      {
        company: "Jaestic, S.L.",
        location: "El Vendrell, España",
        position: "Desarrollador Web (Prácticas)",
        period: "2024 - 2025",
        description: "Desarrollo y mantenimiento de sitios web en WordPress, WooCommerce y Prestashop. Creación de aplicaciones web con React y Laravel. Desarrollo de aplicaciones móviles híbridas con Ionic. Uso de herramientas como Notion, Git y control de versiones en equipo. Optimización del rendimiento mediante técnicas avanzadas de carga y estructura de código. Aplicación de patrones de diseño (MVC) para mejorar la escalabilidad y el mantenimiento.",
        technologies: [
          { name: "WordPress", color: "#21759B", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
          { name: "WooCommerce", color: "#96588A", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
          { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Laravel", color: "#FF2D20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
          { name: "Ionic", color: "#3880FF", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
          { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
        ]
      }
    ]
  },
  
  // Proyectos
  projects: {
    title: "Proyectos",
    list: [
      {
        name: "SnippetFlow Landing Page",
        description: "Este proyecto es la landing page de una startup que estamos desarrollando actualmente. Su objetivo es validar el interés del mercado mediante una waitlist. Está diseñada con un enfoque limpio, moderno y responsivo, priorizando la claridad del mensaje y la conversión del usuario. Además de su diseño visual, se optimizó la funcionalidad para captar leads de forma eficiente y medir la tracción inicial del proyecto.",
        image: snippetflowImg,
        technologies: [
          { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
          { name: "Radix UI", color: "#7C3AED", icon: "https://cdn.simpleicons.org/radixui/7C3AED" },
        ],
        liveUrl: "https://snippetflow.com/",
        repoUrl: "https://github.com/agustiinveraa/landing-snippetflow"
      },
      {
        name: "ImgLite",
        description: "Una aplicación web de optimización de imágenes que destaca por su rapidez y eficiencia, con su propia documentación en la web. Construida con React y Node.js, la aplicación utiliza Cloudinary para el manejo y optimización de imágenes, asegurando entregas rápidas y de alta calidad. ImgLite ofrece una solución robusta y escalable para la optimización de imágenes en línea, permitiendo ajustar la calidad, elegir entre formatos como PNG, JPEG, WEBP o AVIF y descargar el resultado optimizado.",
        image: "https://private-user-images.githubusercontent.com/87144030/416338209-49385a82-ef21-42f9-89d6-eedb9dc821c3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI1MDI2MDQsIm5iZiI6MTc1MjUwMjMwNCwicGF0aCI6Ii84NzE0NDAzMC80MTYzMzgyMDktNDkzODVhODItZWYyMS00MmY5LTg5ZDYtZWVkYjlkYzgyMWMzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzE0VDE0MTE0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQyMzc0MjE0OWFjZTU5YjAwNTRkOGJjMDk2ZGQxMGUwNDAzZjZmODIxZTE0MDczZDIwYjJmZDZlN2NhNTJhYzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.dn9Dv42Pe9VjZBrwsl3iuAgHBw9fZxZbxUDc53ghg6g",
        technologies: [
          { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
          { name: "Cloudinary", color: "#3448C5", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" }
        ],
        liveUrl: "#",
        repoUrl: "https://github.com/agustiinveraa/ImgLite"
      },
      
      {
        name: "Slots Casino",
        description: "Lideré Slots Casino como proyecto final en equipo, obteniendo una excelente calificación por su diseño, funcionalidad y características avanzadas. Es un casino online fullstack totalmente funcional, con pasarela de pago integrada y cuatro juegos: blackjack, poker con bots, ruleta y slots. Incluye quests diarias, sistema de ticketing, y un panel de administración completo. Desarrollado con React, Tailwind, Node.js, Express y MySQL, y autenticación JWT. Usamos metodologías ágiles (Scrum) y herramientas como Jira para una gestión eficiente en equipo.",
        image: slotsImg,
        technologies: [
          { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "MySQL", color: "#4479A1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
          { name: "JWT", color: "#ffffff", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg" }
        ],
        liveUrl: "#",
        repoUrl: "https://github.com/agustiinveraa/projecte-m12"
      },
      
      {
        name: "Sistema de Gestión de Torneos de Bitlles Catalanes",
        description: "Plataforma completa para la gestión de torneos de Bitlles Catalanes con diferentes roles de usuario (Admin, Árbitro, Jugador). El sistema permite la creación y administración de torneos, arbitraje en línea con actualizaciones en tiempo real mediante WebSockets, gestión de usuarios con diferentes permisos, y un completo sistema de estadísticas y clasificaciones. Implementa autenticación JWT, sesiones seguras, y una arquitectura robusta que garantiza la integridad de los datos deportivos.",
        image: slotsImg,
        technologies: [
          { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "MySQL", color: "#4479A1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
          { name: "Socket.io", color: "#ffffff", icon: "https://cdn.simpleicons.org/socketdotio/010101" },
          { name: "JWT", color: "#ffffff", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg" }
        ],
        liveUrl: "#",
        repoUrl: "https://github.com/agustiinveraa/projectbitllesnew"
      },
      
      {
        name: "Funda Creativa",
        description: "Un e-commerce marketplace desarrollado íntegramente por mí, incluyendo el diseño, el frontend, el backend y la base de datos. Este proyecto completo fue presentado en clase y valorado con una calificación excelente. Implementa un sistema completo de compras, gestión de productos, usuarios y pedidos.",
        image: ecommerceImg,
        technologies: [
          { name: "Laravel", color: "#FF2D20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
          { name: "Spring Boot", color: "#6DB33F", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
          { name: "Tailwind CSS", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
          { name: "DaisyUI", color: "#5A0EF8", icon: "https://cdn.simpleicons.org/daisyui/5A0EF8" },
          { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "jQuery", color: "#0769AD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
          { name: "MySQL", color: "#4479A1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ],
        liveUrl: "#",
        repoUrl: "https://github.com/agustiinveraa/ptranversal2"
      }
    ]
  }
}
