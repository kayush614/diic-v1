import { AlertCircle, UploadCloud, FileCheck2 } from "lucide-react"
import type { ApplicationFormData, FormErrors } from "./types"

interface Props {
  data: ApplicationFormData
  onChange: (field: keyof ApplicationFormData, value: any) => void
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

export default function Step5({ data, onChange, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold" style={{ color: "var(--diic-dark)" }}>
          Final Details
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">Last step — tell us why DIIC is right for you.</p>
      </div>

      {/* Why incubation */}
      <Field label="Why do you want to join DIIC?" required error={errors.reason}
        hint="What specific support are you looking for? Mentorship, funding, network, space?">
        <textarea
          rows={4}
          value={data.reason}
          onChange={e => onChange("reason", e.target.value)}
          placeholder="Tell us what you hope to gain from the DIIC incubation program and how you plan to use the support..."
          className={`w-full px-4 py-3 text-sm border outline-none transition-colors placeholder:text-gray-400 resize-none text-gray-900 ${
            errors.reason
              ? "border-red-300 bg-red-50 focus:border-red-400"
              : "border-gray-200 bg-white focus:border-[var(--diic-blue)]"
          }`}
        />
      </Field>

      {/* Pitch deck upload */}
      <Field label="Pitch Deck" hint="PDF only, max 20MB (optional but recommended)">
        <label
          className="flex flex-col items-center justify-center gap-2 w-full py-8 border-2 border-dashed cursor-pointer transition-colors"
          style={{
            borderColor: data.pitch_deck ? "var(--diic-blue)" : "#e5e7eb",
            backgroundColor: data.pitch_deck ? "var(--diic-blue-light)" : "#fafafa",
          }}
        >
          {data.pitch_deck ? (
            <>
              <FileCheck2 size={28} style={{ color: "var(--diic-blue)" }} />
              <p className="text-sm font-semibold" style={{ color: "var(--diic-blue)" }}>
                {data.pitch_deck.name}
              </p>
              <p className="text-xs text-gray-400">
                {(data.pitch_deck.size / 1024 / 1024).toFixed(2)} MB — click to replace
              </p>
            </>
          ) : (
            <>
              <UploadCloud size={28} className="text-gray-400" />
              <p className="text-sm text-gray-500 font-medium">
                Click to upload or drag & drop
              </p>
              <p className="text-xs text-gray-400">PDF files only</p>
            </>
          )}
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={e => {
              const file = e.target.files?.[0] ?? null
              if (file && file.type !== "application/pdf") {
                alert("Please upload a PDF file only.")
                return
              }
              if (file && file.size > 20 * 1024 * 1024) {
                alert("File size must be under 20MB.")
                return
              }
              onChange("pitch_deck", file)
            }}
          />
        </label>
      </Field>

      {/* T&C checkbox */}
      <div className="space-y-1.5">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={data.agreed}
              onChange={e => onChange("agreed", e.target.checked)}
              className="w-4 h-4 accent-[var(--diic-blue)] cursor-pointer"
            />
          </div>
          <span className="text-sm text-gray-600 leading-snug group-hover:text-gray-800 transition-colors">
            I confirm that all information provided is accurate and I agree to the{" "}
            <a
              href="#"
              className="underline font-semibold hover:opacity-80"
              style={{ color: "var(--diic-blue)" }}
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline font-semibold hover:opacity-80"
              style={{ color: "var(--diic-blue)" }}
            >
              Privacy Policy
            </a>{" "}
            of DIIC.
          </span>
        </label>
        {errors.agreed && (
          <p className="flex items-center gap-1 text-xs text-red-500 ml-7">
            <AlertCircle size={11} /> {errors.agreed}
          </p>
        )}
      </div>
    </div>
  )
}
