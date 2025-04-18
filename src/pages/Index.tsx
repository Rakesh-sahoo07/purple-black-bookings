
import React from "react";
import AppointmentForm from "@/components/AppointmentForm";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingElements from "@/components/FloatingElements";
import PulsingGlow from "@/components/PulsingGlow";
import Sparkles from "@/components/Sparkles";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatedBackground />
      
      {/* 3D-like floating elements */}
      <FloatingElements />
      
      {/* Pulsing glow effect */}
      <PulsingGlow />
      
      {/* Sparkle effects */}
      <Sparkles />
      
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stuti-bg/50 via-transparent to-stuti-black/50 pointer-events-none"></div>
      
      {/* Content */}
      <main className="relative z-10 w-full">
        <AppointmentForm />
        
        {/* Footer */}
        <footer className="mt-16 text-center text-white/50 text-sm animate-fade-in">
          <p>Designed with ❤️ for Stuti</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
