import { AlertCircle, TrendingUp } from "lucide-react"
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

export default function Step4({ data, onChange, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold" style={{ color: "var(--diic-dark)" }}>
          Traction & Metrics
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">
          Share your current progress. Early-stage is fine — be honest.
        </p>
      </div>

      {/* Tip box */}
      <div
        className="flex items-start gap-3 p-4 border text-sm"
        style={{
          backgroundColor: "var(--diic-blue-light)",
          borderColor: "color-mix(in srgb, var(--diic-blue), white 60%)",
          color: "var(--diic-blue)",
        }}
      >
        <TrendingUp size={16} className="mt-0.5 flex-shrink-0" />
        <p>
          <strong>Don't worry</strong> if your numbers are early — we evaluate potential and team quality, not just current metrics. Put <em>"None yet"</em> where applicable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Users / Customers" required error={errors.users}
          hint="Active users, paying customers, pilots, etc.">
          <input
            type="text"
            value={data.users}
            onChange={e => onChange("users", e.target.value)}
            placeholder='e.g. "250 beta users" or "None yet"'
            className={inp(errors.users)}
          />
        </Field>

        <Field label="Monthly Revenue" error={errors.revenue}
          hint="In INR or USD. Put ₹0 if pre-revenue.">
          <input
            type="text"
            value={data.revenue}
            onChange={e => onChange("revenue", e.target.value)}
            placeholder='e.g. "₹1.2L MRR" or "Pre-revenue"'
            className={inp(errors.revenue)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Funding Raised (if any)" error={errors.funding}
            hint="Grants, angel, VC, or friends & family. Put 'None' if bootstrapped.">
            <input
              type="text"
              value={data.funding}
              onChange={e => onChange("funding", e.target.value)}
              placeholder='e.g. "Raised ₹15L angel round" or "Bootstrapped"'
              className={inp(errors.funding)}
            />
          </Field>
        </div>
      </div>
    </div>
  )
}
