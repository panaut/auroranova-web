import { motion } from 'framer-motion'
import './TechStack.css'

const tech = [
  { name: 'React',       color: '#61DAFB', desc: 'UI components' },
  { name: 'Vite',        color: '#BD34FE', desc: 'Build tooling' },
  { name: 'TypeScript',  color: '#3178C6', desc: 'Type safety' },
  { name: 'Node.js',     color: '#68A063', desc: 'Server runtime' },
  { name: 'Framer',      color: '#FF0055', desc: 'Motion & animation' },
  { name: 'Tailwind',    color: '#38BDF8', desc: 'Utility CSS' },
  { name: 'PostgreSQL',  color: '#4169E1', desc: 'Data layer' },
  { name: 'Vercel',      color: '#F5F5F5', desc: 'Edge deployment' },
]

export default function TechStack() {
  return (
    <section className="section techstack" id="tech">
      <div className="container">
        <motion.div
          className="techstack-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Under the Hood</span>
          <h2 className="section-title">Built for tomorrow</h2>
          <p className="section-subtitle">
            Modern, battle-tested technology chosen for developer joy, user
            performance, and long-term adaptability.
          </p>
        </motion.div>

        <div className="tech-grid">
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              className="card tech-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <span className="tc-dot" style={{ background: t.color }} />
              <span className="tc-name">{t.name}</span>
              <span className="tc-desc">{t.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
