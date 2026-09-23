import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BRANDS = [
  {
    name: 'Volvo',
    href: '/trucks/volvo',
    description: 'VNL, VNM, VNX Series',
    color: '#005B9A',
    models: 'VNL 760, VNL 860, VNX 400',
    emoji: '🔵',
  },
  {
    name: 'Kenworth',
    href: '/trucks/kenworth',
    description: 'T680, T880, W900',
    color: '#0066CC',
    models: 'T680, T880, W900, T370',
    emoji: '⚡',
  },
  {
    name: 'Freightliner',
    href: '/trucks/freightliner',
    description: 'Cascadia, Coronado, 114SD',
    color: '#D4010F',
    models: 'Cascadia, Coronado, 114SD',
    emoji: '🔴',
  },
  {
    name: 'Peterbilt',
    href: '/trucks/peterbilt',
    description: '389, 579, 567 Series',
    color: '#C0292C',
    models: '389, 579, 567, 337',
    emoji: '🚛',
  },
  {
    name: 'Mack',
    href: '/trucks/mack',
    description: 'Anthem, Pinnacle, Granite',
    color: '#F5A623',
    models: 'Anthem, Pinnacle, Granite',
    emoji: '🐂',
  },
  {
    name: 'International',
    href: '/trucks/international',
    description: 'LT Series, RH Series',
    color: '#CC2828',
    models: 'LT625, LT680, RH',
    emoji: '🏗️',
  },
]

export default function TruckBrandFilter() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-surface)' }} aria-label="Shop by truck brand">
      <div className="container-full">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Guaranteed Perfect Fit
          </div>
          <h2 className="text-display" style={{ marginBottom: '16px' }}>
            Shop By Your <span className="gradient-text-chrome">Truck Brand</span>
          </h2>
          <p className="text-subheading" style={{ maxWidth: '560px', margin: '0 auto' }}>
            Every guard is engineered to exact vehicle specifications — no universal fits, no compromises.
          </p>
        </div>

        <div className="brands-grid">
          {BRANDS.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              style={{ textDecoration: 'none', display: 'block', minWidth: 0, width: '100%' }}
            >
              <div
                className="brand-card"
                role="button"
                id={`brand-${brand.name.toLowerCase()}`}
              >
                {/* Icon */}
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '14px',
                  background: `${brand.color}18`,
                  border: `1px solid ${brand.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '26px',
                  transition: 'transform var(--transition-normal)',
                }}>
                  {brand.emoji}
                </div>

                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 'clamp(18px, 4.5vw, 24px)',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                  letterSpacing: '0.02em',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  lineHeight: 1.1,
                }}>
                  {brand.name}
                </h3>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  lineHeight: 1.4,
                }}>
                  {brand.description}
                </p>
                <div style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  lineHeight: 1.4,
                }}>
                  {brand.models}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginTop: '16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--blue-accent)',
                }}>
                  View Guards <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
