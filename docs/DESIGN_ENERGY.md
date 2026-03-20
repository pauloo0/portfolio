# Design System Strategy: High-Performance Vitality

## 1. Overview & Creative North Star

The Creative North Star for this system is **"Digital Adrenaline."** While traditional systems seek to soothe the user, this system is designed to provoke, energize, and command attention. It is the architectural manifestation of raw speed and high-performance data visualization.

We break the "template" look by treating the browser or device screen not as a flat canvas, but as a high-velocity viewport. We achieve this through **intentional asymmetry**, where elements appear to be captured mid-motion. By utilizing skew transformations (2deg to 5deg tilts) and overlapping high-contrast typography, we create a sense of depth and urgency that "safe" grid systems lack. This is a system for "Energy Mode"—it is loud, it is precise, and it is unapologetically aggressive.

---

## 2. Colors & Atmospheric Depth

The color palette relies on the extreme tension between a void-like background and radioactive accents.

- **The Deep Void (`#05100E`):** The `surface` and `background` tokens are not merely black; they are a deep, pressurized emerald. This provides the "weight" necessary to make the neon accents feel like they are emitting light.

- **The Neon Accents:** `primary` (#A4FFB9) and `secondary` (#FF51FA) act as the system’s power source. Use `primary-container` (#00FD87) for maximum "glow" effects.

- **The "No-Line" Rule:** Standard 1px borders are strictly prohibited for sectioning. They are too static. Instead, define boundaries through background shifts: place a `surface-container-high` module against the `surface` background to create a hard-edged, monolithic feel.

- **Surface Hierarchy & Nesting:** Treat the UI as a series of tectonic plates. Use `surface-container-lowest` (#000000) for "sunken" utility areas and `surface-container-highest` (#182926) for active, elevated panels.

- **The "Glass & Glitch" Rule:** For floating modals or overlays, use `surface` colors at 60% opacity with a heavy `backdrop-blur` (20px+). To lean into the "glitchy" personality, apply a 1px `primary` or `secondary` border _only_ on the top and left sides of containers to simulate a digital offset.

---

## 3. Typography: High-Impact Editorial

Typography is the primary driver of the system's aggression. We move away from "readable" defaults toward "commanding" structures.

- **Display & Headlines (`Space Grotesk`):** Used at heavy weights (700+) and often italicized. Display-lg (3.5rem) should be used with tight letter-spacing (-0.05em) to create a "wall of text" effect that feels industrial and high-speed.

- **Body & Titles (`Epilogue`):** The sans-serif `Epilogue` provides a technical, slightly brutalist feel. Use `body-lg` (1rem) for most content, ensuring high contrast (`on-surface`) to maintain legibility against the dark void.

- **The Hierarchy of Intensity:**

- **Display-lg:** The "Scream." Used for hero statements and major transitions.

- **Label-md/sm:** The "Telemetry." Used for data points, often in all-caps with increased letter spacing (0.1em) to mimic military or racing instrumentation.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "soft" for this system. We use **Tonal Layering** and **Light Leaks** to create depth.

- **The Layering Principle:** Use the spacing scale (e.g., `8` or `12`) to create massive gaps between skewed containers. Depth is achieved by stacking `surface-container-low` on `surface-container-lowest`.

- **Ambient Shadows:** If a shadow is required for a floating `secondary` element, the shadow must be `#FF51FA` (Magenta) at 10% opacity with a 40px blur—creating a "neon underglow" rather than a shadow.

- **The "Ghost Border" Fallback:** For interactive inputs, use the `outline-variant` token at 20% opacity. This creates a "barely-there" structural guide that doesn't interrupt the high-energy flow of the layout.

- **Intentional Skews:** Apply a `transform: skewX(-3deg)` to major containers and buttons. This creates a visual "forward lean" that suggests the UI is moving at high velocity.

---

## 5. Components

### Buttons: The Kinetic Triggers

- **Primary:** Background `primary-container` (#00FD87), text `on-primary-container`. Rectangular (0px radius). On hover, add a `box-shadow` of 0px 0px 20px `#00FF88`.

- **Secondary:** Transparent background with a 2px top/bottom border of `secondary`. Italicized text.

- **States:** Transitions must be instant (0.1s or less) or use a "glitch" animation (rapidly shifting X-offsets).

### Cards & Lists: Tectonic Blocks

- **Cards:** No borders. Use `surface-container-high`. Forbid divider lines; use a `1.4rem` (scale 4) vertical gap to separate content.

- **Lists:** Use `surface-variant` for hover states. Leading elements (icons or numbers) should always use the `secondary` magenta to draw the eye.

### Input Fields: Telemetry Inputs

- **Styling:** Sharp 0px corners. Background is `surface-container-lowest`. The active state should trigger a `primary` "glow" on the bottom border only.

- **Error States:** Use `error` (#FF716C) with a high-frequency flicker animation on the label to signal a "system alert."

### Specialized Component: The "Data Glitch" Loader

- A custom progress bar using `primary` that occasionally "jitters" its width or opacity, reinforcing the high-performance, raw-compute aesthetic.

---

## 6. Do's and Don'ts

### Do:

- **Use Skews and Tilts:** Align components to a slightly off-kilter axis to create energy.

- **Embrace the Void:** Allow large areas of `#05100E` to exist to make the neon elements pop.

- **Extreme Contrast:** Ensure text is either stark white (`on-surface`) or vibrant neon. Avoid mid-grey text.

- **Hard Edges:** Every corner must be `0px`. Roundness is the enemy of this system’s aggression.

### Don't:

- **No Softness:** Never use rounded corners (`border-radius: 0` is the law).

- **No Pastels:** Avoid washed-out colors. If it's not neon or deep emerald, it doesn't belong.

- **No Standard Grids:** Avoid perfectly symmetrical 12-column layouts. Offset your columns; let elements overlap by `1rem` to create a "layered" feel.

- **No Fade Transitions:** Use "Cubic-Bezier(0.8, 0, 0.2, 1)" for snappy, aggressive motion rather than soft, linear fades.
