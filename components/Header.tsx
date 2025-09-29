/**
 * Header
 * Fixed header with logo, hamburger, and main navigation. Markup preserved to match original template.
 */
export default function Header() {
  return (
    <header className="fixed_header menu_v1">
      <div className="layer"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-5">
            <a href="#" className="logo_normal">
              <img
                src="/img/logo-removebg-small1.png"
                width="150"
                height="30"
                alt=""
                className="img-fluid"
              />
            </a>
            <a href="#" className="logo_sticky">
              <img
                src="/img/logo-removebg-small1.png"
                width="150"
                height="30"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-9 col-7">
            <div className="main-menu">
              <a href="#0" className="closebt open_close_menu">
                <i className="bi bi-x"></i>
              </a>
              <div className="logo_panel">
                <img
                  src="/img/logo.jpeg"
                  width="180"
                  height="34"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <nav id="mainNav">
                <ul>
                  <li>
                    <a
                      href="#about"
                      className="js-scroll-trigger animated_link"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#rooms"
                      className="js-scroll-trigger animated_link"
                    >
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      className="js-scroll-trigger animated_link"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#amenities"
                      className="js-scroll-trigger animated_link"
                    >
                      Activities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacts"
                      className="js-scroll-trigger animated_link"
                    >
                      Contacts
                    </a>
                  </li>

                  <li>
                    <a
                      href="#booking_section"
                      className="js-scroll-trigger btn_1"
                    >
                      Book Now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hamburger_2 open_close_menu float-end">
              <div className="hamburger__box">
                <div className="hamburger__inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
