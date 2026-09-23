'use client'

import React, { useState } from 'react'
import { Activity, ShieldCheck, Check, AlertTriangle, FileText } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function CrashLabShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  return (
    <div
      style={{
        background: '#0C0A0B',
        color: '#FEE2E2',
        fontFamily: '"Chivo Mono", "Inter", -apple-system, sans-serif',
        minHeight: '100vh',
        padding: '50px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(239, 68, 68, 0.3)', paddingBottom: '24px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#EF4444', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 800 }}>
              LABORATORY IMPACT TEST SCORECARDS
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              Impact-Class Certified Rigs
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: selectedBrand === b ? '#EF4444' : 'rgba(255,255,255,0.05)',
                  color: selectedBrand === b ? '#FFF' : '#FCA5A5',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontWeight: 800,
                  fontSize: '11px',
                  cursor: 'pointer',
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Scorecard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#1A1113',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: 800 }}>
                  LAB SPEC NO. {prod.id.toUpperCase()}
                </span>
                <span style={{ fontSize: '10px', background: 'rgba(239,68,68,0.2)', border: '1px solid #EF4444', color: '#FFF', padding: '2px 6px', borderRadius: '3px' }}>
                  {prod.tier}
                </span>
              </div>

              <div>
                <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                  {prod.name}
                </h2>
                <div style={{ fontSize: '13px', color: '#F87171' }}>{prod.truck} {prod.model}</div>
              </div>

              <div style={{ background: '#0D0607', padding: '14px', borderRadius: '6px', border: '1px dashed rgba(239, 68, 68, 0.25)', fontSize: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: '#991B1B' }}>ENERGY DISSIPATION:</span>
                  <span style={{ color: '#EF4444', fontWeight: 800 }}>{prod.impactRating.split(' ')[0]} J</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: '#991B1B' }}>YIELD STRENGTH:</span>
                  <span style={{ color: '#FFF' }}>50,000 PSI Min</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#991B1B' }}>FRAME ATTACH:</span>
                  <span style={{ color: '#22C55E' }}>No-Drill Flange</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '12px' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#EF4444' }}>
                  ${prod.price.toLocaleString()}
                </span>

                <button
                  style={{
                    background: '#EF4444',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 16px',
                    fontWeight: 800,
                    fontSize: '11px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  Order Test-Spec
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
