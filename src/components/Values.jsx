import { motion } from 'framer-motion'
import './Values.css'

const values = [
  {
    color: 'rgba(29,217,255,0.15)',
    icon: '◎',
    title: 'Clarity',
    desc: 'No fog, no fluff. Just signal. Every decision is transparent and traceable to user value.',
  },
  {
    color: 'rgba(155,77,135,0.15)',
    icon: '⚡',
    title: 'Velocity',
    desc: 'Fast without frantic. Steady, inevitable momentum — like a dawn that cannot be stopped.',
  },
  {
    color: 'rgba(212,149,111,0.15)',
    icon: '✦',
    title: 'Emergence',
    desc: 'Design and code dance together. Systems grow organically from first principles, not templates.',
  },
  {
    color: 'rgba(29,217,255,0.10)',
    icon: '◈',
    title: 'Impact',
    desc: 'Every decision echoes in user delight. We ship things that matter, and we measure them honestly.',
  },
]

export default function Values() {
  return (
    <section className="section values" id="values">
      <div className="container">
        <motion.div
          className="values-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Principles</span>
          <h2 className="section-title">The Aurora code</h2>
          <p className="section-subtitle">
            Four principles that guide everything from a micro-interaction to a product strategy.
          </p>
        </motion.div>

        <div className="values-grid">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              className="card values-card"
              style={{ '--vc-bg': v.color }}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <span className="vc-icon">{v.icon}</span>
              <h3 className="vc-title">{v.title}</h3>
              <p className="vc-desc">{v.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
