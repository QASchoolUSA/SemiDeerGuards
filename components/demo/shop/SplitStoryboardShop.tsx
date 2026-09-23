'use client'

import React, { useState } from 'react'
import { BookOpen, Quote, ArrowRight, ShieldCheck } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function SplitStoryboardShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  return (
    <div
      style={{
        background: '#0B0912',
        color: '#F3E8FF',
        fontFamily: '"Epilogue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '50px 32px 100px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(236, 72, 153, 0.25)', paddingBottom: '24px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#EC4899', marginBottom: '6px' }}>
              Editorial Equipment Registry
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#FFF', margin: 0 }}>
              The Driver-Tested Catalog
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: selectedBrand === b ? '#EC4899' : 'rgba(255,255,255,0.05)',
                  color: selectedBrand === b ? '#FFF' : '#C084FC',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  padding: '6px 14px',
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

        {/* Magazine Spreads */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(236, 72, 153, 0.25)',
                borderRadius: '12px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#EC4899', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase' }}>
                  {prod.truck} Rig Fitting
                </span>
                <span style={{ fontSize: '11px', color: '#C084FC', background: 'rgba(236,72,153,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  {prod.tier}
                </span>
              </div>

              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#FFF', margin: '0 0 6px 0' }}>
                  {prod.name}
                </h2>
                <div style={{ fontSize: '13px', color: '#A855F7' }}>{prod.model}</div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '14px', borderRadius: '8px', borderLeft: '3px solid #EC4899', fontSize: '12px', color: '#D8B4FE', lineHeight: 1.5 }}>
                "Hit an 8-point buck at 65 MPH outside Bozeman. The guard didn't even push back into the hood. Kept my load on schedule."
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: '#FFF' }}>
                  ${prod.price.toLocaleString()}
                </span>

                <button
                  style={{
                    background: '#EC4899',
                    color: '#FFF',
                    border: 'none',
                    padding: '10px 18px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Select Model</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
