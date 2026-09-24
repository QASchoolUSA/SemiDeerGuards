'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Truck,
  ShieldCheck,
  Zap,
  Star,
  ArrowRight,
  CheckCircle2,
  Clock,
  PhoneCall,
  ShoppingCart
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function HighwayExpressDirectHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const { isMobile } = useDemoViewport()
  const [selectedMake, setSelectedMake] = useState('Volvo')
  const [selectedModel, setSelectedModel] = useState('VNL 760')
  const [addedId, setAddedId] = useState<string | null>(null)

  const handleQuickAdd = (id: string) => {
    setAddedId(id)
    setTimeout(() => setAddedId(null), 2000)
  }

  return (
    <div
      style={{
        background: '#0B132B',
        color: '#F8FAFC',
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        minHeight: '100vh',
      }}
    >
      {/* Top Value Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #1D4ED8, #2563EB)',
          padding: '10px 20px',
          textAlign: 'center',
          fontSize: '13px',
          fontWeight: 700,
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <span>🚚 FREE FREIGHT SHIPPING TO ANY TRUCK STOP OR SHOP ADDRESS</span>
        <span style={{ opacity: 0.7 }}>•</span>
        <span>⚡ ORDERS BEFORE 2 PM DISPATCH TODAY</span>
        <span style={{ opacity: 0.7 }}>•</span>
        <span>🛡️ 3-YEAR UNLIMITED MILEAGE STRUCTURAL WARRANTY</span>
      </div>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: isMobile ? '24px 14px 60px' : '48px 24px 80px' }}>
        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: isMobile ? '24px' : '40px', alignItems: 'center', marginBottom: '64px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.35)', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', marginBottom: '16px' }}>
              <ShieldCheck size={16} />
              <span>GUARANTEED 100% BOLT-ON NO-DRILL FITMENT</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Protect Your Big Rig. <br />
              <span style={{ color: '#60A5FA' }}>Never Wait on a Tow Truck.</span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#CBD5E1', maxWidth: '580px', marginBottom: '28px' }}>
              Heavy-gauge steel & stainless deer guards for owner-operators and fleet drivers. Folds down in 12 seconds for hood access, 100% radar sensor compliant, and ships directly to your home terminal, truck stop, or service shop.
            </p>

            {/* Quick Rig Finder Card */}
            <div
              style={{
                background: '#131F3F',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                marginBottom: '28px',
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#93C5FD', textTransform: 'uppercase', marginBottom: '12px' }}>
                Select Your Truck to Find Guaranteed Fit:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr auto', gap: '10px' }}>
                <select
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  style={{
                    background: '#0B132B',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#FFF',
                    padding: '10px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <option value="Volvo">Volvo (VNL / VNM)</option>
                  <option value="Freightliner">Freightliner (Cascadia)</option>
                  <option value="Kenworth">Kenworth (T680 / W900)</option>
                  <option value="Peterbilt">Peterbilt (389 / 579)</option>
                  <option value="Mack">Mack (Anthem)</option>
                </select>

                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  style={{
                    background: '#0B132B',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#FFF',
                    padding: '10px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <option value="VNL 760">VNL 760 / 860 (2018–2026)</option>
                  <option value="Cascadia">Cascadia Evolution (2018–2026)</option>
                  <option value="T680">T680 Next Gen</option>
                  <option value="389">389 Classic Hood</option>
                </select>

                <button
                  onClick={onExploreShop}
                  style={{
                    background: '#2563EB',
                    color: '#FFF',
                    fontWeight: 800,
                    fontSize: '13px',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Shop Guards →
                </button>
              </div>
            </div>

            {/* Trust Highlights */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '13px', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#22C55E" />
                <span>Affirm financing from $78/mo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#22C55E" />
                <span>Mounting brackets & hardware included</span>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(59, 130, 246, 0.3)',
              aspectRatio: '4/3',
            }}
          >
            <Image
              src="/images/guards/guard-volvo-vnl.jpg"
              alt="Heavy Duty Deer Guard on Volvo VNL semi truck"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Overlay pill badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(11, 19, 43, 0.88)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                padding: '12px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFF' }}>
                  AeroShield Pro Guard — Volvo VNL 760
                </div>
                <div style={{ fontSize: '11px', color: '#93C5FD' }}>
                  Installed with zero-drill tow brackets • In Stock Ready to Ship
                </div>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#60A5FA' }}>
                $2,199
              </div>
            </div>
          </div>
        </div>

        {/* Featured Driver Best Sellers */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#60A5FA', textTransform: 'uppercase' }}>
                Direct Driver Catalog
              </div>
              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#FFF', margin: '4px 0 0' }}>
                Bestselling Guards in Stock Today
              </h2>
            </div>
            <button
              onClick={onExploreShop}
              style={{
                background: 'none',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                color: '#93C5FD',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              View All 6 Rigs →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#131F3F',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                {/* Product Image */}
                <div style={{ position: 'relative', width: '100%', height: '220px', background: '#0B132B' }}>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#2563EB', color: '#FFF', fontSize: '10px', fontWeight: 900, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {prod.truck}
                  </div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#22C55E', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                    {prod.stockCount} Ready to Ship
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', color: '#F59E0B' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="#F59E0B" />
                      ))}
                    </div>
                    <span style={{ fontSize: '12px', color: '#94A3B8' }}>({prod.reviewCount})</span>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                    {prod.name}
                  </h3>
                  <div style={{ fontSize: '12px', color: '#93C5FD', marginBottom: '14px' }}>
                    Fitment: {prod.model} ({prod.yearRange})
                  </div>

                  <div style={{ background: '#0B132B', padding: '10px', borderRadius: '6px', fontSize: '11px', color: '#CBD5E1', marginBottom: '16px' }}>
                    <div>• <strong>Steel:</strong> {prod.gauge}</div>
                    <div>• <strong>Radar:</strong> {prod.casCompatible ? '100% CAS Compatible' : 'Conventional Mount'}</div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '22px', fontWeight: 900, color: '#FFF' }}>
                        ${prod.price.toLocaleString()}
                      </div>
                      <div style={{ fontSize: '11px', color: '#93C5FD' }}>
                        or ${prod.monthlyPayment}/mo via Affirm
                      </div>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(prod.id)}
                      style={{
                        background: addedId === prod.id ? '#22C55E' : '#2563EB',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 18px',
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
                      <span>{addedId === prod.id ? 'ADDED!' : 'BUY NOW'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
