import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterXIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="oklch(0.21 0.09 258)" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const quickLinks = [
  { label: "About DIIC", href: "#about" },
  { label: "Incubation Program", href: "#incubation" },
  { label: "Our Startups", href: "#startups" },
  { label: "Mentors", href: "#mentors" },
  { label: "Events", href: "#events" },
  { label: "Announcements", href: "#announcements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Careers", href: "#careers" },
]

const programs = [
  { label: "Seed Stage Incubation", href: "#" },
  { label: "Scale-up Program", href: "#" },
  { label: "Women Entrepreneurship", href: "#" },
  { label: "Social Innovation", href: "#" },
  { label: "Deep Tech Program", href: "#" },
  { label: "Capacity Building", href: "#" },
  { label: "Mentor Network", href: "#" },
  { label: "Investor Connect", href: "#" },
]

const socialLinks = [
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: TwitterXIcon, label: "Twitter", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--diic-dark)" }} className="text-white">
      {/* CTA Strip */}
      <div
        className="py-8 border-b"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.38 0.13 258) 0%, var(--diic-dark) 100%)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Ready to Build Your Startup?</h3>
            <p className="text-sm text-blue-200 mt-0.5">
              Apply for DIIC Cohort 8 — Applications open until May 31, 2025
            </p>
          </div>
          <a
            href="#apply"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "var(--diic-orange)", color: "white" }}
          >
            Apply for Incubation <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/WhatsApp_Image_2026-04-08_at_23.43.21.jpeg"
                alt="DIIC Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-extrabold text-base text-white">DIIC</div>
                <div className="text-[10px] text-blue-300 leading-tight">
                  Delhi Innovation &<br />Incubation Centre
                </div>
              </div>
            </div>
            <p className="text-blue-200/80 text-xs leading-relaxed mb-4">
              DIIC is Delhi's premier startup incubator, supporting early-stage entrepreneurs with resources,
              mentorship, funding connections and world-class co-working infrastructure.
            </p>
            <div
              className="text-[10px] font-bold tracking-widest uppercase mb-4"
              style={{ color: "var(--diic-orange)" }}
            >
              Ideate · Innovate · Incubate
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-[var(--diic-orange)] transition-colors text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-sm mb-4 pb-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--diic-orange)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-blue-200/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all group"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 bg-[var(--diic-orange)] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="font-bold text-sm mb-4 pb-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--diic-orange)" }}
            >
              Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-blue-200/80 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all group"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 bg-[var(--diic-orange)] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-sm mb-4 pb-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--diic-orange)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={14} style={{ color: "var(--diic-orange)" }} className="flex-shrink-0 mt-0.5" />
                <span className="text-xs text-blue-200/80 leading-relaxed">
                  Delhi Innovation and Incubation Centre,
                  <br />
                  New Delhi – 110001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} style={{ color: "var(--diic-orange)" }} className="flex-shrink-0" />
                <a href="tel:+911100000000" className="text-xs text-blue-200/80 hover:text-white transition-colors">
                  +91-11-0000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} style={{ color: "var(--diic-orange)" }} className="flex-shrink-0" />
                <a
                  href="mailto:info@diic.delhi.gov.in"
                  className="text-xs text-blue-200/80 hover:text-white transition-colors"
                >
                  info@diic.delhi.gov.in
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <h5 className="text-xs font-semibold text-white/60 mb-2">Office Hours</h5>
              <p className="text-xs text-blue-200/70">
                Monday – Friday: 9:00 AM – 6:00 PM
                <br />
                Saturday: 10:00 AM – 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-4"
        style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-blue-300/70">
            © 2025 Delhi Innovation and Incubation Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Use", "Sitemap", "RTI"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-blue-300/60 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
