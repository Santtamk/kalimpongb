import Image from "next/image";

type AmenityHighlightProps = {
  id?: string;
  eyebrow: string;
  title: string;
  text: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
  reverse?: boolean; // If true, the logo sits on the right instead of the left
};

/**
 * AmenityHighlight
 * Generic logo + short text band for an in-house amenity (cafe, spa, bar, etc.)
 * that only has a logo/mark rather than a full photo set. Reuse this component
 * for any future amenity by passing different props.
 */
export default function AmenityHighlight({
  id,
  eyebrow,
  title,
  text,
  logoSrc,
  logoAlt,
  logoWidth = 400,
  logoHeight = 560,
  reverse,
}: AmenityHighlightProps) {
  return (
    <div className="bg_white" id={id}>
      <div className="container margin_120_95">
        <div
          className={`row justify-content-between align-items-center${
            reverse ? " flex-lg-row-reverse" : ""
          }`}
        >
          <div className="col-lg-4 col-md-5 text-center mb-4 mb-lg-0">
            <div className="brand_logo_badge" data-cue="slideInUp">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="intro" data-cue="slideInUp">
              <div className="title">
                <small>{eyebrow}</small>
                <h2>{title}</h2>
              </div>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
