'use client'

import React, { useState } from 'react'
import { Terminal, Search, Check, ShoppingCart } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function SpeedTerminalShop() {
  const [filter, setFilter] = useState('')
  const [orderedId, setOrderedId] = useState<string | null>(null)

  const filtered = DEMO_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.truck.toLowerCase().includes(filter.toLowerCase()) ||
    p.model.toLowerCase().includes(filter.toLowerCase())
  )

  const handleOrder = (id: string) => {
    setOrderedId(id)
    setTimeout(() => setOrderedId(null), 2500)
  }

  return (
    <div
      style={{
        background: '#030712',
        color: '#E0F2FE',
        fontFamily: '"Fira Code", "Geist Mono", monospace',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Terminal Header */}
        <div style={{ borderBottom: '1px solid rgba(56, 189, 248, 0.2)', paddingBottom: '20px', marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 700 }}>PARTS-MATRIX // FAST-DISPATCH</div>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              High-Velocity Order Table
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '6px 14px', borderRadius: '6px' }}>
            <Search size={16} color="#38BDF8" />
            <input
              type="text"
              placeholder="Instant filter table..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#FFF', fontSize: '12px', outline: 'none', fontFamily: 'inherit' }}
            />
          </div>
        </div>

        {/* Tabular View */}
        <div style={{ background: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '8px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
            <thead>
              <tr style={{ background: '#020617', borderBottom: '1px solid rgba(56, 189, 248, 0.3)', color: '#38BDF8' }}>
                <th style={{ padding: '12px 16px' }}>SKU</th>
                <th style={{ padding: '12px 16px' }}>GUARD & RIG APPLICATION</th>
                <th style={{ padding: '12px 16px' }}>SPEC / GAUGE</th>
                <th style={{ padding: '12px 16px' }}>INVENTORY</th>
                <th style={{ padding: '12px 16px' }}>PRICE</th>
                <th style={{ padding: '12px 16px', textAlign: 'right' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((prod) => (
                <tr key={prod.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 16px', color: '#64748B' }}>{prod.id.toUpperCase()}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ fontWeight: 700, color: '#FFF' }}>{prod.name}</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>{prod.truck} — {prod.model}</div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#CBD5E1' }}>{prod.gauge}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ color: prod.inStock ? '#22C55E' : '#EF4444', fontWeight: 600 }}>
                      {prod.inStock ? `${prod.stockCount} IN DEPOT` : 'BACKORDER'}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', fontWeight: 800, color: '#38BDF8' }}>
                    ${prod.price.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                    <button
                      onClick={() => handleOrder(prod.id)}
                      disabled={!prod.inStock}
                      style={{
                        background: orderedId === prod.id ? '#22C55E' : '#38BDF8',
                        color: '#020617',
                        border: 'none',
                        padding: '6px 14px',
                        borderRadius: '4px',
                        fontWeight: 800,
                        fontSize: '11px',
                        cursor: prod.inStock ? 'pointer' : 'not-allowed',
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
