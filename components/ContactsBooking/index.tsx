/**
 * ContactsBooking Main Component
 * Combines AddressSection, BookingForm, and ContactForm into a tabbed interface
 */

import AddressSection from "./AddressSection";
import BookingForm from "./BookingForm";
import ContactForm from "./ContactForm";

export default function ContactsBooking() {
  return (
    <div className="container margin_120_95" id="contacts">
      <div className="row justify-content-between">
        {/* Address and Contact Information */}
        <AddressSection />

        {/* Tabbed Forms Section */}
        <div className="col-xl-7" id="booking_section">
          <ul className="nav nav-tabs" id="customTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="first_tab"
                data-bs-toggle="tab"
                data-bs-target="#first_tab_pane"
                type="button"
                role="tab"
                aria-controls="first_tab_pane"
                aria-selected="true"
              >
                Check Availability
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="second_tab"
                data-bs-toggle="tab"
                data-bs-target="#second_tab_pane"
                type="button"
                role="tab"
                aria-controls="second_tab_pane"
                aria-selected="false"
              >
                Contact Us
              </button>
            </li>
          </ul>

          <div className="tab-content">
            {/* Booking Form Tab */}
            <BookingForm />

            {/* Contact Form Tab */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
