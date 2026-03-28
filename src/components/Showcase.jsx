import { motion } from 'framer-motion'
import AuroraCanvas from './AuroraCanvas'
import './Showcase.css'

const bullets = [
  'Five animated aurora bands, each tuned to a different color frequency',
  'Horizon warm-glow that breathes with the cycle',
  'Pseudo-random star field — always consistent, always beautiful',
  'Canvas-native rendering at 60 fps with zero layout thrash',
]

export default function Showcase() {
  return (
    <section className="section showcase" id="showcase">
      <div className="container showcase-inner">
        <motion.div
          className="showcase-canvas-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
        >
          <AuroraCanvas />
        </motion.div>

        <motion.div
          className="showcase-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="section-tag">Live Visualization</span>
          <h2 className="section-title">See the dawn in&nbsp;action</h2>
          <p className="section-subtitle">
            Every Aurora Nova experience is built the same way — layers of
            intention stacked with precision until something genuinely beautiful
            emerges.
          </p>
          <ul className="showcase-bullets">
            {bullets.map(b => (
              <li key={b}>
                <span className="sb-dot" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
