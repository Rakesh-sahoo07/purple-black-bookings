
import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated floating shapes */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-purple-light/20 animate-float" 
           style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-purple/20 animate-float"
           style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-purple-dark/20 animate-float"
           style={{ animationDelay: '4s' }}></div>
      
      {/* Floating 3D-like objects */}
      <div className="absolute top-1/3 left-1/3 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-20 h-20 bg-gradient-to-br from-purple-light to-purple-dark rounded-xl shadow-xl transform rotate-45"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-16 h-16 bg-gradient-to-tr from-purple-dark to-purple-light rounded-full shadow-xl"></div>
      </div>
      <div className="absolute top-1/5 right-1/5 animate-float" style={{ animationDelay: '5s' }}>
        <div className="w-24 h-24 bg-gradient-to-bl from-purple to-purple-deeper rounded-lg shadow-xl transform -rotate-12"></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stuti-bg/80 pointer-events-none"></div>
    </div>
  );
}
