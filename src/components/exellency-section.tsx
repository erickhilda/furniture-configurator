import Image from "next/image";
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
        "flex justify-between w-full pt-52 px-32 -translate-y-1/4",
        "bg-gradient-to-t from-white via-white to-transparent"
      )}
    >
      <div className="flex justify-center flex-col">
        <h3 className="text-5xl font-syne">
          Why <br /> choosing us
        </h3>
        <p className="font-inter text-xl font-light mt-10 max-w-lg text-stone-700">
          Having a home you love means having furnishing that you’re proud of.
          We are proud to bring you trendy furniture for every room in the
          house, with the added bonus.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 text-white">
        {exellencyItems.map((item, idx) => (
          <div
            key={`exellency-item-${idx}`}
            className={clsx(
              "w-72 h-72 rounded-3xl p-6",
              (idx + 1) % 2 === 0 ? "-translate-y-14" : "translate-y-14",
              "flex flex-col items-center justify-center",
              item.variant === "green"
                ? "bg-matcha-500 shadow-2xl shadow-matcha-500"
                : "bg-black shadow-2xl shadow-black"
            )}
          >
            <div
              className={clsx(
                "rounded-full p-[0.125rem]",
                "bg-gradient-to-b from-matcha-400 to-transparent"
              )}
            >
              <div
                className={clsx(
                  "flex items-center justify-center rounded-full p-3",
                  "bg-gradient-to-b from-matcha-700 to-matcha-1000"
                )}
              >
                <Image
                  src={item.img}
                  alt="icon of delivery truck"
                  width={132}
                  height={132}
                />
              </div>
            </div>
            <p className="font-poppins text-2xl mt-6">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExellencySection;
