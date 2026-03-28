import { useState } from 'react'
import { motion } from 'framer-motion'
import './CTA.css'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // Replace with real form submission (e.g. Netlify Forms, Formspree)
    setSent(true)
  }

  return (
    <section className="section cta-section" id="cta">
      <div className="container">
        <motion.div
          className="card cta-card"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Aurora border glow */}
          <div className="cta-glow" aria-hidden="true" />

          <span className="section-tag">Early Access</span>
          <h2 className="cta-title gradient-text">Join the Aurora</h2>
          <p className="cta-body">
            Be among the first to build with Aurora Nova. No noise — just
            a single message when the doors open.
          </p>

          {sent ? (
            <motion.p
              className="cta-confirm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ✦ You&apos;re on the list. The dawn is coming.
            </motion.p>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit} name="aurora-signup" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="aurora-signup" />
              <input
                type="email"
                name="email"
                className="cta-input"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary">
                Start Dawn →
              </button>
            </form>
          )}

          <p className="cta-proof">Already joined by curious builders and visionary founders.</p>
        </motion.div>
      </div>
    </section>
  )
}
