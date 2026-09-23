'use client'

import React, { useState } from 'react'
import { Flame, Shield, Check, Filter, Zap, AlertTriangle, Truck } from 'lucide-react'
import { DEMO_PRODUCTS, DemoProduct } from '../demoData'

export default function TacticalBajaShop() {
  const [activeTier, setActiveTier] = useState<string>('ALL')
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL')

  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack', 'International']
  const tiers = ['ALL', 'Tier 1', 'Tier 2', 'Tier 3']

  const filtered = DEMO_PRODUCTS.filter((p) => {
    if (activeTier !== 'ALL' && p.tier !== activeTier) return false
    if (selectedBrand !== 'ALL' && p.truck !== selectedBrand) return false
    return true
  })

  return (
    <div
      style={{
        background: '#120F0D',
        color: '#F8FAFC',
        fontFamily: '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Header */}
        <div style={{ borderBottom: '2px solid rgba(255, 107, 0, 0.3)', paddingBottom: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF6B00', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <Flame size={16} />
                <span>HEAVY-HAUL ARMOR DEPOT</span>
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', margin: '6px 0 0' }}>
                COMBAT-GRADE RIG GUARDS
              </h1>
            </div>

            {/* Filter controls */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* Tier Selector */}
              <div style={{ display: 'flex', background: '#1A1613', border: '1px solid rgba(255, 107, 0, 0.4)', padding: '3px' }}>
                {tiers.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTier(t)}
                    style={{
                      padding: '6px 12px',
                      background: activeTier === t ? '#FF6B00' : 'transparent',
                      color: activeTier === t ? '#000' : '#CBD5E1',
                      border: 'none',
                      fontWeight: 800,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Brand Pills */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    style={{
                      padding: '6px 12px',
                      background: selectedBrand === b ? '#FF6B00' : 'rgba(255,255,255,0.05)',
                      color: selectedBrand === b ? '#000' : '#94A3B8',
                      border: '1px solid rgba(255, 107, 0, 0.25)',
                      fontWeight: 700,
                      fontSize: '11px',
                      cursor: 'pointer',
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#1A1613',
                border: '2px solid rgba(255, 107, 0, 0.4)',
                padding: '24px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              }}
            >
              {/* Badge Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ background: '#FF6B00', color: '#000', fontSize: '10px', fontWeight: 900, padding: '3px 8px', textTransform: 'uppercase' }}>
                  {prod.tier}
                </span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94A3B8' }}>
                  {prod.truck.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#FFF', margin: '0 0 4px 0' }}>
                  {prod.name}
                </h3>
                <div style={{ fontSize: '13px', color: '#FF6B00', fontWeight: 700 }}>
                  Application: {prod.model}
                </div>
              </div>

              {/* Armor Stat Box */}
              <div style={{ background: '#0D0A08', padding: '12px', border: '1px solid rgba(255, 107, 0, 0.2)', fontSize: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: '#64748B' }}>IMPACT TOLERANCE:</span>
                  <span style={{ color: '#FFF', fontWeight: 800 }}>{prod.impactRating.split(' ')[0]} J</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: '#64748B' }}>STEEL SPEC:</span>
                  <span style={{ color: '#FFF', fontWeight: 600 }}>{prod.gauge}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748B' }}>STATUS:</span>
                  <span style={{ color: prod.inStock ? '#22C55E' : '#EF4444', fontWeight: 800 }}>
                    {prod.inStock ? 'READY TO FREIGHT' : 'FABRICATION IN PROGRESS'}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: 'auto', paddingTop: '10px' }}>
                <span style={{ fontSize: '24px', fontWeight: 900, color: '#FF6B00' }}>
                  ${prod.price.toLocaleString()}
                </span>
                {prod.comparePrice && (
                  <span style={{ fontSize: '14px', color: '#64748B', textDecoration: 'line-through' }}>
                    ${prod.comparePrice.toLocaleString()}
                  </span>
                )}
              </div>

              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#FF6B00',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <Truck size={16} />
                <span>ORDER ARMOR RIG</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
