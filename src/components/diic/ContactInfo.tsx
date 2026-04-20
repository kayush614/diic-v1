import { MapPin, Mail, Phone } from "lucide-react"

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

      {/* Google Maps Embed - Simple Border */}
      <div className="mt-4 rounded border border-gray-100 overflow-hidden shadow-sm">
        <iframe
          title="Innovation Centre Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.606283286576!2d77.3734674!3d28.5513511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f16e45f3df%3A0x67396a8697666249!2sD-95%2C%20Sector%20105%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1713596160123!5m2!1sen!2sin"
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
