
import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="grid gap-4">
        {date ? (
          <div className="flex items-center gap-3 p-3 bg-purple/10 rounded-lg">
            <CalendarDays className="h-5 w-5 text-purple-light" />
            <p className="text-white font-medium">{format(date, "PPP")}</p>
          </div>
        ) : (
          <p className="text-white/60 text-sm">Please select a date for your appointment</p>
        )}
        
        <div className="glass-card rounded-xl p-1">
          <div className="gradient-border">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
              className="bg-stuti-bg/60 backdrop-blur-lg rounded-lg text-white p-4"
              classNames={{
                day_selected: "calendar-day-selected",
                day: "calendar-day hover:bg-purple/30 transition-all duration-200",
                day_today: "border border-purple text-white",
                head_cell: "text-purple-light font-bold",
                nav_button: "hover:bg-purple/30 text-purple-light",
                caption: "text-white font-bold"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
