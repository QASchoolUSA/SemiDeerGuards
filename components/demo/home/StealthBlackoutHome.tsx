'use client'

import React, { useState } from 'react'
import { Sparkles, ArrowRight, Shield, Moon } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function StealthBlackoutHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [finish, setFinish] = useState<'Matte' | 'Satin' | 'Gloss'>('Satin')

  return (
    <div
      style={{
        background: '#050508',
        color: '#F3E8FF',
        fontFamily: '"Montserrat", "Inter", -apple-system, sans-serif',
        minHeight: '100vh',
        padding: '60px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Moody Ambient Studio Glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Stealth Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '24px', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Moon size={16} color="#A855F7" />
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#A855F7' }}>
              BLACKOUT SPECIAL OPERATIONS // BESPOKE FINISHES
            </span>
          </div>

          <div style={{ fontSize: '11px', color: '#94A3B8', letterSpacing: '0.1em' }}>
            CERAMIC POWDER-COATING LAB
          </div>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              marginBottom: '24px',
            }}
          >
            MURDERED OUT. <br />
            <span style={{ background: 'linear-gradient(90deg, #A855F7, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ARMORED IN STEALTH.
            </span>
          </h1>

          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#94A3B8', maxWidth: '640px', margin: '0 auto 40px' }}>
            Engineered for high-end custom rigs and owner-operators who demand elite aesthetics without sacrificing brutal front-end crash protection. Available in military-spec textured wrinkle and deep satin noir.
          </p>

          {/* Interactive Finish Selector */}
          <div style={{ display: 'inline-flex', background: '#0F0F17', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '4px', borderRadius: '12px', marginBottom: '40px' }}>
            {(['Matte', 'Satin', 'Gloss'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFinish(f)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '8px',
                  background: finish === f ? '#A855F7' : 'transparent',
                  color: finish === f ? '#FFFFFF' : '#94A3B8',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {f} Black Finish
              </button>
            ))}
          </div>

          <div>
            <button
              onClick={onExploreShop}
              style={{
                padding: '16px 40px',
                background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
                color: '#FFF',
                fontWeight: 800,
                fontSize: '14px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
              }}
            >
              Order Stealth Collection
            </button>
          </div>
        </div>

        {/* Selected Stealth Builds */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#0B0B12',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#A855F7', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {prod.truck} // {finish.toUpperCase()} SPECIALTY
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFF', margin: 0 }}>
                {prod.name}
              </h3>
              <div style={{ fontSize: '13px', color: '#94A3B8' }}>{prod.model}</div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#FFF' }}>
                  ${prod.price.toLocaleString()}
                </span>
                <button
                  onClick={onExploreShop}
                  style={{
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid #A855F7',
                    color: '#C084FC',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
