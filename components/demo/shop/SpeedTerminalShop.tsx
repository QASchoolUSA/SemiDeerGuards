'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Terminal, Search, Check, ShoppingCart, PhoneCall } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function SpeedTerminalShop() {
  const { isMobile } = useDemoViewport()
  const [filter, setFilter] = useState('')
  const [orderedId, setOrderedId] = useState<string | null>(null)
  const [cartCount, setCartCount] = useState(0)

  const filtered = DEMO_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.truck.toLowerCase().includes(filter.toLowerCase()) ||
    p.model.toLowerCase().includes(filter.toLowerCase())
  )

  const handleOrder = (id: string) => {
    setOrderedId(id)
    setCartCount((c) => c + 1)
    setTimeout(() => setOrderedId(null), 2500)
  }

  return (
    <div
      style={{
        background: '#030712',
        color: '#E0F2FE',
        fontFamily: '"Fira Code", "Geist Mono", monospace',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Terminal Header */}
        <div
          style={{
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
            paddingBottom: '20px',
            marginBottom: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 700 }}>PARTS-MATRIX // FAST-DISPATCH STORE</div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              High-Velocity Direct Order Table
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '6px 14px', borderRadius: '6px' }}>
              <Search size={15} color="#38BDF8" />
              <input
                type="text"
                placeholder="Search truck, model, or SKU..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#FFF', fontSize: '12px', outline: 'none', fontFamily: 'inherit', width: '220px' }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#0284C7',
                color: '#FFF',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 800,
              }}
            >
              <ShoppingCart size={15} />
              <span>Orders ({cartCount})</span>
            </div>

            <a
              href="tel:8005553337"
              style={{
                color: '#38BDF8',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <PhoneCall size={13} /> 1-800-555-DEER
            </a>
          </div>
        </div>

        {/* Tabular View with REAL IMAGES */}
        <div style={{ background: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '8px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
            <thead>
              <tr style={{ background: '#020617', borderBottom: '1px solid rgba(56, 189, 248, 0.3)', color: '#38BDF8' }}>
                <th style={{ padding: '12px 14px' }}>PHOTO</th>
                <th style={{ padding: '12px 14px' }}>SKU</th>
                <th style={{ padding: '12px 14px' }}>RIG APPLICATION</th>
                <th style={{ padding: '12px 14px' }}>TUBING GAUGE</th>
                <th style={{ padding: '12px 14px' }}>RADAR CAS</th>
                <th style={{ padding: '12px 14px' }}>STOCK</th>
                <th style={{ padding: '12px 14px' }}>DIRECT PRICE</th>
                <th style={{ padding: '12px 14px', textAlign: 'right' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((prod) => (
                <tr key={prod.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '10px 14px' }}>
                    <div style={{ position: 'relative', width: '50px', height: '40px', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', background: '#020617' }}>
                      <Image src={prod.image} alt={prod.name} fill sizes="50px" style={{ objectFit: 'cover' }} />
                    </div>
                  </td>
                  <td style={{ padding: '12px 14px', color: '#64748B' }}>{prod.id.toUpperCase()}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ fontWeight: 700, color: '#FFF' }}>{prod.name}</div>
                    <div style={{ fontSize: '11px', color: '#38BDF8' }}>{prod.truck} — {prod.model}</div>
                  </td>
                  <td style={{ padding: '12px 14px', color: '#CBD5E1' }}>{prod.tubeDiameter}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ color: prod.radarCompliant ? '#22C55E' : '#94A3B8', fontWeight: 600 }}>
                      {prod.radarCompliant ? '✓ 77GHz OK' : 'Standard'}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <span style={{ color: prod.stockCount > 0 ? '#22C55E' : '#EF4444', fontWeight: 600 }}>
                      {prod.stockCount > 0 ? `${prod.stockCount} UNITS` : 'BACKORDER'}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ fontWeight: 800, color: '#FFF', fontSize: '14px' }}>${prod.price.toLocaleString()}</div>
                    <div style={{ fontSize: '10px', color: '#38BDF8' }}>${prod.affirmMonthly}/mo Affirm</div>
                  </td>
                  <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                    <button
                      onClick={() => handleOrder(prod.id)}
                      disabled={prod.stockCount === 0}
                      style={{
                        background: orderedId === prod.id ? '#22C55E' : '#38BDF8',
                        color: '#020617',
                        border: 'none',
                        padding: '8px 14px',
                        borderRadius: '4px',
                        fontWeight: 800,
                        fontSize: '11px',
                        cursor: prod.stockCount > 0 ? 'pointer' : 'not-allowed',
                      }}
                    >
                      {orderedId === prod.id ? 'ADDED!' : 'BUY NOW'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
