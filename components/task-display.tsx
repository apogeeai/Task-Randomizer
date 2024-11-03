"use client";

import { useEffect, useState } from 'react';

const dummyTasks = [
  "Review project documentation",
  "Update team meeting notes",
  "Prepare weekly report",
  "Schedule client follow-ups",
  "Research new tools",
];

export function TaskDisplay() {
  const [currentTask, setCurrentTask] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSpinning) {
      let index = 0;
      interval = setInterval(() => {
        setCurrentTask(dummyTasks[index]);
        index = (index + 1) % dummyTasks.length;
      }, 100);

      // Stop after 2 seconds
      setTimeout(() => {
        setIsSpinning(false);
        clearInterval(interval);
      }, 2000);
    }
  }, [isSpinning]);

  return (
    <div className="transition-all duration-300 ease-in-out">
      <div className={`text-4xl md:text-6xl lg:text-7xl font-bold text-center transform transition-all duration-300 ${isSpinning ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}>
        {currentTask || "Your Next Task Awaits"}
      </div>
    </div>
  );
}