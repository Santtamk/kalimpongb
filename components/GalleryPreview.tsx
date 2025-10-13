import Link from "next/link";

export default function GalleryPreview() {
  return (
    <section className="container margin_120" id="gallery-preview">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-7">
          <div className="title">
            <small data-cue="slideInUp">A Glimpse Into Our World</small>
            <h2 data-cue="slideInUp" data-delay="100">
              Interior Gallery
            </h2>
            <p className="mt-2" data-cue="slideInUp" data-delay="150">
              Explore moments from our bungalow—spaces shaped by heritage,
              light, and the calm of the hills.
            </p>
          </div>
        </div>
        <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
          <Link href="/gallery" className="btn_1">
            View gallery
          </Link>
        </div>
      </div>
      {/* responsive mosaic thumbnail strip */}
      <div className="row mt-4 g-3 align-items-stretch" data-cues="slideInUp">
        {/* Tall tile */}
        <div className="col-6 col-md-4 col-lg-2 d-flex">
          <Link
            href="/gallery"
            className="rounded-img overflow-hidden w-100 d-block"
          >
            <img
              src="/img/gallery/1.jpg"
              alt="Preview 1"
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Link>
        </div>
        {/* Tall tile */}
        <div className="col-6 col-md-4 col-lg-2 d-flex">
          <Link
            href="/gallery"
            className="rounded-img overflow-hidden w-100 d-block"
          >
            <img
              src="/img/gallery/2.jpg"
              alt="Preview 2"
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Link>
        </div>
        {/* Wide tile */}
        <div className="col-12 col-md-4 col-lg-3 d-flex">
          <Link
            href="/gallery"
            className="rounded-img overflow-hidden w-100 d-block"
          >
            <img
              src="/img/gallery/3.jpg"
              alt="Preview 3"
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Link>
        </div>
        {/* Stacked column to fill gaps */}
        <div className="col-6 col-md-6 col-lg-2">
          <div className="d-flex flex-column h-100 gap-3">
            <Link
              href="/gallery"
              className="rounded-img overflow-hidden d-block flex-fill"
            >
              <img
                src="/img/gallery/4.jpg"
                alt="Preview 4"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Link>
            <Link
              href="/gallery"
              className="rounded-img overflow-hidden d-block flex-fill"
            >
              <img
                src="/img/gallery/5.jpg"
                alt="Preview 5"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Link>
          </div>
        </div>
        {/* Tall tile */}
        <div className="col-6 col-md-6 col-lg-3 d-flex">
          <Link
            href="/gallery"
            className="rounded-img overflow-hidden w-100 d-block"
          >
            <img
              src="/img/gallery/6.jpg"
              alt="Preview 6"
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
