import ExellencySection from "@/components/exellency-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between">
      <nav className="w-full h-16 flex items-center backdrop-blur justify-between px-8 fixed top-0 left-0 z-10">
        <h1 className="font-bold font-syne text-2xl text-white">Furniture</h1>
      </nav>

      <HeroSection />

      <ExellencySection />
    </main>
  );
}
