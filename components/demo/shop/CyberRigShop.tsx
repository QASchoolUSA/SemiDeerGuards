'use client'

import React, { useState } from 'react'
import { Radio, Wifi, Shield, Check, Cpu } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function CyberRigShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  return (
    <div
      style={{
        background: '#020205',
        color: '#E0F2FE',
        fontFamily: '"Rajdhani", "Space Grotesk", sans-serif',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div style={{ borderBottom: '1px solid rgba(0, 240, 255, 0.25)', paddingBottom: '20px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#00F0FF', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
              SENSOR TELEMETRY HUB
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              CAS-Compliant Armor Rigs
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: selectedBrand === b ? '#00F0FF' : 'rgba(255,255,255,0.05)',
                  color: selectedBrand === b ? '#020205' : '#7DD3FC',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  padding: '6px 12px',
                  borderRadius: '4px',
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: 'rgba(8, 12, 28, 0.85)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.05)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#00F0FF', fontSize: '11px', fontWeight: 700 }}>
                  {prod.truck.toUpperCase()}
                </span>
                <span style={{ fontSize: '10px', color: '#22C55E', border: '1px solid #22C55E', padding: '2px 6px', borderRadius: '3px' }}>
                  {prod.casCompatible ? 'RADAR COMPLIANT' : 'CONVENTIONAL'}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                  {prod.name}
                </h3>
                <div style={{ fontSize: '13px', color: '#7DD3FC' }}>
                  Model: {prod.model}
                </div>
              </div>

              <div style={{ background: '#030712', padding: '12px', borderRadius: '4px', border: '1px dashed rgba(0, 240, 255, 0.2)', fontSize: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: '#64748B' }}>IMPACT CAP:</span>
                  <span style={{ color: '#00F0FF', fontWeight: 700 }}>{prod.impactRating.split(' ')[0]}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748B' }}>AERODYNAMIC DELTA:</span>
                  <span style={{ color: '#22C55E', fontWeight: 700 }}>{prod.aeroDragDelta}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px' }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#00F0FF' }}>
                  ${prod.price.toLocaleString()}
                </span>

                <button
                  style={{
                    background: '#00F0FF',
                    color: '#020205',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  ACQUIRE SHIELD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
