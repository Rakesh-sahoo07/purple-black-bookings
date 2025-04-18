
import React from "react";

const FloatingElement = ({ 
  shape, 
  size, 
  color, 
  position, 
  delay, 
  duration,
  rotate 
}: {
  shape: "circle" | "square" | "triangle";
  size: number;
  color: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay: number;
  duration: number;
  rotate?: boolean;
}) => {
  const shapeStyles = {
    circle: "rounded-full",
    square: "rounded-lg",
    triangle: "clip-path-triangle"
  };
  
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    ...position,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  };
  
  return (
    <div 
      className={`absolute ${shapeStyles[shape]} ${color} 
                 animate-float shadow-xl backdrop-blur-md 
                 ${rotate ? "animate-spin-slow" : ""} 
                 opacity-70 pointer-events-none z-10`} 
      style={style}
    />
  );
};

export default function FloatingElements() {
  return (
    <>
      {/* Top left cluster */}
      <FloatingElement 
        shape="circle" 
        size={60} 
        color="bg-purple-light/30" 
        position={{ top: "15%", left: "10%" }} 
        delay={0}
        duration={8}
      />
      <FloatingElement 
        shape="square" 
        size={40} 
        color="bg-purple/20" 
        position={{ top: "20%", left: "15%" }} 
        delay={2}
        duration={10}
        rotate
      />
      
      {/* Top right cluster */}
      <FloatingElement 
        shape="triangle" 
        size={70} 
        color="bg-purple-dark/20" 
        position={{ top: "15%", right: "15%" }} 
        delay={1}
        duration={12}
      />
      <FloatingElement 
        shape="circle" 
        size={30} 
        color="bg-purple-light/30" 
        position={{ top: "25%", right: "10%" }} 
        delay={3}
        duration={7}
      />
      
      {/* Bottom left cluster */}
      <FloatingElement 
        shape="square" 
        size={50} 
        color="bg-purple-dark/20" 
        position={{ bottom: "15%", left: "20%" }} 
        delay={2}
        duration={9}
        rotate
      />
      
      {/* Bottom right cluster */}
      <FloatingElement 
        shape="circle" 
        size={80} 
        color="bg-purple/15" 
        position={{ bottom: "10%", right: "15%" }} 
        delay={0.5}
        duration={11}
      />
      <FloatingElement 
        shape="triangle" 
        size={40} 
        color="bg-purple-light/25" 
        position={{ bottom: "20%", right: "25%" }} 
        delay={4}
        duration={8}
      />
      
      {/* Center elements */}
      <FloatingElement 
        shape="circle" 
        size={120} 
        color="bg-gradient-to-br from-purple/10 to-purple-dark/5" 
        position={{ top: "40%", left: "45%" }} 
        delay={3}
        duration={15}
      />
    </>
  );
}
