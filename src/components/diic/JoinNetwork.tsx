import { useState } from "react";
import {
  Users,
  Handshake,
  TrendingUp,
  Building2,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Star,
} from "lucide-react";

const roles = [
  {
    id: "mentor",
    icon: Star,
    title: "Mentor",
    description:
      "Share your expertise with early-stage founders. Guide startups through product, growth, fundraising, and beyond.",
    perks: [
      "Monthly 1-on-1 sessions with startups",
      "Access to DIIC events & Demo Days",
      "Listed on DIIC Mentor Directory",
      "Opportunity to co-invest",
    ],
  },
  {
    id: "investor",
    icon: TrendingUp,
    title: "Investor / Angel",
    description:
      "Get early access to DIIC's vetted startup pipeline. Review pitch decks, attend Demo Days, and co-invest with peers.",
    perks: [
      "Curated deal flow from DIIC cohorts",
      "Investor-only Demo Day previews",
      "Co-investment network access",
      "Tax benefit guidance on eligible investments",
    ],
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Ecosystem Partner",
    description:
      "Connect your organization with DIIC's growing startup ecosystem. Sponsor programs, offer resources, or run joint initiatives.",
    perks: [
      "Co-branded events and workshops",
      "Access to startup talent pipeline",
      "CSR and branding visibility",
      "Priority access to DIIC research",
    ],
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Innovator",
    description:
      "Leverage DIIC's startup ecosystem for open innovation, pilot programs, and talent scouting within your organization.",
    perks: [
      "Startup-corporate matching",
      "Pilot program facilitation",
      "Innovation lab collaboration",
      "DIIC Corporate Summit access",
    ],
  },
];

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  message: string;
}

const INITIAL: FormState = {
  full_name: "",
  email: "",
  phone: "",
  organization: "",
  role: "",
  message: "",
};

export default function JoinNetwork() {
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.full_name.trim()) e.full_name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.role) e.role = "Please select a role";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);

    // Simulate submission (no Supabase table set up yet)
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[65vh] py-20 text-center px-4 bg-white">
        <div
          className="flex items-center justify-center w-20 h-20 mb-6"
          style={{ backgroundColor: "var(--diic-blue-light)" }}
        >
          <CheckCircle2 size={40} style={{ color: "var(--diic-blue)" }} />
        </div>
        <h2
          className="text-3xl font-extrabold tracking-tight mb-2"
          style={{ color: "var(--diic-dark)" }}
        >
          You're on the List!
        </h2>
        <div
          className="h-1 w-16 mb-4"
          style={{ backgroundColor: "var(--diic-orange)" }}
        />
        <p className="text-gray-600 max-w-md text-base mb-2">
          Thank you, <strong>{form.full_name}</strong>. We've received your
          expression of interest.
        </p>
        <p className="text-gray-500 max-w-md text-sm mb-8">
          Our team will review your profile and reach out within{" "}
          <strong>3–5 business days</strong> to onboard you into our network.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-blue)" }}
          >
            Back to Home
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(INITIAL);
              setSelected(null);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider border transition-colors hover:bg-gray-50"
            style={{ borderColor: "var(--diic-blue)", color: "var(--diic-blue)" }}
          >
            Register Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="join">
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
          <Users size={12} />
          Join Our Network
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Be Part of{" "}
          <span style={{ color: "var(--diic-orange)" }}>Delhi's</span> Startup
          Ecosystem
        </h1>
        <p className="text-blue-100/80 text-sm max-w-xl mx-auto leading-relaxed">
          Whether you're a mentor, investor, corporate partner, or ecosystem
          builder — DIIC's network is where Delhi's brightest connect,
          collaborate, and create impact.
        </p>
      </div>

      {/* Stats */}
      <div
        className="py-8 px-4"
        style={{ backgroundColor: "var(--diic-dark)" }}
      >
        <div className="max-w-[1140px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "Expert", label: "Mentorship" },
            { value: "Open", label: "to Partnerships" },
            { value: "Growing", label: "Community" },
            { value: "Dynamic", label: "Ecosystem" },
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

      {/* Role Cards */}
      <div className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold mb-4 border"
              style={{
                backgroundColor: "var(--diic-blue-light)",
                color: "var(--diic-blue)",
                borderColor: "var(--diic-blue-light)",
              }}
            >
              How You Can Join
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--diic-dark)" }}
            >
              Choose Your{" "}
              <span style={{ color: "var(--diic-orange)" }}>Role</span>
            </h2>
            <p className="mt-2 text-gray-500 text-sm max-w-xl mx-auto">
              Click the role that best describes you to learn more, then fill in
              the form below to express your interest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {roles.map((role) => {
              const Icon = role.icon;
              const active = selected === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => {
                    setSelected(role.id);
                    updateField("role", role.title);
                  }}
                  className="text-left border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  style={
                    active
                      ? {
                        borderColor: "var(--diic-blue)",
                        backgroundColor: "var(--diic-blue-light)",
                      }
                      : { borderColor: "#e5e7eb" }
                  }
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-3"
                    style={{
                      backgroundColor: active
                        ? "var(--diic-blue)"
                        : "var(--diic-blue-light)",
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: active ? "white" : "var(--diic-blue)" }}
                    />
                  </div>
                  <h3
                    className="font-extrabold text-sm mb-1"
                    style={{ color: "var(--diic-dark)" }}
                  >
                    {role.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">
                    {role.description}
                  </p>
                  {active && (
                    <ul className="space-y-1.5 mt-3 border-t border-blue-200 pt-3">
                      {role.perks.map((perk) => (
                        <li
                          key={perk}
                          className="flex items-start gap-1.5 text-[11px] text-gray-600"
                        >
                          <CheckCircle2
                            size={12}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "var(--diic-blue)" }}
                          />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>

          {/* Registration Form */}
          <div className="max-w-[720px] mx-auto">
            <div
              className="border border-gray-100 shadow-sm p-6 sm:p-10 bg-white relative"
            >
              {submitting && (
                <div className="absolute inset-0 bg-white/85 flex flex-col items-center justify-center z-50 gap-3">
                  <Loader2
                    size={36}
                    className="animate-spin"
                    style={{ color: "var(--diic-blue)" }}
                  />
                  <p className="text-sm font-semibold text-gray-600">
                    Submitting your registration…
                  </p>
                </div>
              )}

              <div className="mb-8">
                <h2
                  className="text-xl font-extrabold tracking-tight mb-1"
                  style={{ color: "var(--diic-dark)" }}
                >
                  Express Your Interest
                </h2>
                <p className="text-gray-500 text-sm">
                  Fill in your details below and our team will be in touch within
                  3–5 business days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-gray-600">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.full_name}
                      onChange={(e) => updateField("full_name", e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 border text-sm text-gray-800 focus:outline-none focus:ring-2 transition-shadow bg-white"
                      style={{
                        borderColor: errors.full_name ? "#ef4444" : "#e5e7eb",
                      }}
                    />
                    {errors.full_name && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.full_name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-gray-600">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border text-sm text-gray-800 focus:outline-none focus:ring-2 transition-shadow bg-white"
                      style={{
                        borderColor: errors.email ? "#ef4444" : "#e5e7eb",
                      }}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 transition-shadow bg-white"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-gray-600">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) =>
                        updateField("organization", e.target.value)
                      }
                      placeholder="Where do you work?"
                      className="w-full px-4 py-2.5 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 transition-shadow bg-white"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-gray-600">
                    I Want to Join As <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => updateField("role", e.target.value)}
                    className="w-full px-4 py-2.5 border text-sm text-gray-800 focus:outline-none focus:ring-2 transition-shadow bg-white appearance-none"
                    style={{
                      borderColor: errors.role ? "#ef4444" : "#e5e7eb",
                    }}
                  >
                    <option value="">Select your role…</option>
                    {roles.map((r) => (
                      <option key={r.id} value={r.title}>
                        {r.title}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="text-red-500 text-[11px] mt-1">
                      {errors.role}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-gray-600">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Brief background, expertise, or why you want to join the DIIC network…"
                    className="w-full px-4 py-2.5 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 resize-none transition-shadow bg-white"
                  />
                </div>

                {/* Submit Error */}
                {submitError && (
                  <div className="flex items-start gap-3 p-4 border border-red-200 bg-red-50 text-red-700 text-sm">
                    <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Submission Failed</p>
                      <p className="text-xs mt-0.5">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href="#home"
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ← Back to Home
                  </a>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "var(--diic-blue)" }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Join the Network <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
