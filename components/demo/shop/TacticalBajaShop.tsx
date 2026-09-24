'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Flame, Shield, Check, Filter, Zap, AlertTriangle, Truck, ShoppingCart, PhoneCall } from 'lucide-react'
import { DEMO_PRODUCTS, DemoProduct } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function TacticalBajaShop() {
  const { isMobile } = useDemoViewport()
  const [activeTier, setActiveTier] = useState<string>('ALL')
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL')
  const [orderedId, setOrderedId] = useState<string | null>(null)
  const [cartCount, setCartCount] = useState(0)

  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']
  const tiers = ['ALL', 'Tier 1', 'Tier 2', 'Tier 3']

  const filtered = DEMO_PRODUCTS.filter((p) => {
    if (activeTier !== 'ALL' && p.tier !== activeTier) return false
    if (selectedBrand !== 'ALL' && p.truck !== selectedBrand) return false
    return true
  })

  const handleOrder = (id: string) => {
    setOrderedId(id)
    setCartCount((c) => c + 1)
    setTimeout(() => setOrderedId(null), 2500)
  }

  return (
    <div
      style={{
        background: '#120F0D',
        color: '#F8FAFC',
        fontFamily: '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Header */}
        <div style={{ borderBottom: '2px solid rgba(255, 107, 0, 0.3)', paddingBottom: '20px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF6B00', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <Flame size={16} />
                <span>HEAVY-HAUL COMBAT DEPOT // DIRECT E-COMMERCE</span>
              </div>
              <h1 style={{ fontSize: '30px', fontWeight: 900, textTransform: 'uppercase', margin: '4px 0 0' }}>
                TACTICAL HEAVY-DUTY RIG GUARDS
              </h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FF6B00',
                  color: '#000',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontWeight: 900,
                  fontSize: '13px',
                }}
              >
                <ShoppingCart size={16} />
                <span>RIG CART ({cartCount})</span>
              </div>

              <a
                href="tel:8005553337"
                style={{
                  color: '#FF6B00',
                  textDecoration: 'none',
                  fontWeight: 800,
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
        </div>

        {/* Filter controls */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {/* Brand Pills */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  padding: '8px 14px',
                  background: selectedBrand === b ? '#FF6B00' : 'rgba(255,255,255,0.05)',
                  color: selectedBrand === b ? '#000' : '#CBD5E1',
                  border: '1px solid rgba(255, 107, 0, 0.3)',
                  fontWeight: 800,
                  fontSize: '12px',
                  cursor: 'pointer',
                  borderRadius: '3px',
                }}
              >
                {b === 'ALL' ? 'ALL RIGS' : b.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with REAL IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => {
            const isAdded = orderedId === prod.id
            return (
              <div
                key={prod.id}
                style={{
                  background: '#1A1613',
                  border: '2px solid rgba(255, 107, 0, 0.4)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                }}
              >
                {/* Real Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', background: '#0D0A08' }}>
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
                      background: '#FF6B00',
                      color: '#000',
                      fontSize: '10px',
                      fontWeight: 900,
                      padding: '3px 8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {prod.tier}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '10px',
                      background: 'rgba(0,0,0,0.8)',
                      color: '#FF6B00',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '3px',
                    }}
                  >
                    {prod.truck.toUpperCase()} APPLICATION
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#FFF', margin: '0 0 4px 0' }}>
                      {prod.name}
                    </h3>
                    <div style={{ fontSize: '12px', color: '#FF6B00', fontWeight: 700, marginBottom: '12px' }}>
                      Application: {prod.model} • {prod.tubeDiameter}
                    </div>

                    {/* Armor Stat Box */}
                    <div style={{ background: '#0D0A08', padding: '12px', border: '1px solid rgba(255, 107, 0, 0.2)', fontSize: '11px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#64748B' }}>IMPACT TOLERANCE:</span>
                        <span style={{ color: '#FFF', fontWeight: 800 }}>{prod.impactRating}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#64748B' }}>RADAR READY:</span>
                        <span style={{ color: prod.radarCompliant ? '#22C55E' : '#CBD5E1', fontWeight: 700 }}>
                          {prod.radarCompliant ? '100% Pass-Through' : 'Standard'}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748B' }}>DEPOT STATUS:</span>
                        <span style={{ color: '#22C55E', fontWeight: 800 }}>
                          {prod.stockCount} UNITS IN WAREHOUSE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255, 107, 0, 0.25)', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: 900, color: '#FF6B00' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#94A3B8' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 800 }}>
                        FREE FREIGHT
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrder(prod.id)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: isAdded ? '#22C55E' : '#FF6B00',
                        color: '#000',
                        fontWeight: 900,
                        fontSize: '13px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'background 0.2s',
                      }}
                    >
                      {isAdded ? (
                        <><Check size={16} /> ARMOR RIG ADDED</>
                      ) : (
                        <><Truck size={16} /> ORDER ARMOR RIG</>
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
