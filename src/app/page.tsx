import ExellencySection from "@/components/exellency-section";
import HeroSection from "@/components/hero-section";
import ShopByRoomSection from "@/components/shop-by-room";

export default function Home() {
  return (
    <main className="h-full w-full">
      <nav className="w-full h-16 flex items-center backdrop-blur bg-black/30 justify-between px-8 fixed top-0 left-0 z-10 shadow-xl shadow-black/25">
        <h1 className="font-bold font-syne text-2xl text-white">Furniture</h1>
      </nav>

      <HeroSection />

      <ExellencySection />

      <ShopByRoomSection />
    </main>
  );
}
