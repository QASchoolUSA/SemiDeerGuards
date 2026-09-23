'use client'

import { useCartStore } from '@/lib/store/cart'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart, Lock } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore()
  const total = totalPrice()
  const freeShippingThreshold = 500
  const isFreeShipping = total >= freeShippingThreshold

  return (
    <div style={{ minHeight: '80vh', paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="container-full">
        <div style={{ marginBottom: '40px' }}>
          <Link href="/products" className="btn btn-ghost btn-sm" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
          <h1 className="text-display">
            Shopping <span className="gradient-text-chrome">Cart</span>
          </h1>
          {items.length > 0 && (
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              {items.reduce((s, i) => s + i.quantity, 0)} item(s) in your cart
            </p>
          )}
        </div>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <ShoppingCart size={80} style={{ margin: '0 auto 24px', opacity: 0.15 }} />
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '32px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>Your Cart is Empty</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Browse our collection of premium deer guards for your semi truck.
            </p>
            <Link href="/products" className="btn btn-primary btn-lg">
              Shop Deer Guards
            </Link>
          </div>
        ) : (
          <div className="cart-layout-grid">
            {/* Items */}
            <div>
              {/* Free shipping progress */}
              {!isFreeShipping && (
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: '24px' }}>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    Add <strong style={{ color: 'var(--chrome)' }}>${(freeShippingThreshold - total).toFixed(2)}</strong> more for free freight shipping
                  </p>
                  <div style={{ height: '6px', background: 'var(--bg-elevated)', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min((total / freeShippingThreshold) * 100, 100)}%`, background: 'var(--grad-blue)', borderRadius: '99px', transition: 'width 0.5s ease' }} />
                  </div>
                </div>
              )}
              {isFreeShipping && (
                <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 'var(--radius-md)', padding: '12px 20px', marginBottom: '24px', fontSize: '14px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  ✅ Your order qualifies for free freight shipping!
                </div>
              )}

              {/* Item list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {items.map((item, i) => (
                  <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '24px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                    {/* Image */}
                    <div style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--bg-elevated)', flexShrink: 0, position: 'relative', border: '1px solid var(--border-subtle)' }}>
                      {item.image && <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} sizes="100px" />}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: '600', fontSize: '16px', marginBottom: '4px' }}>{item.name}</h3>
                      {item.sku && <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>SKU: {item.sku}</p>}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                        <div className="qty-input">
                          <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease"><Minus size={14} /></button>
                          <span className="qty-number" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.quantity}</span>
                          <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase"><Plus size={14} /></button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px', fontWeight: '700', color: 'var(--chrome-bright)' }}>
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                          <button className="btn btn-ghost" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} style={{ color: 'var(--error)', padding: '6px', opacity: 0.7 }}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn btn-ghost btn-sm"
                onClick={clearCart}
                style={{ marginTop: '16px', color: 'var(--error)', opacity: 0.7 }}
              >
                <Trash2 size={14} /> Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div className="glass-card" style={{ padding: '28px' }}>
                <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '24px' }}>
                  Order Summary
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                    <span style={{ fontWeight: '600' }}>${total.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Freight Shipping</span>
                    <span style={{ color: isFreeShipping ? 'var(--success)' : 'var(--text-secondary)', fontWeight: '600' }}>
                      {isFreeShipping ? 'FREE' : 'Calculated at checkout'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Tax</span>
                    <span style={{ color: 'var(--text-muted)' }}>Calculated at checkout</span>
                  </div>
                </div>

                <div className="divider-glow" style={{ marginBottom: '20px' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>
                  <span>Estimated Total</span>
                  <span style={{ color: 'var(--chrome-bright)' }}>${total.toFixed(2)}</span>
                </div>

                <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '16px', marginBottom: '12px' }}>
                  Proceed to Checkout
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  <Lock size={11} /> Secure, encrypted checkout via Stripe
                </div>

                {/* Payment icons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {['Visa', 'MC', 'Amex', 'Discover'].map((card) => (
                    <div key={card} style={{ padding: '4px 8px', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: '4px', fontSize: '10px', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                      {card}
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Code */}
              <div className="glass-card" style={{ padding: '20px', marginTop: '16px' }}>
                <p style={{ fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>Promo Code</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input type="text" className="input" placeholder="Enter code" id="promo-code-input" style={{ flex: 1 }} />
                  <button className="btn btn-outline btn-sm">Apply</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
