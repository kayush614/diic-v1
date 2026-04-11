import { ChevronRight, Camera, Trophy, Users, CheckSquare, FileText } from "lucide-react"

// Helper component for placeholder images
const PlaceholderImage = ({ text, color = "bg-gray-100" }: { text: string; color?: string }) => (
  <div className={`w-full h-full flex items-center justify-center ${color} text-gray-400 font-bold uppercase tracking-widest text-xs p-4 text-center`}>
    {text} <br /> (Image Placeholder)
  </div>
)

export default function HomeMainGrid() {
  const newsItems = [
    { id: 1, title: "Test Statement 1", date: "Oct 12, 2023" },
    { id: 2, title: "Test Statement 2", date: "Oct 10, 2023" },
    { id: 3, title: "Test Statement 3", date: "Oct 08, 2023" },
    { id: 4, title: "Test Statement 4", date: "Oct 05, 2023" },
    { id: 5, title: "Test Statement 5", date: "Oct 01, 2023" },
  ]

  const bottomBlocks = [
    { label: "Gallery", icon: Camera, color: "var(--diic-blue)", href: "/gallery" },
    { label: "Careers", icon: Trophy, color: "var(--diic-orange)", href: "/careers" },
    { label: "Partners", icon: Users, color: "var(--diic-green)", href: "/partners" },
    { label: "Join Our Network", icon: CheckSquare, color: "#c23934", href: "/join" }, // Red for Join
    { label: "Resources", icon: FileText, color: "#004b87", href: "/resources" }, // Navy for Resources
  ]

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 flex flex-col gap-5">
        
        {/* Top & Middle Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Column 1: Incubation (Tall) */}
          <div className="group relative overflow-hidden h-full min-h-[504px] flex flex-col">
            <a href="/incubation" className="flex-1 relative block overflow-hidden bg-gray-50">
              <PlaceholderImage text="Incubation" />
              {/* Image would go here: <img src="..." /> */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20" style={{ backgroundColor: "var(--diic-blue)" }}>
                <h3 className="text-xl font-extrabold uppercase tracking-wider text-white">Incubation</h3>
              </div>
            </a>
          </div>

          {/* Column 2: Events (Top) & Capacity Building (Bottom) */}
          <div className="flex flex-col gap-5">
            {/* Events Block */}
            <div className="group relative overflow-hidden h-[242px] flex flex-col">
              <a href="/events" className="flex-1 relative block overflow-hidden bg-gray-50">
                <div className="absolute top-0 left-0 right-0 p-4 z-20" style={{ backgroundColor: "var(--diic-orange)" }}>
                  <h3 className="text-[17px] font-extrabold uppercase tracking-wider text-white">Events</h3>
                </div>
                <PlaceholderImage text="Events Image" color="bg-gray-50" />
              </a>
            </div>
            
            {/* Capacity Building Block */}
            <div className="group relative overflow-hidden h-[242px] flex flex-col">
              <a href="/capacity-building" className="flex-1 relative block overflow-hidden bg-gray-50">
                <PlaceholderImage text="Capacity Building Image" color="bg-gray-50" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20" style={{ backgroundColor: "var(--diic-green)" }}>
                  <h3 className="text-[17px] font-extrabold uppercase tracking-wider text-white">Capacity Building</h3>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: News (Top) & Social Entrepreneurship (Bottom) */}
          <div className="flex flex-col gap-5">
            {/* News & Announcements (Text-based, no image placeholder needed) */}
            <div className="text-white flex flex-col h-[340px]" style={{ backgroundColor: "var(--diic-green)" }}>
              <div className="p-4 border-b border-white/20 flex justify-between items-center">
                <h3 className="text-lg font-extrabold uppercase tracking-wider">News & Announcement</h3>
                <a href="/news" className="text-xs font-bold flex items-center gap-1 hover:underline">
                  View all <ChevronRight size={14} />
                </a>
              </div>
              <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
                <ul className="space-y-4">
                  {newsItems.map((item) => (
                    <li key={item.id} className="group border-b border-white/20 pb-3 last:border-0 last:pb-0">
                      <a href="#" className="flex flex-col gap-1 transition-opacity hover:opacity-80">
                        <span className="text-sm font-bold leading-tight line-clamp-2">{item.title}</span>
                        <span className="text-[10px] opacity-70 font-bold">{item.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Entrepreneurship Block */}
            <div className="group relative overflow-hidden h-[144px] flex flex-col">
              <a href="/social-entrepreneurship" className="flex-1 relative block overflow-hidden bg-gray-50">
                <PlaceholderImage text="Social Entr. Image" color="bg-gray-50" />
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20" style={{ backgroundColor: "#004b87" }}>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Social Entrepreneurship</h3>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Quick Links Grid (5 Blocks) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {bottomBlocks.map((block) => {
            const Icon = block.icon
            return (
              <a 
                key={block.label} 
                href={block.href}
                className="group flex flex-col items-center justify-center gap-3 p-8 transition-transform hover:-translate-y-1 h-[180px]"
                style={{ backgroundColor: block.color }}
              >
                <div className="text-white transform transition-transform group-hover:scale-110">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-sm font-extrabold uppercase tracking-wider text-center leading-tight">
                  {block.label}
                </h3>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
