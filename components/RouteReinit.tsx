"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
};
type JQ = ((selector: string) => JQObject) & { (el: HTMLElement): JQObject };
type WindowWithLibs = Window & {
  jQuery?: JQ & { fn?: { niceSelect?: () => void } };
  $?: JQ & { fn?: { niceSelect?: () => void } };
  scrollCue?: { init?: (opts?: unknown) => void };
  jarallax?: (els: NodeListOf<Element> | Element[], opts?: unknown) => void;
};

export default function RouteReinit() {
  const pathname = usePathname();

  useEffect(() => {
    let disposed = false;
    let attempts = 0;

    const tryInit = () => {
      if (disposed) return;
      const w: WindowWithLibs | undefined =
        typeof window !== "undefined" ? (window as WindowWithLibs) : undefined;
      const $ = w?.jQuery || w?.$;
      if (!$) {
        if (attempts < 20) {
          attempts += 1;
          setTimeout(tryInit, 100);
        }
        return;
      }

      // Apply masks and background images
      try {
        $(".opacity-mask").each(function (this: HTMLElement) {
          const color = $(this).attr("data-opacity-mask");
          if (color) $(this).css("background-color", color);
        });
        $(".background-image").each(function (this: HTMLElement) {
          const bg = $(this).attr("data-background");
          if (bg) $(this).css("background-image", String(bg));
        });
      } catch {}

      // Re-init testimonials carousel if present
      try {
        const $test = $(".carousel_testimonials");
        if ($test.length && !$test.hasClass("owl-loaded")) {
          $test.owlCarousel!({
            items: 1,
            loop: true,
            autoplay: false,
            animateIn: "flipInX",
            margin: 40,
            stagePadding: 30,
            smartSpeed: 300,
            autoHeight: true,
            dots: true,
            responsiveClass: true,
            responsive: {
              600: { items: 1 },
              1000: { items: 1, nav: false },
            },
          });
        }
      } catch {}

      // Re-init rooms carousels (.carousel_item_1)
      try {
        const $rooms = $(".carousel_item_1");
        if ($rooms.length && !$rooms.hasClass("owl-loaded")) {
          $rooms.owlCarousel!({
            center: true,
            items: 1,
            loop: false,
            addClassActive: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            animateOut: "fadeOut",
            responsive: {
              0: { dots: true },
              991: { dots: true },
            },
          });
        }
      } catch {}

      // Re-init gallery carousel (.carousel_item_centered)
      try {
        const $gallery = $(".carousel_item_centered");
        if ($gallery.length && !$gallery.hasClass("owl-loaded")) {
          $gallery.owlCarousel!({
            loop: true,
            margin: 5,
            nav: true,
            dots: false,
            center: true,
            navText: [
              "<i class='bi bi-arrow-left-short'></i>",
              "<i class='bi bi-arrow-right-short'></i>",
            ],
            responsive: {
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 2 },
            },
          });
        }
      } catch {}

      // Re-init nice select
      try {
        const $selRaw = $(".custom_select select");
        const jq = w?.jQuery as WindowWithLibs["jQuery"] | undefined;
        if ($selRaw.length && jq?.fn?.niceSelect) {
          // call the plugin through jQuery's prototype if present
          (jq.fn.niceSelect as () => void).call($selRaw);
        }
      } catch {}

      // Re-init scrollCue if available
      try {
        w?.scrollCue?.init?.({ percentage: 0.85 });
      } catch {}

      // Re-init jarallax for elements with data-jarallax
      try {
        const els = document.querySelectorAll("[data-jarallax]");
        if (els.length && w?.jarallax) {
          w.jarallax(els, { speed: 0.2 });
        }
      } catch {}

      // Re-bind video autoplay on scroll for #section_video
      try {
        const vids = document.querySelectorAll<HTMLVideoElement>("#section_video video");
        if (vids.length) {
          vids.forEach((v) => {
            v.setAttribute("webkit-playsinline", "");
            v.setAttribute("playsinline", "");
            v.muted = true;
            v.load();
          });
          const onScroll = () => {
            const viewportTop = window.scrollY;
            const viewportBottom = viewportTop + window.innerHeight;
            vids.forEach((v) => {
              const rect = v.getBoundingClientRect();
              const elTop = rect.top + window.scrollY;
              const elBottom = elTop + rect.height;
              const visible = elBottom > viewportTop && elTop < viewportBottom;
              if (visible) v.play().catch(() => undefined);
              else v.pause();
            });
          };
          window.removeEventListener("scroll", onScroll);
          window.addEventListener("scroll", onScroll, { passive: true });
          onScroll();
        }
      } catch {}

      // Re-init pinned image GSAP animations if template's function is present
      try {
        // mimic the pinned-image init from common_functions with GSAP/ScrollTrigger
        // If those globals are available they’ll recreate the timeline
        const pinnedImages = document.querySelectorAll('.pinned-image');
        // If there are pinned images and gsap is loaded, trigger a resize to recalc layouts
        if (pinnedImages.length) {
          window.dispatchEvent(new Event('resize'));
        }
      } catch {}
    };

    tryInit();
    return () => {
      disposed = true;
    };
  }, [pathname]);

  return null;
}
