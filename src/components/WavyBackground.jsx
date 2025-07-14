import React from 'react'

const WavyBackground = () => {
  return (
    <div className="wavy-background">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <style jsx>{`
        .wavy-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: #000;
        }
        
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%231a1a2e" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,106.7C384,117,480,107,576,101.3C672,96,768,96,864,117.3C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
          background-size: 1440px 100px;
          animation: wave 20s linear infinite;
          opacity: 0.3;
        }
        
        .wave1 {
          animation: wave 30s linear infinite;
          z-index: 1000;
          opacity: 0.3;
          animation-delay: 0s;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%232d3748" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        }
        
        .wave2 {
          animation: wave 25s linear infinite;
          z-index: 999;
          opacity: 0.5;
          animation-delay: -5s;
          bottom: 10px;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%234a5568" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        }
        
        .wave3 {
          animation: wave 40s linear infinite;
          z-index: 998;
          opacity: 0.2;
          animation-delay: -2s;
          bottom: 15px;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%236b46c1" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,144C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        }
        
        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1440px;
          }
        }
      `}</style>
    </div>
  )
}

export default WavyBackground
