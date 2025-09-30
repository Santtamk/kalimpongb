# ContactsBooking Component Structure

This directory contains the modular ContactsBooking component broken down into separate, maintainable pieces.

## File Structure

```
ContactsBooking/
├── index.tsx           # Main component that orchestrates all sub-components
├── AddressSection.tsx  # Business address and contact information
├── BookingForm.tsx     # Room booking form with PHP backend
└── ContactForm.tsx     # Contact form with PHP backend
```

## Component Descriptions

### **index.tsx** (Main Component)

- **Purpose**: Main orchestrator component that combines all sub-components
- **Responsibilities**:
  - Layout structure and Bootstrap tab navigation
  - Imports and renders all sub-components
  - Maintains the overall container structure

### **AddressSection.tsx**

- **Purpose**: Displays business information and social links
- **Features**:
  - Company address and location
  - Phone and email contact links
  - Social media icon links (Instagram, WhatsApp, Facebook, Twitter)
  - Static content with proper semantic markup

### **BookingForm.tsx**

- **Purpose**: Room availability and booking form
- **Features**:
  - Room type selection (Double, Deluxe, Superior)
  - Guest count controls (adults/children with +/- buttons)
  - Personal information fields (name, email)
  - Human verification (3+1 math question)
  - Submits to `/phpmailer/reserve_template_email.php`

### **ContactForm.tsx**

- **Purpose**: General contact and inquiry form
- **Features**:
  - Personal details (first name, last name, email, phone)
  - Message textarea for inquiries
  - Human verification (3+1 math question)
  - Submits to `/phpmailer/contact_template_email.php`

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single, clear responsibility
2. **Maintainability**: Easy to update individual components without affecting others
3. **Reusability**: Components can be used independently in other parts of the application
4. **Code Organization**: Cleaner, more organized codebase structure
5. **Testing**: Easier to test individual components in isolation
6. **Team Development**: Multiple developers can work on different components simultaneously

## Usage

The main component is imported and used exactly the same way as before:

```tsx
import ContactsBooking from "./ContactsBooking";

export default function SomePage() {
  return (
    <div>
      <ContactsBooking />
    </div>
  );
}
```

All existing functionality is preserved, including:

- Bootstrap tab functionality
- Form submissions to PHP backends
- Responsive design
- Template JavaScript integration
- CSS class compatibility
