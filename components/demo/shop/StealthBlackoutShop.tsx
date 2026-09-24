'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Sparkles, Moon, Check, ArrowRight, ShoppingCart, PhoneCall } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function StealthBlackoutShop() {
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
        background: '#050508',
        color: '#F3E8FF',
        fontFamily: '"Montserrat", "Inter", -apple-system, sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.08)',
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
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#A855F7', marginBottom: '4px', fontWeight: 800 }}>
              STEALTH BLACKOUT COLLECTION // DIRECT E-COMMERCE
            </div>
            <h1 style={{ fontSize: '30px', fontWeight: 900, color: '#FFF', margin: 0 }}>
              Satin Matte Black Deer Guards
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid #A855F7',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 800,
                color: '#C084FC',
              }}
            >
              <ShoppingCart size={15} />
              <span>Rig Orders ({cartItems.length})</span>
            </div>

            <a
              href="tel:8005553337"
              style={{
                color: '#A855F7',
                textDecoration: 'none',
                fontWeight: 700,
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
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', overflowX: 'auto', paddingBottom: '6px' }}>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              style={{
                background: selectedBrand === b ? '#A855F7' : 'rgba(255,255,255,0.04)',
                color: selectedBrand === b ? '#FFF' : '#94A3B8',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {b === 'ALL' ? 'ALL RIGS' : b.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Cards with REAL IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => {
            const isAdded = justAdded === prod.id
            return (
              <div
                key={prod.id}
                style={{
                  background: '#0B0B12',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                }}
              >
                {/* Real Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', background: '#020204' }}>
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
                      background: 'rgba(5, 5, 8, 0.9)',
                      border: '1px solid #A855F7',
                      color: '#C084FC',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {prod.truck} Rig Fitting
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                      {prod.name}
                    </h2>
                    <div style={{ fontSize: '12px', color: '#A855F7', marginBottom: '12px' }}>
                      {prod.model} • {prod.tubeDiameter}
                    </div>

                    <div style={{ background: '#050508', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '11px', marginBottom: '16px' }}>
                      <div><strong>FINISH:</strong> Textured Powdercoat Black</div>
                      <div><strong>RADAR:</strong> {prod.radarCompliant ? '100% Pass-Through' : 'Standard'}</div>
                      <div><strong>MOUNT:</strong> Vehicle-specific brackets included</div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '22px', fontWeight: 800, color: '#FFF' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#A855F7' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 700 }}>
                        Free Freight
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod.id)}
                      style={{
                        width: '100%',
                        background: isAdded ? '#10B981' : '#A855F7',
                        color: '#FFF',
                        border: 'none',
                        padding: '12px',
                        borderRadius: '6px',
                        fontWeight: 800,
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'background 0.2s',
                      }}
                    >
                      {isAdded ? (
                        <><Check size={16} /> ADDED TO RIG ORDER</>
                      ) : (
                        <><ShoppingCart size={15} /> ORDER BLACKOUT GUARD</>
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
