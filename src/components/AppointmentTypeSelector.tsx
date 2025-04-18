
import { useState } from "react";
import { Check } from "lucide-react";

export type AppointmentType = "lunch" | "dinner" | "coffee" | "mausa-chicken" | "dragon-chicken";

interface AppointmentTypeSelectorProps {
  selectedType: AppointmentType | null;
  onSelectType: (type: AppointmentType) => void;
}

const appointmentOptions = [
  {
    id: "lunch",
    label: "Lunch",
    icon: "🍱",
    description: "A midday meal with Stuti"
  },
  {
    id: "dinner",
    label: "Dinner",
    icon: "🍝",
    description: "An evening meal with Stuti"
  },
  {
    id: "coffee",
    label: "Coffee",
    icon: "☕",
    description: "A coffee date with Stuti"
  },
  {
    id: "mausa-chicken",
    label: "Mausa Chicken",
    icon: "🍗",
    description: "Try this special chicken dish with Stuti"
  },
  {
    id: "dragon-chicken",
    label: "Dragon Chicken",
    icon: "🔥",
    description: "Enjoy spicy dragon chicken with Stuti"
  }
];

export default function AppointmentTypeSelector({ 
  selectedType, 
  onSelectType 
}: AppointmentTypeSelectorProps) {
  return (
    <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-white text-xl font-bold mb-4">Select Appointment Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {appointmentOptions.map((option) => (
          <div
            key={option.id}
            className={`glass-card p-4 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden hover:scale-[1.03] active:scale-[0.98] ${
              selectedType === option.id 
                ? "border-2 border-purple-light shadow-lg shadow-purple/30" 
                : "border border-white/10 hover:border-purple/50"
            }`}
            onClick={() => onSelectType(option.id as AppointmentType)}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{option.icon}</div>
              <div>
                <h3 className="text-white font-semibold">{option.label}</h3>
                <p className="text-white/70 text-sm">{option.description}</p>
              </div>
            </div>
            {selectedType === option.id && (
              <div className="absolute top-2 right-2 bg-purple rounded-full p-1">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
            {selectedType === option.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-light/10 to-purple-dark/10 pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
