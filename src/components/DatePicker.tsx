import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const shinchanImages = [
  "/shinchan-purple-1.png",  // Shinchan with purple outfit
  "/shinchan-purple-2.png",  // Shinchan with purple background
  "/shinchan-purple-3.png"   // Shinchan with purple accessories
];

export function DatePicker({ date, setDate }: DatePickerProps) {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (date) {
      setSelectedImageIndex(Math.floor(Math.random() * shinchanImages.length));
    }
  }, [date]);

  return (
    <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4 order-2 lg:order-1">
          {date ? (
            <div className="flex items-center gap-3 p-4 bg-purple/10 rounded-lg">
              <CalendarDays className="h-6 w-6 text-purple-light" />
              <p className="text-white font-medium text-lg">{format(date, "PPP")}</p>
            </div>
          ) : (
            <p className="text-white/60 text-lg">Please select a date for your appointment</p>
          )}
          
          <div className="glass-card rounded-xl p-2">
            <div className="gradient-border">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
                className="bg-stuti-bg/60 backdrop-blur-lg rounded-lg text-white p-6 w-full min-w-[300px]"
                classNames={{
                  months: "w-full",
                  month: "w-full",
                  table: "w-full",
                  head_row: "flex w-full justify-between",
                  head_cell: "text-purple-light font-bold text-sm w-10 text-center",
                  row: "flex w-full mt-2 justify-between",
                  cell: "text-center relative p-0 h-10 w-10 flex items-center justify-center",
                  day: "h-9 w-9 p-0 font-normal hover:bg-purple/30 rounded-lg transition-all duration-200",
                  day_selected: "bg-gradient-to-r from-purple-light to-purple !text-white hover:from-purple-light hover:to-purple font-bold scale-110",
                  day_today: "border-2 border-purple text-white font-bold",
                  nav_button: "hover:bg-purple/30 text-purple-light h-8 w-8",
                  caption: "text-white font-bold text-lg py-2"
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-full min-h-[200px] flex items-center justify-center">
          {date ? (
            <div className="animate-float">
              <img 
                src={shinchanImages[selectedImageIndex]} 
                alt="Cute Shinchan with purple theme"
                className="w-64 h-64 object-contain drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-purple/20 blur-xl rounded-full" />
            </div>
          ) : (
            <div className="text-white/30 text-lg italic animate-pulse">
              Select a date to see a purple Shinchan surprise! 💜
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
