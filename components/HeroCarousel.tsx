"use client";

/**
 * HeroCarousel
 * Owl Carousel slider for the hero section with three slides.
 * Now initializes on client mount to support SPA navigation.
 */
import React, { useEffect } from "react";

// Minimal jQuery types used here
type JQObject = {
  each: (cb: (this: HTMLElement) => void) => void;
  attr: (name: string) => string | undefined;
  css: (prop: string, value: string) => void;
  on: (event: string, cb: (e?: unknown) => void) => void;
  owlCarousel?: (opts?: unknown) => JQObject;
  length: number;
  hasClass: (cls: string) => boolean;
  trigger: (ev: string) => void;
  off: (ev: string) => void;
  find: (sel: string) => JQObject;
  addClass: (cls: string) => void;
  removeClass: (cls: string) => void;
  eq: (index: number) => JQObject;
};
type JQ = ((selector: string) => JQObject) & { (el: HTMLElement): JQObject };
type WindowWithJQuery = Window & { jQuery?: JQ; $?: JQ };

export default function HeroCarousel() {
  useEffect(() => {
    let disposed = false;
    let attempts = 0;

    const tryInit = () => {
      if (disposed) return;
      const w: WindowWithJQuery | undefined =
        typeof window !== "undefined"
          ? (window as WindowWithJQuery)
          : undefined;
      const $ = w?.jQuery || w?.$;
      if (!$) {
        if (attempts < 15) {
          attempts += 1;
          setTimeout(tryInit, 100);
        }
        return;
      }

      try {
        // Apply data-driven styles for SPA nav
        $("#carousel-home .opacity-mask").each(function (this: HTMLElement) {
          const color = $(this).attr("data-opacity-mask");
          if (color) $(this).css("background-color", color);
        });
        $("#carousel-home .background-image").each(function (
          this: HTMLElement
        ) {
          const bg = $(this).attr("data-background");
          if (bg) $(this).css("background-image", String(bg));
        });
      } catch {}

      const $carousel = $("#carousel-home .owl-carousel");
      if ($carousel.length === 0) return;

      const bindOwlEvents = () => {
        $carousel.on("initialized.owl.carousel", function () {
          setTimeout(() => {
            $(
              "#carousel-home .owl-carousel .owl-item.active .owl-slide-animated"
            ).addClass("is-transitioned");
          }, 200);
        });

        $carousel.on("changed.owl.carousel", function (e?: unknown) {
          const evt = e as { item: { index: number } };
          $(".owl-slide-animated").removeClass("is-transitioned");
          const $currentOwlItem = $(".owl-item").eq(evt.item.index);
          $currentOwlItem
            .find(".owl-slide-animated")
            .addClass("is-transitioned");
        });
      };

      if ($carousel.hasClass("owl-loaded")) {
        $carousel.trigger("refresh.owl.carousel");
      } else {
        bindOwlEvents();
        $carousel.owlCarousel!({
          items: 1,
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          responsive: {
            0: { dots: false },
            767: { dots: false },
            768: { dots: true },
          },
        });
      }

      // Cleanup
      return () => {
        try {
          if ($carousel.hasClass("owl-loaded")) {
            $carousel.trigger("destroy.owl.carousel");
          }
          $carousel.off(".owl.carousel");
        } catch {}
      };
    };

    const cleanup = tryInit();
    return () => {
      disposed = true;
      if (typeof cleanup === "function") cleanup();
    };
  }, []);
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
