'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Radio,
  Wifi,
  Shield,
  Check,
  Cpu,
  ShoppingCart,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function CyberRigShop() {
  const { isMobile } = useDemoViewport()
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [cartCount, setCartCount] = useState(0)
  const [addedId, setAddedId] = useState<string | null>(null)

  const brands = ['ALL', 'Freightliner', 'Volvo', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  const handleAddToCart = (id: string) => {
    setAddedId(id)
    setCartCount((c) => c + 1)
    setTimeout(() => setAddedId(null), 2500)
  }

  return (
    <div
      style={{
        background: '#040711',
        color: '#E0F2FE',
        fontFamily: '"Space Grotesk", "Rajdhani", sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Bar with Cart Count */}
        <div
          style={{
            borderBottom: '1px solid rgba(0, 240, 255, 0.25)',
            paddingBottom: '20px',
            marginBottom: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '11px', color: '#00F0FF', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 800 }}>
              SENSOR TELEMETRY HUB // ONLINE STORE
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#FFF', margin: '4px 0 0' }}>
              CAS Radar-Safe Deer Guard Catalog
            </h1>
          </div>

          {/* Cart Status & Quick Call */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid #00F0FF',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 800,
                color: '#00F0FF',
              }}
            >
              <ShoppingCart size={16} />
              <span>Rig Cart ({cartCount})</span>
            </div>

            <a
              href="tel:8005553337"
              style={{
                color: '#BAE6FD',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700,
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
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', overflowX: 'auto', paddingBottom: '6px' }}>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              style={{
                background: selectedBrand === b ? '#00F0FF' : 'rgba(255,255,255,0.05)',
                color: selectedBrand === b ? '#040711' : '#7DD3FC',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {b === 'ALL' ? 'ALL RIGS' : b.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Products Grid with REAL IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filtered.map((prod) => {
            const isAdded = addedId === prod.id
            return (
              <div
                key={prod.id}
                style={{
                  background: 'rgba(8, 12, 28, 0.9)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                }}
              >
                {/* Real Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '190px', background: '#020408' }}>
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
                      background: 'rgba(4, 7, 17, 0.85)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid #00F0FF',
                      color: '#00F0FF',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {prod.truck.toUpperCase()} FITMENT
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: prod.radarCompliant ? 'rgba(34, 197, 94, 0.9)' : 'rgba(245, 158, 11, 0.9)',
                      color: '#040711',
                      fontSize: '10px',
                      fontWeight: 900,
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {prod.radarCompliant ? 'RADAR CERTIFIED' : 'STANDARD'}
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 6px 0' }}>
                      {prod.name}
                    </h3>
                    <div style={{ fontSize: '12px', color: '#7DD3FC', marginBottom: '12px' }}>
                      {prod.model} • {prod.tubeDiameter} • {prod.material}
                    </div>

                    {/* Telemetry specs box */}
                    <div style={{ background: '#020408', padding: '10px 14px', borderRadius: '6px', border: '1px dashed rgba(0, 240, 255, 0.2)', fontSize: '11px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#64748B' }}>IMPACT RATING:</span>
                        <span style={{ color: '#00F0FF', fontWeight: 700 }}>{prod.impactRating}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748B' }}>AERODYNAMICS:</span>
                        <span style={{ color: '#22C55E', fontWeight: 700 }}>{prod.aeroDragDelta} Drag Impact</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '22px', fontWeight: 900, color: '#00F0FF' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#94A3B8' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 700 }}>
                        ✓ Free Freight
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod.id)}
                      style={{
                        width: '100%',
                        background: isAdded ? '#22C55E' : '#00F0FF',
                        color: '#040711',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '12px',
                        fontWeight: 900,
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'background 0.2s',
                      }}
                    >
                      {isAdded ? (
                        <><Check size={16} /> ADDED TO RIG ORDER</>
                      ) : (
                        <><ShoppingCart size={16} /> BUY RADAR GUARD</>
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
