import { useState, useEffect } from "react"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterXIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

const topLinks = [
  { label: "Home", href: "#" },
  { label: "Contact Us", href: "#contact" },
  { label: "Apply for Incubation", href: "#apply", highlight: true },
]

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Incubation", href: "#incubation" },
  { label: "Startups", href: "#startups" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Announcements", href: "#announcements" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div style={{ backgroundColor: "var(--diic-dark)" }} className="text-white py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/WhatsApp_Image_2026-04-08_at_23.43.21.jpeg"
              alt="DIIC Logo"
              className="h-7 w-7 object-contain rounded-full border border-white/20"
            />
            <span className="text-xs font-semibold text-blue-100 hidden sm:block tracking-wide">
              Delhi Innovation and Incubation Centre
            </span>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-4">
              {topLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    link.highlight
                      ? "text-xs font-semibold px-3 py-1 rounded-full border border-[var(--diic-orange)] text-[var(--diic-orange)] hover:bg-[var(--diic-orange)] hover:text-white transition-colors"
                      : "text-xs text-blue-200 hover:text-white transition-colors"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="text-blue-300 hover:text-white transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-300 hover:text-white transition-colors">
                <TwitterXIcon />
              </a>
              <a href="#" aria-label="YouTube" className="text-blue-300 hover:text-white transition-colors">
                <YoutubeIcon />
              </a>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-blue-300 ml-1">
                <Phone size={11} />
                <span>+91-11-XXXX XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white transition-all duration-200 ${
          scrolled ? "shadow-lg border-b-0" : "shadow-sm border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/WhatsApp_Image_2026-04-08_at_23.43.21.jpeg"
              alt="DIIC"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <div
                className="font-extrabold text-lg leading-tight tracking-tight"
                style={{ color: "var(--diic-blue)" }}
              >
                DIIC
              </div>
              <div className="text-[10px] text-muted-foreground leading-tight font-medium">
                Delhi Innovation & Incubation Centre
              </div>
              <div
                className="text-[9px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "var(--diic-orange)" }}
              >
                Ideate · Innovate · Incubate
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-[var(--diic-blue)] px-3 py-2 rounded-md transition-colors hover:bg-[var(--diic-blue-light)] group"
              >
                {link.label}
                <span
                  className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: "var(--diic-orange)" }}
                />
              </a>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="hidden md:flex text-xs font-semibold px-4"
              style={{ backgroundColor: "var(--diic-orange)", color: "white" }}
            >
              Apply Now
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <SheetHeader className="p-4 pb-2 border-b" style={{ borderColor: "var(--diic-blue-light)" }}>
                  <SheetTitle className="flex items-center gap-2">
                    <img
                      src="/WhatsApp_Image_2026-04-08_at_23.43.21.jpeg"
                      alt="DIIC"
                      className="h-8 w-8 object-contain"
                    />
                    <span style={{ color: "var(--diic-blue)" }} className="font-bold text-base">
                      DIIC Menu
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium py-3 px-5 hover:bg-[var(--diic-blue-light)] hover:text-[var(--diic-blue)] transition-colors border-b border-border/40"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="p-4">
                    <Button
                      className="w-full font-semibold"
                      style={{ backgroundColor: "var(--diic-orange)", color: "white" }}
                    >
                      Apply for Incubation
                    </Button>
                  </div>
                  <div className="px-5 pb-4 flex gap-4">
                    {topLinks.slice(0, 2).map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-xs text-muted-foreground hover:text-[var(--diic-blue)]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
