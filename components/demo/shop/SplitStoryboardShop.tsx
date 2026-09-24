'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { BookOpen, Quote, ArrowRight, ShieldCheck, Star, ShoppingCart, Check, PhoneCall } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function SplitStoryboardShop() {
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
        background: '#0B0912',
        color: '#F3E8FF',
        fontFamily: '"Epilogue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            borderBottom: '1px solid rgba(236, 72, 153, 0.25)',
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
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#EC4899', fontWeight: 800, marginBottom: '4px' }}>
              EDITORIAL FIELD EQUIPMENT STORE
            </div>
            <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#FFF', margin: 0 }}>
              Driver-Tested Deer Guard Catalog
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(236, 72, 153, 0.15)',
                border: '1px solid #EC4899',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 800,
                color: '#F472B6',
              }}
            >
              <ShoppingCart size={15} />
              <span>Rig Orders ({cartItems.length})</span>
            </div>

            <a
              href="tel:8005553337"
              style={{
                color: '#D8B4FE',
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

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', overflowX: 'auto', paddingBottom: '6px' }}>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              style={{
                background: selectedBrand === b ? '#EC4899' : 'rgba(255,255,255,0.05)',
                color: selectedBrand === b ? '#FFF' : '#C084FC',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {b === 'ALL' ? 'ALL RIGS' : b}
            </button>
          ))}
        </div>

        {/* Magazine Product Cards with REAL IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(330px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => {
            const isAdded = justAdded === prod.id
            return (
              <div
                key={prod.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(236, 72, 153, 0.25)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                }}
              >
                {/* Real Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '180px', background: '#050308' }}>
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
                      background: 'rgba(11, 9, 18, 0.85)',
                      border: '1px solid #EC4899',
                      color: '#EC4899',
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
                    <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 6px 0' }}>
                      {prod.name}
                    </h2>
                    <div style={{ fontSize: '12px', color: '#A855F7', marginBottom: '10px' }}>
                      {prod.model} • {prod.tubeDiameter}
                    </div>

                    {/* Star ratings */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#FBBF24', marginBottom: '12px' }}>
                      <Star size={12} fill="#FBBF24" />
                      <Star size={12} fill="#FBBF24" />
                      <Star size={12} fill="#FBBF24" />
                      <Star size={12} fill="#FBBF24" />
                      <Star size={12} fill="#FBBF24" />
                      <span style={{ color: '#D8B4FE', marginLeft: '4px' }}>({prod.reviewCount} reviews)</span>
                    </div>

                    {/* Pull-quote driver proof */}
                    <div style={{ background: 'rgba(0,0,0,0.4)', padding: '10px 14px', borderRadius: '6px', borderLeft: '3px solid #EC4899', fontSize: '11px', color: '#D8B4FE', lineHeight: 1.5, marginBottom: '16px' }}>
                      "Hit an 8-point buck at 65 MPH outside Bozeman. The guard didn't even push back into the hood. Kept my load on schedule."
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '22px', fontWeight: 800, color: '#FFF' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#C084FC' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#34D399', fontWeight: 700 }}>
                        ✓ Free Shipping
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod.id)}
                      style={{
                        width: '100%',
                        background: isAdded ? '#10B981' : '#EC4899',
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
                        <><Check size={15} /> ADDED TO RIG ORDER</>
                      ) : (
                        <><ShoppingCart size={15} /> ORDER TESTED GUARD</>
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
