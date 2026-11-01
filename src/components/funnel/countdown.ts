import { useEffect, useState } from "react";

const KEY = "funnel-timer-start";
const DURATION = 15 * 60 * 1000;

function getStart(): number {
  const saved = Number(sessionStorage.getItem(KEY));
  if (saved && Date.now() - saved < DURATION) return saved;
  const now = Date.now();
  sessionStorage.setItem(KEY, String(now));
  return now;
}

/** Shared 15-minute countdown; every caller reads the same start time, so all displays stay in sync. */
export function useCountdown() {
  const [left, setLeft] = useState(DURATION - 1000);
  useEffect(() => {
    const start = getStart();
    const tick = () => setLeft(Math.max(0, DURATION - (Date.now() - start)));
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, []);
  const s = Math.ceil(left / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
