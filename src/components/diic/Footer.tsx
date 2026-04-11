import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer 
      className="py-6 transition-all duration-200"
      style={{ backgroundColor: "#1B4F9C" }}
    >
      <div className="max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-[11px] lg:text-[12px] text-white/90 font-medium whitespace-nowrap">
          © {currentYear} Delhi Innovation and Incubation Centre. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-[11px] lg:text-[12px] text-white font-medium">
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="#incubation" className="hover:text-white transition-colors">Incubation</a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="#mentors" className="hover:text-white transition-colors">Our Mentors</a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="#news" className="hover:text-white transition-colors">News & Articles</a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
