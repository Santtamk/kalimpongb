import React, { useId } from "react";

type ImageProp =
  | string
  | {
      desktop: string;
      mobile?: string;
    };

export interface AboutImageProps {
  /** Image URL string or { desktop, mobile } */
  image: ImageProp;
  /** Heading text */
  title: string;
  /** Paragraph text */
  body?: string;
  /** "left" places image left on lg+, "right" places it right (default: right) */
  imagePosition?: "left" | "right";
  /** alt text for the <img> on large screens */
  alt?: string;
  /** optional wrapper className for quick styling tweaks */
  className?: string;
}

/**
 * AboutImage
 * - Mobile/medium: image used as background with a fixed dark overlay
 * - Large (lg+): image and text side-by-side, controlled by imagePosition
 *
 * Minimal props, typed, accessible (aria-labelledby), Tailwind-ready.
 */
const AboutImage: React.FC<AboutImageProps> = ({
  image,
  title,
  body = "",
  imagePosition = "right",
  alt = "",
  className = "",
}) => {
  const headingId = useId();
  const isString = typeof image === "string";
  const desktop = isString ? image : image.desktop;
  const mobile = isString ? image : image.mobile ?? image.desktop;

  const lgDir = imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <section
      className={`w-full ${className}`}
      aria-labelledby={headingId}
      role="region"
    >
      {/* Mobile / medium: background with fixed overlay */}
      <div className="relative w-full h-screen md:h-[500px] lg:hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mobile})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true" />
        </div>

        <div className="relative z-10 px-6 py-10 text-center w-full max-w-4xl flex flex-col items-center justify-center">
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white drop-shadow leading-relaxed">{body}</p>
        </div>
      </div>

      {/* Large screens: side-by-side */}
      <div className={`hidden lg:flex items-center gap-8 px-6 lg:px-12 py-12 ${lgDir}`}>
        {/* Image column */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <img
            src={desktop}
            alt={alt}
            loading="lazy"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
            style={{ maxHeight: "70vh" }}
          />
        </div>

        {/* Text column */}
        <div className="w-full lg:w-1/2">
          <div className="max-w-xl">
            <h2 id={headingId} className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImage;
