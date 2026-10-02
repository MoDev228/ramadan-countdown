import { useState, useEffect } from "react";
import { ramadan } from "@/data/ramadan";
import { convertSeconds } from "../utils/countdown";
import CountdownUnit from "./CountdownUnit";

function Count() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date(ramadan.targetDate);

  const updateCountdown = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    const newCountdown = convertSeconds(totalSeconds);
    setCountdown(newCountdown);
  };

  useEffect(() => {
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="flex justify-center items-center flex-wrap  gap-[clamp(0.75rem,2vw,1.5rem)] ">
      <CountdownUnit value={countdown.days} label="Jours" />
      <CountdownUnit value={countdown.hours} label="Heures" />
      <CountdownUnit value={countdown.minutes} label="Minutes" />
      <CountdownUnit
        valueClassName="text-yellow-300"
        value={countdown.seconds}
        label="Secondes"
      />
    </div>
  );
}

export default Count;
