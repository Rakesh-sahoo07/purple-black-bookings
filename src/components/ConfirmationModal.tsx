
import React from "react";
import { format } from "date-fns";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CalendarX } from "lucide-react";
import type { AppointmentType } from "./AppointmentTypeSelector";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  date: Date;
  appointmentType: AppointmentType;
}

export default function ConfirmationModal({
  open,
  onClose,
  onConfirm,
  date,
  appointmentType
}: ConfirmationModalProps) {
  const appointmentTypeLabels: Record<AppointmentType, string> = {
    "lunch": "Lunch",
    "dinner": "Dinner",
    "coffee": "Coffee",
    "mausa-chicken": "Mausa Chicken",
    "dragon-chicken": "Dragon Chicken"
  };

  const appointmentIcons: Record<AppointmentType, string> = {
    "lunch": "🍱",
    "dinner": "🍝",
    "coffee": "☕",
    "mausa-chicken": "🍗",
    "dragon-chicken": "🔥"
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-card border-none text-white max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white flex items-center justify-center gap-2">
            <span className="text-purple-light">Confirm</span> Appointment
          </DialogTitle>
          <DialogDescription className="text-white/70 text-center pt-2">
            Please confirm your appointment details with Stuti
          </DialogDescription>
        </DialogHeader>

        <div className="bg-stuti-bg/50 p-6 rounded-lg mt-4 animate-pulse-slow">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple/30 flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-purple-light" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Date</p>
                <p className="text-white font-semibold">{format(date, "PPP")}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple/30 flex items-center justify-center text-xl">
                {appointmentIcons[appointmentType]}
              </div>
              <div>
                <p className="text-white/70 text-sm">Appointment Type</p>
                <p className="text-white font-semibold">{appointmentTypeLabels[appointmentType]}</p>
              </div>
            </div>

            <div className="mt-2 text-white/70 text-sm">
              <p>This appointment will be added to:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Stuti's calendar</li>
                <li>Your calendar</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button 
            variant="outline" 
            className="w-full text-white border-white/20 hover:bg-white/10 hover:text-white"
            onClick={onClose}
          >
            <CalendarX className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button 
            className="w-full bg-gradient-to-r from-purple-light to-purple-dark text-white relative overflow-hidden group hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] hover:scale-105 transition-all duration-300"
            onClick={onConfirm}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-light via-purple to-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
            <span className="relative z-10 flex items-center justify-center">
              <CalendarCheck className="mr-2 h-4 w-4" />
              Confirm
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
