import { useState, useEffect } from "react"
import Header from "@/components/diic/Header"
import Hero from "@/components/diic/Hero"
import HomeMainGrid from "@/components/diic/HomeMainGrid"
import About from "@/components/diic/About"
import Apply from "@/components/diic/Apply"
import Contact from "@/components/diic/Contact"
import ComingSoon from "@/components/diic/ComingSoon"
import WelcomeModal from "@/components/diic/WelcomeModal"
import Footer from "@/components/diic/Footer"

// All hash → page config in one place
const COMING_SOON_ROUTES: Record<string, { title: string; description?: string }> = {
  "#gallery":     { title: "Gallery",           description: "We're curating highlights from our events, workshops, and startup milestones. Our gallery is coming soon." },
  "#careers":     { title: "Careers",           description: "We'll be posting fellowship, internship, and full-time opportunities here. Stay tuned and check back soon." },
  "#partners":    { title: "Partners",           description: "A full directory of our industry, government, and academic partners is on its way. Watch this space." },
  "#join":        { title: "Join Our Network",  description: "Our network portal is under construction. You'll be able to register as a mentor, investor, or ecosystem partner here." },
  "#resources":   { title: "Resources",          description: "Handbooks, toolkits, and startup guides are being compiled for you. Coming very soon." },
  "#programs":    { title: "Programs",           description: "A detailed breakdown of all our incubation and capacity-building programs is on the way." },
  "#events":      { title: "Events",             description: "Our events calendar, registrations, and past event highlights will be available here soon." },
  "#incubation":  { title: "Incubation",         description: "Full details about our incubation cohorts, process, and how to apply are coming soon." },
  "#capacity-building": { title: "Capacity Building", description: "Workshops, bootcamps, and training schedules will be listed here once we launch this section." },
  "#social-entrepreneurship": { title: "Social Entrepreneurship", description: "Learn about our social impact programs and how we support purpose-driven startups. Section launching soon." },
}

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || "#home")

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash || "#home")
      window.scrollTo({ top: 0, behavior: "instant" })
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return hash
}

export default function App() {
  const route = useHashRoute()
  const isHome = route === "#home" || route === ""
  const isAbout = route === "#about"
  const isApply = route === "#apply"
  const isContact = route === "#contact"
  const comingSoon = COMING_SOON_ROUTES[route]

  // Show WelcomeModal only on home
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <div className="max-w-[1140px] mx-auto bg-white min-h-screen flex flex-col relative">
        {isHome && <WelcomeModal />}
        <Header />
        <main className="flex-1">
          <div key={route} className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            {isApply ? (
              <Apply />
            ) : isAbout ? (
              <About />
            ) : isContact ? (
              <Contact />
            ) : comingSoon ? (
              <ComingSoon title={comingSoon.title} description={comingSoon.description} />
            ) : (
              <>
                <Hero />
                <HomeMainGrid />
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
