import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Values from './components/Values'
import TechStack from './components/TechStack'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Features />
        <Showcase />
        <Values />
        <TechStack />
        <CTA />
      </main>
      <Footer />

    </>
  )
}

export default App
