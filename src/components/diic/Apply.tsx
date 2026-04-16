import { useState } from "react"
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, AlertTriangle } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"
import FormStepper from "@/components/apply/FormStepper"
import Step1 from "@/components/apply/Step1"
import Step2 from "@/components/apply/Step2"
import Step3 from "@/components/apply/Step3"
import Step4 from "@/components/apply/Step4"
import Step5 from "@/components/apply/Step5"
import type { ApplicationFormData, FormErrors } from "@/components/apply/types"
import { INITIAL_FORM_DATA } from "@/components/apply/types"

// ─────────────────────────────────────────────
// Success Screen
// ─────────────────────────────────────────────
function SuccessScreen({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 text-center px-4">
      <div
        className="flex items-center justify-center w-20 h-20 mb-6"
        style={{ backgroundColor: "var(--diic-blue-light)" }}
      >
        <CheckCircle2 size={40} style={{ color: "var(--diic-blue)" }} />
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--diic-dark)" }}>
        Application Submitted!
      </h2>
      <div className="h-1 w-16 mb-4" style={{ backgroundColor: "var(--diic-orange)" }} />
      <p className="text-gray-600 max-w-md text-base mb-2">
        Thank you, <strong>{name}</strong>. Your application has been received.
      </p>
      <p className="text-gray-500 max-w-md text-sm mb-8">
        Our team will review it and reach out within <strong>5–7 business days</strong>. Keep an eye on your inbox.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <a
          href="#home"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--diic-blue)" }}
        >
          <ArrowLeft size={15} /> Back to Home
        </a>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider border transition-colors hover:bg-gray-50"
          style={{ borderColor: "var(--diic-blue)", color: "var(--diic-blue)" }}
        >
          Submit Another Application
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Validation per step
// ─────────────────────────────────────────────
function validateStep(step: number, data: ApplicationFormData): FormErrors {
  const e: FormErrors = {}

  if (step === 1) {
    if (!data.full_name.trim()) e.full_name = "Full name is required"
    if (!data.email.trim()) e.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "Enter a valid email address"
    if (!data.phone.trim()) e.phone = "Phone number is required"
  }

  if (step === 2) {
    if (!data.startup_name.trim()) e.startup_name = "Startup name is required"
    if (!data.stage) e.stage = "Please select a stage"
    if (!data.industry) e.industry = "Please select an industry"
    if (!data.team_size.trim()) e.team_size = "Team size is required"
  }

  if (step === 3) {
    if (!data.problem.trim()) e.problem = "Problem statement is required"
    if (!data.solution.trim()) e.solution = "Solution description is required"
    if (!data.usp.trim()) e.usp = "Unique value proposition is required"
    if (!data.market.trim()) e.market = "Target market is required"
  }

  if (step === 4) {
    if (!data.users.trim()) e.users = "Please describe your current users/customers"
  }

  if (step === 5) {
    if (!data.reason.trim()) e.reason = "Please tell us why you want to join DIIC"
    if (!data.agreed) e.agreed = "You must agree to the terms to proceed"
  }

  return e
}

// ─────────────────────────────────────────────
// Main Apply Page
// ─────────────────────────────────────────────
export default function Apply() {
  const TOTAL_STEPS = 5
  const [step, setStep] = useState(1)
  const [data, setData] = useState<ApplicationFormData>(INITIAL_FORM_DATA)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const updateField = (field: keyof ApplicationFormData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }))
    // Clear error on change
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const goNext = () => {
    const errs = validateStep(step, data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStep(s => Math.min(s + 1, TOTAL_STEPS))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goBack = () => {
    setErrors({})
    setStep(s => Math.max(s - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async () => {
    const errs = validateStep(5, data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSubmitting(true)
    setSubmitError(null)

    try {
      let pitch_deck_url = ""

      // 1. Upload pitch deck to Supabase Storage (if provided)
      if (data.pitch_deck) {
        const fileName = `${Date.now()}-${data.pitch_deck.name.replace(/\s+/g, "_")}`
        const { data: fileData, error: fileError } = await supabase.storage
          .from("pitch-decks")
          .upload(fileName, data.pitch_deck, { contentType: "application/pdf" })

        if (fileError) throw new Error(`Upload failed: ${fileError.message}`)

        const { data: urlData } = supabase.storage
          .from("pitch-decks")
          .getPublicUrl(fileData.path)
        pitch_deck_url = urlData.publicUrl
      }

      // 2. Insert application record
      const { error: dbError } = await supabase.from("applications").insert({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        linkedin: data.linkedin,
        startup_name: data.startup_name,
        stage: data.stage,
        industry: data.industry,
        website: data.website,
        team_size: data.team_size,
        problem: data.problem,
        solution: data.solution,
        usp: data.usp,
        market: data.market,
        users: data.users,
        revenue: data.revenue,
        funding: data.funding,
        reason: data.reason,
        pitch_deck_url,
      })

      if (dbError) throw new Error(dbError.message)

      setSubmitted(true)
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setData(INITIAL_FORM_DATA)
    setErrors({})
    setStep(1)
    setSubmitted(false)
    setSubmitError(null)
  }

  if (submitted) {
    return <SuccessScreen name={data.full_name} onReset={resetForm} />
  }

  const stepComponents: Record<number, React.ReactNode> = {
    1: <Step1 data={data} onChange={updateField} errors={errors} />,
    2: <Step2 data={data} onChange={updateField} errors={errors} />,
    3: <Step3 data={data} onChange={updateField} errors={errors} />,
    4: <Step4 data={data} onChange={updateField} errors={errors} />,
    5: <Step5 data={data} onChange={updateField} errors={errors} />,
  }

  return (
    <section className="pb-16">
      {/* Hero strip */}
      <div
        className="py-12 px-4 mb-10 text-center"
        style={{ backgroundColor: "var(--diic-blue)" }}
      >
        <p className="text-blue-200 text-xs uppercase tracking-widest font-semibold mb-2">
          Delhi Innovation and Incubation Centre
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Apply for Incubation
        </h1>
        <p className="text-blue-100/80 mt-3 text-sm max-w-xl mx-auto">
          Complete the 5-step application below. We review every application and respond within 7 business days.
        </p>
      </div>

      {/* Form card */}
      <div className="max-w-[720px] mx-auto px-4">
        <div className="bg-white border border-gray-100 shadow-sm p-6 sm:p-10 relative">

          {/* Loading overlay */}
          {submitting && (
            <div className="absolute inset-0 bg-white/85 flex flex-col items-center justify-center z-50 gap-3">
              <Loader2 size={36} className="animate-spin" style={{ color: "var(--diic-blue)" }} />
              <p className="text-sm font-semibold text-gray-600">Submitting your application…</p>
            </div>
          )}

          {/* Stepper */}
          <FormStepper currentStep={step} />

          {/* Step content with animation */}
          <div key={step} className="animate-in fade-in slide-in-from-right-4 duration-300">
            {stepComponents[step]}
          </div>

          {/* Submit error */}
          {submitError && (
            <div className="mt-5 flex items-start gap-3 p-4 border border-red-200 bg-red-50 text-red-700 text-sm">
              <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Submission Failed</p>
                <p className="text-xs mt-0.5">{submitError}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-gray-100">
            {step > 1 ? (
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#e5e7eb", color: "var(--diic-dark)" }}
              >
                <ArrowLeft size={15} /> Back
              </button>
            ) : (
              <a
                href="#home"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#e5e7eb", color: "var(--diic-dark)" }}
              >
                <ArrowLeft size={15} /> Home
              </a>
            )}

            {step < TOTAL_STEPS ? (
              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--diic-blue)" }}
              >
                Continue <ArrowRight size={15} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="inline-flex items-center gap-2 px-7 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: "var(--diic-orange)" }}
              >
                {submitting ? (
                  <><Loader2 size={15} className="animate-spin" /> Submitting…</>
                ) : (
                  <>Submit Application <ArrowRight size={15} /></>
                )}
              </button>
            )}
          </div>

          {/* Step counter pill */}
          <p className="text-center mt-4 text-xs text-gray-400">
            Step {step} of {TOTAL_STEPS}
          </p>
        </div>
      </div>
    </section>
  )
}
