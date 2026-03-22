import { useTheme } from "@/hooks/useTheme"

export default function App() {
  const { theme, setTheme } = useTheme()

  const heroImage =
    theme === "energy"
      ? "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" // Tech/Neon Vibe
      : "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" // Forest/Nature Vibe

  return (
    // 'bg-surface' and 'text-on-surface' will automatically change based on the active CSS variables
    <div className="min-h-screen bg-surface text-on-surface transition-colors duration-500 overflow-hidden">
      {/* Navigation */}
      <nav className="p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto w-full">
        <h1 className="font-heading text-2xl font-bold tracking-tighter">
          PORTFOLIO<span className="text-primary">.</span>
        </h1>
        <button
          onClick={() => setTheme(theme === "calm" ? "energy" : "calm")}
          className="px-6 py-2 rounded-button bg-surface-container-high hover:bg-surface-bright text-primary border border-outline-variant transition-all font-label uppercase text-sm tracking-widest cursor-pointer"
        >
          {theme === "calm" ? "Activate Energy" : "Return to Calm"}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-16 md:gap-8 items-center h-full">
        {/* Text Content Block */}
        <div className="flex flex-col gap-8 z-10">
          {/* 'font-display' maps to Epilogue or Space Grotesk depending on the theme */}
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            {theme === "calm" ? "The Living Curator." : "Digital Adrenaline."}
          </h2>

          {/* 'font-body' maps to Manrope or Epilogue depending on the theme */}
          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-md">
            {theme === "calm"
              ? "A fluid, organic space. Embrace intentional asymmetry, tonal depth, and pure serenity."
              : "Raw speed and high-performance visualization. Command attention in the digital void."}
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-button bg-primary text-on-primary font-bold font-label uppercase border border-transparent transition-all hover:opacity-90">
              Explore Work
            </button>
            <button className="px-8 py-4 rounded-button bg-transparent border border-outline-variant text-primary font-bold font-label uppercase transition-all hover:bg-surface-container-highest">
              Contact Me
            </button>
          </div>
        </div>

        {/* Hero Image Block - Notice how we change border-radius and transforms via CSS variables + classes */}
        <div
          className={`
          relative w-full h-100 md:h-150 overflow-hidden rounded-card 
          transition-all duration-500 ease-in-out z-10
          ${theme === "energy" ? "-skew-x-3 shadow-[0_0_40px_rgba(255,81,250,0.15)] ml-4 border-t border-l border-primary/50" : "shadow-2xl"}
        `}
        >
          {/* Colored overlay that pulls from the theme's tint variable */}
          <div className="absolute inset-0 bg-surface-tint opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>

          <img
            key={heroImage} // Keys force react to re-mount the img if you want to trigger a fade-in animation, but optional
            src={heroImage}
            alt="Hero Representation"
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
          />
        </div>
      </main>

      {/* Background Decor (Optional ambient effect depending on theme) */}
      {theme === "calm" && (
        <div className="absolute top-0 right-0 w-200 h-200 bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      )}
      {theme === "energy" && (
        <div className="absolute top-1/2 left-1/2 w-150 h-150 bg-secondary/10 blur-[150px] -z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      )}
    </div>
  )
}
