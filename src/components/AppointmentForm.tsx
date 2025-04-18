
import React, { useState } from "react";
import { DatePicker } from "./DatePicker";
import AppointmentTypeSelector, { AppointmentType } from "./AppointmentTypeSelector";
import ConfirmationModal from "./ConfirmationModal";
import { Button } from "@/components/ui/button";
import { CalendarClock, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function AppointmentForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [appointmentType, setAppointmentType] = useState<AppointmentType | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const { toast } = useToast();

  const handleConfirm = () => {
    setShowConfirmation(false);
    setConfirmed(true);
    
    toast({
      title: "Appointment Confirmed!",
      description: "Your appointment with Stuti has been scheduled",
      variant: "default",
    });
    
    // In a real app, this would connect to a calendar API
    console.log("Appointment confirmed:", {
      date,
      type: appointmentType,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && appointmentType) {
      setShowConfirmation(true);
    }
  };

  if (confirmed) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-purple-light" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Appointment Confirmed!</h2>
        <p className="text-white/70 text-center max-w-sm mb-8">
          Your appointment with Stuti has been scheduled and added to both your calendars.
        </p>
        <Button 
          className="bg-purple hover:bg-purple-dark text-white px-8"
          onClick={() => {
            setDate(undefined);
            setAppointmentType(null);
            setConfirmed(false);
          }}
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto px-4">
      <div className="text-center mb-8 animate-slide-up">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-clip-text text-transparent">
          Book an Appointment with Stuti
        </h1>
        <p className="text-white/70 mt-2 max-w-xl mx-auto">
          Select a date and appointment type to schedule your meeting with Stuti
        </p>
      </div>

      <div className="space-y-8">
        <div className="glass-card p-6 rounded-xl shadow-xl">
          <h2 className="text-white text-xl font-bold mb-4">
            <CalendarClock className="inline-block mr-2 text-purple-light" />
            Select a Date
          </h2>
          <DatePicker date={date} setDate={setDate} />
        </div>

        <div className="glass-card p-6 rounded-xl shadow-xl">
          <AppointmentTypeSelector 
            selectedType={appointmentType} 
            onSelectType={setAppointmentType} 
          />
        </div>

        <div className="flex justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button 
            type="submit"
            className="bg-gradient-to-r from-purple-light to-purple-dark text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-[0_0_20px_rgba(155,135,245,0.5)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            disabled={!date || !appointmentType}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-light via-purple to-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
            <span className="relative z-10">Schedule Appointment</span>
          </Button>
        </div>
      </div>

      {date && appointmentType && (
        <ConfirmationModal
          open={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={handleConfirm}
          date={date}
          appointmentType={appointmentType}
        />
      )}
    </form>
  );
}
