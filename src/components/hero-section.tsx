"use client";

import { clsx } from "clsx";
import { useState } from "react";
import ChairHero from "./chair-hero";
const colors = ["#ccc", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#333E2C"];

function HeroSection() {
  const [selectedColor, setSelectedColor] = useState<string>("#ccc");

  return (
    <section
      className={clsx("w-full h-full", "grid grid-cols-1 md:grid-cols-2")}
    >
      <div className="flex justify-center items-center translate-y-1/2 lg:translate-y-0 mt-2">
        <h2 className="font-bold text-4xl lg:text-7xl font-syne lg:max-w-lg text-center lg:text-left">
          Make a room comfortable & elegant
        </h2>
      </div>
      <div className="relative">
        <ChairHero selectedColor={selectedColor} />

        <div className="absolute z-10 bottom-4 right-1/2 translate-x-1/2 lg:bottom-0 lg:top-1/2 lg:right-4 lg:-translate-y-1/3 lg:translate-x-0">
          <div className="flex lg:flex-col gap-2 px-1">
            {colors.map((color) => (
              <div
                key={color}
                className={clsx(
                  "h-6 w-6 rounded-full",
                  color === selectedColor
                    ? "outline-solid outline-2 outline-black"
                    : "outline-none"
                )}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
