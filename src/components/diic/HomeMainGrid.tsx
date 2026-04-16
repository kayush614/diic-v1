import { ChevronRight, Camera, Trophy, Users, CheckSquare, FileText } from "lucide-react"
import StatsBar from "@/components/diic/StatsBar"

export default function HomeMainGrid() {
  const newsItems = [
    { id: 1, title: "Test Statement 1", date: "Oct 12, 2023" },
    { id: 2, title: "Test Statement 2", date: "Oct 10, 2023" },
    { id: 3, title: "Test Statement 3", date: "Oct 08, 2023" },
    { id: 4, title: "Test Statement 4", date: "Oct 05, 2023" },
    { id: 5, title: "Test Statement 5", date: "Oct 01, 2023" },
  ]

  // Unified blue-family palette — no more multi-color chaos
  const bottomBlocks = [
    { label: "Gallery", icon: Camera, href: "#gallery", accent: "var(--diic-blue)" },
    { label: "Careers", icon: Trophy, href: "#careers", accent: "var(--diic-blue)" },
    { label: "Partners", icon: Users, href: "#partners", accent: "var(--diic-blue)" },
    { label: "Join Our Network", icon: CheckSquare, href: "#join", accent: "var(--diic-orange)" },
    { label: "Resources", icon: FileText, href: "#resources", accent: "var(--diic-blue)" },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 flex flex-col gap-5">
        
        {/* Top & Middle Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Column 1: Incubation (Tall) */}
          <div className="group relative overflow-hidden h-full min-h-[504px] flex flex-col bg-white shadow-sm border border-gray-100">
            <a href="#incubation" className="flex-1 relative block overflow-hidden">
              <img
                src="/img-incubation.jpg"
                alt="Incubation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient scrim for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div
                className="absolute bottom-0 left-0 right-0 p-5 z-20"
                style={{ backgroundColor: "var(--diic-blue)" }}
              >
                <h3 className="text-xl font-extrabold uppercase tracking-wider text-white">Incubation</h3>
              </div>
            </a>
          </div>

          {/* Column 2: Events (Top) & Capacity Building (Bottom) */}
          <div className="flex flex-col gap-5">
            {/* Events Block */}
            <div className="group relative overflow-hidden h-[242px] flex flex-col bg-white shadow-sm border border-gray-100">
              <a href="#events" className="flex-1 relative block overflow-hidden">
                <img
                  src="/img-events.jpg"
                  alt="Events"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                <div
                  className="absolute top-0 left-0 right-0 p-4 z-20"
                  style={{ backgroundColor: "var(--diic-blue)" }}
                >
                  <h3 className="text-[17px] font-extrabold uppercase tracking-wider text-white">Events</h3>
                </div>
              </a>
            </div>
            
            {/* Capacity Building Block */}
            <div className="group relative overflow-hidden h-[242px] flex flex-col bg-white shadow-sm border border-gray-100">
              <a href="#capacity-building" className="flex-1 relative block overflow-hidden">
                <img
                  src="/img-capacity-building.jpg"
                  alt="Capacity Building"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 z-20"
                  style={{ backgroundColor: "var(--diic-blue)" }}
                >
                  <h3 className="text-[17px] font-extrabold uppercase tracking-wider text-white">Capacity Building</h3>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: News (Top) & Social Entrepreneurship (Bottom) */}
          <div className="flex flex-col gap-5">
            {/* News & Announcements — clean white card with blue header strip */}
            <div className="flex flex-col h-[340px] bg-white shadow-sm border border-gray-100">
              <div
                className="p-4 flex justify-between items-center"
                style={{ backgroundColor: "var(--diic-blue)" }}
              >
                <h3 className="text-base font-extrabold uppercase tracking-wider text-white">News & Announcement</h3>
                <a
                  href="/news"
                  className="text-xs font-bold flex items-center gap-1 text-white/80 hover:text-white transition-colors"
                >
                  View all <ChevronRight size={14} />
                </a>
              </div>
              <div className="p-4 flex-1 overflow-y-auto">
                <ul className="space-y-4">
                  {newsItems.map((item) => (
                    <li key={item.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <a href="#" className="flex flex-col gap-1 group">
                        <span
                          className="text-sm font-semibold leading-tight line-clamp-2 text-gray-800 group-hover:text-[var(--diic-blue)] transition-colors"
                        >
                          {item.title}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">{item.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Entrepreneurship Block */}
            <div className="group relative overflow-hidden h-[144px] flex flex-col bg-white shadow-sm border border-gray-100">
              <a href="#social-entrepreneurship" className="flex-1 relative block overflow-hidden">
                <img
                  src="/img-social-entrepreneurship.jpg"
                  alt="Social Entrepreneurship"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 z-20"
                  style={{ backgroundColor: "var(--diic-blue)" }}
                >
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Social Entrepreneurship</h3>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Quick Links Grid (5 Blocks) — white cards, colored icon accent */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {bottomBlocks.map((block) => {
            const Icon = block.icon
            return (
              <a
                key={block.label}
                href={block.href}
                className="group flex flex-col items-center justify-center gap-3 p-8 h-[150px] bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="transform transition-transform group-hover:scale-110"
                  style={{ color: block.accent }}
                >
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xs font-extrabold uppercase tracking-wider text-center leading-tight text-gray-700 group-hover:text-[var(--diic-blue)] transition-colors"
                >
                  {block.label}
                </h3>
              </a>
            )
          })}
        </div>

      </div>
      
      {/* Bottom CTA Section */}
      <div className="mt-10">
        <StatsBar />
      </div>
    </section>
  )
}
