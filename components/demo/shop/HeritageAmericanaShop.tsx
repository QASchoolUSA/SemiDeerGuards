'use client'

import React, { useState } from 'react'
import { Award, PhoneCall, Check, Star } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function HeritageAmericanaShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const brands = ['ALL', 'Kenworth', 'Peterbilt', 'Freightliner', 'Volvo', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  return (
    <div
      style={{
        background: '#140E0A',
        color: '#FDE68A',
        fontFamily: '"Cinzel", "Playfair Display", Georgia, serif',
        minHeight: '100vh',
        padding: '50px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(217, 119, 6, 0.3)', paddingBottom: '24px', marginBottom: '40px' }}>
          <div style={{ color: '#D97706', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '6px' }}>
            Official Parts & Armor Register
          </div>
          <h1 style={{ fontSize: '32px', color: '#FFFBEB', margin: '0 0 16px 0' }}>
            Heavy Hauler Trade Catalog
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: selectedBrand === b ? '#D97706' : 'rgba(217, 119, 6, 0.1)',
                  color: selectedBrand === b ? '#000' : '#FDE68A',
                  border: '1px solid rgba(217, 119, 6, 0.4)',
                  padding: '6px 16px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#1A120D',
                border: '2px solid rgba(217, 119, 6, 0.35)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {prod.truck} Rig Fitting
                </span>
                <span style={{ fontSize: '11px', color: '#FDE68A', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={12} fill="#D97706" color="#D97706" /> Hand-Finished
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '20px', color: '#FFFBEB', margin: '0 0 4px 0' }}>
                  {prod.name}
                </h3>
                <div style={{ fontSize: '13px', color: '#D1A374', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  {prod.model}
                </div>
              </div>

              <div style={{ background: '#120C08', padding: '14px', border: '1px solid rgba(217, 119, 6, 0.2)', fontSize: '12px', fontFamily: 'Georgia, serif', color: '#E2D3B8' }}>
                <div><strong>Construction:</strong> {prod.gauge}</div>
                <div><strong>Impact Resistance:</strong> {prod.impactRating}</div>
                <div><strong>Plating:</strong> {prod.finish}</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(217, 119, 6, 0.2)' }}>
                <span style={{ fontSize: '24px', fontWeight: 700, color: '#D97706' }}>
                  ${prod.price.toLocaleString()}
                </span>

                <button
                  style={{
                    background: '#D97706',
                    color: '#000',
                    border: 'none',
                    padding: '10px 18px',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  Order Build
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
