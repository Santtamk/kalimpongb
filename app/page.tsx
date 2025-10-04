import Preloader from "../components/Preloader";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import TestimonialsParallax from "../components/TestimonialsParallax";
import RoomsSection from "../components/RoomsSection";
import MarqueeStrip from "../components/MarqueeStrip";
import PinnedVideo from "../components/PinnedVideo";
import GallerySection from "../components/GallerySection";
import ContactsBooking from "../components/ContactsBooking";
import MapAndFooter from "../components/MapAndFooter";

export default function Home() {
  return (
    <>
    

      <main>
        <HeroCarousel />

        <AboutSection />

        <TestimonialsParallax />

        <RoomsSection />

        <MarqueeStrip />

        <PinnedVideo />

        <GallerySection />

        <ContactsBooking />
      </main>

    </>
  );
}
