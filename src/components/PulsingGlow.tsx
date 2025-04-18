
import React from 'react';

export default function PulsingGlow() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Central purple glow */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-light/10 blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
        style={{ animationDuration: '4s' }}
      />
      
      {/* Secondary glows */}
      <div 
        className="absolute w-[300px] h-[300px] rounded-full bg-purple/15 blur-[80px] top-1/4 left-1/4 animate-pulse-slow"
        style={{ animationDuration: '6s', animationDelay: '2s' }}
      />
      
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-dark/10 blur-[120px] bottom-1/4 right-1/4 animate-pulse-slow"
        style={{ animationDuration: '7s', animationDelay: '1s' }}
      />
    </div>
  );
}
