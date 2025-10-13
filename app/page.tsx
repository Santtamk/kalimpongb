import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import TestimonialsParallax from "../components/TestimonialsParallax";
import MarqueeStrip from "../components/MarqueeStrip";
import PinnedVideo from "../components/PinnedVideo";
import GalleryPreview from "../components/GalleryPreview";
import RoomSection from "@/components/RoomSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroCarousel />

        <AboutSection />

        <TestimonialsParallax />

        <RoomSection />

        <MarqueeStrip />

        <PinnedVideo />

        <GalleryPreview />
      </main>
    </>
  );
}
