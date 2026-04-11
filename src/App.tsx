import Header from "@/components/diic/Header"
import Hero from "@/components/diic/Hero"
import HomeMainGrid from "@/components/diic/HomeMainGrid"
import WelcomeModal from "@/components/diic/WelcomeModal"
import Footer from "@/components/diic/Footer"

export default function App() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <div className="max-w-[1140px] mx-auto bg-white min-h-screen flex flex-col relative">
        <WelcomeModal />
        <Header />
        <main className="flex-1">
          <Hero />
          <HomeMainGrid />
        </main>
      </div>
      <Footer />
    </div>
  )
}
