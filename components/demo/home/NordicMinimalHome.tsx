'use client'

import React from 'react'
import { ArrowUpRight, Shield, Compass, Sparkles } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function NordicMinimalHome({ onExploreShop }: { onExploreShop?: () => void }) {
  return (
    <div
      style={{
        background: '#0A0A0B',
        color: '#E5E7EB',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '80px 32px 120px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Subtle Minimal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '24px', marginBottom: '80px' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9CA3AF' }}>
            SemiDeerGuards Atelier / 2026 Collection
          </div>
          <div style={{ fontSize: '12px', color: '#6B7280' }}>
            Precision Metallurgy for Commercial Transport
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ marginBottom: '100px' }}>
          <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#9CA3AF', marginBottom: '24px' }}>
            Form Following Severe Function
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              marginBottom: '40px',
              maxWidth: '960px',
            }}
          >
            The silent architecture of front-end defense.
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '60px', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#9CA3AF', fontWeight: 300 }}>
              Engineered with clean architectural geometry. Every radius is calculated to reduce aerodynamic drag while dissipating violent kinetic impacts through chassis load points. Seamless integration with modern radar telemetry.
            </p>

            <div>
              <button
                onClick={onExploreShop}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#FFFFFF',
                  color: '#0A0A0B',
                  padding: '16px 36px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <span>View The Lookbook</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Hairline Divider with Philosophy Quote */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '48px 0', margin: '80px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6B7280', marginBottom: '8px' }}>
              01 / PURITY
            </div>
            <div style={{ fontSize: '14px', color: '#D1D5DB', lineHeight: 1.6 }}>
              Cold-formed seamless carbon alloy. No visible weld splatter, no redundant brackets.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6B7280', marginBottom: '8px' }}>
              02 / HARMONY
            </div>
            <div style={{ fontSize: '14px', color: '#D1D5DB', lineHeight: 1.6 }}>
              Apertures aligned precisely with OEM millimeter-wave collision radar sensors.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6B7280', marginBottom: '8px' }}>
              03 / ENDURANCE
            </div>
            <div style={{ fontSize: '14px', color: '#D1D5DB', lineHeight: 1.6 }}>
              Multi-stage acoustic dampening reduces cab resonance at sustained interstate speeds.
            </div>
          </div>
        </div>

        {/* Minimal Lookbook Showcase */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF' }}>
              Selected Sculptures
            </h2>
            <button
              onClick={onExploreShop}
              style={{ background: 'none', border: 'none', color: '#9CA3AF', fontSize: '13px', cursor: 'pointer' }}
            >
              All Models →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                style={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255,255,255,0.01)',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B7280', marginBottom: '16px' }}>
                  {prod.truck} — Series
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 400, color: '#FFFFFF', margin: '0 0 8px 0' }}>
                  {prod.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#9CA3AF', margin: '0 0 24px 0' }}>
                  {prod.model}
                </p>

                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', fontWeight: 300, color: '#FFFFFF' }}>
                    ${prod.price.toLocaleString()}
                  </span>
                  <button
                    onClick={onExploreShop}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#9CA3AF',
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Acquire</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
