'use client'

import React, { useState } from 'react'
import { Package, Check, ArrowRight } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function BrutalistWarehouseShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  return (
    <div
      style={{
        background: '#ECECEC',
        color: '#000000',
        fontFamily: '"Courier Prime", Courier, monospace',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            background: '#FFFFFF',
            border: '4px solid #000',
            boxShadow: '8px 8px 0px #000',
            padding: '24px 32px',
            marginBottom: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ background: '#E2F952', display: 'inline-block', padding: '2px 8px', fontWeight: 900, fontSize: '11px', marginBottom: '4px' }}>
              SECTION 08 // WAREHOUSE MANIFEST
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>
              CRATED PALLET INVENTORY
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: selectedBrand === b ? '#000' : '#FFF',
                  color: selectedBrand === b ? '#E2F952' : '#000',
                  border: '2px solid #000',
                  padding: '8px 14px',
                  fontWeight: 900,
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Shipping Manifest Ticket Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#FFFFFF',
                border: '3px solid #000',
                boxShadow: '6px 6px 0px #000',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 900, borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                <span>BARCODE: ||||| | |||| |</span>
                <span style={{ background: '#E2F952', padding: '1px 6px' }}>{prod.truck.toUpperCase()}</span>
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: 900, margin: '4px 0 0', textTransform: 'uppercase' }}>
                {prod.name}
              </h2>
              <div style={{ fontSize: '13px', fontWeight: 700 }}>APPLICATION: {prod.model}</div>

              <div style={{ background: '#F8F8F8', padding: '12px', border: '1px dashed #000', fontSize: '12px', lineHeight: 1.5 }}>
                <div><strong>STOCK IN WAREHOUSE:</strong> {prod.stockCount} PALLETS</div>
                <div><strong>STEEL THICKNESS:</strong> {prod.gauge}</div>
                <div><strong>WEIGHT:</strong> {prod.weightLbs} LBS</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '14px', borderTop: '2px solid #000' }}>
                <span style={{ fontSize: '26px', fontWeight: 900 }}>${prod.price.toLocaleString()}</span>
                <button
                  style={{
                    background: '#E2F952',
                    color: '#000',
                    border: '2px solid #000',
                    boxShadow: '3px 3px 0px #000',
                    padding: '10px 18px',
                    fontWeight: 900,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  CLAIM CRATE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
