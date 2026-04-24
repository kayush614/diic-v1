import {
  Users,
  Building2,
  Handshake,
  Globe,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Industry Partners",
    desc: "Corporate leaders providing market access, pilot opportunities, and technical expertise.",
  },
  {
    icon: Globe,
    title: "Government Bodies",
    desc: "Associations with state and central agencies to navigate policy and leverage public infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Academic Institutions",
    desc: "Collaborations with universities for research, talent scouting, and knowledge exchange.",
  },
  {
    icon: Handshake,
    title: "Ecosystem Builders",
    desc: "Incubators, accelerators, and non-profits strengthening the overall startup landscape.",
  },
];

const partners = [
  { name: "Government of Delhi", logo: "/logos/delhi-gov.png", type: "Government" },
  { name: "Industry Lead Alpha", logo: "/logos/industry-alpha.png", type: "Industry" },
  { name: "Innovation Hub Beta", logo: "/logos/hub-beta.png", type: "Ecosystem" },
  { name: "Tech University Gamma", logo: "/logos/uni-gamma.png", type: "Academic" },
];

export default function Partners() {
  return (
    <section id="partners" className="animate-in fade-in duration-700">
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
          <Handshake size={12} />
          Our Partners
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Together for <span style={{ color: "var(--diic-orange)" }}>Innovation</span>
        </h1>
        <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
          Building a robust startup ecosystem requires collaboration. DIIC partners with industry, government, and academia to create an environment where entrepreneurs can thrive.
        </p>
        <div className="mt-8">
          <a
            href="#join"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-orange)" }}
          >
            Become a Partner <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Stats */}
      <div style={{ backgroundColor: "var(--diic-dark)" }}>
        <div className="max-w-[1140px] mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "50+", label: "Industry Partners" },
            { value: "12+", label: "Academic Alliances" },
            { value: "05+", label: "Govt. Departments" },
            { value: "25+", label: "Ecosystem Enablers" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold" style={{ color: "var(--diic-orange)" }}>
                {s.value}
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Network */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--diic-dark)" }}>
              The DIIC <span style={{ color: "var(--diic-orange)" }}>Network</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
              We leverage our extensive network to provide startups with the specialized support they need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="p-6 border border-gray-100 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ backgroundColor: "var(--diic-blue-light)" }}>
                    <Icon size={20} style={{ color: "var(--diic-blue)" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--diic-dark)" }}>{type.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{type.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Directory Placeholder */}
          <div className="border border-dashed border-gray-200 rounded-xl p-12 text-center bg-gray-50">
            <h3 className="font-bold text-gray-400 mb-2">Partner Directory</h3>
            <p className="text-gray-400 text-sm">
              We are currently updating our official partner and mentor directory for {new Date().getFullYear()}.
              Check back soon for the full list of organizations and institutions supporting our mission.
            </p>
          </div>
        </div>
      </div>

      {/* Collaboration CTA */}
      <div className="py-16 px-4 text-center bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6" style={{ backgroundColor: "var(--diic-orange-light)" }}>
            <Handshake size={24} style={{ color: "var(--diic-orange)" }} />
          </div>
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--diic-dark)" }}>Interested in Collaborating?</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Whether you are from a corporation, a government body, or an academic institution, we have multiple ways to engage with our startups and programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#join"
              className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--diic-blue)" }}
            >
              Partner with Us
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-sm font-bold uppercase tracking-wider border border-gray-200 transition-colors hover:bg-gray-50 text-gray-600"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
