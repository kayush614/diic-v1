import { Clock, ArrowLeft } from "lucide-react"

interface ComingSoonProps {
  title: string
  description?: string
}

export default function ComingSoon({
  title,
  description = "We're working hard to bring this section to life. Check back soon for updates.",
}: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] py-20 px-4 bg-white">
      <div className="text-center max-w-xl mx-auto space-y-6">

        {/* Animated clock badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest border"
          style={{
            color: "var(--diic-orange)",
            borderColor: "var(--diic-orange-light)",
            backgroundColor: "var(--diic-orange-light)",
          }}
        >
          <Clock size={14} className="animate-pulse" />
          Coming Soon
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight"
          style={{ color: "var(--diic-dark)" }}
        >
          {title}
        </h1>

        {/* Accent line */}
        <div
          className="mx-auto h-1 w-16"
          style={{ backgroundColor: "var(--diic-blue)" }}
        />

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>

        {/* Back button */}
        <div className="pt-4">
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--diic-blue)" }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
