import { ExternalLink } from "lucide-react"

const partners = [
  {
    name: "Government of Delhi",
    short: "GoD",
    type: "Government",
    color: "var(--diic-blue)",
    bg: "var(--diic-blue-light)",
  },
  {
    name: "Startup India",
    short: "SI",
    type: "Initiative",
    color: "var(--diic-orange)",
    bg: "var(--diic-orange-light)",
  },
  {
    name: "Dept. of Science & Technology",
    short: "DST",
    type: "Government",
    color: "var(--diic-blue)",
    bg: "var(--diic-blue-light)",
  },
  {
    name: "NITI Aayog",
    short: "NA",
    type: "Policy Body",
    color: "var(--diic-teal)",
    bg: "oklch(0.95 0.04 195)",
  },
  {
    name: "Ministry of MSME",
    short: "MSME",
    type: "Ministry",
    color: "var(--diic-blue)",
    bg: "var(--diic-blue-light)",
  },
  {
    name: "NASSCOM",
    short: "NAC",
    type: "Industry Body",
    color: "var(--diic-teal)",
    bg: "oklch(0.95 0.04 195)",
  },
  {
    name: "Invest India",
    short: "II",
    type: "Agency",
    color: "var(--diic-green)",
    bg: "oklch(0.94 0.05 155)",
  },
  {
    name: "IIT Delhi",
    short: "IIT",
    type: "Academic",
    color: "var(--diic-orange)",
    bg: "var(--diic-orange-light)",
  },
]

export default function SupportedBy() {
  return (
    <section className="py-14 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{ backgroundColor: "var(--diic-blue-light)", color: "var(--diic-blue)" }}
          >
            Our Ecosystem
          </div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            style={{ color: "var(--diic-dark)" }}
          >
            Supported &{" "}
            <span style={{ color: "var(--diic-orange)" }}>Recognized By</span>
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            Backed by leading government bodies, industry organizations and academic institutions driving
            India's innovation ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-background hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-sm transition-transform group-hover:scale-105"
                style={{ backgroundColor: partner.bg, color: partner.color }}
              >
                {partner.short}
              </div>
              <div className="text-center">
                <div className="text-[11px] font-semibold leading-tight text-foreground/80 line-clamp-2">
                  {partner.name}
                </div>
                <div
                  className="text-[9px] font-medium mt-0.5"
                  style={{ color: partner.color }}
                >
                  {partner.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#partners"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            style={{ color: "var(--diic-blue)" }}
          >
            View All Partners & Collaborators
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
