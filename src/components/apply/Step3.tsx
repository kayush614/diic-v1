import { AlertCircle } from "lucide-react"
import type { ApplicationFormData, FormErrors } from "./types"

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

const ta = (error?: string) =>
  `w-full px-4 py-3 text-sm border outline-none transition-colors placeholder:text-gray-400 resize-none text-gray-900 ${
    error
      ? "border-red-300 bg-red-50 focus:border-red-400"
      : "border-gray-200 bg-white focus:border-[var(--diic-blue)]"
  }`

export default function Step3({ data, onChange, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold" style={{ color: "var(--diic-dark)" }}>
          Product & Problem
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">Define the problem you're solving and how.</p>
      </div>

      <div className="space-y-5">
        <Field label="Problem Statement" required error={errors.problem}
          hint="What specific problem does your startup address? (2–4 sentences)">
          <textarea
            rows={3}
            value={data.problem}
            onChange={e => onChange("problem", e.target.value)}
            placeholder="Describe the core problem in clear, concrete terms..."
            className={ta(errors.problem)}
          />
        </Field>

        <Field label="Your Solution" required error={errors.solution}
          hint="How does your product/service solve the problem?">
          <textarea
            rows={3}
            value={data.solution}
            onChange={e => onChange("solution", e.target.value)}
            placeholder="Describe your solution and how it works..."
            className={ta(errors.solution)}
          />
        </Field>

        <Field label="Unique Value Proposition" required error={errors.usp}
          hint="Why is your solution better than existing alternatives?">
          <textarea
            rows={3}
            value={data.usp}
            onChange={e => onChange("usp", e.target.value)}
            placeholder="What makes you different? Why will customers choose you?"
            className={ta(errors.usp)}
          />
        </Field>

        <Field label="Target Market" required error={errors.market}
          hint="Who are your primary customers? How large is the market opportunity?">
          <textarea
            rows={3}
            value={data.market}
            onChange={e => onChange("market", e.target.value)}
            placeholder="Describe your customer segment and market size..."
            className={ta(errors.market)}
          />
        </Field>
      </div>
    </div>
  )
}
