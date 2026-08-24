import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import VideoSection from './components/VideoSection'
import Marquee from './components/Marquee'
import Identification from './components/Identification'
import MythBreak from './components/MythBreak'
import WhatIsIt from './components/WhatIsIt'
import Learnings from './components/Learnings'
import Chapters from './components/Chapters'
import Exercises from './components/Exercises'
import Transformation from './components/Transformation'
import ForYou from './components/ForYou'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Support from './components/Support'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

export default function App() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:bg-red focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:uppercase focus:tracking-wider focus:text-white"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido-principal" tabIndex={-1}>
        <Hero />
        <StatsStrip />
        <VideoSection />
        <Marquee />
        <Identification />
        <MythBreak />
        <WhatIsIt />
        <Learnings />
        <Chapters />
        <Exercises />
        <Transformation />
        <ForYou />
        <About />
        <Testimonials />
        <Pricing />
        <Support />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
