# OKlch Color Shift Palette Generator

An interactive, browser-based color palette studio specifically designed to create complex palettes with expressive **hue and chroma shifts**. Built around the **OKlch** and **OKlab** perceptual color spaces, it lets you sculpt smooth, perceptually uniform color ramps using 2D cross-section Bezier editors, inspect sRGB gamut boundaries, view palettes in an interactive 3D cylindrical space, manage multiple palette rows side by side, and export directly to **Infinite Painter** (`.clrs`) or **JSON**.

> **Live Demo:** [Demo](https://retan.github.io/oklch-color-shift-palette-generator/)

## Features

- **Perceptual Color Engine (OKlch + OKlab):**
  - Edit Start, Middle, and End stops precisely using **Lightness ($L$)**, **Chroma ($C$)**, and **Hue ($H$)** sliders, synchronized numerical inputs, or **Hex** color pickers and text fields.
  - All cubic Bezier curve interpolations and handle tangents are computed internally in **OKlab** 3D Cartesian space for smooth, natural hue and chroma transitions without muddiness.
  - Adjust between **$3$ and $256$ color stops** using the **Color Stops** slider and numerical input embedded directly inside the active palette card. By default, stops are distributed evenly by perceptual arc length while pinning the closest stop to your exact Middle Stop color.
  - **Tonal Color Scale Mode:** Toggle the **Tonal Color Scale** switch at the bottom of the sidebar (off by default) to apply tonal interval weighting across all generated palettes—spacing the first and last intervals at half ($\frac{1}{2}$) the curve distance of interior intervals for finer tonal steps at shadow and highlight extremes while preserving Middle Stop snapping.
  - **Hue-Preserving Gamut Mapping:** Toggle the **Gamut Mapping** switch at the bottom of the sidebar (off by default) to map out-of-gamut colors into the sRGB boundary by stepping **Chroma ($C$)** down while holding **Lightness ($L$)** and **Hue ($H$)** constant—preventing unwanted hue shifts across swatches, sliders, 3D previews, and exports.
  - **Value (Grayscale) Preview:** Toggle the **Value (Grayscale) Preview** switch at the bottom of the sidebar to preview all swatches, 2D editor backgrounds, and 3D curves by their perceptual Lightness ($L$) in grayscale (collapsing Chroma to $0$ visually while keeping underlying colors and hex copy intact)—ideal for verifying value contrast on painting ramps for Infinite Painter without hue distraction.
- **Dual Synchronized 2D Visual Editors:**
  - **Lightness vs. Chroma:** Rectangular cross-section with a live background synced to the Middle Stop's hue.
  - **Hue vs. Chroma (Polar):** Circular cross-section with radial Chroma and angular Hue.
  - **sRGB Gamut Boundary Overlays:** Enabling **Gamut Mapping** in the sidebar also shades out-of-gamut regions in both 2D editors with a $50\%$ opacity black overlay—dynamically synced to the Middle Stop's hue in *Lightness vs. Chroma* and to the Middle Stop's lightness in *Hue vs. Chroma (Polar)*.
  - **Full-Viewport Expand Mode:** Click **Expand** on either 2D editor to enlarge its workspace—including title, cross-section canvas, and reflection buttons—to fill the entire viewport with finer nodes and curve strokes for high-precision adjustments (press **Collapse** or `Esc` to exit).
  - **Collinear Middle Handles:** Independent handle lengths with automatic anti-parallel alignment in OKlab space for smooth curve continuity.
  - **Global Background Panning:** Drag the canvas background to shift all unlocked stops and handles together along Lightness/Chroma or cylindrical Hue/Chroma. Hold `Shift` while dragging to snap movement to a single axis or cylindrical coordinate.
  - **Quick Reflections:** One-click buttons to invert Lightness around $0.5$, Chroma around $0.2$, or Hue around $0^\circ$.
  - **Stop & Handle Locking:** Lock individual stops (Start, Middle, End) to freeze both the stop node and its attached Bezier control handles across dragging, background panning, and reflection actions.
- **Interactive 3D OKlch Space:**
  - Real-time Three.js visualization of the transition curve and generated color stop spheres inside the OKlch cylinder with orbit, zoom, and pan controls.
- **Multi-Palette Workflow, Ghost Overlays & One-Click Hex Copy:**
  - Create multiple independent palette rows (**Add palette** clones the previous row as a starting point), click any row to select it for editing, customize per-palette stop counts on the active card, and delete extra rows.
  - **Click-to-Copy Swatches:** Click any output color swatch to copy its uppercase hex code to the clipboard with an inline `"Copied to clipboard"` confirmation badge.
  - **$25\%$ Opacity Ghost Previews:** Non-selected palettes remain visible as non-interactive, semi-transparent ghosts (both curves and stop markers) across both 2D editors and the 3D cylinder view so you can compare and harmonize ramps across your entire project.
- **Session Auto-Save, Undo / Redo, Config JSON & Infinite Painter Export:**
  - **Session Auto-Save (`localStorage`) & Reset:** Automatically saves all palette rows, active selection, stop counts, locks, and sidebar switches (**Tonal Color Scale**, **Gamut Mapping**) to `localStorage` on every edit so refreshing the tab or closing the PWA never loses unsaved work. Click **Reset** below the Undo/Redo buttons in the sidebar header (with a confirmation dialog) to clear saved session data and restore the default palette.
  - Single-step **Undo** (`Ctrl+Z` / `Cmd+Z`) and **Redo** (`Ctrl+Y` / `Cmd+Shift+Z`).
  - **Export Config JSON & Import Config JSON:** Save your complete multi-palette workspace configuration (all rows, stops, Bezier handles, lock states, stop counts, Tonal Color Scale, Gamut Mapping, and active selection) to a `.json` file and reload it anytime.
  - **Export Infinite Painter (`.clrs`):** Opens a naming dialog where you can enter a custom **Palette Name** (defaulting to `Color Shift`) saved into the `.clrs` file's `name` property so Infinite Painter displays your chosen title, exporting all palette rows together into a single `<palette_name>.clrs` file across desktop, tablet, and mobile browsers.
- **Progressive Web App (PWA) Support:**
  - Includes a web app manifest (`manifest.webmanifest`), custom icons, and a Service Worker (`sw.js`) for offline caching, allowing you to install the generator from supported desktop and mobile browsers as a standalone offline-capable app.
- **Responsive Cross-Device Layout:**
  - Uses dynamic viewport sizing (`100dvh`) on desktop and tablet screens so palette rows and export controls remain visible without clipping, and adapts into a single-column scrollable layout on narrow screens.

## Getting Started

This project is a zero-build, single-file web application.

1. **Run Locally:** Download or clone the repository and open `index.html` in any modern web browser.
2. **Host Online:** Upload the files to GitHub and enable **GitHub Pages** to use it from anywhere.
3. **Install as PWA:** Open the hosted page in Chrome, Edge, or Safari and use your browser's **Install App** / **Add to Home Screen** option for standalone offline access.

## Controls & Shortcuts

| Action | Control / Shortcut |
| :--- | :--- |
| **Adjust Curve Shape** | Drag any unlocked stop node or Bezier control handle in either 2D editor |
| **Fine-Tune Stop Values** | Use the $L$, $C$, $H$ sliders, synchronized numerical boxes, or Hex inputs |
| **Lock Stop & Handles** | Click the lock icon next to Start, Middle, or End Stop |
| **Toggle Tonal Color Scale** | Flip the **Tonal Color Scale** switch at the bottom of the sidebar |
| **Toggle Gamut Mapping & Overlays** | Flip the **Gamut Mapping** switch at the bottom of the sidebar |
| **Toggle Value (Grayscale) Preview** | Flip the **Value (Grayscale) Preview** switch at the bottom of the sidebar |
| **Expand / Collapse 2D Editor** | Click **Expand** in the editor header (`Esc` to exit full-viewport mode) |
| **Pan All Unlocked Stops** | Click and drag the background of either 2D editor |
| **Axis / Coordinate Snap** | Hold `Shift` while dragging the 2D editor background |
| **Copy Swatch Hex Code** | Click any generated color swatch in the palette rows |
| **Orbit / Zoom 3D View** | Left-click drag to rotate, scroll to zoom, right-click drag to pan |
| **Undo / Redo** | Toolbar buttons or `Ctrl+Z` / `Ctrl+Y` (`Cmd+Z` / `Cmd+Shift+Z` on Mac) |
| **Reset All Palettes** | Click **Reset** below the Undo/Redo buttons in the sidebar header |

## Built With

- **HTML5 Canvas & Inline SVG** — 2D color space gradients, sRGB gamut overlays, interactive Bezier editors, and ghost curve layers
- **Vanilla JavaScript (ES6+)** — OKlch/OKlab color math, hue-preserving sRGB gamut mapping, arc-length and tonal-weighted sampling, `localStorage` persistence, JSON serialization, and `.clrs` export
- **Three.js** — Interactive 3D cylindrical space visualization
- **Tailwind CSS** — Responsive UI styling
- **Web App Manifest & Service Worker** — Installable PWA support with offline caching

## License

This project is open source and available under the [MIT License](LICENSE).