import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface TimeUnit {
  value: number;
  label: string;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 3, label: "YEARS" },
    { value: 28, label: "MONTHS" },
    { value: 30, label: "DAYS" },
    { value: 12, label: "HOURS" },
    { value: 45, label: "MINUTES" },
    { value: 30, label: "SECONDS" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = [...prev];

        // Decrement seconds first
        if (newTime[5].value > 0) {
          newTime[5].value -= 1;
        } else {
          newTime[5].value = 59;
          if (newTime[4].value > 0) {
            newTime[4].value -= 1;
          } else {
            newTime[4].value = 59;
            if (newTime[3].value > 0) {
              newTime[3].value -= 1;
            } else {
              newTime[3].value = 23;
              if (newTime[2].value > 0) {
                newTime[2].value -= 1;
              } else {
                newTime[2].value = 29;
                if (newTime[1].value > 0) {
                  newTime[1].value -= 1;
                } else {
                  newTime[1].value = 11;
                  if (newTime[0].value > 0) {
                    newTime[0].value -= 1;
                  }
                }
              }
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 mb-8">
        {timeLeft.map((unit, index) => (
          <div
            key={unit.label}
            className="text-center animate-bounce-in hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-white bg-forest-dark/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                {unit.value.toString().padStart(2, "0")}
              </div>
              {/* Removed shimmer and glow animations */}
            </div>
            <div className="text-xs md:text-sm lg:text-base font-semibold text-white/90 mt-2 tracking-wider">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-6 animate-slide-in-left">
        <p className="text-white text-xl lg:text-2xl font-bold animate-continuous-float text-center">
          {"The clock is ticking.".split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block mr-2 animate-bounce-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {word}
            </span>
          ))}
        </p>
        <button className="bg-accent hover:bg-accent/90 text-forest-dark px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-110 hover-lift animate-bounce-in animate-delay-500 group shadow-lg">
          <span>
            <Link to="/partners/donate">Take action now!</Link>
          </span>
        </button>
      </div>
    </div>
  );
};
