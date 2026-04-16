import { CheckCircle2 } from "lucide-react"
import { STEP_LABELS } from "./types"

interface Props {
  currentStep: number // 1-indexed
}

export default function FormStepper({ currentStep }: Props) {
  const total = STEP_LABELS.length
  const progress = ((currentStep - 1) / (total - 1)) * 100

  return (
    <div className="mb-8 select-none">
      {/* Progress bar */}
      <div className="h-1 bg-gray-100 mb-6 overflow-hidden">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: "var(--diic-blue)",
          }}
        />
      </div>

      {/* Step circles */}
      <div className="flex items-start justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-4 left-0 right-0 h-px bg-gray-200 z-0" />

        {STEP_LABELS.map((label, i) => {
          const stepNum = i + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep

          return (
            <div
              key={stepNum}
              className="relative z-10 flex flex-col items-center gap-2 flex-1"
            >
              {/* Circle */}
              <div
                className="w-8 h-8 flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={{
                  backgroundColor: isCompleted || isCurrent
                    ? "var(--diic-blue)"
                    : "white",
                  color: isCompleted || isCurrent ? "white" : "#9ca3af",
                  border: `2px solid ${isCompleted || isCurrent ? "var(--diic-blue)" : "#e5e7eb"}`,
                  borderRadius: 0,
                }}
              >
                {isCompleted ? (
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                ) : (
                  stepNum
                )}
              </div>

              {/* Label – hidden on small screens */}
              <span
                className={`hidden sm:block text-[10px] font-semibold uppercase tracking-wider text-center leading-tight transition-colors ${
                  isCurrent
                    ? "text-[var(--diic-blue)]"
                    : isCompleted
                    ? "text-gray-500"
                    : "text-gray-300"
                }`}
              >
                {label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Mobile: current step label */}
      <p className="sm:hidden mt-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--diic-blue)]">
        Step {currentStep} of {total}: {STEP_LABELS[currentStep - 1]}
      </p>
    </div>
  )
}
