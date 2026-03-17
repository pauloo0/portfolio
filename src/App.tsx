export default function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center p-8 font-body">
      <div className="max-w-4xl w-full bg-primary rounded-2xl shadow-2xl overflow-hidden p-8 border border-secondary/30">
        <header className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-accent mb-4 tracking-tight">
            Developer Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-text/80 font-light flex items-center justify-center gap-2">
            Using the explicit <span className="text-accent font-semibold">Design System</span>
          </p>
        </header>

        <section className="bg-secondary/40 rounded-xl p-8 backdrop-blur-sm border border-accent/20">
          <h2 className="text-3xl font-heading font-semibold text-text mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Primary', class: 'bg-primary' },
              { name: 'Secondary', class: 'bg-secondary' },
              { name: 'Accent', class: 'bg-accent' },
              { name: 'Background', class: 'bg-background' },
              { name: 'Text Color', class: 'bg-text', textClass: 'text-background' },
            ].map((color) => (
              <div key={color.name} className="flex flex-col gap-2">
                <div 
                  className={`h-24 rounded-lg shadow-md ${color.class} flex items-center justify-center border border-white/10 transition-transform hover:scale-105`}
                >
                  <span className={`text-sm font-medium ${color.textClass || 'text-white'}`}>
                    {color.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-heading font-semibold text-text mb-4">Typography Settings</h2>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg border border-white/5">
                <p className="font-heading text-lg mb-1 text-accent">Heading Font: Lora</p>
                <h3 className="font-heading text-4xl">The quick brown fox jumps over the lazy dog</h3>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-white/5">
                <p className="font-body text-lg mb-1 text-accent">Body Font: Open Sans</p>
                <p className="font-body text-xl">The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <button className="px-8 py-4 bg-accent text-background font-bold rounded-lg hover:bg-opacity-90 transition-all font-body text-lg shadow-[0_0_20px_rgba(132,169,140,0.3)] hover:shadow-[0_0_30px_rgba(132,169,140,0.5)]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
