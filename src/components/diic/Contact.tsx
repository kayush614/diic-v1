import ContactInfo from "@/components/diic/ContactInfo"
import ContactForm from "@/components/diic/ContactForm"

export default function Contact() {
  return (
    <section className="pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Hero / Page Header - Matching Apply Page Style */}
      <div 
        className="py-12 px-4 mb-10 text-center"
        style={{ backgroundColor: "var(--diic-blue)" }}
      >
        <p className="text-blue-200 text-xs uppercase tracking-widest font-semibold mb-2">
          DIIC – Innovation Centre
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Contact Us
        </h1>
        <p className="text-blue-100/80 mt-3 text-sm max-w-xl mx-auto">
          We'd love to hear from you. Reach out with questions, collaborations, or just to say hello.
        </p>
      </div>

      {/* Main content centered with restricted width to match Apply page feel */}
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="bg-white border border-gray-100 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <ContactInfo />

          {/* Right: Contact Form */}
          <div className="lg:border-l lg:pl-16 border-gray-100 h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
