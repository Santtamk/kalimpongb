/**
 * AddressSection Component
 * Displays business address, contact information, and social media links
 */

export default function AddressSection() {
  return (
    <div className="col-xl-4">
      <div data-cue="slideInUp">
        <div className="title">
          <small>Kalimpong Bungalow – Cultural Bed & Breakfast</small>
          <h2>Address</h2>
        </div>
        <p>
          Kalimpong Bungalow, Ganesh Villa,
          <br /> Near Nag Dhara, 12 Mile,
          <br />
          Kalimpong -734301
        </p>
        <div className="phone_element no_borders">
          <a href="tel://423424234">
            <i className="bi bi-telephone"></i>
            <span>
              <em>Bookings</em>+91 7908676707
            </span>
          </a>
        </div>
        <div className="phone_element no_borders">
          <a href="mailto:info@domain.com">
            <i className="bi bi-envelope"></i>
            <span>
              <em>Questions</em>kalimpongbungalow@gmail.com
            </span>
          </a>
        </div>
        <div className="social mt-1">
          <ul>
            <li>
              <a href="#0">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
