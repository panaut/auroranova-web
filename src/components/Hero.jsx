import { motion } from 'framer-motion'
import AuroraBackground from './AuroraBackground'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
})

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <AuroraBackground />

      <div className="hero-content container">
        <motion.p className="hero-eyebrow" {...fadeUp(0.1)}>
          The New Dawn
        </motion.p>

        <motion.h1 className="hero-title" {...fadeUp(0.25)}>
          Where clarity{' '}
          <span className="gradient-text">emerges</span>
          <br />
          from complexity
        </motion.h1>

        <motion.p className="hero-body" {...fadeUp(0.4)}>
          Aurora Nova is the next-generation platform for teams who build
          beautiful, intelligent product experiences at the speed of thought.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.55)}>
          <a href="#cta" className="btn-primary">Launch your dawn ↗</a>
          <a href="#showcase" className="btn-secondary">Explore the vision</a>
        </motion.div>

        <motion.p className="hero-url" {...fadeUp(0.7)}>
          www.auroranova.tech
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
