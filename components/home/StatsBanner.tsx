'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 10000, label: 'Guards Sold', suffix: '+' },
  { value: 500, label: 'Fleet Customers', suffix: '+' },
  { value: 15, label: 'Years Experience', suffix: '+' },
  { value: 4.9, label: 'Average Rating', suffix: '★', decimal: true },
]

function useCountUp(target: number, duration = 2000, start = false, decimal = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, start])

  return decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()
}

function StatItem({ value, label, suffix, decimal }: (typeof STATS)[0]) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 2000, inView, decimal)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: '900', lineHeight: '1', color: 'var(--text-primary)', marginBottom: '8px' }}>
        <span className="gradient-text-chrome">{count}</span>
        <span style={{ color: 'var(--blue-accent)' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  )
}

export default function StatsBanner() {
  return (
    <section
      className="stats-band"
      aria-label="Company Statistics"
      style={{ padding: '0', overflow: 'hidden', position: 'relative' }}
    >
      {/* Background gradient strip */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, transparent, rgba(74,158,255,0.04) 50%, transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container-full" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ borderRight: i < STATS.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          section[aria-label="Company Statistics"] .container-full > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
