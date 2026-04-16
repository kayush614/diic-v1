import {
  Lightbulb,
  GraduationCap,
  Handshake,
  TrendingUp,
  Users,
  Eye,
  Target,
} from "lucide-react";

const offerings = [
  {
    icon: Lightbulb,
    title: "Startup Incubation",
    description:
      "End-to-end support for early-stage startups — from idea validation to product-market fit.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "Workshops, bootcamps, and structured training programs to sharpen entrepreneurial skills.",
  },
  {
    icon: Handshake,
    title: "Mentorship Network",
    description:
      "Access to 200+ mentors from industry, academia, and government to guide your journey.",
  },
  {
    icon: TrendingUp,
    title: "Funding Access",
    description:
      "Seed grant schemes, investor connects, and pitch opportunities to help startups raise capital.",
  },
  {
    icon: Users,
    title: "Community & Events",
    description:
      "Hackathons, demo days, and networking events that build lasting connections in the ecosystem.",
  },
];

export default function About() {
  return (
    <section id="about">
      {/* Section 1: Title + Intro */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
            style={{
              backgroundColor: "var(--diic-blue-light)",
              color: "var(--diic-blue)",
              borderColor: "var(--diic-blue-light)",
            }}
          >
            About DIIC
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--diic-dark)" }}
          >
            Building Delhi's{" "}
            <span style={{ color: "var(--diic-orange)" }}>Innovation</span>{" "}
            Ecosystem
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Delhi Innovation and Incubation Centre (DIIC) is a startup incubator
            established to nurture early-stage ventures and strengthen the
            innovation ecosystem in the National Capital Region.
          </p>
        </div>
      </div>

      {/* Section 2: Description + Image (Two Column) */}
      <div style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — Description */}
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-5 leading-snug"
                style={{ color: "var(--diic-dark)" }}
              >
                Empowering ideas with the right environment to grow.
              </h3>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  The Delhi Innovation and Incubation Centre (DIIC) is an
                  emerging initiative aimed at supporting aspiring
                  entrepreneurs, innovators, and student-led startups.
                </p>
                <p>
                  As we begin our journey, our focus is on creating a
                  collaborative space where ideas can be explored, validated,
                  and developed into meaningful solutions.
                </p>
                <p>
                  DIIC aims to provide access to mentorship, peer learning, and
                  opportunities that help early-stage founders take their first
                  steps toward building impactful ventures.
                </p>
                <p>
                  We are in the initial phase of building our ecosystem and look
                  forward to growing a strong community of innovators.
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative">
              <img
                src="/img-about.jpg"
                alt="DIIC Innovation Hub workspace"
                className="w-full h-auto object-cover shadow-sm border border-gray-100"
              />
              {/* Accent bar */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border-2 -z-10"
                style={{ borderColor: "var(--diic-blue-light)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Vision & Mission */}
      <div className="py-14 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="border border-gray-100 bg-white shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: "var(--diic-blue-light)" }}
                >
                  <Eye size={20} style={{ color: "var(--diic-blue)" }} />
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wider"
                  style={{ color: "var(--diic-dark)" }}
                >
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a leading innovation hub that transforms Delhi into a
                thriving startup capital — where bold ideas find the support,
                resources, and community they need to create lasting impact.
              </p>
            </div>

            {/* Mission */}
            <div className="border border-gray-100 bg-white shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: "var(--diic-blue-light)" }}
                >
                  <Target size={20} style={{ color: "var(--diic-blue)" }} />
                </div>
                <h3
                  className="text-lg font-bold uppercase tracking-wider"
                  style={{ color: "var(--diic-dark)" }}
                >
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide structured incubation, hands-on mentorship, and
                access to funding for early-stage startups — enabling founders
                to build scalable, sustainable ventures that solve real
                problems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: What We Do (Icon Grid) */}
      <div style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--diic-dark)" }}
            >
              What We <span style={{ color: "var(--diic-orange)" }}>Do</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              A complete support system for startups at every stage of their
              journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: "var(--diic-blue-light)",
                      }}
                    >
                      <Icon size={20} style={{ color: "var(--diic-blue)" }} />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm mb-1"
                        style={{ color: "var(--diic-dark)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA card */}
            <div
              className="flex flex-col items-center justify-center p-6 text-center"
              style={{ backgroundColor: "var(--diic-blue)" }}
            >
              <h4 className="text-white font-bold text-sm mb-2">
                Ready to Build?
              </h4>
              <p className="text-blue-100/80 text-xs mb-4 leading-relaxed">
                Apply for incubation and join our next cohort of founders.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors"
                style={{
                  backgroundColor: "var(--diic-orange)",
                  color: "white",
                }}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
