import './AuroraBackground.css'

export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <div className="ab-layer ab-l1" />
      <div className="ab-layer ab-l2" />
      <div className="ab-layer ab-l3" />
      <div className="ab-layer ab-l4" />
      <div className="ab-layer ab-l5" />
      <div className="ab-stars" />
      <svg
        className="ab-horizon"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="horizGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4956F" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0A0E27" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Horizon glow band */}
        <rect x="0" y="60" width="1440" height="80" fill="url(#horizGrad)" />
        {/* Hill silhouette */}
        <path
          d="M0,140 L0,100 C80,88 160,72 280,80 C400,88 480,105 600,95
             C720,85 840,65 960,75 C1080,85 1200,100 1320,88 C1380,82 1420,78 1440,76
             L1440,140 Z"
          fill="rgba(8,12,32,0.95)"
        />
      </svg>
    </div>
  )
}
