import { Shield, Truck, Award, Zap, Clock, HeadphonesIcon } from 'lucide-react'

const BADGES = [
  {
    icon: Truck,
    title: 'Free Freight Shipping',
    description: 'On all orders over $500. Heavy items palletized & tracked.',
  },
  {
    icon: Shield,
    title: '3-Year Warranty',
    description: 'Every guard backed by our industry-leading warranty.',
  },
  {
    icon: Zap,
    title: 'CAS Compatible',
    description: 'Verified compatible with collision avoidance systems.',
  },
  {
    icon: Award,
    title: 'Made in USA',
    description: 'Manufactured with American-grade heavy-duty steel.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Most in-stock orders ship within 2 business days.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Technical fitment experts available Mon–Fri 8am–6pm.',
  },
]

export default function TrustBadges() {
  return (
    <section
      className="stats-band"
      aria-label="Trust Guarantees"
      style={{ padding: '64px 0' }}
    >
      <div className="container-full">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="text-heading" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>
            Why <span className="gradient-text-blue">10,000+ Truckers</span> Choose Us
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {BADGES.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="trust-badge glass-card"
              style={{
                animationDelay: `${i * 0.08}s`,
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 20px',
                transition: 'all var(--transition-normal)',
              }}
            >
              <div className="trust-icon" style={{ marginBottom: '16px' }}>
                <Icon size={22} color="var(--blue-accent)" />
              </div>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '0.02em' }}>
                {title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
