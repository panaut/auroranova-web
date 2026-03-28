import { motion } from 'framer-motion'
import './Features.css'

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 6L6 18v22h12V28h12v12h12V18L24 6z" stroke="#1DD9FF" strokeWidth="1.8"
          strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="14" r="3" fill="#1DD9FF" fillOpacity="0.6" />
        <path d="M12 38V24M36 38V24" stroke="#1DD9FF" strokeWidth="1.5" strokeOpacity="0.4" />
      </svg>
    ),
    title: 'Horizon Vision',
    desc: 'Strategic clarity for complex products. We map the terrain before the first line of code — so every decision is grounded, every step deliberate.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 24h10l5-10 6 20 5-14 4 8 4-4" stroke="#1DD9FF" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="8" r="5" stroke="#1DD9FF" strokeWidth="1.5" fill="none" />
        <path d="M36 12l-6 6" stroke="#1DD9FF" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
    title: 'Light Velocity',
    desc: 'Implementation speed that never sacrifices quality. Ship with the rhythm of dawn — steady, inevitable, and breathtakingly efficient.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 8c0 0-8 6-8 14s8 12 8 12 8-4 8-12S24 8 24 8z" stroke="#1DD9FF" strokeWidth="1.8"
          fill="none" />
        <path d="M24 20v12M18 26h12" stroke="#1DD9FF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="40" r="3" fill="#1DD9FF" fillOpacity="0.5" />
        <path d="M16 38c-5-2-8-6-8-12 0-8 8-8 8-8M32 38c5-2 8-6 8-12 0-8-8-8-8-8"
          stroke="#1DD9FF" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
      </svg>
    ),
    title: 'Emergent Design',
    desc: 'Systems that grow with your needs. Design and code dance in perfect sync — producing experiences users feel before they fully understand.',
  },
]

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <motion.div
          className="features-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">What we bring to the table</h2>
        </motion.div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              className="card features-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="fc-icon">{f.icon}</div>
              <h3 className="fc-title">{f.title}</h3>
              <p className="fc-desc">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
