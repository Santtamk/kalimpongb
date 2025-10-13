"use client";
import React, { useEffect } from "react";

// Minimal jQuery surface used here to avoid adding full @types
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

type JQ = ((selector: string) => JQObject) & {
  (el: HTMLElement): JQObject;
};

type WindowWithJQuery = Window & { jQuery?: JQ; $?: JQ };

const AboutUs = () => {
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

      // Apply data-driven styles for newly mounted elements (SPA nav)
      try {
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
        // Always show hero text for single-slide carousels
        setTimeout(() => {
          $carousel.find(".owl-slide-animated").addClass("is-transitioned");
        }, 200);
      };

      // Initialize or refresh Owl Carousel
      if ($carousel.hasClass("owl-loaded")) {
        // already initialized (e.g., SSR-load then SPA nav back), just refresh
        $carousel.trigger("refresh.owl.carousel");
      } else {
        bindOwlEvents();
        $carousel.owlCarousel!({
          items: 1,
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          // autoplayTimeout: 5000,
          autoplayHoverPause: false,
          responsive: {
            0: { dots: false },
            767: { dots: false },
            768: { dots: true },
          },
        });
      }

      // Cleanup on unmount
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
        <div
          className="owl-slide background-image relative bg-cover bg-center
                     !min-h-[100dvh] md:!min-h-[70vh] lg:!min-h-[80vh]"
          data-background="url(/img/aboutUs/about1.png)"
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
                      Your home in Kalimpong
                    </small>
                    <h2 className="owl-slide-animated owl-slide-title-2">
                      More than a place to stay
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
