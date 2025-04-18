
import React, { useState, useEffect } from 'react';

interface SparkleProps {
  color: string;
  size: number;
  style: React.CSSProperties;
}

const Sparkle = ({ color, size, style }: SparkleProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className="absolute animate-fade-in pointer-events-none"
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </svg>
  );
};

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);
  
  useEffect(() => {
    // Create initial sparkles
    const initialSparkles = Array.from({ length: 15 }, () => createSparkle());
    setSparkles(initialSparkles);
    
    // Add new sparkles periodically
    const interval = setInterval(() => {
      setSparkles(currentSparkles => {
        // Remove oldest sparkle and add a new one
        const newSparkles = [...currentSparkles.slice(1), createSparkle()];
        return newSparkles;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  function createSparkle(): SparkleProps {
    const colors = ['#9b87f5', '#7E69AB', '#6E59A5', '#fff'];
    
    return {
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 20 + 10,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.6 + 0.1,
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDuration: `${Math.random() * 2 + 1}s`,
        animationDelay: `${Math.random() * 0.5}s`
      }
    };
  }
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}
    </div>
  );
}
