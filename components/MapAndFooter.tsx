/**
 * MapAndFooter
 * Google Maps embed and footer copyright strip.
 */
export default function MapAndFooter() {
  return (
    <>
      <div className="map_contact w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1053.4862688856856!2d88.4992031038195!3d27.0781385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e41f6b72dea4c5%3A0x9624e94f168ba36c!2sKalimpong%20Bungalow!5e1!3m2!1sen!2sin!4v1759034081757!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="copy">
        <div className="container">© Kalimpong Bungalow - 2025 </div>
      </div>
    </>
  );
}
