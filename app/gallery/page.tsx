import GalleryHero from "@/components/GalleryHero";
import GallerySection from "@/components/GallerySection";

export const metadata = {
  title: "Gallery | Kalimpong Bungalow",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GallerySection />
    </main>
  );
}
