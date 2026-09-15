import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import TestimonialsParallax from "../components/TestimonialsParallax";
import MarqueeStrip from "../components/MarqueeStrip";
import PinnedVideo from "../components/PinnedVideo";
import GalleryPreview from "../components/GalleryPreview";
import RoomSection from "@/components/RoomSection";
import AmenityHighlight from "@/components/AmenityHighlight";

export default function Home() {
  return (
    <>
      <main>
        <HeroCarousel />

        <AboutSection />

        <TestimonialsParallax />

        <RoomSection />

        <AmenityHighlight
          id="dining"
          eyebrow="Dining"
          title="Our In-House Cafe"
          text="Start your day with freshly brewed coffee and homely, local flavors at our in-house cafe — a cozy corner of the bungalow serving breakfast and light bites throughout your stay."
          logoSrc="/img/amenities/inhouse-cafe-logo.jpeg"
          logoAlt="In-house cafe logo"
        />

        <MarqueeStrip />

        <PinnedVideo />

        <GalleryPreview />
      </main>
    </>
  );
}
