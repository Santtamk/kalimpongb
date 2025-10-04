/**
 * Header
 * Fixed header with logo, hamburger, and main navigation. Markup preserved to match original template.
 */

import Link from "next/link";

// Navigation items data map
const navigationItems = [
  {
    id: 1,
    label: "About",
    href: "/about-us",
    className: "js-scroll-trigger animated_link",
  },
  {
    id: 2,
    label: "Rooms",
    href: "#rooms",
    className: "js-scroll-trigger animated_link",
  },
  {
    id: 3,
    label: "Gallery",
    href: "#gallery",
    className: "js-scroll-trigger animated_link",
  },
  {
    id: 4,
    label: "Contacts",
    href: "#contacts",
    className: "js-scroll-trigger animated_link",
  },
  {
    id: 5,
    label: "Book Now",
    href: "#booking_section",
    className: "js-scroll-trigger btn_1",
    isButton: true,
  },
];

export default function Header() {
  return (
    <header className="fixed_header menu_v1">
      <div className="layer"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-5">
            <Link href="/" className="logo_normal">
              <img
                src="/img/logo-removebg-small1.png"
                width="150"
                height="30"
                alt=""
                className="img-fluid"
              />
            </Link>
            <Link href="/" className="logo_sticky">
              <img
                src="/img/logo-removebg-small1.png"
                width="150"
                height="30"
                alt=""
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-md-9 col-7">
            <div className="main-menu">
              <button className="closebt open_close_menu" type="button">
                <i className="bi bi-x"></i>
              </button>
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
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      {item.href.startsWith("#") ? (
                        <a href={item.href} className={item.className}>
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className={item.className}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
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
