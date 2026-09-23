'use client'

import React, { useState } from 'react'
import { Sparkles, Moon, Check, ArrowRight } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function StealthBlackoutShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  return (
    <div
      style={{
        background: '#050508',
        color: '#F3E8FF',
        fontFamily: '"Montserrat", "Inter", -apple-system, sans-serif',
        minHeight: '100vh',
        padding: '50px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '24px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#A855F7', marginBottom: '6px' }}>
              Stealth Collection Catalog
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#FFF', margin: 0 }}>
              Satin Blackout Guards
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: selectedBrand === b ? '#A855F7' : 'rgba(255,255,255,0.04)',
                  color: selectedBrand === b ? '#FFF' : '#94A3B8',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#0B0B12',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                borderRadius: '12px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: '#A855F7', fontWeight: 800 }}>
                  {prod.truck.toUpperCase()}
                </span>
                <span style={{ fontSize: '11px', color: '#CBD5E1' }}>{prod.finish}</span>
              </div>

              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                  {prod.name}
                </h2>
                <div style={{ fontSize: '13px', color: '#94A3B8' }}>{prod.model}</div>
              </div>

              <div style={{ background: '#050508', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '12px' }}>
                <div><strong>Armor Spec:</strong> {prod.gauge}</div>
                <div><strong>Weight:</strong> {prod.weightLbs} lbs</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#FFF' }}>
                  ${prod.price.toLocaleString()}
                </span>

                <button
                  style={{
                    background: '#A855F7',
                    color: '#FFF',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  Acquire Spec
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
