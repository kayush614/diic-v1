import { Lightbulb, ChartBar as BarChart3, Users, BookOpen, HeartHandshake, Calendar, Megaphone, Images, Briefcase, Handshake, Network, Library } from "lucide-react"
import { ArrowRight } from "lucide-react"

const cards = [
  {
    title: "Incubation",
    description: "Apply for our flagship incubation program with mentorship, funding & workspace.",
    icon: Lightbulb,
    gradient: "linear-gradient(135deg, oklch(0.38 0.13 258), oklch(0.52 0.15 254))",
    href: "#incubation",
  },
  {
    title: "Portfolio",
    description: "Explore our portfolio of innovative startups across diverse sectors.",
    icon: BarChart3,
    gradient: "linear-gradient(135deg, oklch(0.55 0.12 195), oklch(0.62 0.12 210))",
    href: "#portfolio",
  },
  {
    title: "Mentors",
    description: "Connect with 200+ expert mentors from industry, academia & government.",
    icon: Users,
    gradient: "linear-gradient(135deg, oklch(0.62 0.17 47), oklch(0.7 0.17 55))",
    href: "#mentors",
  },
  {
    title: "Capacity Building",
    description: "Workshops, bootcamps & training programs to sharpen your skills.",
    icon: BookOpen,
    gradient: "linear-gradient(135deg, oklch(0.52 0.13 155), oklch(0.6 0.12 160))",
    href: "#capacity",
  },
  {
    title: "Social Entrepreneurship",
    description: "Supporting startups creating positive social & environmental impact.",
    icon: HeartHandshake,
    gradient: "linear-gradient(135deg, oklch(0.56 0.15 25), oklch(0.62 0.16 30))",
    href: "#social",
  },
  {
    title: "Events",
    description: "Hackathons, demo days, pitch competitions & networking events.",
    icon: Calendar,
    gradient: "linear-gradient(135deg, oklch(0.45 0.14 258), oklch(0.55 0.13 240))",
    href: "#events",
  },
  {
    title: "Announcements",
    description: "Stay updated with the latest news, grants & opportunities from DIIC.",
    icon: Megaphone,
    gradient: "linear-gradient(135deg, oklch(0.42 0.1 250), oklch(0.5 0.1 235))",
    href: "#announcements",
  },
  {
    title: "Gallery",
    description: "Explore photos and videos from our events, startups and facilities.",
    icon: Images,
    gradient: "linear-gradient(135deg, oklch(0.55 0.14 355), oklch(0.62 0.14 5))",
    href: "#gallery",
  },
  {
    title: "Careers",
    description: "Find exciting career opportunities at DIIC incubated startups.",
    icon: Briefcase,
    gradient: "linear-gradient(135deg, oklch(0.66 0.17 47), oklch(0.72 0.16 38))",
    href: "#careers",
  },
  {
    title: "Partners",
    description: "Our network of government, industry and academic partners driving innovation.",
    icon: Handshake,
    gradient: "linear-gradient(135deg, oklch(0.38 0.13 258), oklch(0.45 0.14 240))",
    href: "#partners",
  },
  {
    title: "Join Network",
    description: "Join our growing innovation network as a mentor, investor or collaborator.",
    icon: Network,
    gradient: "linear-gradient(135deg, oklch(0.52 0.13 155), oklch(0.58 0.14 170))",
    href: "#network",
  },
  {
    title: "Resources",
    description: "Access toolkits, templates, legal guides & funding databases.",
    icon: Library,
    gradient: "linear-gradient(135deg, oklch(0.55 0.12 195), oklch(0.5 0.12 215))",
    href: "#resources",
  },
]

export default function CardGrid() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-3 border"
            style={{
              backgroundColor: "var(--diic-blue-light)",
              color: "var(--diic-blue)",
              borderColor: "var(--diic-blue-light)",
            }}
          >
            What We Offer
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--diic-dark)" }}
          >
            Everything You Need to{" "}
            <span style={{ color: "var(--diic-orange)" }}>Grow</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            DIIC offers a complete ecosystem for startups — from ideation to market, we have all the resources and
            support you need.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href={card.href}
                className="group relative overflow-hidden cursor-pointer flex flex-col"
                style={{ minHeight: "180px" }}
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: card.gradient }}
                />

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id={`pat-${card.title}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pat-${card.title})`} />
                  </svg>
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: "white" }}
                />

                {/* Content */}
                <div className="relative flex flex-col h-full p-5">
                  <div
                    className="flex items-center justify-center w-10 h-10 mb-3 bg-white/15 group-hover:bg-white/25 transition-colors"
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  <h3 className="text-white font-bold text-sm mb-1.5 leading-snug">{card.title}</h3>
                  <p className="text-white/75 text-xs leading-relaxed flex-1">{card.description}</p>

                  <div className="flex items-center gap-1 mt-3 text-white/60 group-hover:text-white text-xs font-medium transition-colors">
                    <span>Explore</span>
                    <ArrowRight
                      size={12}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
