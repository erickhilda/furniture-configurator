import Image from "next/image";
import clsx from "clsx";

const options = [
  {
    name: "legs",
    image: "/img/options/legs.svg",
    alt: "legs part image",
  },
  {
    name: "cushions",
    image: "/img/options/cushions.svg",
    alt: "cushions part image",
  },
  {
    name: "back",
    image: "/img/options/back.svg",
    alt: "back part image",
  },
  {
    name: "supports",
    image: "/img/options/supports.svg",
    alt: "supports part image",
  },
  {
    name: "base",
    image: "/img/options/base.svg",
    alt: "base part image",
  },
];

function PartOptions({
  selectedPart,
  setSelectedPart,
}: {
  selectedPart: string;
  setSelectedPart: (part: string) => void;
  }) {
  return (
    <div className="absolute top-[50%] -translate-y-2/3 left-2 z-[9999]">
      <div className="flex flex-col gap-1 bg-slate-300">
        {options.map((option) => (
          <div
            key={option.name}
            className={clsx(
              "max-h-14 bg-white",
              "flex justify-center cursor-pointer",
              "ease-in-out transition-transform delay-150",
              "hover:shadow-md hover:shadow-slate-400 hover:translate-x-3",
              selectedPart === option.name &&
                "shadow-md shadow-slate-400 translate-x-3 border-r-2 border-red-500"
            )}
            data-option={option.name}
            role="button"
            onClick={() => setSelectedPart(option.name)}
          >
            <Image src={option.image} width={56} height={56} alt={option.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartOptions;
