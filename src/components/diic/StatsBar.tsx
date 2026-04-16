import { ArrowRight } from "lucide-react"

export default function StatsBar() {
  return (
    <section 
      className="relative overflow-hidden py-16 sm:py-24 animate-in fade-in duration-700"
      style={{ 
        backgroundColor: "var(--diic-blue)",
        // Adding a very subtle noise/texture via a soft gradient
        backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 70%)"
      }}
    >
      {/* Subtle organic shape overlay for "imperfect" feel */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 opacity-10 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: "var(--diic-orange)" }}
      />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start text-left ml-0 sm:ml-4 lg:ml-8">
          {/* Main text content - intentionally broken into natural lines with varying sizes */}
          <div className="space-y-4 mb-10">
            <h2 className="text-white font-medium flex items-center gap-3 text-2xl sm:text-3xl tracking-tight">
              <span className="text-3xl">💡</span> Have an idea?
            </h2>
            
            <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-2xl leading-[1.1]">
              <span className="text-4xl mr-2">🚀</span> Want to build something <span style={{ color: "var(--diic-orange)" }}>meaningful</span>?
            </h2>
            
            <h2 className="text-blue-100/90 font-medium text-xl sm:text-2xl tracking-tight">
              <span className="text-2xl mr-2">🤝</span> Looking for collaborators?
            </h2>
            
            <div className="pt-2">
              <h3 className="text-white font-black text-4xl sm:text-6xl tracking-tighter">
                <span className="text-4xl mr-3">📩</span> Let’s talk.
              </h3>
            </div>
          </div>

          {/* Buttons - slightly offset from direct vertical center of text */}
          <div className="flex flex-wrap items-center gap-4 sm:ml-2">
            <a
              href="#apply"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: "var(--diic-orange)" }}
            >
              Apply Now <ArrowRight size={16} />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all border-2 border-white/20 hover:bg-white/10 hover:border-white/40 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
