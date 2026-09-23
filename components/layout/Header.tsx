'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Phone, ChevronDown, Search } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'
import CartDrawer from './CartDrawer'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Guards', href: '/products' },
      { label: 'Heavy Duty Guards', href: '/products?category=heavy-duty' },
      { label: 'Aero Guards', href: '/products?category=aero' },
      { label: 'CAS Compatible', href: '/products?badge=CAS+COMPATIBLE' },
    ]
  },
  {
    label: 'Shop by Truck',
    href: '/trucks',
    children: [
      { label: 'Volvo', href: '/trucks/volvo' },
      { label: 'Kenworth', href: '/trucks/kenworth' },
      { label: 'Freightliner', href: '/trucks/freightliner' },
      { label: 'Peterbilt', href: '/trucks/peterbilt' },
      { label: 'Mack', href: '/trucks/mack' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { totalItems, isOpen, openCart, closeCart } = useCartStore()
  const itemCount = totalItems()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '8px 0' }}>
        <div className="container-full" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
          <span>🚚 Free Freight Shipping on orders over $500</span>
          <a href="tel:+18005551234" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--chrome)', textDecoration: 'none', fontWeight: '600' }}>
            <Phone size={13} /> 1-800-555-1234
          </a>
        </div>
      </div>

      <header
        className={`header ${scrolled ? 'header-solid' : 'header-transparent'}`}
        style={{ background: scrolled ? undefined : 'rgba(6,10,18,0.8)', backdropFilter: 'blur(16px)' }}
      >
        <div className="container-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '10px',
              background: 'var(--grad-blue)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', fontWeight: '900', color: 'white',
              fontFamily: 'Barlow Condensed, sans-serif',
              boxShadow: 'var(--shadow-btn)',
              letterSpacing: '-1px'
            }}>
              SDG
            </div>
            <div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                Semi<span className="gradient-text-chrome">Deer</span>Guards
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Premium Front-End Protection
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    padding: '8px 14px', borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    fontSize: '14px', fontWeight: '500',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '0',
                    background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-md)', padding: '8px',
                    minWidth: '180px', boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                    zIndex: 50, marginTop: '4px'
                  }}>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        style={{
                          display: 'block', padding: '10px 14px',
                          color: 'var(--text-secondary)', textDecoration: 'none',
                          fontSize: '14px', borderRadius: 'var(--radius-sm)',
                          transition: 'all var(--transition-fast)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--text-primary)'
                          e.currentTarget.style.background = 'var(--bg-hover)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--text-secondary)'
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Cart */}
            <button
              id="cart-button"
              onClick={openCart}
              className="btn btn-ghost btn-sm"
              style={{ position: 'relative', padding: '10px 12px' }}
              aria-label={`Shopping cart, ${itemCount} items`}
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span style={{
                  position: 'absolute', top: '4px', right: '4px',
                  background: 'var(--blue-accent)', color: 'white',
                  fontSize: '10px', fontWeight: '700',
                  width: '18px', height: '18px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  lineHeight: '1',
                }}>
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* CTA */}
            <Link href="/products" className="btn btn-primary btn-sm hidden-mobile">
              Shop Now
            </Link>

            {/* Mobile hamburger */}
            <button
              className="btn btn-ghost show-mobile"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{ padding: '10px 12px' }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isOpen} onClose={closeCart} />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
