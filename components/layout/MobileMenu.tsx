'use client'

import Link from 'next/link'
import { X, ShoppingCart, Truck } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

const TRUCK_BRANDS = ['Volvo', 'Kenworth', 'Freightliner', 'Peterbilt', 'Mack']

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        style={{ zIndex: 240 }}
      />

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px', fontWeight: '800', textTransform: 'uppercase' }}>
            Semi<span className="gradient-text-chrome">Deer</span>Guards
          </span>
          <button className="btn btn-ghost" onClick={onClose} aria-label="Close menu" style={{ padding: '8px' }}>
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ flex: 1, overflowY: 'auto' }}>
          {links.map((link, i) => (
            <div key={link.label} style={{ animationDelay: `${i * 0.07}s` }}>
              <Link
                href={link.href}
                onClick={onClose}
                style={{
                  display: 'block', padding: '16px 0',
                  fontSize: '28px', fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: '700', textTransform: 'uppercase',
                  color: 'var(--text-primary)', textDecoration: 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blue-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                {link.label}
              </Link>
              {link.children && (
                <div style={{ paddingLeft: '16px', paddingBottom: '8px' }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      style={{
                        display: 'block', padding: '10px 0',
                        fontSize: '16px', color: 'var(--text-secondary)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--chrome)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      → {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Link href="/products" className="btn btn-primary" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
            <ShoppingCart size={18} /> Shop All Guards
          </Link>
          <Link href="/trucks" className="btn btn-outline" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
            <Truck size={18} /> Browse by Truck Brand
          </Link>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
            <ThemeToggle showLabel={true} />
          </div>
        </div>
      </div>
    </>
  )
}
