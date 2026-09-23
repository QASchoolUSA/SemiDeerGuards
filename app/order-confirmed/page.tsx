import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Truck, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Order Confirmed — Thank You!',
}

export default function OrderConfirmedPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
        {/* Success Icon */}
        <div style={{
          width: '96px', height: '96px', borderRadius: '50%',
          background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px',
          boxShadow: '0 0 40px rgba(34,197,94,0.2)',
        }}>
          <CheckCircle2 size={48} color="var(--success)" />
        </div>

        <h1 className="text-display" style={{ marginBottom: '16px' }}>
          Order <span style={{ color: 'var(--success)' }}>Confirmed!</span>
        </h1>
        <p className="text-subheading" style={{ marginBottom: '40px' }}>
          Thank you for your order. You will receive a confirmation email shortly with your order details and tracking information.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(74,158,255,0.1)', border: '1px solid rgba(74,158,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Truck size={20} color="var(--blue-accent)" />
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>What Happens Next</p>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Your guard will be palletized and shipped via LTL freight within 2 business days. You will receive tracking info by email.
              </p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(74,158,255,0.1)', border: '1px solid rgba(74,158,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Phone size={20} color="var(--blue-accent)" />
            </div>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '4px' }}>Need Help?</p>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Call us at <a href="tel:+18005551234" style={{ color: 'var(--blue-accent)', textDecoration: 'none', fontWeight: '600' }}>1-800-555-1234</a> Mon–Fri 8am–6pm CST for installation support or delivery questions.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-outline">
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-primary">
            Shop More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
