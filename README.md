# OKlch Color Shift Palette Generator

An interactive, browser-based color palette studio specifically designed to create complex palettes with expressive **hue and chroma shifts**. Built around the **OKlch** and **OKlab** perceptual color spaces, it lets you sculpt smooth, perceptually uniform color ramps using 2D cross-section Bezier editors, inspect sRGB gamut boundaries, view palettes in an interactive 3D cylindrical space, manage multiple palette rows side by side, and export directly to **Infinite Painter** (`.clrs`) or **JSON**.

> **Live Demo:** [Demo](https://retan.github.io/oklch-pallete-generator/)

## Features

- **Perceptual Color Engine (OKlch + OKlab):**
  - Edit Start, Middle, and End stops precisely using **Lightness ($L$)**, **Chroma ($C$)**, and **Hue ($H$)** sliders, synchronized numerical inputs, or **Hex** color pickers and text fields.
  - All cubic Bezier curve interpolations and handle tangents are computed internally in **OKlab** 3D Cartesian space for smooth, natural hue and chroma transitions without muddiness.
  - Adjust between **$3$ and $256$ color stops** using the **Color Stops** slider and numerical input embedded directly inside the active palette card. By default, stops are distributed evenly by perceptual arc length while pinning the closest stop to your exact Middle Stop color.
  - **Tonal Color Scale Mode:** Toggle the **Tonal Color Scale** switch at the bottom of the sidebar (off by default) to apply tonal interval weighting across all generated palettes—spacing the first and last intervals at half ($\frac{1}{2}$) the curve distance of interior intervals for finer tonal steps at shadow and highlight extremes while preserving Middle Stop snapping.
- **Dual Synchronized 2D Visual Editors:**
  - **Lightness vs. Chroma:** Rectangular cross-section with a live background synced to the Middle Stop's hue.
  - **Hue vs. Chroma (Polar):** Circular cross-section at fixed lightness ($L = 0.5$) with radial Chroma and angular Hue.
  - **sRGB Gamut Boundary Overlays:** Each 2D editor includes an independent **Gamut** toggle switch (off by default) that shades out-of-gamut areas with a $50\%$ opacity black overlay—dynamically synced to the Middle Stop's hue in *Lightness vs. Chroma* and fixed at $L = 0.5$ in *Hue vs. Chroma*.
  - **Full-Viewport Expand Mode:** Click **Expand** on either 2D editor to enlarge its workspace—including title, switches, cross-section canvas, and reflection buttons—to fill the entire viewport with finer nodes and curve strokes for high-precision adjustments (press **Collapse** or `Esc` to exit).
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
- **Undo / Redo, Config JSON Save/Load & Infinite Painter Export:**
  - Single-step **Undo** (`Ctrl+Z` / `Cmd+Z`) and **Redo** (`Ctrl+Y` / `Cmd+Shift+Z`).
  - **Export Config JSON & Import Config JSON:** Save your complete multi-palette workspace configuration (all rows, stops, Bezier handles, lock states, stop counts, Tonal Color Scale setting, and active selection) to a `.json` file and reload it anytime.
  - **Export Infinite Painter (`.clrs`):** Export all palette rows together into a single `.clrs` file ready for Infinite Painter on desktop, tablet, and mobile browsers.
- **Responsive Cross-Device Layout:**
  - Uses dynamic viewport sizing (`100dvh`) on desktop and tablet screens so palette rows and export controls remain visible without clipping, and adapts into a single-column scrollable layout on narrow screens.

## Getting Started

This project is a zero-build, single-file web application.

1. **Run Locally:** Download or clone the repository and open `oklch_palette_plugin.html` (or `index.html`) in any modern web browser.
2. **Host Online:** Upload the files to GitHub and enable **GitHub Pages** to use it from anywhere.

## Controls & Shortcuts

| Action | Control / Shortcut |
| :--- | :--- |
| **Adjust Curve Shape** | Drag any unlocked stop node or Bezier control handle in either 2D editor |
| **Fine-Tune Stop Values** | Use the $L$, $C$, $H$ sliders, synchronized numerical boxes, or Hex inputs |
| **Lock Stop & Handles** | Click the lock icon next to Start, Middle, or End Stop |
| **Toggle Tonal Color Scale** | Flip the **Tonal Color Scale** switch at the bottom of the sidebar |
| **Toggle sRGB Gamut Overlay** | Flip the **Gamut** switch in the header of either 2D editor |
| **Expand / Collapse 2D Editor** | Click **Expand** in the editor header (`Esc` to exit full-viewport mode) |
| **Pan All Unlocked Stops** | Click and drag the background of either 2D editor |
| **Axis / Coordinate Snap** | Hold `Shift` while dragging the 2D editor background |
| **Copy Swatch Hex Code** | Click any generated color swatch in the palette rows |
| **Orbit / Zoom 3D View** | Left-click drag to rotate, scroll to zoom, right-click drag to pan |
| **Undo / Redo** | Toolbar buttons or `Ctrl+Z` / `Ctrl+Y` (`Cmd+Z` / `Cmd+Shift+Z` on Mac) |

## Built With

- **HTML5 Canvas & Inline SVG** — 2D color space gradients, sRGB gamut overlays, interactive Bezier editors, and ghost curve layers
- **Vanilla JavaScript (ES6+)** — OKlch/OKlab color math, arc-length and tonal-weighted sampling, JSON serialization, and `.clrs` export
- **Three.js** — Interactive 3D cylindrical space visualization
- **Tailwind CSS** — Responsive UI styling

## License

This project is open source and available under the [MIT License](LICENSE).