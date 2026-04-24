import {
  Rocket,
  GraduationCap,
  Heart,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Mic2,
  Trophy,
  Target,
  Users,
  Cpu,
} from "lucide-react";

const programs = [
  {
    icon: Lightbulb,
    badge: "Flagship",
    badgeColor: "var(--diic-blue)",
    badgeBg: "var(--diic-blue-light)",
    title: "Startup Incubation Program",
    tag: "#incubation",
    tagLabel: "Learn More",
    duration: "6 Months · Cohort-Based",
    description:
      "Our flagship incubation program offers structured end-to-end support — from idea validation and product development to investor readiness and Demo Day. Ideal for early-stage startups looking for a dedicated launchpad.",
    features: [
      "Dedicated mentor pairing",
      "Co-working space access",
      "Weekly milestone reviews",
      "Demo Day pitching",
    ],
    who: "Early-stage startups with an MVP or validated concept",
  },
  {
    icon: GraduationCap,
    badge: "Training",
    badgeColor: "var(--diic-teal)",
    badgeBg: "oklch(0.92 0.06 195)",
    title: "Capacity Building Programs",
    tag: "#capacity-building",
    tagLabel: "Explore",
    duration: "Workshops · Bootcamps · Masterclasses",
    description:
      "A suite of learning programs designed to equip founders, students, and aspiring entrepreneurs with practical skills — from design thinking and lean startup methodology to fundraising and leadership.",
    features: [
      "Entrepreneurship Bootcamp",
      "Fundraising Workshops",
      "Founder Masterclass Series",
      "Hackathons & Challenges",
    ],
    who: "Students, first-time founders, and corporate innovators",
  },
  {
    icon: Heart,
    badge: "Social Impact",
    badgeColor: "var(--diic-green)",
    badgeBg: "oklch(0.92 0.06 155)",
    title: "Social Entrepreneurship Track",
    tag: "#social-entrepreneurship",
    tagLabel: "Explore",
    duration: "Integrated · Year-Round",
    description:
      "A dedicated track supporting ventures focused on creating measurable social and environmental impact. We help purpose-driven founders build sustainable business models that serve communities alongside markets.",
    features: [
      "Impact measurement frameworks",
      "CSR & grant navigation",
      "Community stakeholder engagement",
      "Sustainable model design",
    ],
    who: "NGOs, social enterprises, and purpose-led startups",
  },
  {
    icon: BookOpen,
    badge: "Academic",
    badgeColor: "var(--diic-orange)",
    badgeBg: "var(--diic-orange-light)",
    title: "Student Innovation Program",
    tag: "#join",
    tagLabel: "Join Network",
    duration: "Semester-Long · For Students",
    description:
      "Tailored for university and college students who want to explore entrepreneurship. Working with faculty and industry mentors, students bring classroom ideas into real-world prototypes through DIIC's guided framework.",
    features: [
      "Faculty mentor pairing",
      "Ideation workshops",
      "Prototype development",
      "Inter-college competitions",
    ],
    who: "Undergraduate and postgraduate students",
  },
];

const pillars = [
  {
    icon: Rocket,
    title: "Innovation-First",
    desc: "Every program is designed around real problem-solving, not textbook theory. We challenge participants to think boldly and build with purpose.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    desc: "Programs foster peer learning, collaboration, and lasting networks that extend well beyond structured sessions.",
  },
  {
    icon: Target,
    title: "Outcome-Oriented",
    desc: "Clear milestones, regular feedback, and structured reviews ensure participants make measurable progress throughout their journey.",
  },
  {
    icon: Cpu,
    title: "Expert Access",
    desc: "Practitioners, founders, investors, and policy advisors contribute as mentors, speakers, and evaluators across all programs.",
  },
  {
    icon: Mic2,
    title: "Platforms to Shine",
    desc: "Demo Days, hackathons, and competitions give participants visibility — with investors, media, and industry stakeholders in the audience.",
  },
  {
    icon: Trophy,
    title: "Recognized Credentials",
    desc: "Certificates and recognitions from DIIC align with national startup ecosystem programs and government schemes where applicable.",
  },
];

const eligibilityPoints = [
  "Open to individuals, student teams, early-stage startups, and registered entities",
  "Applicants must have a clearly defined problem statement or idea",
  "Commitment to active participation throughout the program duration",
  "Programs are intake-specific — applications open per cohort or session",
  "No prior entrepreneurship experience required for foundational tracks",
];

export default function Programs() {
  return (
    <section id="programs">
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
          <Rocket size={12} />
          Our Programs
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Programs Designed to{" "}
          <span style={{ color: "var(--diic-orange)" }}>Accelerate Ambition</span>
        </h1>
        <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
          From first-time founders to purpose-led change-makers, DIIC runs a portfolio of programs that meet innovators where they are — and take them further.
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
            Get in Touch
          </a>
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
              What We Offer
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--diic-dark)" }}
            >
              A Program for{" "}
              <span style={{ color: "var(--diic-orange)" }}>Every Stage</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              DIIC's programming spans idea-stage exploration to growth-stage support — with dedicated tracks for social impact, student innovation, and beyond.
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
                      <Icon size={20} style={{ color: prog.badgeColor }} />
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
                  <p className="text-[11px] text-gray-400 mb-3 font-medium">{prog.duration}</p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                    {prog.description}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mt-auto space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {prog.features.map((f) => (
                        <span
                          key={f}
                          className="text-[11px] font-medium px-2 py-0.5 border"
                          style={{
                            borderColor: "var(--diic-blue-light)",
                            color: "var(--diic-blue)",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-gray-400">
                      <span className="font-semibold text-gray-500">Best for:</span> {prog.who}
                    </p>
                    <a
                      href={prog.tag}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
                      style={{ color: "var(--diic-orange)" }}
                    >
                      {prog.tagLabel} <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why DIIC Programs */}
      <div style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
              style={{
                backgroundColor: "var(--diic-orange-light)",
                color: "var(--diic-orange)",
                borderColor: "var(--diic-orange-light)",
              }}
            >
              Why DIIC
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--diic-dark)" }}
            >
              What Makes Our Programs{" "}
              <span style={{ color: "var(--diic-orange)" }}>Different</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              We don't run generic workshops. Every initiative is grounded in real practitioner experience and designed for tangible outcomes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--diic-blue-light)" }}
                  >
                    <Icon size={18} style={{ color: "var(--diic-blue)" }} />
                  </div>
                  <h3
                    className="font-bold text-sm mb-2"
                    style={{ color: "var(--diic-dark)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Eligibility */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-blue-light)",
                  color: "var(--diic-blue)",
                  borderColor: "var(--diic-blue-light)",
                }}
              >
                Who Can Participate?
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold tracking-tight mb-6"
                style={{ color: "var(--diic-dark)" }}
              >
                General{" "}
                <span style={{ color: "var(--diic-orange)" }}>Eligibility</span>
              </h2>
              <ul className="space-y-3">
                {eligibilityPoints.map((item) => (
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
            <div
              className="p-8 border border-gray-100 bg-white shadow-sm"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-orange-light)",
                  color: "var(--diic-orange)",
                  borderColor: "var(--diic-orange-light)",
                }}
              >
                <Mic2 size={12} />
                Application Process
              </div>
              <h3
                className="font-extrabold text-lg mb-4 leading-snug"
                style={{ color: "var(--diic-dark)" }}
              >
                How to Get Started
              </h3>
              <div className="space-y-5">
                {[
                  { step: "01", title: "Choose a Program", desc: "Explore the programs above and identify the one that fits your stage and goals." },
                  { step: "02", title: "Submit Application", desc: "Fill out the online application form with your idea, profile, and team details." },
                  { step: "03", title: "Screening & Interview", desc: "Shortlisted applicants are invited for an evaluation round with our program team." },
                  { step: "04", title: "Onboarding", desc: "Selected participants receive an onboarding kit and are welcomed into their cohort." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-extrabold text-xs text-white"
                      style={{ backgroundColor: "var(--diic-blue)" }}
                    >
                      {s.step}
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-0.5" style={{ color: "var(--diic-dark)" }}>{s.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
          Ready to Find Your{" "}
          <span style={{ color: "var(--diic-orange)" }}>Program?</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
          Reach out to our team to find the right program for you, or apply directly and let us guide you through.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-orange)" }}
          >
            Apply Now <ArrowRight size={16} />
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
