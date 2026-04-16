import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type Status = "idle" | "loading" | "success" | "error"

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = "Name is required."
  if (!data.email.trim()) {
    errors.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address."
  }
  if (!data.message.trim()) errors.message = "Message is required."
  return errors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("loading")

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || null,
          message: formData.message.trim(),
        },
      ])

      if (error) throw error

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      console.error("[ContactForm] Supabase insert error:", err)
      setStatus("error")
    }
  }

  const inputBase =
    "w-full border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1"

  return (
    <div className="flex flex-col gap-6">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-extrabold tracking-tight mb-3" style={{ color: "var(--diic-dark)" }}>
          Send Us a Message
        </h2>
        <div className="h-1 w-10 mb-5" style={{ backgroundColor: "var(--diic-blue)" }} />
        <p className="text-sm text-gray-500 leading-relaxed">
          Fill in the form below and we'll get back to you within 24–48 hours.
        </p>
      </div>

      {/* Success */}
      {status === "success" && (
        <div className="flex items-start gap-3 p-4 border border-green-100 bg-green-50 text-green-700 animate-in fade-in duration-300">
          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-bold">Message sent!</p>
            <p className="opacity-90">Thank you for reaching out. Our team will contact you soon.</p>
          </div>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 border border-red-100 bg-red-50 text-red-700 animate-in fade-in duration-300">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-bold">Submission failed</p>
            <p className="opacity-90">Please try again or email us at hello@innovationcentre.io.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            className={`${inputBase} ${
              errors.name 
                ? "border-red-300 focus:border-red-400 focus:ring-red-100" 
                : "border-gray-200 focus:border-[#1b4a92] focus:ring-[#1b4a92]/10"
            }`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@startup.com"
            value={formData.email}
            onChange={handleChange}
            className={`${inputBase} ${
              errors.email 
                ? "border-red-300 focus:border-red-400 focus:ring-red-100" 
                : "border-gray-200 focus:border-[#1b4a92] focus:ring-[#1b4a92]/10"
            }`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={handleChange}
            className={`${inputBase} border-gray-200 focus:border-[#1b4a92] focus:ring-[#1b4a92]/10`}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Tell us about your query..."
            value={formData.message}
            onChange={handleChange}
            className={`${inputBase} resize-none ${
              errors.message 
                ? "border-red-300 focus:border-red-400 focus:ring-red-100" 
                : "border-gray-200 focus:border-[#1b4a92] focus:ring-[#1b4a92]/10"
            }`}
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 text-sm font-bold uppercase tracking-widest text-white transition-all hover:opacity-90 disabled:opacity-60 active:scale-[0.99] shadow-sm"
          style={{ backgroundColor: "var(--diic-blue)" }}
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting…
            </>
          ) : (
            <>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
