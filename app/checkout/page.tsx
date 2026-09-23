'use client'

import { useState } from 'react'
import { useCartStore } from '@/lib/store/cart'
import { Lock, Shield, ArrowRight } from 'lucide-react'

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore()
  const [loading, setLoading] = useState(false)
  const total = totalPrice()

  const handleCheckout = async () => {
    if (items.length === 0) return
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Checkout error. Please try again or call us.')
      }
    } catch {
      alert('Unable to connect to payment provider. Please call 1-800-555-1234.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '80vh', paddingTop: '60px', paddingBottom: '80px' }}>
      <div className="container-full" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <Lock size={18} color="var(--blue-accent)" />
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Secure Checkout
            </span>
          </div>
          <h1 className="text-display">
            Review Your <span className="gradient-text-chrome">Order</span>
          </h1>
        </div>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Your cart is empty.</p>
            <a href="/products" className="btn btn-primary">Shop Now</a>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>
            {/* Order Items */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px' }}>
                Items ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
              {items.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '2px' }}>{item.name}</p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Qty: {item.quantity}</p>
                  </div>
                  <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px', fontWeight: '700', color: 'var(--chrome-bright)' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Summary + CTA */}
            <div>
              <div className="glass-card" style={{ padding: '28px', marginBottom: '16px' }}>
                <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Summary
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Shipping</span>
                    <span style={{ color: total >= 500 ? 'var(--success)' : 'var(--text-secondary)' }}>
                      {total >= 500 ? 'FREE Freight' : 'Calculated by Stripe'}
                    </span>
                  </div>
                </div>
                <div className="divider-glow" style={{ marginBottom: '20px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>
                  <span>Total</span>
                  <span style={{ color: 'var(--chrome-bright)' }}>${total.toFixed(2)}</span>
                </div>

                <button
                  id="stripe-checkout-btn"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '16px' }}
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                      Connecting to Stripe...
                    </>
                  ) : (
                    <>Pay with Stripe <ArrowRight size={18} /></>
                  )}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                  <Lock size={11} /> 256-bit SSL Encryption
                </div>
              </div>

              {/* Trust */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { icon: Shield, text: '3-Year Manufacturer Warranty' },
                  { icon: Lock, text: 'Secure Payment via Stripe' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <Icon size={14} color="var(--blue-accent)" /> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 700px) {
          div[style*="grid-template-columns: 1fr 360px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
