'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Package, Check, ArrowRight, ShoppingCart, PhoneCall, Shield, AlertTriangle } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function BrutalistWarehouseShop() {
  const { isMobile } = useDemoViewport()
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [cartCount, setCartCount] = useState(0)
  const [claimedId, setClaimedId] = useState<string | null>(null)

  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  const handleClaim = (id: string) => {
    setClaimedId(id)
    setCartCount((c) => c + 1)
    setTimeout(() => setClaimedId(null), 2500)
  }

  return (
    <div
      style={{
        background: '#ECECEC',
        color: '#000000',
        fontFamily: '"Courier Prime", Courier, monospace',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Warning Hazard Line */}
        <div
          style={{
            height: '12px',
            background: 'repeating-linear-gradient(45deg, #000, #000 20px, #E2F952 20px, #E2F952 40px)',
            marginBottom: '24px',
            border: '3px solid #000',
          }}
        />

        {/* Header */}
        <div
          style={{
            background: '#FFFFFF',
            border: '4px solid #000',
            boxShadow: '8px 8px 0px #000',
            padding: '24px 28px',
            marginBottom: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ background: '#E2F952', display: 'inline-block', padding: '2px 8px', fontWeight: 900, fontSize: '11px', marginBottom: '4px', border: '1px solid #000' }}>
              SECTION 08 // CRATED FLATBED DISPATCH STORE
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>
              CRATED MOOSE & DEER GUARDS
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#E2F952',
                border: '3px solid #000',
                padding: '8px 16px',
                fontWeight: 900,
                fontSize: '13px',
              }}
            >
              <ShoppingCart size={16} />
              <span>CLAIMED CRATES: {cartCount}</span>
            </div>

            <a
              href="tel:8005553337"
              style={{
                color: '#000',
                textDecoration: 'none',
                fontWeight: 900,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <PhoneCall size={14} /> 1-800-555-DEER
            </a>
          </div>
        </div>

        {/* Brand Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '6px' }}>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              style={{
                background: selectedBrand === b ? '#000' : '#FFF',
                color: selectedBrand === b ? '#E2F952' : '#000',
                border: '3px solid #000',
                boxShadow: selectedBrand === b ? '3px 3px 0px #000' : 'none',
                padding: '8px 16px',
                fontWeight: 900,
                fontSize: '12px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {b === 'ALL' ? 'ALL RIGS' : b}
            </button>
          ))}
        </div>

        {/* Shipping Manifest Ticket Cards with REAL IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => {
            const isClaimed = claimedId === prod.id
            return (
              <div
                key={prod.id}
                style={{
                  background: '#FFFFFF',
                  border: '4px solid #000',
                  boxShadow: '6px 6px 0px #000',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Real Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', borderBottom: '3px solid #000', background: '#000' }}>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="350px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: '#000',
                      color: '#E2F952',
                      padding: '3px 8px',
                      fontWeight: 900,
                      fontSize: '11px',
                      border: '1px solid #E2F952',
                    }}
                  >
                    {prod.truck.toUpperCase()} APPLICATION
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: '#E2F952',
                      color: '#000',
                      border: '2px solid #000',
                      padding: '2px 8px',
                      fontWeight: 900,
                      fontSize: '10px',
                    }}
                  >
                    READY TO CRATE
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: 900, margin: '0 0 4px 0', textTransform: 'uppercase' }}>
                      {prod.name}
                    </h2>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#444', marginBottom: '12px' }}>
                      APPLICATION: {prod.model} • {prod.tubeDiameter}
                    </div>

                    <div style={{ background: '#F8F8F8', padding: '12px', border: '2px solid #000', fontSize: '11px', lineHeight: 1.5, marginBottom: '16px' }}>
                      <div><strong>IN-STOCK CRATES:</strong> {prod.stockCount} Pallets Available</div>
                      <div><strong>IMPACT ABSORPTION:</strong> {prod.impactRating}</div>
                      <div><strong>MATERIAL:</strong> {prod.material} (Zero Rust)</div>
                    </div>
                  </div>

                  <div style={{ borderTop: '3px solid #000', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: 900 }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#555', fontWeight: 700 }}>
                          or ${prod.affirmMonthly}/mo via Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '10px', fontWeight: 900, background: '#E2F952', padding: '3px 6px', border: '1px solid #000' }}>
                        FREE FREIGHT
                      </span>
                    </div>

                    <button
                      onClick={() => handleClaim(prod.id)}
                      style={{
                        width: '100%',
                        background: isClaimed ? '#22C55E' : '#E2F952',
                        color: '#000',
                        border: '3px solid #000',
                        boxShadow: '3px 3px 0px #000',
                        padding: '12px',
                        fontWeight: 900,
                        fontSize: '13px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'background 0.2s',
                      }}
                    >
                      {isClaimed ? (
                        <><Check size={16} /> CRATE CLAIMED & LOCKED</>
                      ) : (
                        <><ShoppingCart size={15} /> CLAIM CRATE TO TRUCK</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
