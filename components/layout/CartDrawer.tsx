'use client'

import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/lib/store/cart'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore()
  const total = totalPrice()

  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-label="Shopping Cart">
        {/* Header */}
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShoppingCart size={22} color="var(--blue-accent)" />
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px', fontWeight: '700', textTransform: 'uppercase' }}>
              Your Cart
            </h2>
            {items.length > 0 && (
              <span style={{
                background: 'var(--blue-accent)', color: 'white',
                fontSize: '12px', fontWeight: '700',
                padding: '2px 8px', borderRadius: '99px',
              }}>
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button className="btn btn-ghost" onClick={onClose} aria-label="Close cart" style={{ padding: '8px' }}>
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: items.length ? '0' : '40px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <ShoppingCart size={48} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
              <p style={{ fontSize: '16px', marginBottom: '8px' }}>Your cart is empty</p>
              <p style={{ fontSize: '14px', marginBottom: '24px' }}>Add a deer guard to get started</p>
              <button className="btn btn-primary btn-sm" onClick={onClose}>
                Browse Products
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: '16px' }}>
                {/* Image */}
                <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--bg-elevated)', flexShrink: 0, position: 'relative' }}>
                  {item.image && (
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} sizes="80px" />
                  )}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.name}
                  </p>
                  {item.sku && (
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px' }}>SKU: {item.sku}</p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    {/* Qty control */}
                    <div className="qty-input" style={{ transform: 'scale(0.85)', transformOrigin: 'left center' }}>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease">
                        <Minus size={14} />
                      </button>
                      <span className="qty-number" style={{ fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.quantity}</span>
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase">
                        <Plus size={14} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontWeight: '700', color: 'var(--chrome-bright)', fontSize: '15px' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        className="btn btn-ghost"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        style={{ padding: '6px', color: 'var(--error)', opacity: 0.7 }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '24px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-base)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <span>Subtotal</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>${total.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <span>Shipping</span>
              <span>{total >= 500 ? '✓ Free Freight' : 'Calculated at checkout'}</span>
            </div>
            <div className="divider-glow" style={{ marginBottom: '20px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '18px', fontWeight: '700' }}>
              <span>Total</span>
              <span style={{ color: 'var(--chrome-bright)' }}>${total.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '16px' }}
              onClick={onClose}
            >
              Proceed to Checkout
            </Link>
            <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
