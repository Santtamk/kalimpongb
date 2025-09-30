/**
 * GallerySection
 * Owl Carousel image gallery with fslightbox links.
 */

// Gallery images data map - generates array for all 40 images
const generateGalleryImages = () => {
  return Array.from({ length: 40 }, (_, index) => {
    const imageNumber = index + 1;
    return {
      id: imageNumber,
      src: `/img/gallery/${imageNumber}.jpg`,
      alt: `Gallery image ${imageNumber}`,
      thumbnail: `/img/gallery/${imageNumber}.jpg`,
    };
  });
};

const galleryImages = generateGalleryImages();

// // Featured images for carousel display (first 40 images)
// const featuredImages = galleryImages.slice(0, 40);

export default function GallerySection() {
  return (
    <div className="container margin_120" id="gallery">
      <div className="row">
        <div className="title col-12 text-center mb-5">
          <small data-cue="slideInUp">A Glimpse Into Our World.</small>
          <h2 data-cue="slideInUp" data-delay="100">
            Interior Gallery
          </h2>
        </div>
      </div>
      <div data-cues="zoomIn">
        <div className="owl-carousel owl-theme carousel_item_centered kenburns rounded-img">
          {galleryImages.map((image) => (
            <div key={image.id} className="item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        {galleryImages.map((image, index) => (
          <a
            key={image.id}
            data-fslightbox="gallery_1"
            data-type="image"
            href={image.src}
            className={index === 0 ? "btn_1 outline" : ""}
            style={index === 0 ? {} : { display: "none" }}
          >
            {index === 0 ? "FullScreen Gallery" : ""}
          </a>
        ))}
      </div>
    </div>
  );
}
