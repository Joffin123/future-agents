import Hero from "./components/Hero"
import WhoIsThisFor from "./components/WhoIsThisFor"
import SocialProof from "./components/SocialProof"
import WhyNow from "./components/WhyNow"
import Curriculum from "./components/Curriculum"
import Mentor from "./components/Mentor"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhoIsThisFor />
      <SocialProof />
      <WhyNow />
      <Curriculum />
      <Mentor />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default App
