# OKlch Color Palette Generator

An interactive, browser-based color palette studio built around the **OKlch** and **OKlab** perceptual color spaces. Design smooth, perceptually uniform color ramps using 2D cross-section Bezier editors, inspect them in an interactive 3D cylindrical space, manage multiple palette rows, and export directly to **Infinite Painter** (`.clrs`).

**Live Demo:** [Demo](https://retan.github.io/oklch-pallete-generator/)

## Features

- **Perceptual Color Engine (OKlch + OKlab):**
  - Edit colors intuitively using **Lightness ($L$)**, **Chroma ($C$)**, **Hue ($H$)** sliders, or **Hex** inputs.
  - All cubic Bezier curve interpolations and handle tangents are computed internally in **OKlab** 3D Cartesian space for smooth, natural transitions without hue muddiness.
  - Evenly distributes between **3 and 256 color stops** by perceptual arc length while pinning the closest stop to your exact Middle Stop color.
- **Dual Synchronized 2D Visual Editors:**
  - **Lightness vs. Chroma:** Rectangular cross-section with a live background synced to the Middle Stop's hue.
  - **Hue vs. Chroma (Polar):** Circular cross-section at fixed lightness ($L = 0.5$) with radial Chroma and angular Hue.
  - **Collinear Middle Handles:** Independent handle lengths with automatic anti-parallel alignment in OKlab space for smooth curve continuity.
  - **Global Background Panning:** Drag the canvas background to shift all unlocked stops and handles together. Hold `Shift` while dragging to snap movement to a single axis or cylindrical coordinate.
  - **Quick Reflections:** One-click buttons to invert Lightness around $0.5$, Chroma around $0.2$, or Hue around $0^\circ$.
  - **Stop Locking:** Lock individual stops (Start, Middle, End) to prevent accidental edits while adjusting curves or panning.
- **Interactive 3D OKlch Space:**
  - Real-time Three.js visualization of the transition curve and generated color swatches inside the OKlch cylinder with orbit, zoom, and pan controls.
- **Multi-Palette Workflow:**
  - Create multiple independent palette rows (cloning the previous row as a starting point), switch between them to edit, and delete unwanted rows.
- **Undo / Redo & Export:**
  - Single-step **Undo** (`Ctrl+Z` / `Cmd+Z`) and **Redo** (`Ctrl+Y` / `Cmd+Shift+Z`).
  - Export all palette rows together into a single **Infinite Painter (`.clrs`)** file.

## Getting Started

This project is a zero-build, single-file web application.

1. **Run Locally:** Download or clone the repository and open `index.html` (or `oklch_palette_plugin.html`) in any modern web browser.
2. **Host Online:** Upload the files to GitHub and enable **GitHub Pages** to use it from anywhere.

## Controls & Shortcuts

| Action | Control / Shortcut |
| :--- | :--- |
| **Adjust Curve Shape** | Drag any stop node or Bezier control handle in either 2D editor |
| **Pan All Unlocked Stops** | Click and drag the background of either 2D editor |
| **Axis / Coordinate Snap** | Hold `Shift` while dragging the 2D editor background |
| **Orbit / Zoom 3D View** | Left-click drag to rotate, scroll to zoom, right-click drag to pan |
| **Undo / Redo** | Toolbar buttons or `Ctrl+Z` / `Ctrl+Y` (`Cmd+Z` / `Cmd+Shift+Z` on Mac) |

## Built With

- **HTML5 Canvas & Inline SVG** — 2D color space gradients and interactive Bezier editors
- **Vanilla JavaScript (ES6+)** — OKlch/OKlab color math, arc-length sampling, and `.clrs` binary/JSON export
- **Three.js** — Interactive 3D cylindrical space visualization
- **Tailwind CSS** — UI styling

## License

This project is open source and available under the [MIT License](LICENSE).