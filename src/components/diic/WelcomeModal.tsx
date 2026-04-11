import { useState, useEffect } from "react"
import { X, MessageCircle, Users, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "diic-welcome-shown"

export default function WelcomeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setOpen(true)
      }
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setOpen(false)
    localStorage.setItem(STORAGE_KEY, "true")
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div
        className="relative bg-card shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 fade-in duration-300"
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {/* Top gradient banner */}
        <div
          className="relative h-28 flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--diic-dark) 0%, var(--diic-blue) 60%, var(--diic-blue-medium) 100%)",
          }}
        >
          {/* Pattern */}
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="modal-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#modal-dots)" />
            </svg>
          </div>
          <div className="relative flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="DIIC Logo"
              className="h-16 w-16 object-contain drop-shadow-lg"
            />
            <div className="text-white">
              <div className="font-extrabold text-lg leading-tight">DIIC</div>
              <div className="text-xs text-blue-200 font-medium">Delhi Innovation &</div>
              <div className="text-xs text-blue-200 font-medium">Incubation Centre</div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 transition-colors"
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2
            className="text-xl font-extrabold tracking-tight mb-2 text-center"
            style={{ color: "var(--diic-dark)" }}
          >
            Join Our Innovation Community
          </h2>
          <p className="text-sm text-muted-foreground text-center leading-relaxed mb-5">
            Connect with entrepreneurs, mentors & innovators from Delhi's leading startup ecosystem. Get
            exclusive updates, opportunities & resources.
          </p>

          {/* Feature points */}
          <div className="flex flex-col gap-2.5 mb-5">
            {[
              { icon: Users, text: "500+ Members in our Innovation Network" },
              { icon: Lightbulb, text: "Exclusive startup opportunities & funding alerts" },
              { icon: MessageCircle, text: "Direct connect with mentors & investors" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--diic-blue-light)" }}
                  >
                    <Icon size={14} style={{ color: "var(--diic-blue)" }} />
                  </div>
                  <span className="text-xs text-foreground/80">{item.text}</span>
                </div>
              )
            })}
          </div>

          {/* QR Code Section */}
          <div
            className="p-4 mb-4 text-center"
            style={{ backgroundColor: "var(--diic-blue-light)" }}
          >
            <div className="flex items-center justify-center gap-4">
              {/* QR placeholder */}
              <div
                className="w-20 h-20 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "white", border: "2px solid var(--diic-blue)" }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Simplified QR pattern */}
                  <rect x="5" y="5" width="20" height="20" rx="2" fill="var(--diic-dark)" />
                  <rect x="9" y="9" width="12" height="12" rx="1" fill="white" />
                  <rect x="12" y="12" width="6" height="6" fill="var(--diic-dark)" />
                  <rect x="35" y="5" width="20" height="20" rx="2" fill="var(--diic-dark)" />
                  <rect x="39" y="9" width="12" height="12" rx="1" fill="white" />
                  <rect x="42" y="12" width="6" height="6" fill="var(--diic-dark)" />
                  <rect x="5" y="35" width="20" height="20" rx="2" fill="var(--diic-dark)" />
                  <rect x="9" y="39" width="12" height="12" rx="1" fill="white" />
                  <rect x="12" y="42" width="6" height="6" fill="var(--diic-dark)" />
                  <rect x="35" y="35" width="6" height="6" fill="var(--diic-dark)" />
                  <rect x="43" y="35" width="6" height="6" fill="var(--diic-dark)" />
                  <rect x="35" y="43" width="6" height="6" fill="var(--diic-dark)" />
                  <rect x="43" y="43" width="12" height="12" fill="var(--diic-dark)" />
                  <rect x="35" y="51" width="6" height="6" fill="var(--diic-dark)" />
                </svg>
              </div>
              <div className="text-left">
                <div
                  className="flex items-center gap-1 text-xs font-bold mb-1"
                  style={{ color: "var(--diic-blue)" }}
                >
                  <MessageCircle size={13} />
                  WhatsApp Community
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  Scan the QR code or click the button below to join our WhatsApp innovation community.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2">
            <Button
              className="w-full font-semibold text-sm"
              style={{ backgroundColor: "var(--diic-orange)", color: "white" }}
              onClick={handleClose}
            >
              <MessageCircle size={15} className="mr-2" />
              Join WhatsApp Community
              <ArrowRight size={14} className="ml-auto" />
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground" onClick={handleClose}>
              Maybe later
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
