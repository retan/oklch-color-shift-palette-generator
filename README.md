# OKlch Color Palette Generator

An interactive, browser-based color palette studio specifically designed to create complex palettes with expressive **hue and chroma shifts**. Built around the **OKlch** and **OKlab** perceptual color spaces, it lets you sculpt smooth, perceptually uniform color ramps using 2D cross-section Bezier editors, inspect them in an interactive 3D cylindrical space, manage multiple palette rows side by side, and export directly to **Infinite Painter** (`.clrs`) or **JSON**.

> **Live Demo:** [Demo](https://retan.github.io/oklch-pallete-generator/)

## Features

- **Perceptual Color Engine (OKlch + OKlab):**
  - Edit Start, Middle, and End stops precisely using **Lightness ($L$)**, **Chroma ($C$)**, and **Hue ($H$)** sliders, synchronized numerical inputs, or **Hex** color pickers and text fields.
  - All cubic Bezier curve interpolations and handle tangents are computed internally in **OKlab** 3D Cartesian space for smooth, natural hue and chroma transitions without muddiness.
  - Evenly distributes between **3 and 256 color stops** by perceptual arc length while pinning the closest stop to your exact Middle Stop color.
- **Dual Synchronized 2D Visual Editors:**
  - **Lightness vs. Chroma:** Rectangular cross-section with a live background synced to the Middle Stop's hue.
  - **Hue vs. Chroma (Polar):** Circular cross-section at fixed lightness ($L = 0.5$) with radial Chroma and angular Hue.
  - **Collinear Middle Handles:** Independent handle lengths with automatic anti-parallel alignment in OKlab space for smooth curve continuity.
  - **Global Background Panning:** Drag the canvas background to shift all unlocked stops and handles together along Lightness/Chroma or cylindrical Hue/Chroma. Hold `Shift` while dragging to snap movement to a single axis or cylindrical coordinate.
  - **Quick Reflections:** One-click buttons to invert Lightness around $0.5$, Chroma around $0.2$, or Hue around $0^\circ$.
  - **Stop Locking:** Lock individual stops (Start, Middle, End) to prevent accidental edits while adjusting curves or panning.
- **Interactive 3D OKlch Space:**
  - Real-time Three.js visualization of the transition curve and generated color swatches inside the OKlch cylinder with orbit, zoom, and pan controls.
- **Multi-Palette Workflow & Ghost Overlays:**
  - Create multiple independent palette rows (cloning the previous row as a starting point), switch between them to edit, and delete unwanted rows.
  - **25% Opacity Ghost Previews:** Non-selected palettes remain visible as non-interactive, semi-transparent ghosts (both curves and stop markers) across both 2D editors and the 3D cylinder view so you can compare and harmonize ramps across your entire project.
- **Undo / Redo, JSON Save/Load & Export:**
  - Single-step **Undo** (`Ctrl+Z` / `Cmd+Z`) and **Redo** (`Ctrl+Y` / `Cmd+Shift+Z`).
  - **Export & Import JSON:** Save your complete multi-palette workspace configuration (all rows, stops, Bezier handles, lock states, stop counts, and active selection) to a `.json` file and reload it anytime.
  - **Export Infinite Painter (`.clrs`):** Export all palette rows together into a single `.clrs` file ready for Infinite Painter.
- **Responsive Layout:**
  - Adapts seamlessly between a multi-pane desktop workspace and a single-column scrollable layout on narrow screens.

## Getting Started

This project is a zero-build, single-file web application.

1. **Run Locally:** Download or clone the repository and open `oklch_palette_plugin.html` (or `index.html`) in any modern web browser.
2. **Host Online:** Upload the files to GitHub and enable **GitHub Pages** to use it from anywhere.

## Controls & Shortcuts

| Action | Control / Shortcut |
| :--- | :--- |
| **Adjust Curve Shape** | Drag any stop node or Bezier control handle in either 2D editor |
| **Fine-Tune Stop Values** | Use the $L$, $C$, $H$ sliders, synchronized numerical boxes, or Hex inputs |
| **Pan All Unlocked Stops** | Click and drag the background of either 2D editor |
| **Axis / Coordinate Snap** | Hold `Shift` while dragging the 2D editor background |
| **Orbit / Zoom 3D View** | Left-click drag to rotate, scroll to zoom, right-click drag to pan |
| **Undo / Redo** | Toolbar buttons or `Ctrl+Z` / `Ctrl+Y` (`Cmd+Z` / `Cmd+Shift+Z` on Mac) |

## Built With

- **HTML5 Canvas & Inline SVG** — 2D color space gradients, interactive Bezier editors, and ghost curve overlays
- **Vanilla JavaScript (ES6+)** — OKlch/OKlab color math, arc-length sampling, JSON serialization, and `.clrs` export
- **Three.js** — Interactive 3D cylindrical space visualization
- **Tailwind CSS** — Responsive UI styling

## License

This project is open source and available under the [MIT License](LICENSE).