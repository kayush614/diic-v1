import { useState, useEffect } from "react"
import { X, MessageCircle } from "lucide-react"

export default function WelcomeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setOpen(false)

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="relative bg-white w-full max-w-sm shadow-xl animate-in zoom-in-95 fade-in duration-300">
        {/* Blue top accent bar */}
        <div className="h-1.5 w-full" style={{ backgroundColor: "var(--diic-blue)" }} />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header row: logo + text side by side */}
        <div className="flex items-center gap-4 px-6 pt-5 pb-4 border-b border-gray-100">
          <img
            src="/logo.jpeg"
            alt="DIIC"
            className="h-14 w-14 object-contain flex-shrink-0"
          />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
              Delhi Innovation & Incubation Centre
            </p>
            <h2 className="text-base font-extrabold leading-snug" style={{ color: "var(--diic-dark)" }}>
              Join our WhatsApp Community
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Stay connected with the latest updates, opportunities, and news from DIIC. Scan the code below to join.
          </p>

          {/* QR + label row */}
          <div className="flex items-start gap-5 mb-5">
            {/* QR placeholder — replace svg with <img src="qr.png"> when ready */}
            <div className="flex-shrink-0 w-28 h-28 border border-gray-200 flex items-center justify-center bg-gray-50">
              <svg width="80" height="80" viewBox="0 0 60 60" fill="none">
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

            <div className="pt-1">
              <div className="flex items-center gap-1.5 mb-2">
                <MessageCircle size={14} className="text-green-600" />
                <span className="text-xs font-bold text-green-700">WhatsApp</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Open your phone camera and point it at the QR code to join directly.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={15} />
            Join on WhatsApp
          </a>

          {/* Dismiss */}
          <div className="text-center mt-3">
            <button
              onClick={handleClose}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
