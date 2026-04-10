import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    tag: "Innovation Hub",
    title: "Transforming Ideas into\nThriving Startups",
    subtitle:
      "DIIC provides world-class infrastructure, mentorship, and funding support to help early-stage startups scale and succeed in a competitive market.",
    cta: "Explore Incubation",
    ctaSecondary: "Learn More",
    gradient: "linear-gradient(135deg, oklch(0.21 0.09 258) 0%, oklch(0.38 0.13 258) 50%, oklch(0.52 0.15 254) 100%)",
    accent: "var(--diic-orange)",
    pattern: "circles",
  },
  {
    id: 2,
    tag: "Startup Support",
    title: "Your Journey from\nIdea to Market",
    subtitle:
      "Access comprehensive startup support including seed funding, co-working spaces, expert mentorship, and a vibrant community of innovators and entrepreneurs.",
    cta: "Apply for Incubation",
    ctaSecondary: "Our Startups",
    gradient: "linear-gradient(135deg, oklch(0.52 0.15 254) 0%, oklch(0.38 0.13 258) 60%, oklch(0.21 0.09 258) 100%)",
    accent: "#22c55e",
    pattern: "dots",
  },
  {
    id: 3,
    tag: "Innovation Programs",
    title: "Building Tomorrow's\nInnovation Leaders",
    subtitle:
      "Our capacity building programs, workshops, and bootcamps are designed to equip entrepreneurs with the skills and knowledge needed for success.",
    cta: "View Programs",
    ctaSecondary: "Register Now",
    gradient: "linear-gradient(135deg, oklch(0.55 0.12 195) 0%, oklch(0.38 0.13 258) 50%, oklch(0.21 0.09 258) 100%)",
    accent: "var(--diic-orange)",
    pattern: "grid",
  },
  {
    id: 4,
    tag: "Events & Workshops",
    title: "Connect, Collaborate &\nCreate Impact",
    subtitle:
      "Join our network of 200+ entrepreneurs, investors, and industry experts. Attend cutting-edge events, workshops, and networking sessions throughout the year.",
    cta: "Upcoming Events",
    ctaSecondary: "Join Community",
    gradient: "linear-gradient(135deg, oklch(0.21 0.09 258) 0%, oklch(0.55 0.12 195) 60%, oklch(0.38 0.13 258) 100%)",
    accent: "#f59e0b",
    pattern: "waves",
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
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{ background: slide.gradient }}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="white" />
                <circle cx="0" cy="0" r="1.5" fill="white" />
                <circle cx="60" cy="0" r="1.5" fill="white" />
                <circle cx="0" cy="60" r="1.5" fill="white" />
                <circle cx="60" cy="60" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        {/* Large decorative circles */}
        <div
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: slide.accent }}
        />
        <div
          className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: slide.accent }}
        />
        <div
          className="absolute right-1/4 bottom-10 w-48 h-48 rounded-full opacity-5"
          style={{ backgroundColor: "white" }}
        />
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

          <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">{slide.subtitle}</p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="font-semibold text-sm px-6 text-white border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              style={{ backgroundColor: slide.accent }}
            >
              {slide.cta}
              <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold text-sm px-6 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              {slide.ctaSecondary}
            </Button>
          </div>

          {/* Stats mini row */}
          <div className="flex gap-6 mt-8 pt-6 border-t border-white/20">
            {[
              { value: "50+", label: "Startups" },
              { value: "100+", label: "Mentors" },
              { value: "₹10Cr+", label: "Funding" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side illustration */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
          <img
            src="/WhatsApp_Image_2026-04-08_at_23.43.21.jpeg"
            alt=""
            className="h-72 w-72 object-contain"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2.5 backdrop-blur-sm transition-all border border-white/20 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2.5 backdrop-blur-sm transition-all border border-white/20 hover:scale-110"
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
            className={`rounded-full transition-all duration-300 ${
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
