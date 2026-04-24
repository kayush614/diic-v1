import {
  GraduationCap,
  BookOpen,
  Mic2,
  Trophy,
  Users,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    badge: "Foundational",
    badgeColor: "var(--diic-blue)",
    badgeBg: "var(--diic-blue-light)",
    title: "Entrepreneurship Bootcamp",
    duration: "4 Weeks · Intensive",
    description:
      "A hands-on bootcamp covering design thinking, business model canvas, lean startup principles, and go-to-market strategy. Ideal for first-time founders.",
    outcomes: [
      "Business Model Canvas",
      "Customer Discovery",
      "MVP Framework",
      "Pitch Basics",
    ],
  },
  {
    icon: BarChart3,
    badge: "Intermediate",
    badgeColor: "var(--diic-teal)",
    badgeBg: "oklch(0.92 0.06 195)",
    title: "Growth & Fundraising Workshop",
    duration: "2 Days · Weekend",
    description:
      "Learn how to structure a fundraising strategy, build investor decks, and approach VCs and angel investors. Taught by active investors and seasoned founders.",
    outcomes: [
      "Pitch Deck Design",
      "Term Sheet Basics",
      "VC Navigation",
      "Cap Table 101",
    ],
  },
  {
    icon: Mic2,
    badge: "Advanced",
    badgeColor: "var(--diic-orange)",
    badgeBg: "var(--diic-orange-light)",
    title: "Founder Masterclass Series",
    duration: "Monthly · Ongoing",
    description:
      "Monthly deep-dives with industry leaders, successful entrepreneurs, and policy makers. Each session focuses on a critical aspect of scaling a venture.",
    outcomes: [
      "Leadership & Culture",
      "Scaling Playbooks",
      "Product-Market Fit",
      "Legal Essentials",
    ],
  },
  {
    icon: Trophy,
    badge: "Competitive",
    badgeColor: "var(--diic-green)",
    badgeBg: "oklch(0.92 0.06 155)",
    title: "Hackathons & Innovation Challenges",
    duration: "48–72 Hours",
    description:
      "Themed hackathons where teams solve real-world problems under time pressure. Winners receive mentorship credits, incubation fast-track, and cash prizes.",
    outcomes: [
      "Rapid Prototyping",
      "Team Collaboration",
      "Problem-Solving",
      "Demo Pitching",
    ],
  },
];

const upcoming = [
  {
    title: "Startup Fundamentals Bootcamp",
    date: "May 10–June 7, 2025",
    format: "Hybrid",
    seats: "40 Seats",
  },
  {
    title: "Fundraising for Founders",
    date: "May 24–25, 2025",
    format: "In-Person",
    seats: "30 Seats",
  },
  {
    title: "Smart Delhi Hackathon 2025",
    date: "June 15–17, 2025",
    format: "In-Person",
    seats: "200 Participants",
  },
];

const stats = [
  { value: "50+", label: "Sessions Per Year" },
  { value: "2000+", label: "Participants Trained" },
  { value: "100+", label: "Expert Speakers" },
  { value: "95%", label: "Satisfaction Rate" },
];

export default function CapacityBuilding() {
  return (
    <section id="capacity-building">
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
          <GraduationCap size={12} />
          Capacity Building
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Sharpen Your{" "}
          <span style={{ color: "var(--diic-orange)" }}>
            Entrepreneurial Edge
          </span>
        </h1>
        <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
          From beginner bootcamps to advanced masterclasses, DIIC's capacity
          building programs equip founders with the skills, mindset, and
          networks they need to succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href="#join"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-orange)" }}
          >
            Register Now <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            Enquire
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="py-8 px-4"
        style={{ backgroundColor: "var(--diic-dark)" }}
      >
        <div className="max-w-[1140px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl font-extrabold"
                style={{ color: "var(--diic-orange)" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
              style={{
                backgroundColor: "var(--diic-blue-light)",
                color: "var(--diic-blue)",
                borderColor: "var(--diic-blue-light)",
              }}
            >
              Our Programs
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--diic-dark)" }}
            >
              Learning Tracks for{" "}
              <span style={{ color: "var(--diic-orange)" }}>
                Every Stage
              </span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              Whether you're just starting out or ready to scale, we have a
              program designed for your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.title}
                  className="border border-gray-100 bg-white shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: prog.badgeBg }}
                    >
                      <Icon
                        size={20}
                        style={{ color: prog.badgeColor }}
                      />
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider"
                      style={{
                        backgroundColor: prog.badgeBg,
                        color: prog.badgeColor,
                      }}
                    >
                      {prog.badge}
                    </span>
                  </div>

                  <h3
                    className="font-extrabold text-base mb-1"
                    style={{ color: "var(--diic-dark)" }}
                  >
                    {prog.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Clock size={11} className="text-gray-400" />
                    <span className="text-[11px] text-gray-400">
                      {prog.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                    {prog.description}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      What you'll learn
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.outcomes.map((o) => (
                        <span
                          key={o}
                          className="text-[11px] font-medium px-2 py-0.5 border"
                          style={{
                            borderColor: "var(--diic-blue-light)",
                            color: "var(--diic-blue)",
                          }}
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-orange-light)",
                  color: "var(--diic-orange)",
                  borderColor: "var(--diic-orange-light)",
                }}
              >
                <Calendar size={12} />
                Upcoming Sessions
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold tracking-tight mb-6"
                style={{ color: "var(--diic-dark)" }}
              >
                Don't Miss{" "}
                <span style={{ color: "var(--diic-orange)" }}>
                  What's Next
                </span>
              </h2>
              <div className="space-y-4">
                {upcoming.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-100 p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--diic-blue-light)" }}
                    >
                      <Calendar
                        size={18}
                        style={{ color: "var(--diic-blue)" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-bold text-sm mb-1"
                        style={{ color: "var(--diic-dark)" }}
                      >
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock size={10} /> {item.date}
                        </span>
                        <span
                          className="font-semibold"
                          style={{ color: "var(--diic-blue)" }}
                        >
                          {item.format}
                        </span>
                        <span className="text-gray-400">· {item.seats}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Join */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-blue-light)",
                  color: "var(--diic-blue)",
                  borderColor: "var(--diic-blue-light)",
                }}
              >
                <Target size={12} />
                Why Join DIIC Programs
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold tracking-tight mb-6"
                style={{ color: "var(--diic-dark)" }}
              >
                Built for{" "}
                <span style={{ color: "var(--diic-orange)" }}>Doers</span>
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Practical, Not Theoretical",
                    desc: "Every session is built around real-world application, case studies, and live exercises.",
                  },
                  {
                    icon: Users,
                    title: "Expert-Led Instruction",
                    desc: "Learn from founders who've been there — active practitioners, not just academicians.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Certification & Recognition",
                    desc: "Earn certificates recognized by industry partners and eligible for government funding schemes.",
                  },
                  {
                    icon: Target,
                    title: "Community Access",
                    desc: "Join a growing alumni network of 2000+ trained entrepreneurs across Delhi-NCR.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--diic-blue-light)" }}
                      >
                        <Icon
                          size={15}
                          style={{ color: "var(--diic-blue)" }}
                        />
                      </div>
                      <div>
                        <h4
                          className="font-bold text-sm mb-0.5"
                          style={{ color: "var(--diic-dark)" }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "var(--diic-dark)" }}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Ready to{" "}
          <span style={{ color: "var(--diic-orange)" }}>Level Up?</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
          Register for our next program or reach out to learn which track is
          right for you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#join"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-orange)" }}
          >
            Join Our Network <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
