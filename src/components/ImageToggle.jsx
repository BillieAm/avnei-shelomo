import { useState } from "react";

import { Sun, Moon } from "lucide-react";

import buildingDay from "../assets/misc/building-day.webp";
import buildingNight from "../assets/misc/building-night.webp";

export default function ImageToggle({ lang }) {
  const [isImageDay, setIsImageDay] = useState(true);
  const translateDirection = lang === "he" ? "-translate-x-8" : "translate-x-8";

  return (
    <div className="flex flex-col items-center gap-4 bg-accent-200 py-5 md:rounded-es-xl md:ps-6">
      {isImageDay ? (
        <img src={buildingDay.src} alt="The Kollel building at day time" />
      ) : (
        <img src={buildingNight.src} alt="The Kollel building at night time" />
      )}

      <button
        onClick={() => setIsImageDay(!isImageDay)}
        className="relative inline-flex cursor-pointer justify-between gap-2 rounded-full bg-foreground p-1"
      >
        <Moon color="yellow" />
        <Sun color="orange" />
        <div
          className={`absolute h-6 w-6 rounded-full bg-white transition hover:ring hover:ring-accent ${!isImageDay && translateDirection}`}
        ></div>
      </button>
    </div>
  );
}
