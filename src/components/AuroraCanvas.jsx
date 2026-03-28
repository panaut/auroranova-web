import { useRef, useEffect } from 'react'

const BANDS = [
  { y: 0.38, c1: '#6B2E7E', c2: '#1DD9FF', phase: 0.0, speed: 0.22, amp: 0.07 },
  { y: 0.46, c1: '#1DD9FF', c2: '#9B4D87', phase: 1.5, speed: 0.16, amp: 0.09 },
  { y: 0.54, c1: '#4A1B5F', c2: '#FFA500', phase: 0.8, speed: 0.28, amp: 0.05 },
  { y: 0.42, c1: '#D4956F', c2: '#6B2E7E', phase: 2.1, speed: 0.20, amp: 0.07 },
  { y: 0.50, c1: '#9B4D87', c2: '#1DD9FF', phase: 3.2, speed: 0.12, amp: 0.06 },
]

const getWaveY = (xn, centerY, amp, phase, t, speed) =>
  centerY +
  Math.sin(xn * 12.56 + phase + t * speed) * amp +
  Math.sin(xn * 8.38 + phase * 1.3 + t * speed * 0.6) * amp * 0.45

export default function AuroraCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let t = 0

    // Stable pseudo-random star positions (index-seeded)
    const STARS = Array.from({ length: 90 }, (_, i) => ({
      x: (Math.sin(i * 127.1 + 1) * 0.5 + 0.5),
      y: (Math.sin(i * 311.7 + 2) * 0.5 + 0.5) * 0.65,
      r: (Math.sin(i * 74.7 + 3) * 0.5 + 0.5) * 1.4 + 0.4,
      a: (Math.sin(i * 43.3 + 4) * 0.5 + 0.5) * 0.5 + 0.25,
    }))

    const ro = new ResizeObserver(() => {
      canvas.width  = canvas.parentElement?.offsetWidth  || 800
      canvas.height = canvas.parentElement?.offsetHeight || 420
    })
    ro.observe(canvas.parentElement)
    canvas.width  = canvas.parentElement?.offsetWidth  || 800
    canvas.height = canvas.parentElement?.offsetHeight || 420

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      // Background
      const bg = ctx.createLinearGradient(0, 0, 0, H)
      bg.addColorStop(0,   '#0A0E27')
      bg.addColorStop(0.6, '#1A1A3E')
      bg.addColorStop(1,   '#0A0E27')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Stars
      STARS.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.fill()
      })

      // Aurora bands
      BANDS.forEach((band, bi) => {
        const centerY = band.y * H
        const ampPx   = band.amp * H
        const thick   = H * 0.075
        const steps   = 160

        ctx.save()
        ctx.shadowBlur  = 28
        ctx.shadowColor = band.c1

        const grad = ctx.createLinearGradient(0, 0, W, 0)
        grad.addColorStop(0,    band.c1 + '00')
        grad.addColorStop(0.12, band.c1 + 'cc')
        grad.addColorStop(0.5,  band.c2 + 'ee')
        grad.addColorStop(0.88, band.c1 + 'cc')
        grad.addColorStop(1,    band.c1 + '00')

        ctx.beginPath()
        for (let s = 0; s <= steps; s++) {
          const x  = (s / steps) * W
          const xn = s / steps
          const y  = getWaveY(xn, centerY, ampPx, band.phase, t, band.speed) - thick / 2
          s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        for (let s = steps; s >= 0; s--) {
          const x  = (s / steps) * W
          const xn = s / steps
          const y  = getWaveY(xn, centerY, ampPx, band.phase, t, band.speed) + thick / 2
          ctx.lineTo(x, y)
        }
        ctx.closePath()

        ctx.globalAlpha = 0.7 + Math.sin(t * 0.6 + bi * 1.2) * 0.18
        ctx.fillStyle   = grad
        ctx.fill()
        ctx.restore()
      })

      // Warm horizon glow
      const hg = ctx.createLinearGradient(0, H * 0.6, 0, H)
      hg.addColorStop(0,   'rgba(212,149,111,0.22)')
      hg.addColorStop(0.5, 'rgba(255,165,0,0.10)')
      hg.addColorStop(1,   'rgba(10,14,39,0)')
      ctx.fillStyle = hg
      ctx.fillRect(0, H * 0.55, W, H * 0.45)

      t += 0.009
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%' }}
      aria-label="Animated aurora borealis visualization"
    />
  )
}
