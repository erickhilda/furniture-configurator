"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import livingRoomImg from "public/img/landing-page/living-room.jpeg";
import diningRoomImg from "public/img/landing-page/dining-room.png";
import officeRoomImg from "public/img/landing-page/office-room.png";

const rooms = [
  {
    title: "Living Room",
    img: livingRoomImg,
  },
  {
    title: "Dining Room",
    img: diningRoomImg,
  },
  {
    title: "Office Room",
    img: officeRoomImg,
  },
];

function ShopByrOOMSection() {
  return (
    <section
      className={clsx(
        "flex flex-col-reverse lg:flex-row justify-between w-full mt-16 px-6 lg:px-32",
        "bg-gradient-to-t from-white via-white to-transparent"
      )}
    >
      <div className="flex justify-center mt-6 flex-col gap-6 lg:gap-10">
        {rooms.map((room, idx) => (
          <div
            key={room.title}
            className={clsx(
              "flex justify-between items-center",
              "rounded-xl px-4 -rotate-6",
              idx % 2 === 0 ? "bg-black" : "bg-matcha-500 lg:translate-x-32 translate-x-4",
              "lg:w-96"
            )}
          >
            <Image
              src={room.img}
              alt={room.title}
              width={64}
              height={64}
              objectFit="cover"
              className={clsx(
                "border-white border-2 rounded-xl -translate-x-2/4 -translate-y-1/4",
                "w-16 h-16 lg:h-32 lg:w-32"
              )}
            />
            <p className="text-white text-xl">{room.title}</p>
          </div>
        ))}
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={{
          offscreen: {
            opacity: 0,
            x: 20,
          },
          onscreen: {
            opacity: 1,
            x: 0,
            transition: {
              bounce: 0.5,
              duration: 1,
              type: "spring",
              timingFunction: "easeIn",
            },
          },
        }}
        className="flex justify-center flex-col"
      >
        <h3 className="text-5xl font-syne">Shop by room</h3>
        <p className="font-inter text-xl font-light mt-10 max-w-lg text-stone-700">
          Having a home you love means having furnishing that you’re proud of.
          We are proud to bring you trendy furniture for every room in the
          house, with the added bonus.
        </p>
      </motion.div>
    </section>
  );
}

export default ShopByrOOMSection;
