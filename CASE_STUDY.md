# Kalimpong Bungalow - Project Case Study

## Project Overview
Kalimpong Bungalow is a premium hospitality website designed to showcase the heritage, comfort, and scenic beauty of a boutique stay in the Himalayas. The project focuses on delivering a visually immersive experience through high-quality imagery, smooth animations, and a seamless user interface.

## Tech Stack

### Core Framework
-   **Next.js 15 (App Router)**: Utilizes the latest React framework features for server-side rendering, improved SEO, and optimal performance.
-   **React 19**: Leverages the newest React capabilities for building interactive and efficient user interfaces.
-   **TypeScript**: Ensures code reliability and maintainability with static typing.

### Styling & Design
-   **Tailwind CSS 4**: Implements a utility-first CSS framework for rapid, responsive, and consistent styling.
-   **Bootstrap Grid**: Retains the robust grid system for complex layout structures.
-   **Custom CSS**: Tailored styles for unique branding elements and specific component behaviors.

### Animations & Interactivity
-   **Kenburns Effect**: A slow, panning zoom effect applied to hero images to create a cinematic and immersive first impression.
-   **Scroll Animations**: Elements smoothly slide or fade in as the user scrolls (`slideInUp`, `zoomIn`), driven by data attributes for a dynamic feel.
-   **Interactive Gallery**: Integrated `fslightbox` for a full-screen, responsive image viewing experience with touch support.
-   **Owl Carousel (Legacy Support)**: Maintained for complex slider layouts while key hero sections were modernized.

## Key Features

### 1. Immersive Hero Sections
Each major page (Home, About, Rooms, Gallery) features a full-screen hero section with the "Kenburns" animation effect.
*   **Technical Highlight**: The hero components for About, Rooms, and Gallery were refactored from heavy jQuery-based sliders to lightweight, pure React components. This improved load times and eliminated layout shifts/flickering issues.

### 2. Dynamic Content Presentation
The "About Us" and "Rooms" sections utilize a card-based layout with hover effects and entrance animations to engage users as they explore the content.

### 3. High-Performance Gallery
A curated gallery section that loads efficiently and offers a seamless full-screen lightbox experience.
*   **Technical Highlight**: The lightbox integration was optimized for React's Single Page Application (SPA) navigation, ensuring it initializes correctly even when navigating between pages without a full reload.

### 4. Responsive & Mobile-First
The design is fully responsive, adapting gracefully from large desktop screens to mobile devices. It features a custom mobile navigation menu and touch-friendly interactive elements.

## Technical Challenges & Solutions

### Challenge: Legacy jQuery Integration
The original design relied heavily on jQuery plugins (Owl Carousel, various UI scripts) which conflicted with React's virtual DOM and component lifecycle.
**Solution**:
-   **Selective Refactoring**: Critical components like the Hero sections were rewritten in pure React to ensure stability and performance.
-   **Lifecycle Management**: For remaining legacy scripts, `useEffect` hooks were carefully implemented to initialize and clean up third-party libraries, preventing memory leaks and ensuring correct behavior during navigation.

### Challenge: SPA Navigation & External Libraries
Libraries like `fslightbox` rely on scanning the DOM on initial load, which breaks when navigating client-side in Next.js.
**Solution**:
-   Implemented manual re-initialization triggers within React components to notify external libraries of DOM updates, ensuring seamless functionality across all page transitions.
