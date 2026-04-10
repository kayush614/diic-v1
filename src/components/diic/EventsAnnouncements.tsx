import { Calendar, ArrowRight, Bell, ExternalLink, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const events = [
  {
    id: 1,
    title: "Startup Pitch Day 2025",
    date: "April 25, 2025",
    time: "10:00 AM – 5:00 PM",
    location: "DIIC Innovation Hub, New Delhi",
    type: "Pitch Competition",
    color: "var(--diic-orange)",
  },
  {
    id: 2,
    title: "Women Entrepreneurship Workshop",
    date: "May 3, 2025",
    time: "2:00 PM – 6:00 PM",
    location: "Online + Offline",
    type: "Workshop",
    color: "var(--diic-teal)",
  },
  {
    id: 3,
    title: "Smart Delhi Hackathon 2025",
    date: "May 15-17, 2025",
    time: "48-Hour Hackathon",
    location: "DIIC Campus, New Delhi",
    type: "Hackathon",
    color: "var(--diic-green)",
  },
]

const announcements = [
  {
    id: 1,
    title: "Applications Open: DIIC Cohort 8 – Apply by May 31, 2025",
    date: "Apr 10, 2025",
    type: "Applications",
    isNew: true,
  },
  {
    id: 2,
    title: "DIIC Signs MoU with NITI Aayog for Innovation Partnership",
    date: "Apr 5, 2025",
    type: "Partnership",
    isNew: true,
  },
  {
    id: 3,
    title: "Seed Fund Scheme: ₹50 Lakh Available for Early-Stage Startups",
    date: "Mar 28, 2025",
    type: "Funding",
    isNew: false,
  },
  {
    id: 4,
    title: "DIIC Startup 'EcoSol' Raises ₹2 Crore in Pre-Series A Round",
    date: "Mar 22, 2025",
    type: "News",
    isNew: false,
  },
  {
    id: 5,
    title: "Call for Mentors: Join DIIC's Expert Mentor Network for 2025",
    date: "Mar 18, 2025",
    type: "Mentorship",
    isNew: false,
  },
  {
    id: 6,
    title: "DIIC Recognized as 'Best Incubator in North India' by Startup India",
    date: "Mar 10, 2025",
    type: "Award",
    isNew: false,
  },
  {
    id: 7,
    title: "New Co-working Space Expansion: 50 Additional Seats Available",
    date: "Mar 2, 2025",
    type: "Infrastructure",
    isNew: false,
  },
]

const typeBadgeStyle: Record<string, { bg: string; text: string }> = {
  Applications: { bg: "oklch(0.95 0.07 47)", text: "oklch(0.5 0.17 47)" },
  Partnership: { bg: "oklch(0.94 0.04 225)", text: "oklch(0.38 0.13 258)" },
  Funding: { bg: "oklch(0.94 0.06 155)", text: "oklch(0.42 0.13 155)" },
  News: { bg: "oklch(0.96 0.02 240)", text: "oklch(0.42 0.07 250)" },
  Mentorship: { bg: "oklch(0.95 0.05 195)", text: "oklch(0.4 0.12 195)" },
  Award: { bg: "oklch(0.96 0.06 85)", text: "oklch(0.48 0.13 80)" },
  Infrastructure: { bg: "oklch(0.95 0.04 240)", text: "oklch(0.42 0.08 248)" },
}

export default function EventsAnnouncements() {
  return (
    <section className="py-14" style={{ backgroundColor: "oklch(0.97 0.01 240)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--diic-dark)" }}
          >
            Stay <span style={{ color: "var(--diic-orange)" }}>Informed</span>
          </h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-xl mx-auto">
            Keep up with the latest events, workshops and announcements from DIIC.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Events Column (3/5) */}
          <div className="lg:col-span-3 bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "var(--diic-blue-light)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--diic-blue-light)" }}
                >
                  <Calendar size={16} style={{ color: "var(--diic-blue)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: "var(--diic-dark)" }}>
                    Upcoming Events
                  </h3>
                  <p className="text-[11px] text-muted-foreground">Don't miss out</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-semibold gap-1"
                style={{ color: "var(--diic-blue)" }}
              >
                View All <ArrowRight size={12} />
              </Button>
            </div>

            <div className="divide-y divide-border">
              {events.map((event) => (
                <div key={event.id} className="group p-5 hover:bg-muted/40 transition-colors cursor-pointer">
                  <div className="flex gap-4">
                    {/* Date box */}
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white font-bold"
                      style={{ background: `linear-gradient(135deg, var(--diic-blue), var(--diic-blue-medium))` }}
                    >
                      <span className="text-lg leading-none">
                        {event.date.split(" ")[1]?.replace(",", "")}
                      </span>
                      <span className="text-[10px] opacity-80">
                        {event.date.split(" ")[0]?.slice(0, 3)}
                      </span>
                    </div>

                    {/* Event info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-sm leading-snug group-hover:text-[var(--diic-blue)] transition-colors line-clamp-2">
                          {event.title}
                        </h4>
                        <Badge
                          className="flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 border-0"
                          style={{
                            backgroundColor:
                              event.type === "Hackathon"
                                ? "oklch(0.94 0.06 155)"
                                : event.type === "Workshop"
                                ? "oklch(0.95 0.05 195)"
                                : "oklch(0.95 0.07 47)",
                            color:
                              event.type === "Hackathon"
                                ? "oklch(0.42 0.13 155)"
                                : event.type === "Workshop"
                                ? "oklch(0.4 0.12 195)"
                                : "oklch(0.5 0.17 47)",
                          }}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t">
              <Button
                className="w-full font-semibold text-sm"
                style={{ backgroundColor: "var(--diic-blue)", color: "white" }}
              >
                View All Events
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Announcements Column (2/5) */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-sm border border-border overflow-hidden flex flex-col">
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "var(--diic-blue-light)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--diic-orange-light)" }}
                >
                  <Bell size={16} style={{ color: "var(--diic-orange)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: "var(--diic-dark)" }}>
                    Announcements
                  </h3>
                  <p className="text-[11px] text-muted-foreground">Latest updates</p>
                </div>
              </div>
              <a
                href="#announcements"
                className="text-xs font-semibold flex items-center gap-1 hover:underline"
                style={{ color: "var(--diic-blue)" }}
              >
                All <ExternalLink size={10} />
              </a>
            </div>

            <div className="flex-1 overflow-y-auto" style={{ maxHeight: "420px" }}>
              {announcements.map((item, i) => {
                const style = typeBadgeStyle[item.type] || typeBadgeStyle["News"]
                return (
                  <div key={item.id}>
                    <div className="group px-5 py-4 hover:bg-muted/40 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {item.isNew ? (
                            <span
                              className="inline-block w-2 h-2 rounded-full animate-pulse"
                              style={{ backgroundColor: "var(--diic-orange)" }}
                            />
                          ) : (
                            <span
                              className="inline-block w-2 h-2 rounded-full"
                              style={{ backgroundColor: "var(--diic-blue-light)" }}
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium leading-snug mb-1.5 group-hover:text-[var(--diic-blue)] transition-colors line-clamp-2">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <span
                              className="text-[10px] font-semibold px-1.5 py-0.5 rounded-sm"
                              style={{ backgroundColor: style.bg, color: style.text }}
                            >
                              {item.type}
                            </span>
                            <span className="text-[10px] text-muted-foreground">{item.date}</span>
                            {item.isNew && (
                              <span
                                className="text-[9px] font-bold px-1 rounded"
                                style={{ backgroundColor: "var(--diic-orange)", color: "white" }}
                              >
                                NEW
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {i < announcements.length - 1 && <Separator />}
                  </div>
                )
              })}
            </div>

            <div className="p-4 border-t">
              <Button
                variant="outline"
                className="w-full text-xs font-semibold border gap-1"
                style={{ borderColor: "var(--diic-blue)", color: "var(--diic-blue)" }}
              >
                View All Announcements <ArrowRight size={12} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
