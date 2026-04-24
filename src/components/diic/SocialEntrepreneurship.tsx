import {
  Heart,
  Globe,
  Leaf,
  Users,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle2,
  Handshake,
  Lightbulb,
} from "lucide-react";

const focusAreas = [
  {
    icon: Leaf,
    title: "Sustainability & Climate",
    desc: "Solutions for waste management, renewable energy, and circular economy models.",
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    desc: "Affordable healthcare, mental health platforms, and nutrition initiatives for underserved communities.",
  },
  {
    icon: Users,
    title: "Inclusive Education",
    desc: "EdTech for skill development, literacy, and vocational training in rural and semi-urban areas.",
  },
  {
    icon: TrendingUp,
    title: "Rural Development",
    desc: "AgriTech and financial inclusion tools designed to empower rural economies and livelihoods.",
  },
];

const pillars = [
  {
    title: "Impact Measurement",
    desc: "We help you define and track the social or environmental change you're creating using standard frameworks.",
  },
  {
    title: "Sustainable Business Models",
    desc: "Social impact doesn't mean non-profit. We help you build scalable, revenue-generating entities.",
  },
  {
    title: "Ecosystem Access",
    desc: "Connect with CSR departments, social impact investors, and government grants specifically for social ventures.",
  },
];

export default function SocialEntrepreneurship() {
  return (
    <section id="social-entrepreneurship" className="animate-in fade-in duration-700">
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
          <Heart size={12} />
          Social Entrepreneurship
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Build for <span style={{ color: "var(--diic-orange)" }}>People</span> &{" "}
          <span style={{ color: "var(--diic-orange)" }}>Planet</span>
        </h1>
        <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
          The DIIC Social Entrepreneurship Track is dedicated to supporting founders who use innovation to tackle the world's most pressing social and environmental challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-orange)" }}
          >
            Apply for the Track <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Focus Areas */}
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
              Our Focus Areas
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--diic-dark)" }}
            >
              Solving for{" "}
              <span style={{ color: "var(--diic-orange)" }}>Real Problems</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              We prioritize ventures that demonstrate a clear potential for scale and measurable impact across these core domains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--diic-blue-light)" }}
                  >
                    <Icon size={20} style={{ color: "var(--diic-blue)" }} />
                  </div>
                  <h3
                    className="font-extrabold text-sm mb-2"
                    style={{ color: "var(--diic-dark)" }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How We Support */}
      <div style={{ backgroundColor: "oklch(0.97 0.005 240)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
                style={{
                  backgroundColor: "var(--diic-orange-light)",
                  color: "var(--diic-orange)",
                  borderColor: "var(--diic-orange-light)",
                }}
              >
                Why This Track?
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold tracking-tight mb-6"
                style={{ color: "var(--diic-dark)" }}
              >
                Support Tailored for{" "}
                <span style={{ color: "var(--diic-orange)" }}>Impact Founders</span>
              </h2>
              <div className="space-y-6">
                {pillars.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 size={18} style={{ color: "var(--diic-blue)" }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1" style={{ color: "var(--diic-dark)" }}>{p.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border" style={{ backgroundColor: "var(--diic-blue-light)", color: "var(--diic-blue)", borderColor: "var(--diic-blue-light)" }}>
                <Handshake size={12} /> Partnerships
              </div>
              <h3 className="font-extrabold text-lg mb-4 text-[var(--diic-dark)]">Connect with the Right Partners</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                We work closely with NGOs, CSR departments, and international development agencies to provide our social entrepreneurs with pilot opportunities and strategic partnerships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 text-center">
                  <div className="text-xl font-bold text-[var(--diic-blue)]">20+</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">NGO Partners</div>
                </div>
                <div className="p-4 bg-gray-50 text-center">
                  <div className="text-xl font-bold text-[var(--diic-blue)]">10+</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">CSR Alliances</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Impact CTA */}
      <div className="py-16 px-4 text-center bg-white">
        <div className="max-w-xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "var(--diic-blue-light)" }}>
            <Lightbulb size={32} style={{ color: "var(--diic-blue)" }} />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-4" style={{ color: "var(--diic-dark)" }}>Ready to Scale Your Impact?</h2>
          <p className="text-gray-500 text-sm mb-8">
            Whether you are at the idea stage or already have a working model, DIIC can help you refine your solution and build a sustainable entity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#apply"
              className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--diic-blue)" }}
            >
              Apply for Incubation
            </a>
            <a
              href="#join"
              className="px-8 py-3 text-sm font-bold uppercase tracking-wider border transition-colors hover:bg-gray-50"
              style={{ borderColor: "var(--diic-blue)", color: "var(--diic-blue)" }}
            >
              Join Our Network
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
