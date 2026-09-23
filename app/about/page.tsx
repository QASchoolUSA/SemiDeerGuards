import type { Metadata } from 'next'
import { Shield, Award, Truck, Users, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About SemiDeerGuards',
  description: 'Learn about SemiDeerGuards — 15+ years manufacturing premium deer guards for Volvo, Kenworth, Freightliner, and other semi trucks.',
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '80px 0' }}>
        <div className="container-full" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Story</div>
          <h1 className="text-display" style={{ marginBottom: '24px' }}>
            Built by Truckers, <span className="gradient-text-chrome">for Truckers</span>
          </h1>
          <p className="text-subheading" style={{ maxWidth: '620px', margin: '0 auto' }}>
            Since 2008, SemiDeerGuards has manufactured heavy-duty front-end protection that saves truckers from costly wildlife strikes. We started with one truck, one workshop, and one simple goal: build the strongest guard on the market.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="section-padding">
        <div className="container-full">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '24px', marginBottom: '80px' }}>
            {[
              { icon: Shield, title: '3-Year Warranty', desc: 'Every guard we sell is backed by our industry-leading warranty because we stand behind our manufacturing quality.' },
              { icon: Award, title: 'Made in USA', desc: 'All guards are manufactured in our Omaha, Nebraska facility using American-sourced heavy-gauge steel.' },
              { icon: Truck, title: '10,000+ Guards Sold', desc: 'From owner-operators to major fleet companies, we have protected trucks across North America.' },
              { icon: Users, title: 'Expert Team', desc: 'Our team includes former long-haul drivers who understand what truckers actually need from their equipment.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: '28px', textAlign: 'center', minWidth: 0 }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(74,158,255,0.1)', border: '1px solid rgba(74,158,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon size={22} color="var(--blue-accent)" />
                </div>
                <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="about-story-grid">
            <div>
              <div className="section-label">Why We Exist</div>
              <h2 className="text-heading" style={{ marginBottom: '20px' }}>
                One Deer Strike Can Cost <span className="gradient-text-chrome">$30,000+</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8' }}>
                <p>
                  A single wildlife collision can destroy a radiator, grille, lighting assembly, and even frame components — resulting in weeks of downtime and tens of thousands in repair bills.
                </p>
                <p>
                  Our founder, a former 20-year long-haul driver, experienced exactly this. After a deer strike put his truck out of service for 3 weeks, he designed and built the first SemiDeerGuard in his garage. Within a year, demand from other truckers forced him to open a proper manufacturing facility.
                </p>
                <p>
                  Today, we supply guards to owner-operators, regional carriers, and national fleet companies. Our mission hasn&apos;t changed: protect your truck, protect your income.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Heavy-gauge 14-gauge steel construction',
                'Verified CAS (collision avoidance system) compatible',
                'Vehicle-specific fitment — no universal fits',
                'Quick-release hinges for hood access in under 2 minutes',
                'EVR-grade powder coat that resists chips and corrosion',
                '100% manufactured in the United States',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--success)" style={{ flexShrink: 0 }} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container-full">
          <h2 className="text-heading" style={{ marginBottom: '16px' }}>Ready to Protect Your Truck?</h2>
          <p className="text-subheading" style={{ marginBottom: '32px' }}>Browse our full lineup of guards for Volvo, Kenworth, Freightliner, and more.</p>
          <Link href="/products" className="btn btn-primary btn-lg">Shop All Guards</Link>
        </div>
      </div>
    </div>
  )
}
