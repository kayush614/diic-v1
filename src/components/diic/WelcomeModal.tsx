import { useState, useEffect } from "react"
import { X, MessageCircle, ArrowRight } from "lucide-react"

export default function WelcomeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen this modal before
    const hasSeenModal = localStorage.getItem("diic_welcome_modal_shown")
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
    // Mark as seen so it doesn't show again
    localStorage.setItem("diic_welcome_modal_shown", "true")
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="relative bg-white shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-1.5 transition-colors"
          aria-label="Close"
        >
          <X size={14} />
        </button>

        {/* Top banner with logo */}
        <div
          className="flex flex-col items-center justify-center py-8 px-6 gap-3"
          style={{ backgroundColor: "white" }}
        >
          <img
            src="/logo.jpg"
            alt="DIIC Logo"
            className="h-32 w-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center gap-4">
          <div>
            <h2 className="text-lg font-extrabold tracking-tight mb-1" style={{ color: "var(--diic-dark)" }}>
              Join Our WhatsApp Community
            </h2>
          </div>

          {/* QR Code Placeholder */}
          <div
            className="w-40 h-40 flex items-center justify-center border-2 bg-gray-50"
            style={{ borderColor: "var(--diic-blue)" }}
          >
            {/* Replace inner content with a real <img src="your-qr.png" /> when ready */}
            <svg width="100" height="100" viewBox="0 0 60 60" fill="none">
              <rect x="5" y="5" width="20" height="20" fill="var(--diic-dark)" />
              <rect x="9" y="9" width="12" height="12" fill="white" />
              <rect x="12" y="12" width="6" height="6" fill="var(--diic-dark)" />
              <rect x="35" y="5" width="20" height="20" fill="var(--diic-dark)" />
              <rect x="39" y="9" width="12" height="12" fill="white" />
              <rect x="42" y="12" width="6" height="6" fill="var(--diic-dark)" />
              <rect x="5" y="35" width="20" height="20" fill="var(--diic-dark)" />
              <rect x="9" y="39" width="12" height="12" fill="white" />
              <rect x="12" y="42" width="6" height="6" fill="var(--diic-dark)" />
              <rect x="35" y="35" width="6" height="6" fill="var(--diic-dark)" />
              <rect x="43" y="35" width="6" height="6" fill="var(--diic-dark)" />
              <rect x="35" y="43" width="6" height="6" fill="var(--diic-dark)" />
              <rect x="43" y="43" width="12" height="12" fill="var(--diic-dark)" />
              <rect x="35" y="51" width="6" height="6" fill="var(--diic-dark)" />
            </svg>
          </div>

          {/* Join Button */}
          <a
            href="#"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
            onClick={handleClose}
          >
            <MessageCircle size={16} />
            Join WhatsApp Community
            <ArrowRight size={15} className="ml-auto" />
          </a>

          <button
            onClick={handleClose}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
