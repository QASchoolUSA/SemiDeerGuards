'use client'

import React, { useState } from 'react'
import { ArrowUpRight, SlidersHorizontal, Check } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function NordicMinimalShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack', 'International']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  return (
    <div
      style={{
        background: '#0A0A0B',
        color: '#E5E7EB',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '60px 32px 120px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Editorial Title */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '32px', marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#6B7280', marginBottom: '8px' }}>
              Collection / Edition 01
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: 300, letterSpacing: '-0.03em', margin: 0, color: '#FFFFFF' }}>
              Selected Pieces
            </h1>
          </div>

          {/* Minimal Brand Filter Bar */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '6px 12px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  color: selectedBrand === b ? '#FFFFFF' : '#6B7280',
                  borderBottom: selectedBrand === b ? '1px solid #FFFFFF' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Lookbook Grid (Asymmetrical) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '48px' }}>
          {filtered.map((prod, idx) => (
            <div
              key={prod.id}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                <span>{prod.truck}</span>
                <span>{prod.tier}</span>
              </div>

              <h2 style={{ fontSize: '22px', fontWeight: 300, color: '#FFFFFF', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                {prod.name}
              </h2>
              <div style={{ fontSize: '13px', color: '#9CA3AF', marginBottom: '24px' }}>
                {prod.model}
              </div>

              {/* Minimal spec tags */}
              <div style={{ display: 'flex', gap: '16px', fontSize: '11px', color: '#6B7280', marginBottom: '32px' }}>
                <span>{prod.gauge}</span>
                <span>•</span>
                <span>{prod.weightLbs} lbs</span>
                <span>•</span>
                <span>{prod.finish}</span>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', fontWeight: 300, color: '#FFFFFF' }}>
                  ${prod.price.toLocaleString()}
                </span>

                <button
                  style={{
                    background: '#FFFFFF',
                    color: '#0A0A0B',
                    border: 'none',
                    padding: '10px 22px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
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
  )
}
