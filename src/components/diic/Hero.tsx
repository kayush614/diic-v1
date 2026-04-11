import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    tag: "Innovation Hub",
    title: "Transforming Ideas into\nThriving Startups",
    subtitle:
      "DIIC is building a world-class ecosystem to nurture early-stage startups — providing infrastructure, mentorship, and the network to help your idea take flight.",
    cta: "Explore Incubation",
    ctaSecondary: "Learn More",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80",
    overlay: "rgba(27, 74, 146, 0.78)",
    accent: "var(--diic-orange)",
  },
  {
    id: 2,
    tag: "Startup Support",
    title: "Your Journey from\nIdea to Market",
    subtitle:
      "From ideation to market — DIIC walks alongside you every step of the way with co-working spaces, expert guidance, and a strong community of like-minded changemakers.",
    cta: "Apply for Incubation",
    ctaSecondary: "Our Startups",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=80",
    overlay: "rgba(12, 52, 110, 0.80)",
    accent: "#22c55e",
  },
  {
    id: 3,
    tag: "Innovation Programs",
    title: "Building Tomorrow's\nInnovation Leaders",
    subtitle:
      "Our workshops, bootcamps, and capacity-building programs are crafted to sharpen entrepreneurial skills and prepare founders for real-world challenges.",
    cta: "View Programs",
    ctaSecondary: "Register Now",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80",
    overlay: "rgba(20, 80, 140, 0.78)",
    accent: "var(--diic-orange)",
  },
  {
    id: 4,
    tag: "Events & Workshops",
    title: "Connect, Collaborate &\nCreate Impact",
    subtitle:
      "Join our growing community of entrepreneurs, innovators, and industry experts. Engage in events, workshops, and collaborative sessions that inspire real impact.",
    cta: "Upcoming Events",
    ctaSecondary: "Join Community",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80",
    overlay: "rgba(10, 45, 100, 0.80)",
    accent: "#f59e0b",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrent(index)
      setTimeout(() => setAnimating(false), 600)
    },
    [animating]
  )

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(480px, 72vh, 700px)" }}>
      {/* Background Photo */}
      <div className="absolute inset-0">
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.tag}
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: animating ? 0 : 1 }}
        />
        {/* Brand-blue overlay for text readability and theme consistency */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{ backgroundColor: slide.overlay }}
        />
        {/* Subtle gradient fade on left side for content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div
          className={`max-w-2xl transition-all duration-500 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <Badge
            className="mb-4 text-xs font-semibold px-3 py-1 border-0"
            style={{ backgroundColor: `${slide.accent}22`, color: slide.accent }}
          >
            {slide.tag}
          </Badge>

          <h1 className="text-white font-extrabold leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            {slide.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          <p className="text-blue-100/85 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">{slide.subtitle}</p>

          {/* Accent divider — keeps the layout grounded without buttons */}
          <div className="flex items-center gap-4">
            <div
              className="h-1 w-16 transition-all duration-700"
              style={{ backgroundColor: slide.accent }}
            />
            <div className="h-px w-24 bg-white/25" />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-2.5 backdrop-blur-sm transition-all border border-white/20 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-2.5 backdrop-blur-sm transition-all border border-white/20 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 ${
              i === current ? "w-8 h-2.5" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            style={i === current ? { backgroundColor: slide.accent, width: "2rem" } : {}}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-16 text-white/60 text-xs font-mono">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  )
}
