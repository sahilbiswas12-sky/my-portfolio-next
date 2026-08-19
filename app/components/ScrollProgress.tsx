"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage =
        (scrollTop / documentHeight) * 100;

      setProgress(
        Math.min(100, Math.max(0, percentage))
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-80 h-0.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.7)] transition-[width] duration-100"
      style={{
        width: `${progress}%`,
      }}
      aria-hidden="true"
    />
  );
}