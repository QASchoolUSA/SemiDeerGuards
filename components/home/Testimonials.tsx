'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mike D.',
    company: 'D&M Logistics',
    truck: 'Volvo VNL 860',
    rating: 5,
    text: 'I\'ve had this guard for 2 years and it\'s taken 3 deer hits. The truck never even flinched. Installation was straightforward and the fitment was perfect. Worth every penny.',
    initials: 'MD',
  },
  {
    id: 2,
    name: 'James R.',
    company: 'Owner-Operator',
    truck: 'Kenworth T680',
    rating: 5,
    text: 'I was skeptical about spending $2,200 on a guard, but after a 300-lb deer totaled my neighbor\'s bumper last year, I pulled the trigger. The quality is outstanding — heavy gauge steel, tight fitment, no rattles.',
    initials: 'JR',
  },
  {
    id: 3,
    name: 'Carlos M.',
    company: 'Southwest Transport Co.',
    truck: 'Freightliner Cascadia',
    rating: 5,
    text: 'Our fleet of 12 trucks all run these guards. The CAS compatibility was the deciding factor — our collision avoidance systems still work perfectly. Customer support helped us through a tricky bracket question.',
    initials: 'CM',
  },
  {
    id: 4,
    name: 'Tom B.',
    company: 'Northern Haulers',
    truck: 'Peterbilt 389',
    rating: 4,
    text: 'Solid product, great shipping. Arrived well-packaged on a pallet. Took me about 3 hours to install solo. The powder coat finish looks great and matches my truck\'s color.',
    initials: 'TB',
  },
  {
    id: 5,
    name: 'Lisa W.',
    company: 'W&W Fleet Solutions',
    truck: 'Mack Anthem',
    rating: 5,
    text: 'Ordered 8 guards for our fleet. The volume pricing was fair and all units arrived within a week. The guards look professional and have already saved us from two incidents this season.',
    initials: 'LW',
  },
]

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={16}
          fill={s <= rating ? 'var(--gold)' : 'none'}
          color={s <= rating ? 'var(--gold)' : 'var(--border-strong)'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIALS.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section
      className="section-padding"
      style={{ background: 'var(--bg-surface)' }}
      aria-label="Customer Testimonials"
    >
      <div className="container-full">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Real Truckers, Real Results</div>
          <h2 className="text-display">
            What Our <span className="gradient-text-chrome">Customers Say</span>
          </h2>
        </div>

        {/* Desktop: 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }} className="testimonials-desktop">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="testimonials-mobile" style={{ display: 'none' }}>
          <TestimonialCard t={TESTIMONIALS[current]} />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
            <button className="btn btn-outline btn-sm" onClick={prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{current + 1} / {total}</span>
            <button className="btn btn-outline btn-sm" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Average Rating */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: '99px', padding: '12px 24px' }}>
            <StarRow rating={5} />
            <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>4.9</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>from 500+ verified reviews</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-desktop { display: none !important; }
          .testimonials-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="glass-card" style={{ padding: '28px' }}>
      <StarRow rating={t.rating} />
      <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.75', margin: '16px 0 24px', fontStyle: 'italic' }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'var(--grad-blue)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: '16px', fontWeight: '700', color: 'white', flexShrink: 0,
        }}>
          {t.initials}
        </div>
        <div>
          <p style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-primary)' }}>{t.name}</p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.company} · {t.truck}</p>
        </div>
      </div>
    </div>
  )
}
