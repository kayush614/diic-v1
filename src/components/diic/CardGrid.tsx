import { Lightbulb, ChartBar as BarChart3, Users, BookOpen, HeartHandshake, Calendar, Megaphone, Images, Briefcase, Handshake, Network, Library } from "lucide-react"
import { ArrowRight } from "lucide-react"

// Accent colors used sparingly to differentiate categories
const accentColors: Record<string, string> = {
  Incubation: "var(--diic-blue)",
  Portfolio: "var(--diic-blue)",
  Mentors: "var(--diic-blue)",
  "Capacity Building": "var(--diic-blue)",
  "Social Entrepreneurship": "var(--diic-green)",
  Events: "var(--diic-orange)",
  Announcements: "var(--diic-blue)",
  Gallery: "var(--diic-blue)",
  Careers: "var(--diic-orange)",
  Partners: "var(--diic-blue)",
  "Join Network": "var(--diic-orange)",
  Resources: "var(--diic-blue)",
}

const cards = [
  {
    title: "Incubation",
    description: "Apply for our flagship incubation program with mentorship, funding & workspace.",
    icon: Lightbulb,
    href: "#incubation",
  },
  {
    title: "Portfolio",
    description: "Explore our portfolio of innovative startups across diverse sectors.",
    icon: BarChart3,
    href: "#portfolio",
  },
  {
    title: "Mentors",
    description: "Connect with 200+ expert mentors from industry, academia & government.",
    icon: Users,
    href: "#mentors",
  },
  {
    title: "Capacity Building",
    description: "Workshops, bootcamps & training programs to sharpen your skills.",
    icon: BookOpen,
    href: "#capacity",
  },
  {
    title: "Social Entrepreneurship",
    description: "Supporting startups creating positive social & environmental impact.",
    icon: HeartHandshake,
    href: "#social",
  },
  {
    title: "Events",
    description: "Hackathons, demo days, pitch competitions & networking events.",
    icon: Calendar,
    href: "#events",
  },
  {
    title: "Announcements",
    description: "Stay updated with the latest news, grants & opportunities from DIIC.",
    icon: Megaphone,
    href: "#announcements",
  },
  {
    title: "Gallery",
    description: "Explore photos and videos from our events, startups and facilities.",
    icon: Images,
    href: "#gallery",
  },
  {
    title: "Careers",
    description: "Find exciting career opportunities at DIIC incubated startups.",
    icon: Briefcase,
    href: "#careers",
  },
  {
    title: "Partners",
    description: "Our network of government, industry and academic partners driving innovation.",
    icon: Handshake,
    href: "#partners",
  },
  {
    title: "Join Network",
    description: "Join our growing innovation network as a mentor, investor or collaborator.",
    icon: Network,
    href: "#network",
  },
  {
    title: "Resources",
    description: "Access toolkits, templates, legal guides & funding databases.",
    icon: Library,
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
            const accent = accentColors[card.title] || "var(--diic-blue)"
            return (
              <a
                key={card.title}
                href={card.href}
                className="group relative overflow-hidden cursor-pointer flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                style={{ minHeight: "160px" }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
                  style={{ backgroundColor: accent }}
                />

                {/* Content */}
                <div className="relative flex flex-col h-full p-5 pl-6">
                  <div
                    className="flex items-center justify-center w-10 h-10 mb-3 transition-colors"
                    style={{ backgroundColor: `color-mix(in srgb, ${accent}, white 88%)` }}
                  >
                    <Icon size={20} style={{ color: accent }} />
                  </div>

                  <h3
                    className="font-bold text-sm mb-1.5 leading-snug text-gray-800 group-hover:transition-colors"
                    style={{ color: "var(--diic-dark)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{card.description}</p>

                  <div
                    className="flex items-center gap-1 mt-3 text-xs font-semibold transition-colors"
                    style={{ color: accent }}
                  >
                    <span>Explore</span>
                    <ArrowRight
                      size={12}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: accent }}
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
