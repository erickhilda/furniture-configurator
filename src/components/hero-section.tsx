import { clsx } from "clsx";

function HeroSection() {
  return (
    <section
      className={clsx(
        "w-full h-full",
        "flex-shrink-0 flex flex-col justify-center items-center",
        "filter brightness-150 saturate-200",
        "bg-cover bg-no-repeat bg-[url(/img/landing-page/hero-background.jpeg)] bg-center"
      )}
    >
      <h2 className="font-bold text-white text-7xl font-syne lg:max-w-lg text-center -translate-y-1/4">
        Make a room comfortable & elegant
      </h2>
    </section>
  );
}

export default HeroSection;
