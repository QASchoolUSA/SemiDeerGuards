'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Terminal, Search, Command, ArrowRight, Check, Zap } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function SpeedTerminalHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const { isMobile } = useDemoViewport()
  const [query, setQuery] = useState('')

  const filtered = query.trim() === ''
    ? DEMO_PRODUCTS.slice(0, 4)
    : DEMO_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.truck.toLowerCase().includes(query.toLowerCase()) ||
        p.model.toLowerCase().includes(query.toLowerCase())
      )

  return (
    <div
      style={{
        background: '#030712',
        color: '#E0F2FE',
        fontFamily: '"Fira Code", "Geist Mono", monospace',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '60px 24px 100px',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Terminal Status Line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '16px', marginBottom: '40px', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8' }}>
            <Terminal size={15} />
            <span>DISPATCH-CLI v4.1 // LATENCY: 12ms // ALL HUBS SYNCED</span>
          </div>
          <div style={{ color: '#64748B' }}>
            PRESS <kbd style={{ background: '#1E293B', padding: '2px 6px', borderRadius: '4px', color: '#FFF' }}>TAB</kbd> TO NAVIGATE
          </div>
        </div>

        {/* Command Search Prompt Box */}
        <div
          style={{
            background: '#0F172A',
            border: '2px solid #38BDF8',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.15)',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <Search size={22} color="#38BDF8" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type truck make (e.g. 'Volvo'), model ('Cascadia'), or part SKU..."
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFF',
                fontSize: '18px',
                fontFamily: 'inherit',
                outline: 'none',
                width: '100%',
              }}
              autoFocus
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#94A3B8', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px' }}>
            <span>Quick Presets:</span>
            {['Volvo VNL', 'Cascadia', 'Kenworth T680', 'Peterbilt 389'].map((preset) => (
              <button
                key={preset}
                onClick={() => setQuery(preset)}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#38BDF8',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Instant Search Results */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '12px', color: '#94A3B8' }}>
            <span>MATCHING RIGS ({filtered.length})</span>
            <button onClick={onExploreShop} style={{ background: 'none', border: 'none', color: '#38BDF8', cursor: 'pointer' }}>
              Open High-Speed Order Table →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filtered.map((prod, idx) => (
              <div
                key={prod.id}
                onClick={onExploreShop}
                style={{
                  background: '#0F172A',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: isMobile ? '14px' : '16px 20px',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  justifyContent: 'space-between',
                  gap: isMobile ? '14px' : '0',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#38BDF8'
                  e.currentTarget.style.background = '#1E293B'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = '#0F172A'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', width: isMobile ? '100%' : 'auto' }}>
                  <span style={{ color: '#64748B', fontSize: '12px', width: '20px' }}>0{idx + 1}</span>
                  <div style={{ position: 'relative', width: '48px', height: '36px', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', background: '#020617', flexShrink: 0 }}>
                    <Image src={prod.image} alt={prod.name} fill sizes="48px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFF', fontSize: '14px' }}>{prod.name}</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>{prod.truck} {prod.model} // SKU: {prod.id}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'space-between' : 'flex-end', width: isMobile ? '100%' : 'auto', gap: '20px', borderTop: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingTop: isMobile ? '10px' : 0 }}>
                  <div style={{ textAlign: isMobile ? 'left' : 'right', fontSize: '11px' }}>
                    <div style={{ color: prod.inStock ? '#22C55E' : '#EF4444' }}>
                      {prod.inStock ? `${prod.stockCount} in stock` : 'backordered'}
                    </div>
                    <div style={{ color: '#64748B' }}>{prod.impactRating.split(' ')[0]}</div>
                  </div>

                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#38BDF8' }}>
                    ${prod.price.toLocaleString()}
                  </div>

                  <ArrowRight size={16} color="#64748B" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
