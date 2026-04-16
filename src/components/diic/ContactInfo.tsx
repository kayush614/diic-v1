import { MapPin, Mail, Phone, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "123 Innovation Way",
      "Tech City, Digital State",
      "United States – 94043",
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["hello@innovationcentre.io"],
    href: "mailto:hello@innovationcentre.io",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+1 (555) 123-4567"],
    href: "tel:+15551234567",
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Monday – Friday: 9:00 AM – 6:00 PM", "Saturday: 11:00 AM – 3:00 PM", "Sunday: Closed"],
  },
]

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-extrabold tracking-tight mb-3" style={{ color: "var(--diic-dark)" }}>
          Get in Touch
        </h2>
        <div className="h-1 w-10 mb-5" style={{ backgroundColor: "var(--diic-orange)" }} />
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
          Reach out to us for inquiries about incubation, partnerships, events, or any other queries.
        </p>
      </div>

      {/* Contact Items - Simple List Style */}
      <div className="flex flex-col gap-8">
        {contactDetails.map(({ icon: Icon, label, lines, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
               <Icon className="w-5 h-5" style={{ color: "var(--diic-blue)" }} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
              {lines.map((line, i) =>
                href && i === 0 ? (
                  <a
                    key={i}
                    href={href}
                    className="block text-[15px] text-gray-800 font-semibold hover:opacity-80 transition-opacity"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={i} className="text-[14px] text-gray-600 leading-relaxed">
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Google Maps Embed - Simple Border */}
      <div className="mt-4 rounded border border-gray-100 overflow-hidden shadow-sm">
        <iframe
          title="Innovation Centre Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290622367!2d-122.0837468!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbba393d6b797%3A0x6b4904533da8020d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1713243200000!5m2!1sen!2sus"
          width="100%"
          height="200"
          style={{ border: 0, filter: "grayscale(10%) contrast(90%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </div>
  )
}
