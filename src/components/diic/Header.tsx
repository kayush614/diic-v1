import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterXIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 py-4 lg:py-5 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
        {/* Logo + Name */}
        <a href="#home" className="flex-shrink-0 flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="DIIC"
            className="h-28 w-auto lg:h-32 object-contain object-left"
          />
          {/* Institution Name */}
          <div className="hidden sm:flex flex-col justify-center gap-1.5 ml-1">
            <span className="text-[36px] lg:text-[42px] font-black text-[#1b4a92] leading-none tracking-tight">DIIC</span>
            <div className="w-8 h-[3px] rounded-full bg-[#f26e21]" />
            <span className="text-[11px] lg:text-[12.5px] font-medium text-gray-500 tracking-[0.12em] uppercase">Delhi Innovation and Incubation Centre</span>
          </div>
        </a>

        {/* Navigation - Desktop */}
        <div className="hidden lg:flex flex-col items-end justify-between py-2 flex-grow ml-4 self-stretch">
          {/* Top Links & Socials Row */}
          <div className="flex items-center pt-3 relative">
            <div className="absolute -top-3 left-[-40px] right-[-100vw] h-[6px] bg-[#1b4a92]"></div>
            <div className="flex items-center text-[13px] lg:text-[15px] text-gray-500 font-medium">
              <a href="#home" className="hover:text-[#1b4a92] px-2.5 transition-colors">Home</a>
              <span className="text-gray-300">|</span>
              <a href="#contact" className="hover:text-[#1b4a92] px-2.5 transition-colors">Contact Us</a>
              <span className="text-gray-300">|</span>
              <a href="#apply" className="text-[#f26e21] font-semibold px-2.5 hover:text-[#1b4a92] transition-colors">Apply for Incubation</a>
              <span className="text-gray-300">|</span>
              <div className="flex items-center pl-2.5 gap-2">
                <span>Follow us on</span>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <a href="https://www.linkedin.com/company/delhi-innovation-and-incubation-centre/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#1b4a92] transition-colors"><LinkedInIcon /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-[#1DA1F2] transition-colors"><TwitterXIcon /></a>
                  <a href="#" aria-label="YouTube" className="hover:text-[#FF0000] transition-colors"><YoutubeIcon /></a>
                </div>
              </div>
            </div>
          </div>
 
          {/* Main Nav Row */}
          <div className="flex items-center justify-end flex-wrap gap-x-2 gap-y-3 mt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[14px] lg:text-[16px] font-bold uppercase tracking-wider text-[#1b4a92] hover:text-[#f26e21] px-2 py-1 transition-colors whitespace-nowrap group"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-2 right-2 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: "#f26e21" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden ml-auto">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-[#004b87]">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0 bg-white text-[#1b4a92]">
              <SheetHeader className="p-4 pb-2 border-b border-gray-100 bg-white">
                <SheetTitle className="flex items-center gap-3">
                  <img
                    src="/logo.jpg"
                    alt="DIIC"
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-[#1b4a92] font-extrabold text-lg">DIIC</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-2 overflow-y-auto bg-white">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-bold uppercase tracking-wider py-3 px-5 hover:bg-gray-50 text-[#1b4a92] transition-colors border-b border-border/40"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="p-4 mt-2">
                  <Button
                    className="w-full font-semibold bg-[#f26e21] hover:bg-[#d95d18] text-white"
                    onClick={() => {
                      window.location.hash = "#apply"
                      setMobileOpen(false)
                    }}
                  >
                    Apply for Incubation
                  </Button>
                </div>
                <div className="px-5 pb-4 flex flex-col gap-3 mt-2 bg-white">
                  <a href="#home" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-500 hover:text-[#1b4a92]">Home</a>
                  <a href="#contact" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-500 hover:text-[#1b4a92]">Contact Us</a>
                  
                  <div className="flex items-center gap-4 mt-4 text-gray-500">
                    <a href="https://www.linkedin.com/company/delhi-innovation-and-incubation-centre/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#1b4a92] transition-colors"><LinkedInIcon /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-[#1DA1F2] transition-colors"><TwitterXIcon /></a>
                    <a href="#" aria-label="YouTube" className="hover:text-[#FF0000] transition-colors"><YoutubeIcon /></a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
