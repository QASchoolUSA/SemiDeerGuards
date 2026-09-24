'use client'

import React from 'react'
import Image from 'next/image'
import {
  Award,
  Shield,
  PhoneCall,
  Star,
  ChevronRight,
  CheckCircle2,
  Clock,
  ShoppingCart,
  Truck,
  Sparkles,
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function HeritageAmericanaHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const { isMobile } = useDemoViewport()
  const classicProducts = DEMO_PRODUCTS.filter((p) => p.material.toLowerCase().includes('stainless') || p.material.toLowerCase().includes('steel'))

  return (
    <div
      style={{
        background: '#120D09',
        color: '#FDE68A',
        fontFamily: '"Cinzel", "Playfair Display", Georgia, serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 90px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Heritage Top Seal Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(217, 119, 6, 0.35)',
            paddingBottom: '16px',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} color="#D97706" />
            <span style={{ color: '#F59E0B', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
              AMERICAN HEAVY-HAUL CHROME WORKS // EST. 1978
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px' }}>
            <span style={{ color: '#FDE68A', fontFamily: 'sans-serif', fontSize: '12px' }}>
              Free Freight to Any Terminal or Farm Dock
            </span>
            <a
              href="tel:8005553337"
              style={{
                color: '#F59E0B',
                textDecoration: 'none',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'sans-serif',
              }}
            >
              <PhoneCall size={14} /> 1-800-555-DEER (Direct Shop Line)
            </a>
          </div>
        </div>

        {/* Hero Section: Text + Real Peterbilt Chrome Photo */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: isMobile ? '24px' : '48px', alignItems: 'center', marginBottom: '64px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '12px' }}>
              BUILT FOR OWNER-OPERATORS WHO TAKE PRIDE IN THEIR RIG
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                color: '#FFFBEB',
                letterSpacing: '-0.01em',
                margin: '0 0 24px',
              }}
            >
              MIRROR-POLISHED STEEL. <br />
              <span style={{ color: '#F59E0B' }}>
                UNYIELDING BIG RIG DEFENSE.
              </span>
            </h1>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: '#D1A374', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '32px' }}>
              "Through thirty Montana blizzards and two million miles of open asphalt, a working trucker knows there is no substitute for mirror-finished stainless steel and brute strength."
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '16px 36px',
                  background: 'linear-gradient(135deg, #D97706, #B45309)',
                  color: '#FFF',
                  fontWeight: 800,
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid #F59E0B',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(217, 119, 6, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>BROWSE CHROME CATALOG</span>
                <ChevronRight size={16} />
              </button>

              <a
                href="tel:8005553337"
                style={{
                  padding: '16px 24px',
                  background: 'rgba(217, 119, 6, 0.12)',
                  color: '#FDE68A',
                  border: '1px solid rgba(217, 119, 6, 0.5)',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <PhoneCall size={16} />
                <span>ORDER BY PHONE</span>
              </a>
            </div>

            {/* Spec Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid rgba(217, 119, 6, 0.25)', paddingTop: '20px', fontFamily: 'sans-serif' }}>
              <div>
                <div style={{ fontSize: '10px', color: '#B45309', textTransform: 'uppercase', fontWeight: 700 }}>FINISH SPEC</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFBEB' }}>#8 Mirror Polish</div>
                <div style={{ fontSize: '11px', color: '#D1A374' }}>100% Rust-Proof</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#B45309', textTransform: 'uppercase', fontWeight: 700 }}>MATERIAL</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFBEB' }}>304 Stainless</div>
                <div style={{ fontSize: '11px', color: '#D1A374' }}>3.0" – 3.5" Heavy Tubing</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#B45309', textTransform: 'uppercase', fontWeight: 700 }}>WARRANTY</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#F59E0B' }}>Lifetime Weld</div>
                <div style={{ fontSize: '11px', color: '#D1A374' }}>Built to Outlast The Truck</div>
              </div>
            </div>
          </div>

          {/* Real Peterbilt 389 Chrome Guard Photo */}
          <div
            style={{
              background: '#1A120D',
              border: '2px solid #D97706',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '4px', overflow: 'hidden', background: '#0D0805' }}>
              <Image
                src="/images/guards/guard-peterbilt-389.jpg"
                alt="Peterbilt 389 with Classic Chrome Deer Guard"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(18, 13, 9, 0.92)',
                  border: '1px solid rgba(217, 119, 6, 0.4)',
                  padding: '12px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '10px', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>FLAGSHIP EDITION</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFF' }}>Peterbilt 389 Big Boss 3.5" Chrome</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#F59E0B' }}>$2,499</div>
                  <div style={{ fontSize: '10px', color: '#D1A374', fontFamily: 'sans-serif' }}>or $104/mo via Affirm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Craftsmanship Guarantee Box */}
        <div
          style={{
            background: '#1A120D',
            border: '1px solid rgba(217, 119, 6, 0.4)',
            padding: '32px',
            marginBottom: '60px',
            borderRadius: '6px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            <div>
              <div style={{ color: '#F59E0B', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                Handcrafted Triple Polish
              </div>
              <p style={{ fontSize: '13px', color: '#E2D3B8', lineHeight: 1.6, margin: 0, fontFamily: 'Georgia, serif' }}>
                Every tube is bent on mandrel dies and polished by hand to a flawless mirror shine that will never peel or rust like cheap electroplated bumpers.
              </p>
            </div>
            <div>
              <div style={{ color: '#F59E0B', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                Direct Bolt-To-Tow Receiver
              </div>
              <p style={{ fontSize: '13px', color: '#E2D3B8', lineHeight: 1.6, margin: 0, fontFamily: 'Georgia, serif' }}>
                Engineered to mount directly into factory tow pin pockets. 100% bolt-on, requiring zero drill holes into your frame rails or OEM bumper.
              </p>
            </div>
            <div>
              <div style={{ color: '#F59E0B', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                Owner-Operator Financing
              </div>
              <p style={{ fontSize: '13px', color: '#E2D3B8', lineHeight: 1.6, margin: 0, fontFamily: 'Georgia, serif' }}>
                Pay as you run with Affirm financing. Split your purchase into 12 to 24 easy monthly payments with instant trucker qualification.
              </p>
            </div>
          </div>
        </div>

        {/* Product Catalog Grid with REAL IMAGES */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '26px', color: '#FFFBEB', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
              Classic Chrome & Stainless Guards
            </h2>
            <p style={{ color: '#D1A374', fontSize: '14px', marginTop: '6px', fontFamily: 'Georgia, serif' }}>
              Precision fitted for Peterbilt, Kenworth, Volvo, Freightliner, and Mack
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {classicProducts.map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#1A120D',
                  border: '1px solid rgba(217, 119, 6, 0.35)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '180px', background: '#0D0805' }}>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="350px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(18, 13, 9, 0.9)',
                      border: '1px solid #D97706',
                      color: '#F59E0B',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {prod.truck} Series
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', color: '#FFFBEB', margin: '0 0 6px' }}>
                      {prod.name}
                    </h3>
                    <div style={{ fontSize: '12px', color: '#D1A374', fontFamily: 'Georgia, serif', marginBottom: '12px' }}>
                      {prod.model} • {prod.tubeDiameter} Tubing • {prod.material}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(217, 119, 6, 0.2)', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '22px', fontWeight: 700, color: '#F59E0B' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#D1A374', fontFamily: 'sans-serif' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#FDE68A', fontFamily: 'sans-serif' }}>
                        Free Shipping
                      </span>
                    </div>

                    <button
                      onClick={onExploreShop}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'linear-gradient(135deg, #D97706, #B45309)',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                    >
                      <ShoppingCart size={15} />
                      <span>ORDER THIS GUARD</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
