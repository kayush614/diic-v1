import Header from "@/components/diic/Header"
import Hero from "@/components/diic/Hero"
import StatsBar from "@/components/diic/StatsBar"
import CardGrid from "@/components/diic/CardGrid"
import EventsAnnouncements from "@/components/diic/EventsAnnouncements"
import WelcomeModal from "@/components/diic/WelcomeModal"
import SupportedBy from "@/components/diic/SupportedBy"
import Footer from "@/components/diic/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <WelcomeModal />
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <CardGrid />
        <EventsAnnouncements />
        <SupportedBy />
      </main>
      <Footer />
    </div>
  )
}
