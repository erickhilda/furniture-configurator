"use client";

import { clsx } from "clsx";
import { useState } from "react";

import ChairHero from "./chair-hero";
import Link from "next/link";

const colors = ["#ccc", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#333E2C"];

function HeroSection() {
  const [selectedColor, setSelectedColor] = useState<string>("#ccc");

  return (
    <section
      className={clsx("w-full h-full", "grid grid-cols-1 md:grid-cols-2")}
    >
      <div className="relative flex justify-center items-center translate-y-1/2 lg:translate-y-0 mt-2">
        <h2 className="font-bold text-4xl lg:text-7xl font-syne lg:max-w-lg text-center lg:text-left z-20">
          Make a room comfortable & elegant
        </h2>
        <div className="absolute z-10 scale-75 lg:scale-100">
          <svg
            width="400"
            height="378"
            viewBox="0 0 400 378"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M204.179 1.7969C245.034 2.37377 287.753 0.71215 321.808 23.2587C356.626 46.3102 377.834 84.7475 389.833 124.71C401.626 163.987 405.614 207.525 388.296 244.704C371.866 279.976 332.008 294.493 300.252 317.022C268.936 339.239 242.164 369.615 204.179 375.325C162.809 381.544 120.207 371.249 84.515 349.452C46.7836 326.409 7.11251 294.704 0.623614 251.012C-5.72219 208.283 38.111 176.462 52.7892 135.829C66.7305 97.2354 53.3685 47.1183 84.1092 19.9024C115.158 -7.58672 162.691 1.21108 204.179 1.7969Z"
              fill="url(#paint0_linear_2_196)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_196"
                x1="0"
                y1="188.558"
                x2="400"
                y2="188.558"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#556652" />
                <stop offset="1" stop-color={selectedColor} />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
                onClick={() => {
                  setSelectedColor(color);
                  // set css variable of --customize-button-bg to color
                  document.documentElement.style.setProperty(
                    "--customize-button-bg",
                    color
                  );
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute top-2/3 lg:top-1/2 translate-y-1/2 lg:left-2/3 translate-x-1/2">
          <Link
            href="/configurator"
            className={clsx(
              "customize-button",
              `hover:shadow-lg shadow-[${selectedColor}]`
            )}
          >
            customize
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
