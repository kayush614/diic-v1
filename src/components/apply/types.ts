export interface ApplicationFormData {
  // Step 1 – Founder
  full_name: string
  email: string
  phone: string
  linkedin: string
  // Step 2 – Startup
  startup_name: string
  stage: string
  industry: string
  website: string
  team_size: string
  // Step 3 – Product
  problem: string
  solution: string
  usp: string
  market: string
  // Step 4 – Traction
  users: string
  revenue: string
  funding: string
  // Step 5 – Final
  reason: string
  pitch_deck: File | null
  agreed: boolean
}

export type FormErrors = Partial<Record<keyof ApplicationFormData, string>>

export const INITIAL_FORM_DATA: ApplicationFormData = {
  full_name: "", email: "", phone: "", linkedin: "",
  startup_name: "", stage: "", industry: "", website: "", team_size: "",
  problem: "", solution: "", usp: "", market: "",
  users: "", revenue: "", funding: "",
  reason: "", pitch_deck: null, agreed: false,
}

export const INDUSTRIES = [
  "AgriTech", "Clean Energy", "E-commerce", "EdTech", "FinTech",
  "FoodTech", "HealthTech", "Logistics", "Manufacturing", "Media & Entertainment",
  "Real Estate", "Social Impact", "SaaS / Software", "Other",
]

export const STAGES = ["Idea", "MVP", "Early Revenue", "Scaling"]

export const STEP_LABELS = [
  "Founder Info", "Startup Info", "Product", "Traction", "Submit",
]
