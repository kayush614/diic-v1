import { MapPin, Mail } from "lucide-react"

const contactDetails = [
  {
     icon: MapPin,
     label: "Address",
     lines: [
       "D-95",
       "Sector-105",
       "Noida, Uttar Pradesh",
       "Pin : 201304",
     ],
   },
  {
    icon: Mail,
    label: "Email",
    lines: ["contact@diic.co.in"],
    href: "mailto:contact@diic.co.in",
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


    </div>
  )
}
