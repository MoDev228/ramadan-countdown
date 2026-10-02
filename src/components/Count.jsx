import { useState, useEffect } from "react";
import { ramadan } from "@/data/ramadan";
import { convertSeconds } from "../utils/countdown";

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
    <>
      <p className="text-white">Jour : {countdown.days}</p>
      <p className="text-white">Heures : {countdown.hours}</p>
      <p className="text-white">Minutes : {countdown.minutes}</p>
      <p className="text-white">Secondes : {countdown.seconds}</p>
    </>
  );
}

export default Count;
