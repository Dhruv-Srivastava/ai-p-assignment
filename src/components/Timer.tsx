import { useEffect, useState, useRef } from "react";

export default function Timer({ timestamp }) {
  const [time, setTime] = useState(timestamp);
  const timerRef = useRef();

  // Helper function to format time as two digits
  function formatTime(value) {
    return String(value).padStart(2, "0");
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  useEffect(function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(
    function endTimer() {
      if (time <= 0) clearInterval(timerRef.current);
    },
    [time]
  );

  return (
    <div className="grid grid-cols-7 gap-[2px] text-center text-[#454545] font-semibold text-lg">
      <div className="flex flex-col items-center gap-1">
        <span>{formatTime(days)}</span>{" "}
        <span className="text-[#4F4F4F] text-xs font-medium">Days</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center gap-1">
        <span>{formatTime(hours)}</span>{" "}
        <span className="text-[#4F4F4F] text-xs font-medium">Hours</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center gap-1">
        <span>{formatTime(minutes)}</span>{" "}
        <span className="text-[#4F4F4F] text-xs font-medium">Mins</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center gap-1">
        <span>{formatTime(seconds)}</span>{" "}
        <span className="text-[#4F4F4F] text-xs font-medium">Secs</span>
      </div>
    </div>
  );
}
