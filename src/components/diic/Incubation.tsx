import {
  Lightbulb,
  FlaskConical,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Users,
  DollarSign,
  Cpu,
  Globe,
  Leaf,
  HeartPulse,
} from "lucide-react";

const phases = [
  {
    step: "01",
    title: "Application & Screening",
    duration: "2 Weeks",
    description:
      "Submit your application online. Our team reviews each submission for innovation, team strength, and market potential.",
  },
  {
    step: "02",
    title: "Bootcamp & Validation",
    duration: "4 Weeks",
    description:
      "Selected teams join an intensive bootcamp covering customer discovery, product validation, and lean startup methodology.",
  },
  {
    step: "03",
    title: "Incubation Program",
    duration: "6 Months",
    description:
      "Deep-dive into product development with dedicated mentors, weekly check-ins, co-working access, and curated workshops.",
  },
  {
    step: "04",
    title: "Demo Day & Growth",
    duration: "Ongoing",
    description:
      "Pitch to investors and partners at our Demo Day. Top startups gain access to follow-on support and our alumni network.",
  },
];

const benefits = [
  { icon: DollarSign, label: "Funding Support", detail: "Grant & Investment Access" },
  { icon: Users, label: "Expert Mentorship", detail: "Domain-Expert Mentors" },
  { icon: Rocket, label: "Co-working Space", detail: "Dedicated Workspace" },
  { icon: Globe, label: "Industry Connect", detail: "Network & Partnerships" },
  { icon: TrendingUp, label: "Investor Pitches", detail: "Structured Demo Days" },
  { icon: Cpu, label: "Tech Resources", detail: "Tools & Infrastructure" },
];

const sectors = [
  { icon: Cpu, label: "Deep Tech & AI" },
  { icon: HeartPulse, label: "HealthTech" },
  { icon: Leaf, label: "CleanTech" },
  { icon: Globe, label: "EdTech" },
  { icon: TrendingUp, label: "FinTech" },
  { icon: Users, label: "Social Impact" },
];

const eligibility = [
  "Early-stage startup with an MVP or validated idea",
  "At least one technical or domain co-founder",
  "Registered entity or willing to register within 30 days",
  "Committed to full-time engagement during the program",
  "Innovative solution with a clear market opportunity",
  "Team of 2–10 members",
];

export default function Incubation() {
  return (
    <section id="incubation">
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
          <Lightbulb size={12} />
          Startup Incubation Program
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Turn Your Idea Into a{" "}
          <span style={{ color: "var(--diic-orange)" }}>Scalable Venture</span>
        </h1>
        <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
          DIIC's flagship incubation program provides end-to-end support — from
          validation to investor-ready growth — over a structured 6-month
          journey.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-orange)" }}
          >
            Apply Now <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className="py-8 px-4"
        style={{ backgroundColor: "var(--diic-dark)" }}
      >
        <div className="max-w-[1140px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "6 Months", label: "Program Duration" },
            { value: "Structured", label: "Milestone-Driven" },
            { value: "Multi-Domain", label: "Expert Mentors" },
            { value: "Cohort-Based", label: "Learning Model" },
          ].map((s) => (
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

      {/* About Program */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-blue-light)",
                  color: "var(--diic-blue)",
                  borderColor: "var(--diic-blue-light)",
                }}
              >
                About the Program
              </div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 leading-snug"
                style={{ color: "var(--diic-dark)" }}
              >
                A{" "}
                <span style={{ color: "var(--diic-orange)" }}>
                  Structured Path
                </span>{" "}
                from Idea to Impact
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  The DIIC Incubation Program is a cohort-based, 6-month
                  intensive designed for early-stage startups ready to move from
                  concept to traction. Each cohort is carefully selected to
                  ensure diversity of thought, sector, and ambition.
                </p>
                <p>
                  You'll work alongside experienced mentors, fellow founders,
                  and industry experts who challenge you to build better, faster.
                  Weekly workshops, 1-on-1 mentoring, and milestone reviews keep
                  you on track.
                </p>
                <p>
                  At the end of the program, top startups present at our Demo
                  Day — an investor-facing event that opens doors to funding,
                  partnerships, and media attention.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    className="p-5 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center mb-3"
                      style={{ backgroundColor: "var(--diic-blue-light)" }}
                    >
                      <Icon size={18} style={{ color: "var(--diic-blue)" }} />
                    </div>
                    <div
                      className="font-bold text-xs mb-0.5"
                      style={{ color: "var(--diic-dark)" }}
                    >
                      {b.label}
                    </div>
                    <div className="text-[11px] text-gray-400">{b.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Program Timeline */}
      <div style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--diic-dark)" }}
            >
              Program{" "}
              <span style={{ color: "var(--diic-orange)" }}>Timeline</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              A clear, milestone-driven journey from application to graduation.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block"
              style={{ backgroundColor: "var(--diic-blue-light)" }}
            />
            <div className="space-y-6">
              {phases.map((phase, i) => (
                <div
                  key={phase.step}
                  className="relative flex gap-6 sm:gap-8 items-start"
                >
                  {/* Step number */}
                  <div
                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-extrabold text-sm text-white z-10"
                    style={{ backgroundColor: "var(--diic-blue)" }}
                  >
                    {phase.step}
                  </div>
                  <div className="bg-white border border-gray-100 shadow-sm p-5 flex-1 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <h3
                        className="font-bold text-sm"
                        style={{ color: "var(--diic-dark)" }}
                      >
                        {phase.title}
                      </h3>
                      <span
                        className="text-[11px] font-bold px-2 py-0.5"
                        style={{
                          backgroundColor: "var(--diic-orange-light)",
                          color: "var(--diic-orange)",
                        }}
                      >
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility + Sectors */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-blue-light)",
                  color: "var(--diic-blue)",
                  borderColor: "var(--diic-blue-light)",
                }}
              >
                Who Can Apply?
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold tracking-tight mb-6"
                style={{ color: "var(--diic-dark)" }}
              >
                Eligibility{" "}
                <span style={{ color: "var(--diic-orange)" }}>Criteria</span>
              </h2>
              <ul className="space-y-3">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--diic-blue)" }}
                    />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-orange-light)",
                  color: "var(--diic-orange)",
                  borderColor: "var(--diic-orange-light)",
                }}
              >
                <FlaskConical size={12} />
                Priority Sectors
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold tracking-tight mb-6"
                style={{ color: "var(--diic-dark)" }}
              >
                Focus{" "}
                <span style={{ color: "var(--diic-orange)" }}>Domains</span>
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3 border border-gray-100 hover:border-blue-200 transition-colors"
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "var(--diic-blue-light)" }}
                      >
                        <Icon
                          size={15}
                          style={{ color: "var(--diic-blue)" }}
                        />
                      </div>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "var(--diic-dark)" }}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "var(--diic-dark)" }}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Ready to Take Your{" "}
          <span style={{ color: "var(--diic-orange)" }}>Idea Forward?</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
          Applications for our next cohort are open. Join a structured program
          designed to help early-stage ventures grow with guidance and support.
        </p>
        <a
          href="#apply"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--diic-orange)" }}
        >
          Apply for Incubation <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
