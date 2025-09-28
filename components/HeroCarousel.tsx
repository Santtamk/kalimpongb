/**
 * HeroCarousel
 * Owl Carousel slider for the hero section with three slides and language selector.
 * Behavior initialized by slider.js/common_functions.js.
 */
export default function HeroCarousel() {
  return (
    <div id="carousel-home">
      <div className="owl-carousel owl-theme kenburns">
        {/* Slide 1 */}
        <div
          className="owl-slide background-image relative bg-cover bg-center
                     !min-h-[100dvh] md:!min-h-[70vh] lg:!min-h-[80vh]"
          data-background="url(/img/slides/slide_2.jpg)"
        >
          <div
            className="opacity-mask flex items-center h-full"
            data-opacity-mask="rgba(0, 0, 0, 0.5)"
          >
            <div className="container">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-lg-6 static">
                  <div className="slide-text white">
                    <small className="owl-slide-animated owl-slide-title">
                      An Authentic Cultural Retreat
                    </small>
                    <h2 className="owl-slide-animated owl-slide-title-2">
                      Where Heritage Meets the Hills.
                    </h2>
                    <div className="owl-slide-animated owl-slide-title-3">
                      <a
                        className="btn_1 outline white mt-3 btn_scrollto"
                        href="#about"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="owl-slide background-image relative bg-cover bg-center
                     !min-h-[100dvh] md:!min-h-[70vh] lg:!min-h-[80vh]"
          data-background="url(/img/slides/slide_1.jpg)"
        >
          <div
            className="opacity-mask flex items-center h-full"
            data-opacity-mask="rgba(0, 0, 0, 0.5)"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 static">
                  <div className="slide-text white text-center">
                    <small className="owl-slide-animated owl-slide-title">
                      Where Every Stay Feels Like a Story
                    </small>
                    <h2 className="owl-slide-animated owl-slide-title-2">
                      Wake up to Culture, Charm, and Calm.
                    </h2>
                    <div className="owl-slide-animated owl-slide-title-3">
                      <a
                        className="btn_1 outline white mt-3 btn_scrollto"
                        href="#about"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="owl-slide background-image relative bg-cover bg-center
                     !min-h-[100dvh] md:!min-h-[70vh] lg:!min-h-[80vh]"
          data-background="url(/img/slides/slide_3.jpg)"
        >
          <div
            className="opacity-mask flex items-center h-full"
            data-opacity-mask="rgba(0, 0, 0, 0.6)"
          >
            <div className="container">
              <div className="row justify-content-center justify-content-md-end">
                <div className="col-lg-6 static">
                  <div className="slide-text text-end white">
                    <small className="owl-slide-animated owl-slide-title">
                      Your Heritage Escape in the Hills
                    </small>
                    <h2 className="owl-slide-animated owl-slide-title-2">
                      Your Peaceful Retreat in Kalimpong.
                    </h2>
                    <div className="owl-slide-animated owl-slide-title-3">
                      <a
                        className="btn_1 outline white mt-3 btn_scrollto"
                        href="#about"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Language selector */}
    </div>
  );
}
