import { useStore } from "@nanostores/preact";
import { isImageDay } from "../store";

import { Sun, Moon } from "lucide-preact";

import buildingDay from "../assets/misc/building-day.webp";
import buildingNight from "../assets/misc/building-night.webp";

export default function ImageToggle() {
  const $isImageDay = useStore(isImageDay);

  return (
    <div className="flex flex-col items-center gap-4 bg-accent-200 md:rounded-es-xl md:py-5 md:ps-6">
      {$isImageDay ? (
        <img src={buildingDay.src} alt="The Kollel building at day time" />
      ) : (
        <img src={buildingNight.src} alt="The Kollel building at night time" />
      )}

      <div
        onClick={() => isImageDay.set(!$isImageDay)}
        className="relative inline-flex justify-between gap-2 rounded-full bg-foreground p-1"
      >
        <Moon color="yellow" />
        <Sun color="orange" />
        <div
          className={`absolute h-6 w-6 rounded-full bg-white transition ${!$isImageDay && "-translate-x-8"}`}
        ></div>
      </div>
    </div>
  );
}
