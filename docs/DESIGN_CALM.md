# Design System Strategy: The Living Curator

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Living Curator."** We are moving away from the stark, digital void of pure black into a world of organic depth and tonal complexity. This is not a static interface; it is a breathing, fluid ecosystem.

To achieve a "premium" feel, we must abandon the rigid, boxed-in layouts of traditional portfolios. Instead, we embrace **Intentional Asymmetry** and **Tonal Depth**. Imagine an editorial spread in a high-end botanical journal—elements should feel "placed" rather than "slotted." We use the contrast between the brutalist weight of 'EPILOGUE' and the airy, dark forest backgrounds to create an experience that feels both authoritative and serene.

## 2. Colors & The Organic Surface

The palette is a sophisticated shift into deep, analogous greens and teals (`#0b1513`), accented by the vibrant vitality of a spring meadow (`#66dd8b`, `#77dc7a`).

### The "No-Line" Rule

**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections or cards. In this system, boundaries are felt, not seen.

- Use background color shifts (e.g., a `surface-container-low` section sitting on a `surface` background) to denote change.

- Separation is achieved through the **Spacing Scale** (using `12` (4rem) or `16` (5.5rem) blocks) to allow the content to breathe.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth:

- **Base Level:** `surface` (#0b1513) for the primary application background.

- **In-Set Content:** `surface-container-low` (#141e1b) for secondary sidebars or recessed areas.

- **Raised Content:** `surface-container-high` (#222c29) for primary cards or interactive modules.

### The "Glass & Gradient" Rule

To elevate a component beyond "standard," use semi-transparent surface colors with a `backdrop-blur` of 20px–40px.

- **Signature Texture:** For Hero sections or primary CTAs, apply a subtle linear gradient from `primary` (#66dd8b) to `primary-container` (#005529) at a 135-degree angle. This mimics the way light hits a leaf—vibrant at the edge, deep in the shadow.

## 3. Typography: Editorial Authority

Our typography is the "Curator" of the experience. The scale is intentionally dramatic to create a sense of hierarchy.

- **Display (EPILOGUE):** Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em). These are your "statements." They should often be placed with asymmetrical margins to break the grid.

- **Headlines (EPILOGUE):** `headline-lg` (2rem) serves as the anchor for content blocks. Ensure they are set in `on-surface` (#dae5e0) to maintain high legibility against the dark greens.

- **Body (MANROPE):** `body-lg` (1rem) provides a clean, functional contrast to the expressive headers. Use `on-surface-variant` (#c1c8c7) for long-form text to reduce eye strain and enhance the "calm" vibe.

- **Labels (MANROPE):** `label-md` (0.75rem) should always be uppercase with increased letter-spacing (+0.05em) when used for categories or metadata, acting as a "tag" in a curated collection.

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too "digital." We use light and opacity to define space.

- **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` (#07100d) card placed on a `surface-container-low` (#141e1b) section creates a soft, natural "recess" effect.

- **Ambient Shadows:** If an element must float (e.g., a dropdown or modal), use an ultra-diffused shadow: `box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3)`. The shadow should feel like a soft glow rather than a hard edge.

- **The "Ghost Border" Fallback:** If accessibility requires a stroke, use the `outline-variant` (#414848) at 20% opacity. It should be barely perceptible.

- **Glassmorphism:** Floating action buttons or navigation bars should use a `surface-bright` (#313b38) color at 60% opacity with a heavy backdrop blur to integrate the background’s forest tones into the component itself.

## 5. Components: Fluidity in Form

### Buttons

- **Primary:** Roundedness `full`. Background: `primary` (#66dd8b). Text: `on-primary` (#003919). Use a subtle inner-glow (1px top-down) to give it a 3D organic feel.

- **Secondary:** Roundedness `full`. Background: `surface-container-highest`. Text: `primary`. No border.

### Cards & Lists

- **The Divider Ban:** Never use a horizontal line to separate list items. Use a 1.4rem (`4`) vertical gap or a subtle hover state shift to `surface-container-high`.

- **Cards:** Use Roundedness `xl` (1.5rem). The radius should feel generous and soft, like water-smoothed stones.

### Inputs

- **Text Fields:** Abandon the "box." Use a `surface-container-highest` background with a `full` or `lg` roundedness. The focus state should transition the background color slightly toward `surface-bright`, rather than just changing the border color.

### Signature Component: The "Curator Glass"

A specialized container for featured content. It uses a `surface-tint` (#66dd8b) at 5% opacity, a 40px backdrop blur, and a `lg` roundedness. Use this for spotlighting premium data or imagery.

## 6. Do’s and Don’ts

### Do

- **DO** use whitespace as a structural element. If in doubt, add more padding.

- **DO** use "Spring" accents (`mint`, `seafoam`) sparingly. They are the "flowers" in the forest; too many, and the "Calm" mode becomes chaotic.

- **DO** overlap elements. A headline can slightly overlap an image or a secondary container to create an editorial, non-linear feel.

### Don’t

- **DON'T** use pure white (#FFFFFF) for text. Use `on-surface` (#dae5e0) to keep the contrast "soft" and premium.

- **DON'T** use hard corners (0px radius). Everything in this system must feel organic and touched by nature.

- **DON'T** use standard "drop shadows." Use the Tonal Layering method described in Section 4.
