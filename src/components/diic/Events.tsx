import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Trophy,
  Mic2,
  Lightbulb,
  Filter,
} from "lucide-react";
import { useState } from "react";

const categories = ["All", "Workshop", "Hackathon", "Pitch Competition", "Conference", "Masterclass"];

const events: Array<{
  id: number;
  title: string;
  date: string;
  dateNum: string;
  dateMonth: string;
  time: string;
  location: string;
  type: string;
  description: string;
  seats: string;
  status: string;
}> = [];

const typeStyles: Record<
  string,
  { bg: string; text: string }
> = {
  "Pitch Competition": {
    bg: "var(--diic-orange-light)",
    text: "var(--diic-orange)",
  },
  Workshop: {
    bg: "var(--diic-blue-light)",
    text: "var(--diic-blue)",
  },
  Hackathon: {
    bg: "oklch(0.92 0.06 155)",
    text: "var(--diic-green)",
  },
  Conference: {
    bg: "oklch(0.92 0.06 195)",
    text: "var(--diic-teal)",
  },
  Masterclass: {
    bg: "oklch(0.93 0.05 270)",
    text: "oklch(0.45 0.14 270)",
  },
};

const highlights = [
  {
    icon: Trophy,
    title: "Pitch Competitions",
    desc: "Connect with investors in high-stakes pitch battles.",
  },
  {
    icon: Lightbulb,
    title: "Hackathons",
    desc: "48-hour sprints to build and launch innovative solutions.",
  },
  {
    icon: Mic2,
    title: "Masterclasses",
    desc: "Expert-led deep-dives on growth, fundraising, and product.",
  },
  {
    icon: Users,
    title: "Community Events",
    desc: "Networking nights and founder meetups across Delhi-NCR.",
  },
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showPast, setShowPast] = useState(false);

  const filtered = events.filter((e) => {
    const matchCat = activeCategory === "All" || e.type === activeCategory;
    const matchStatus = showPast ? e.status === "past" : e.status === "upcoming";
    return matchCat && matchStatus;
  });

  return (
    <section id="events">
      {/* Hero Strip */}
      <div
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "var(--diic-blue)" }}
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 uppercase tracking-widest"
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <Calendar size={12} />
          Events & Programs
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Where{" "}
          <span style={{ color: "var(--diic-orange)" }}>Ideas</span> Meet{" "}
          <span style={{ color: "var(--diic-orange)" }}>Action</span>
        </h1>
        <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
          From hackathons and pitch days to masterclasses and networking events,
          DIIC's calendar is packed with opportunities to learn, connect, and
          grow.
        </p>
      </div>

      {/* Event type highlights */}
      <div style={{ backgroundColor: "var(--diic-dark)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.title} className="flex items-start gap-3">
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <Icon size={18} style={{ color: "var(--diic-orange)" }} />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">{h.title}</div>
                  <div className="text-gray-400 text-[11px] leading-snug">
                    {h.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Events List */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2
                className="text-2xl font-extrabold tracking-tight"
                style={{ color: "var(--diic-dark)" }}
              >
                {showPast ? "Past" : "Upcoming"}{" "}
                <span style={{ color: "var(--diic-orange)" }}>Events</span>
              </h2>
              <p className="text-gray-500 text-xs mt-1">
                {filtered.length} event{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Past/Upcoming Toggle */}
              <div className="flex border border-gray-200 overflow-hidden text-xs font-bold">
                <button
                  onClick={() => setShowPast(false)}
                  className="px-4 py-2 transition-colors"
                  style={
                    !showPast
                      ? {
                        backgroundColor: "var(--diic-blue)",
                        color: "white",
                      }
                      : { color: "var(--diic-dark)" }
                  }
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setShowPast(true)}
                  className="px-4 py-2 transition-colors"
                  style={
                    showPast
                      ? {
                        backgroundColor: "var(--diic-blue)",
                        color: "white",
                      }
                      : { color: "var(--diic-dark)" }
                  }
                >
                  Past
                </button>
              </div>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <Filter size={13} className="text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-3 py-1.5 text-[11px] font-semibold border transition-colors"
                style={
                  activeCategory === cat
                    ? {
                      backgroundColor: "var(--diic-blue)",
                      color: "white",
                      borderColor: "var(--diic-blue)",
                    }
                    : {
                      color: "var(--diic-dark)",
                      borderColor: "#e5e7eb",
                    }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {events.length === 0 ? (
            <div className="text-center py-20 px-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
                <Calendar size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-[var(--diic-dark)] mb-2">Events Calendar Expanding Soon</h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                We are currently curating our upcoming lineup of workshops, hackathons, and pitch days. Stay tuned for exciting new events!
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm">
              No events found for this filter.
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((event) => {
                const style =
                  typeStyles[event.type] ?? {
                    bg: "var(--diic-blue-light)",
                    text: "var(--diic-blue)",
                  };
                return (
                  <div
                    key={event.id}
                    className="group border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex gap-0 overflow-hidden"
                  >
                    {/* Date Box */}
                    <div
                      className="flex-shrink-0 w-16 sm:w-20 flex flex-col items-center justify-center text-white font-bold py-6"
                      style={{
                        background: `linear-gradient(135deg, var(--diic-blue), var(--diic-blue-medium))`,
                      }}
                    >
                      <span className="text-xl sm:text-2xl leading-none">
                        {event.dateNum}
                      </span>
                      <span className="text-[10px] opacity-75 mt-1">
                        {event.dateMonth}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-5 min-w-0">
                      <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                        <h3
                          className="font-extrabold text-sm group-hover:text-[var(--diic-blue)] transition-colors"
                          style={{ color: "var(--diic-dark)" }}
                        >
                          {event.title}
                        </h3>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 flex-shrink-0"
                          style={{
                            backgroundColor: style.bg,
                            color: style.text,
                          }}
                        >
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-[11px] text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock size={10} /> {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={10} /> {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={10} /> {event.seats}
                        </span>
                      </div>
                    </div>

                    {/* Register Button */}
                    {event.status === "upcoming" && (
                      <div className="flex-shrink-0 flex items-center pr-5">
                        <a
                          href="#join"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold text-white uppercase tracking-wider transition-opacity hover:opacity-90"
                          style={{ backgroundColor: "var(--diic-orange)" }}
                        >
                          Register <ArrowRight size={11} />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-14 px-4 text-center"
        style={{ backgroundColor: "oklch(0.97 0.005 240)" }}
      >
        <h2
          className="text-xl sm:text-2xl font-extrabold tracking-tight mb-3"
          style={{ color: "var(--diic-dark)" }}
        >
          Never Miss an Event
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
          Join our network to receive first-priority notifications for upcoming
          events, workshops, and cohort openings.
        </p>
        <a
          href="#join"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--diic-blue)" }}
        >
          Join Our Network <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
