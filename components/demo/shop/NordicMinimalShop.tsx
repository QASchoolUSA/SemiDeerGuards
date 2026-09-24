'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, Star, Check, ShieldCheck, Filter, Truck } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function HighwayExpressDirectShop() {
  const { isMobile } = useDemoViewport()
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [addedId, setAddedId] = useState<string | null>(null)

  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = selectedBrand === 'ALL'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.truck === selectedBrand)

  const handleAddToCart = (id: string) => {
    setAddedId(id)
    setTimeout(() => setAddedId(null), 2200)
  }

  return (
    <div
      style={{
        background: '#0B132B',
        color: '#F8FAFC',
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Header */}
        <div style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.3)', paddingBottom: '24px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#60A5FA', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              DIRECT DRIVER STORE // FREE FREIGHT ON ALL RIGS
            </div>
            <h1 style={{ fontSize: '30px', fontWeight: 900, color: '#FFF', margin: '4px 0 0' }}>
              Semi Truck Deer Guards In Stock
            </h1>
          </div>

          {/* Brand Filter Buttons */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  background: selectedBrand === b ? '#2563EB' : '#131F3F',
                  color: selectedBrand === b ? '#FFF' : '#94A3B8',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Real Photography */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
          {filtered.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#131F3F',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              {/* Product Photography */}
              <div style={{ position: 'relative', width: '100%', height: '240px', background: '#0B132B' }}>
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                  <span style={{ background: '#2563EB', color: '#FFF', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {prod.truck}
                  </span>
                  <span style={{ background: 'rgba(0,0,0,0.7)', color: '#60A5FA', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                    {prod.tier}
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(11, 19, 43, 0.9)', color: '#22C55E', fontSize: '10px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                  ✓ {prod.stockCount} Ready to Ship
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', color: '#F59E0B' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#F59E0B" />
                    ))}
                  </div>
                  <span style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: 700 }}>{prod.rating}</span>
                  <span style={{ fontSize: '12px', color: '#64748B' }}>({prod.reviewCount} reviews)</span>
                </div>

                <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                  {prod.name}
                </h2>
                <div style={{ fontSize: '12px', color: '#93C5FD', marginBottom: '14px' }}>
                  Guaranteed Fitment: {prod.model} ({prod.yearRange})
                </div>

                {/* Driver Review Snippet */}
                <div style={{ background: '#0B132B', borderLeft: '3px solid #2563EB', padding: '10px 12px', borderRadius: '4px', fontSize: '11px', color: '#CBD5E1', fontStyle: 'italic', marginBottom: '16px', lineHeight: 1.4 }}>
                  "{prod.driverReview}" — <strong>{prod.driverName}</strong> ({prod.driverLocation})
                </div>

                {/* Specs Pill List */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px', color: '#94A3B8', marginBottom: '18px' }}>
                  <div>• <strong>Steel:</strong> {prod.gauge}</div>
                  <div>• <strong>Weight:</strong> {prod.weightLbs} lbs</div>
                  <div>• <strong>Tilt:</strong> 12-Sec Quick Release</div>
                  <div>• <strong>Radar:</strong> {prod.casCompatible ? 'CAS Friendly' : 'Heavy Shield'}</div>
                </div>

                {/* Price & Buy Button */}
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#FFF' }}>
                      ${prod.price.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '11px', color: '#60A5FA' }}>
                      or ${prod.monthlyPayment}/mo via Affirm
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(prod.id)}
                    style={{
                      background: addedId === prod.id ? '#22C55E' : '#2563EB',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 20px',
                      fontWeight: 800,
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    <ShoppingCart size={15} />
                    <span>{addedId === prod.id ? 'ADDED TO CART!' : 'ADD TO CART'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
