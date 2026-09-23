import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section
      aria-label="Call to Action"
      style={{
        background: 'linear-gradient(135deg, #0A1828 0%, #0D2040 40%, #0C1535 100%)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: 'var(--section-py) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow accents */}
      <div style={{
        position: 'absolute', top: '-50%', right: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(74,158,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(184,200,220,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-full" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: '20px' }}>
          Ready to Protect Your Truck?
        </div>
        <h2 className="text-display" style={{ marginBottom: '20px' }}>
          Don&apos;t Wait for the <span className="gradient-text-chrome">Next Close Call</span>
        </h2>
        <p className="text-subheading" style={{ maxWidth: '540px', margin: '0 auto 40px' }}>
          One deer strike can cost $15,000–$30,000 in repairs and weeks of downtime. A SemiDeerGuard pays for itself after the first incident.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/products" className="btn btn-primary btn-lg" id="cta-shop-now">
            Shop All Guards <ArrowRight size={18} />
          </Link>
          <a href="tel:+18005551234" className="btn btn-outline btn-lg" id="cta-call">
            <Phone size={18} /> Call 1-800-555-1234
          </a>
        </div>

        <p style={{ marginTop: '24px', fontSize: '13px', color: 'var(--text-muted)' }}>
          Free shipping on orders $500+ · 3-year warranty · Expert support
        </p>
      </div>
    </section>
  )
}
