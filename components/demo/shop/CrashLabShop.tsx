'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Activity, ShieldCheck, Check, AlertTriangle, FileText, ShoppingCart, PhoneCall } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function CrashLabShop() {
  const { isMobile } = useDemoViewport()
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [cartItems, setCartItems] = useState<string[]>([])
  const [justAdded, setJustAdded] = useState<string | null>(null)

  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  const handleAddToCart = (id: string) => {
    setJustAdded(id)
    setCartItems((prev) => [...prev, id])
    setTimeout(() => setJustAdded(null), 2500)
  }

  return (
    <div
      style={{
        background: '#0C0A0B',
        color: '#FEE2E2',
        fontFamily: '"Chivo Mono", "Inter", -apple-system, sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            borderBottom: '1px solid rgba(239, 68, 68, 0.3)',
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
            <div style={{ fontSize: '11px', color: '#EF4444', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 800 }}>
              DOWNTIME LOSS PREVENTION STORE // TEST SCORECARDS
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              Impact-Class Certified Deer Guards
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #EF4444',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 800,
                color: '#F87171',
              }}
            >
              <ShoppingCart size={15} />
              <span>Rig Orders ({cartItems.length})</span>
            </div>

            <a
              href="tel:8005553337"
              style={{
                color: '#FCA5A5',
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
                background: selectedBrand === b ? '#EF4444' : 'rgba(255,255,255,0.05)',
                color: selectedBrand === b ? '#FFF' : '#FCA5A5',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {b === 'ALL' ? 'ALL RIGS' : b.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Scorecard Grid with REAL IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => {
            const isAdded = justAdded === prod.id
            return (
              <div
                key={prod.id}
                style={{
                  background: '#1A1113',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                }}
              >
                {/* Real Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', background: '#0D0607' }}>
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
                      background: 'rgba(12, 10, 11, 0.88)',
                      border: '1px solid #EF4444',
                      color: '#EF4444',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    LAB SPEC NO. {prod.id.toUpperCase()}
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                      {prod.name}
                    </h2>
                    <div style={{ fontSize: '12px', color: '#F87171', marginBottom: '12px' }}>
                      {prod.truck} {prod.model}
                    </div>

                    <div style={{ background: '#0D0607', padding: '12px', borderRadius: '6px', border: '1px dashed rgba(239, 68, 68, 0.25)', fontSize: '11px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#991B1B' }}>ENERGY DISSIPATION:</span>
                        <span style={{ color: '#EF4444', fontWeight: 800 }}>{prod.impactRating}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#991B1B' }}>TUBING GAUGE:</span>
                        <span style={{ color: '#FFF' }}>{prod.tubeDiameter}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#991B1B' }}>FRAME ATTACH:</span>
                        <span style={{ color: '#22C55E' }}>No-Drill Flange Included</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '22px', fontWeight: 900, color: '#EF4444' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#FCA5A5' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 700 }}>
                        Free Shipping
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod.id)}
                      style={{
                        width: '100%',
                        background: isAdded ? '#10B981' : '#EF4444',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '12px',
                        fontWeight: 900,
                        fontSize: '12px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'background 0.2s',
                      }}
                    >
                      {isAdded ? (
                        <><Check size={15} /> SPEC ADDED TO RIG ORDER</>
                      ) : (
                        <><ShoppingCart size={15} /> ORDER TEST-SPEC GUARD</>
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
