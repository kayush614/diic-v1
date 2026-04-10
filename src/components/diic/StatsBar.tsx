import { Rocket, Users, TrendingUp, Award, Building2, Globe } from "lucide-react"

const stats = [
  { icon: Rocket, value: "50+", label: "Incubated Startups" },
  { icon: Users, value: "200+", label: "Expert Mentors" },
  { icon: TrendingUp, value: "₹15Cr+", label: "Funding Raised" },
  { icon: Award, value: "30+", label: "Awards Won" },
  { icon: Building2, value: "10,000 sq.ft", label: "Co-working Space" },
  { icon: Globe, value: "15+", label: "Industry Partners" },
]

export default function StatsBar() {
  return (
    <section
      className="py-5 border-b"
      style={{ backgroundColor: "var(--diic-blue)", borderColor: "rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center py-2 group cursor-default"
              >
                <div
                  className="flex items-center gap-2 mb-1"
                >
                  <Icon
                    size={16}
                    className="transition-transform group-hover:scale-110"
                    style={{ color: "var(--diic-orange)" }}
                  />
                  <span className="text-xl font-extrabold text-white leading-none">{stat.value}</span>
                </div>
                <span className="text-[11px] text-blue-200 font-medium">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
