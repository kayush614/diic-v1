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

const inp = (error?: string) =>
  `w-full px-4 py-3 text-sm border outline-none transition-colors placeholder:text-gray-400 text-gray-900 ${
    error
      ? "border-red-300 bg-red-50 focus:border-red-400"
      : "border-gray-200 bg-white focus:border-[var(--diic-blue)]"
  }`

export default function Step1({ data, onChange, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold" style={{ color: "var(--diic-dark)" }}>
          Founder Information
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">Tell us about yourself.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required error={errors.full_name}>
          <input
            type="text"
            value={data.full_name}
            onChange={e => onChange("full_name", e.target.value)}
            placeholder="Rahul Sharma"
            className={inp(errors.full_name)}
          />
        </Field>

        <Field label="Email Address" required error={errors.email}>
          <input
            type="email"
            value={data.email}
            onChange={e => onChange("email", e.target.value)}
            placeholder="you@startup.com"
            className={inp(errors.email)}
          />
        </Field>

        <Field label="Phone Number" required error={errors.phone}
          hint="Include country code, e.g. +91 98765 43210">
          <input
            type="tel"
            value={data.phone}
            onChange={e => onChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className={inp(errors.phone)}
          />
        </Field>

        <Field label="LinkedIn Profile" error={errors.linkedin}
          hint="Optional – helps us learn more about you">
          <input
            type="url"
            value={data.linkedin}
            onChange={e => onChange("linkedin", e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
            className={inp(errors.linkedin)}
          />
        </Field>
      </div>
    </div>
  )
}
