import React from 'react'

export default function ScrollIndicator() {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 mb-8 animate-bounce cursor-pointer" onClick={scrollToContent}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        fill="currentColor" 
        className="text-blue-400"
        viewBox="0 0 16 16"
      >
        <path 
          fillRule="evenodd" 
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
      </svg>
    </div>
  );
}
