'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Truck, Award, Zap } from 'lucide-react'

const FOOTER_LINKS = {
  Products: [
    { label: 'All Deer Guards', href: '/products' },
    { label: 'Heavy Duty Guards', href: '/products?category=heavy-duty' },
    { label: 'Aero Guards', href: '/products?category=aero' },
    { label: 'CAS Compatible', href: '/products?badge=CAS+COMPATIBLE' },
    { label: 'Sale Items', href: '/products?badge=SALE' },
  ],
  'Shop by Brand': [
    { label: 'Volvo Guards', href: '/trucks/volvo' },
    { label: 'Kenworth Guards', href: '/trucks/kenworth' },
    { label: 'Freightliner Guards', href: '/trucks/freightliner' },
    { label: 'Peterbilt Guards', href: '/trucks/peterbilt' },
    { label: 'Mack Guards', href: '/trucks/mack' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Warranty Policy', href: '/warranty' },
    { label: 'Shipping Info', href: '/shipping' },
  ],
}

const TRUST_ITEMS = [
  { icon: Shield, label: '3-Year Warranty' },
  { icon: Truck, label: 'Free Freight Shipping' },
  { icon: Award, label: 'Made in USA' },
  { icon: Zap, label: 'CAS Compatible' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'Instagram', href: '#', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.5 20.5h9a5 5 0 0 0 5-5v-9a5 5 0 0 0-5-5h-9a5 5 0 0 0-5 5v9a5 5 0 0 0 5 5z' },
  { label: 'YouTube', href: '#', path: 'M22.54 6.42a2.78 2.78 0 0 0-2-1.94C18.88 4 12 4 12 4s-6.88 0-8.54.48a2.78 2.78 0 0 0-2 1.94A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.46 19.5C5.12 20 12 20 12 20s6.88 0 8.54-.5a2.78 2.78 0 0 0 2-1.92A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z' },
  { label: 'X / Twitter', href: '#', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }}>
      {/* Trust Banner */}
      <div style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
        <div className="container-full">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(74,158,255,0.1)', border: '1px solid rgba(74,158,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Icon size={18} color="var(--blue-accent)" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-full" style={{ paddingTop: '64px', paddingBottom: '40px' }}>
        <div className="footer-main-grid">

          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '28px', fontWeight: '900', textTransform: 'uppercase', marginBottom: '12px' }}>
                Semi<span className="gradient-text-chrome">Deer</span>Guards
              </div>
            </Link>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px', maxWidth: '280px' }}>
              Premium deer guards engineered for Volvo, Kenworth, Freightliner, and more. Protecting truckers and their livelihoods since 2008.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <a href="tel:+18005551234" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>
                <Phone size={14} color="var(--blue-accent)" /> 1-800-555-1234
              </a>
              <a href="mailto:sales@semideerguards.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>
                <Mail size={14} color="var(--blue-accent)" /> sales@semideerguards.com
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                <MapPin size={14} color="var(--blue-accent)" /> 1234 Industrial Blvd, Omaha, NE
              </span>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {SOCIAL_LINKS.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'var(--bg-hover)', border: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--blue-accent)'
                    e.currentTarget.style.borderColor = 'var(--blue-accent)'
                    e.currentTarget.style.background = 'rgba(74,158,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.background = 'var(--bg-hover)'
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-primary)', marginBottom: '16px' }}>
                {group}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color var(--transition-fast)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--chrome)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-glow" style={{ margin: '40px 0 28px' }} />

        {/* Bottom Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} SemiDeerGuards. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/ /g, '-')}`}
                style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
