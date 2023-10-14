"use client";

import Image from "next/image";
import { Transition, motion } from "framer-motion";
import clsx from "clsx";

const exellencyItems = [
  {
    title: "Free Delivery",
    img: "/icon/icon-delivery.svg",
    variant: "green",
  },
  {
    title: "Safe & Reliable",
    img: "/icon/icon-shield.svg",
    variant: "black",
  },
  {
    title: "Free Installation",
    img: "/icon/icon-tools.svg",
    variant: "black",
  },
  {
    title: "Guaranteed",
    img: "/icon/icon-guaranteed.svg",
    variant: "green",
  },
];

function ExellencySection() {
  return (
    <section
      className={clsx(
        "flex flex-col lg:flex-row justify-between",
        "w-full py-16 lg:pt-52 px-6 lg:px-32 lg:-translate-y-1/4",
        "bg-gradient-to-t from-white via-white to-transparent"
      )}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={{
          offscreen: {
            opacity: 0,
            x: -200,
          },
          onscreen: {
            opacity: 1,
            x: 0,
            transition: {
              bounce: 0.5,
              duration: 1,
              type: "spring" as Transition["type"]
            },
          },
        }}
        className="flex justify-center flex-col"
      >
        <h3 className="text-5xl font-syne">
          Why <br /> choosing us
        </h3>
        <p className="font-inter text-xl font-light mt-10 max-w-lg text-stone-700">
          Having a home you love means having furnishing that you are proud of.
          We are proud to bring you trendy furniture for every room in the
          house, with the added bonus.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:gap-6 text-white mt-10 lg:mt-0">
        {exellencyItems.map((item, idx) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
              offscreen: {
                opacity: 0,
                y: 100,
              },
              onscreen: {
                opacity: 1,
                y: (idx + 1) % 2 === 0 ? -56 : 56,
                transition: {
                  bounce: 0.5,
                  duration: idx * 0.5,
                  type: "spring",
                },
              },
            }}
            key={`exellency-item-${idx}`}
            className={clsx(
              "lg:w-72 lg:h-72 w-36 h-36 rounded-3xl p-2 lg:p-6",
              // (idx + 1) % 2 === 0 ? "lg:-translate-y-14" : "translate-y-14",
              "flex flex-col items-center justify-center",
              item.variant === "green"
                ? "bg-matcha-500 shadow-2xl shadow-matcha-500"
                : "bg-black shadow-2xl shadow-black"
            )}
          >
            <div
              className={clsx(
                "w-20 h-20 lg:h-36 lg:w-36",
                "rounded-full p-[0.125rem]",
                "bg-gradient-to-b from-matcha-400 to-transparent"
              )}
            >
              <div
                className={clsx(
                  "flex items-center justify-center rounded-full p-1 lg:p-3",
                  "bg-gradient-to-b from-matcha-700 to-transparent"
                )}
              >
                <Image
                  src={item.img}
                  alt={`icon of ${item.title}`}
                  width={132}
                  height={132}
                />
              </div>
            </div>
            <p className="font-poppins text-center lg:text-2xl mt-3 lg:mt-6">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExellencySection;
