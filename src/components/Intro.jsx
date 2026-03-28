import { motion } from 'framer-motion'
import './Intro.css'

export default function Intro() {
  return (
    <section className="section intro" id="intro">
      <div className="container intro-inner">
        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Our Mission</span>
          <h2 className="section-title">What is Aurora Nova?</h2>
          <p className="section-subtitle">
            Aurora Nova is a platform where strategy, design, and engineering
            converge. Like a new dawn breaking through the night sky, we illuminate
            the path from raw idea to polished product — with clarity, velocity, and
            a relentless focus on what matters most: your users.
          </p>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            We believe great products are born at the intersection of{' '}
            <a href="#features" className="intro-link">strategic vision</a>,{' '}
            <a href="#showcase" className="intro-link">emergent design</a>, and{' '}
            <a href="#tech" className="intro-link">engineering precision</a>.
          </p>
        </motion.div>

        <motion.div
          className="intro-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-hidden="true"
        >
          {/* Decorative aurora arc */}
          <svg viewBox="0 0 400 300" className="intro-arc" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="arcG1" cx="50%" cy="80%" r="60%">
                <stop offset="0%" stopColor="#6B2E7E" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1DD9FF" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="arcG2" cx="50%" cy="70%" r="50%">
                <stop offset="0%" stopColor="#1DD9FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#6B2E7E" stopOpacity="0" />
              </radialGradient>
              <filter id="arcBlur">
                <feGaussianBlur stdDeviation="12" />
              </filter>
            </defs>
            <ellipse cx="200" cy="240" rx="180" ry="120" fill="url(#arcG1)" filter="url(#arcBlur)" />
            <ellipse cx="200" cy="200" rx="130" ry="80" fill="url(#arcG2)" filter="url(#arcBlur)" />
            {/* Aurora arc paths */}
            <path d="M 20 200 Q 100 100 200 80 Q 300 60 380 160"
              stroke="#1DD9FF" strokeWidth="2" strokeOpacity="0.6"
              fill="none" strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M 40 220 Q 120 120 200 100 Q 290 80 370 180"
              stroke="#9B4D87" strokeWidth="1.5" strokeOpacity="0.5"
              fill="none" strokeDasharray="4 6">
              <animate attributeName="stroke-dashoffset" from="0" to="80" dur="5s" repeatCount="indefinite" />
            </path>
            <path d="M 60 240 Q 130 140 200 120 Q 280 100 360 200"
              stroke="#D4956F" strokeWidth="1" strokeOpacity="0.4"
              fill="none" strokeDasharray="8 4">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="6s" repeatCount="indefinite" />
            </path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
