/**
 * GallerySection
 * Owl Carousel image gallery with fslightbox links.
 */
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
          <div className="item">
            <img src="/img/gallery/1.jpg" alt="" />
          </div>
          <div className="item">
            <img src="/img/gallery/2.jpg" alt="" />
          </div>
          <div className="item">
            <img src="/img/gallery/3.jpg" alt="" />
          </div>
          <div className="item">
            <img src="/img/gallery/4.jpg" alt="" />
          </div>
          <div className="item">
            <img src="/img/gallery/5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <a
          data-fslightbox="gallery_1"
          data-type="image"
          href="/img/gallery/1.jpg"
          className="btn_1 outline"
        >
          FullScreen Gallery
        </a>
        <a
          data-fslightbox="gallery_1"
          data-type="image"
          href="/img/gallery/2.jpg"
        ></a>
        <a
          data-fslightbox="gallery_1"
          data-type="image"
          href="/img/gallery/3.jpg"
        ></a>
        <a
          data-fslightbox="gallery_1"
          data-type="image"
          href="/img/gallery/4.jpg"
        ></a>
        <a
          data-fslightbox="gallery_1"
          data-type="image"
          href="/img/gallery/5.jpg"
        ></a>
      </div>
    </div>
  );
}
