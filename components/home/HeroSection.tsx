'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Zap } from 'lucide-react'

const BRANDS = ['Volvo', 'Kenworth', 'Freightliner', 'Peterbilt', 'Mack']

export default function HeroSection() {
  return (
    <section
      className="hero-bg hero-section"
      aria-label="Hero"
    >
      {/* Grid overlay texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(74,158,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(74,158,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Animated orb */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(74,158,255,0.12) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)',
        borderRadius: '50%',
        animation: 'floatOrb 8s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      <div className="container-full" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(28px, 5vw, 56px)', paddingBottom: 'clamp(48px, 6vw, 72px)' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Label */}
          <div className="section-label animate-fade-in-up" style={{ marginBottom: '16px' }}>
            Heavy-Duty Front-End Protection
          </div>

          {/* Main Headline */}
          <h1 className="text-hero animate-fade-in-up anim-delay-100" style={{ marginBottom: '22px' }}>
            <span style={{ display: 'block', color: 'var(--text-primary)' }}>Guard Your</span>
            <span style={{ display: 'block' }} className="gradient-text-chrome">Semi Truck.</span>
            <span style={{ display: 'block', color: 'var(--text-primary)' }}>Guard Your</span>
            <span style={{ display: 'block', color: 'var(--blue-accent)' }}>Livelihood.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-subheading animate-fade-in-up anim-delay-200" style={{ maxWidth: '560px', marginBottom: '32px' }}>
            Premium deer guards engineered for Volvo, Kenworth, and Freightliner semi trucks. CAS-compatible, heavy-gauge steel. Protect your investment from costly front-end damage.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up anim-delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <Link href="/products" className="btn btn-primary btn-lg" id="hero-shop-cta">
              Shop Deer Guards <ArrowRight size={18} />
            </Link>
            <Link href="/trucks" className="btn btn-outline btn-lg" id="hero-truck-cta">
              Browse by Truck Brand
            </Link>
          </div>

          {/* Brand Chips */}
          <div className="animate-fade-in-up anim-delay-400">
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Fits your truck:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {BRANDS.map((brand) => (
                <Link
                  key={brand}
                  href={`/trucks/${brand.toLowerCase()}`}
                  style={{
                    padding: '8px 18px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '99px',
                    fontSize: '13px', fontWeight: '600',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-normal)',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--blue-accent)'
                    e.currentTarget.style.color = 'var(--blue-accent)'
                    e.currentTarget.style.background = 'var(--bg-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-default)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                  }}
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust mini-badges */}
          <div className="animate-fade-in-up anim-delay-500" style={{ display: 'flex', gap: '28px', marginTop: '48px', flexWrap: 'wrap' }}>
            {[
              { icon: Shield, label: '3-Year Warranty' },
              { icon: Zap, label: 'CAS Compatible' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
                <Icon size={15} color="var(--blue-accent)" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, var(--bg-base), transparent)', pointerEvents: 'none', zIndex: 2 }} />

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
