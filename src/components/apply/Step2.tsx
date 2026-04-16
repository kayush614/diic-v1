import { AlertCircle } from "lucide-react"
import type { ApplicationFormData, FormErrors } from "./types"
import { STAGES, INDUSTRIES } from "./types"

interface Props {
  data: ApplicationFormData
  onChange: (field: keyof ApplicationFormData, value: string) => void
  errors: FormErrors
}

function Field({
  label, required, error, hint, children,
}: {
  label: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold" style={{ color: "var(--diic-dark)" }}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

const inp = (error?: string) =>
  `w-full px-4 py-3 text-sm border outline-none transition-colors placeholder:text-gray-400 text-gray-900 ${
    error
      ? "border-red-300 bg-red-50 focus:border-red-400"
      : "border-gray-200 bg-white focus:border-[var(--diic-blue)]"
  }`

export default function Step2({ data, onChange, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold" style={{ color: "var(--diic-dark)" }}>
          Startup Information
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">Give us an overview of what you're building.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Startup Name" required error={errors.startup_name}>
          <input
            type="text"
            value={data.startup_name}
            onChange={e => onChange("startup_name", e.target.value)}
            placeholder="e.g. AgroMind Technologies"
            className={inp(errors.startup_name)}
          />
        </Field>

        <Field label="Stage" required error={errors.stage}>
          <select
            value={data.stage}
            onChange={e => onChange("stage", e.target.value)}
            className={inp(errors.stage)}
          >
            <option value="">Select stage...</option>
            {STAGES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Industry" required error={errors.industry}>
          <select
            value={data.industry}
            onChange={e => onChange("industry", e.target.value)}
            className={inp(errors.industry)}
          >
            <option value="">Select industry...</option>
            {INDUSTRIES.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </Field>

        <Field label="Team Size" required error={errors.team_size}
          hint="Including co-founders">
          <input
            type="text"
            value={data.team_size}
            onChange={e => onChange("team_size", e.target.value)}
            placeholder="e.g. 3"
            className={inp(errors.team_size)}
          />
        </Field>

        <Field label="Website" error={errors.website} hint="Optional">
          <input
            type="url"
            value={data.website}
            onChange={e => onChange("website", e.target.value)}
            placeholder="https://yourstartup.com"
            className={inp(errors.website)}
          />
        </Field>
      </div>
    </div>
  )
}
