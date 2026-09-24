'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Award,
  PhoneCall,
  Check,
  Star,
  ShoppingCart,
  Truck,
  Shield,
  CheckCircle2,
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function HeritageAmericanaShop() {
  const { isMobile } = useDemoViewport()
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [cartItems, setCartItems] = useState<string[]>([])
  const [justAdded, setJustAdded] = useState<string | null>(null)

  const brands = ['ALL', 'Peterbilt', 'Kenworth', 'Freightliner', 'Volvo', 'Mack']

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
        background: '#120D09',
        color: '#FDE68A',
        fontFamily: '"Cinzel", "Playfair Display", Georgia, serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Header */}
        <div
          style={{
            borderBottom: '1px solid rgba(217, 119, 6, 0.35)',
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
            <div style={{ color: '#D97706', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>
              OFFICIAL AMERICAN GUARDS REGISTRY // DIRECT DISPATCH
            </div>
            <h1 style={{ fontSize: '30px', color: '#FFFBEB', margin: 0 }}>
              Classic Heavy Hauler Trade Catalog
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(217, 119, 6, 0.15)',
                border: '1px solid #D97706',
                padding: '8px 16px',
                borderRadius: '4px',
                color: '#FDE68A',
                fontSize: '13px',
                fontFamily: 'sans-serif',
                fontWeight: 700,
              }}
            >
              <ShoppingCart size={15} />
              <span>Rig Orders ({cartItems.length})</span>
            </div>

            <a
              href="tel:8005553337"
              style={{
                color: '#F59E0B',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'sans-serif',
              }}
            >
              <PhoneCall size={14} /> Call Dispatch: 1-800-555-DEER
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '6px' }}>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              style={{
                background: selectedBrand === b ? '#D97706' : 'rgba(217, 119, 6, 0.1)',
                color: selectedBrand === b ? '#000' : '#FDE68A',
                border: '1px solid rgba(217, 119, 6, 0.4)',
                padding: '8px 18px',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 700,
                borderRadius: '4px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {b === 'ALL' ? 'ALL RIGS' : b}
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
                  background: '#1A120D',
                  border: '1px solid rgba(217, 119, 6, 0.4)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                }}
              >
                {/* Real Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '190px', background: '#0D0805' }}>
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
                      background: 'rgba(18, 13, 9, 0.92)',
                      border: '1px solid #D97706',
                      color: '#F59E0B',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {prod.truck} Rig Fitting
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.75)',
                      color: '#FDE68A',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Star size={11} fill="#D97706" color="#D97706" /> Hand-Finished
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', color: '#FFFBEB', margin: '0 0 6px 0' }}>
                      {prod.name}
                    </h3>
                    <div style={{ fontSize: '13px', color: '#D1A374', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '12px' }}>
                      {prod.model} • {prod.tubeDiameter}
                    </div>

                    <div style={{ background: '#120C08', padding: '12px', border: '1px solid rgba(217, 119, 6, 0.2)', fontSize: '11px', fontFamily: 'Georgia, serif', color: '#E2D3B8', marginBottom: '16px' }}>
                      <div><strong>Impact Tolerance:</strong> {prod.impactRating}</div>
                      <div><strong>Finish Grade:</strong> {prod.finish}</div>
                      <div><strong>Mounting:</strong> Tow hook direct bolt-on (brackets included)</div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(217, 119, 6, 0.25)', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: '#F59E0B' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#D1A374', fontFamily: 'sans-serif' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#FDE68A', fontFamily: 'sans-serif' }}>
                        Free Shipping
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(prod.id)}
                      style={{
                        width: '100%',
                        background: isAdded ? '#10B981' : 'linear-gradient(135deg, #D97706, #B45309)',
                        color: isAdded ? '#000' : '#FFF',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '12px',
                        fontWeight: 700,
                        fontSize: '12px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
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
                        <><ShoppingCart size={15} /> ORDER CLASSIC GUARD</>
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
