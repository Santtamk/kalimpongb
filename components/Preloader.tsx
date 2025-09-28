"use client";

import { useEffect, useState } from "react";

/**
 * Preloader
 * Faster, brand-friendly preloader that shows your logo with a subtle pulse, then exits quickly.
 * - Hides as soon as DOM is ready, with a 1.2s max fallback timeout so it never hangs.
 * - Keeps the original #preloader id so existing CSS applies; spinner markup removed.
 */
export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hide = () => setShow(false);

    // Hide quickly if the DOM is already ready
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      const quick = window.setTimeout(hide, 100);
      return () => window.clearTimeout(quick);
    }

    // Fallback: hide on DOMContentLoaded or after a short timeout
    const onReady = () => hide();
    const t = window.setTimeout(hide, 1200);
    window.addEventListener("DOMContentLoaded", onReady, { once: true });
    window.addEventListener("load", onReady, { once: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("DOMContentLoaded", onReady);
      window.removeEventListener("load", onReady);
    };
  }, []);

  if (!show) return null;

  return (
    <div id="preloader" className="preloader-overlay">
      <div className="preloader-logo-wrap" aria-label="Loading">
        <img
          src="/img/logo-removebg-small.png"
          alt="Logo"
          className="preloader-logo"
          width={180}
          height={46}
        />
      </div>
    </div>
  );
}
