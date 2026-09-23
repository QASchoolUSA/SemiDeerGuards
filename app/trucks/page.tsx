import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shop by Truck Brand',
  description: 'Find deer guards for your exact semi truck. Shop by Volvo, Kenworth, Freightliner, Peterbilt, Mack, and more.',
}

const BRANDS = [
  { name: 'Volvo', href: '/trucks/volvo', description: 'VNL, VNM, VNX Series', emoji: '🔵', color: '#005B9A', count: '12 guards' },
  { name: 'Kenworth', href: '/trucks/kenworth', description: 'T680, T880, W900 Series', emoji: '⚡', color: '#0066CC', count: '15 guards' },
  { name: 'Freightliner', href: '/trucks/freightliner', description: 'Cascadia, Coronado, 114SD', emoji: '🔴', color: '#D4010F', count: '18 guards' },
  { name: 'Peterbilt', href: '/trucks/peterbilt', description: '389, 579, 567 Series', emoji: '🚛', color: '#C0292C', count: '11 guards' },
  { name: 'Mack', href: '/trucks/mack', description: 'Anthem, Pinnacle, Granite', emoji: '🐂', color: '#F5A623', count: '9 guards' },
  { name: 'International', href: '/trucks/international', description: 'LT Series, RH Series', emoji: '🏗️', color: '#CC2828', count: '7 guards' },
]

export default function TrucksIndexPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '64px 0' }}>
        <div className="container-full">
          <div className="section-label" style={{ marginBottom: '16px' }}>Perfect Fitment Guaranteed</div>
          <h1 className="text-display" style={{ marginBottom: '16px' }}>
            Shop by <span className="gradient-text-chrome">Truck Brand</span>
          </h1>
          <p className="text-subheading" style={{ maxWidth: '560px' }}>
            Every guard is engineered for a specific truck make, model, and year. Select your brand below to find guaranteed-fit options.
          </p>
        </div>
      </div>

      <div className="container-full" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {BRANDS.map((brand) => (
            <Link key={brand.name} href={brand.href} style={{ textDecoration: 'none', display: 'block', minWidth: 0 }}>
              <div
                className="brand-card"
                style={{ padding: '28px 20px', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '16px', flexShrink: 0,
                  background: `${brand.color}18`, border: `1px solid ${brand.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px'
                }}>
                  {brand.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '24px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {brand.name}
                  </h2>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>{brand.description}</p>
                  <p style={{ fontSize: '12px', color: 'var(--blue-accent)', fontWeight: '600' }}>{brand.count}</p>
                </div>
                <ArrowRight size={18} color="var(--text-muted)" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
