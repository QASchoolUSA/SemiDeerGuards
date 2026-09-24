'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Shield,
  Truck,
  CheckCircle2,
  Package,
  ArrowRight,
  ShoppingCart,
  Wrench,
  Percent,
  Check,
  PhoneCall,
  Clock,
  Sparkles,
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function FleetCommanderShop() {
  const { isMobile } = useDemoViewport()
  const [activeTab, setActiveTab] = useState<'single' | 'fleet'>('single')
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'g-cascadia': 1,
    'g-vnl760': 1,
  })
  const [bracketType, setBracketType] = useState<Record<string, string>>({
    'g-cascadia': 'standard',
    'g-vnl760': 'radar-cutout',
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const cur = prev[id] || 0
      const next = Math.max(0, cur + delta)
      return { ...prev, [id]: next }
    })
  }

  // Calculate totals
  const totalRigs = Object.values(quantities).reduce((acc, q) => acc + q, 0)
  
  // Tiered discounts for owner-operators & 1-3 truck fleets
  let discountRate = 0
  let discountLabel = 'Single Unit Standard Pricing'
  if (totalRigs >= 3) {
    discountRate = 0.15
    discountLabel = '3+ Rig Fleet Package (15% OFF)'
  } else if (totalRigs === 2) {
    discountRate = 0.10
    discountLabel = '2-Rig Duo Bundle (10% OFF)'
  }

  const rawSubtotal = DEMO_PRODUCTS.reduce((acc, p) => {
    const qty = quantities[p.id] || 0
    return acc + p.price * qty
  }, 0)

  const discountVal = rawSubtotal * discountRate
  const netTotal = rawSubtotal - discountVal
  const affirmMonthly = Math.round(netTotal / 24)

  return (
    <div
      style={{
        background: '#0B131E',
        color: '#E2E8F0',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '32px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Driver Notice Banner */}
        <div
          style={{
            background: 'linear-gradient(90deg, #1E293B, #0F172A)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '10px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: '#3B82F6', color: '#FFF', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px' }}>
              DIRECT FROM FABRICATOR
            </span>
            <span style={{ fontSize: '13px', color: '#CBD5E1' }}>
              Free Truckstop Terminal Freight on all 1 to 3 Truck Orders • Pre-welded Mounting Brackets Included
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px' }}>
            <span style={{ color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> Ships in 24-48 Hours
            </span>
            <a href="tel:8005553337" style={{ color: '#60A5FA', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={14} /> 1-800-555-DEER
            </a>
          </div>
        </div>

        {/* Page Title & View Mode Selector */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            paddingBottom: '20px',
          }}
        >
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#38BDF8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              OWNER-OPERATOR & SMALL FLEET PRO SHOP
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#FFF', margin: '4px 0 6px' }}>
              Select Rig Deer Guard & Mounting Kits
            </h1>
            <p style={{ margin: 0, color: '#94A3B8', fontSize: '14px' }}>
              Equip your solo rig or 2–3 truck fleet with maximum animal-strike protection. No middlemen, no dealer markups.
            </p>
          </div>

          {/* Quick Filter Pill */}
          <div style={{ display: 'flex', background: '#1E293B', padding: '4px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setActiveTab('single')}
              style={{
                padding: '8px 16px',
                background: activeTab === 'single' ? '#2563EB' : 'transparent',
                color: activeTab === 'single' ? '#FFF' : '#94A3B8',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Truck size={15} /> 1 Truck (Solo Driver)
            </button>
            <button
              onClick={() => setActiveTab('fleet')}
              style={{
                padding: '8px 16px',
                background: activeTab === 'fleet' ? '#10B981' : 'transparent',
                color: activeTab === 'fleet' ? '#FFF' : '#94A3B8',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Percent size={15} /> 2–3 Truck Fleet Bundle ({totalRigs >= 2 ? 'Active Discount!' : 'Save 10–15%'})
            </button>
          </div>
        </div>

        {/* Main Grid: Products (Left) + Rig Order Summary (Right) */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.35fr) minmax(360px, 0.75fr)', gap: isMobile ? '20px' : '32px', alignItems: 'start' }}>
          
          {/* Products List with Real Images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {DEMO_PRODUCTS.map((prod) => {
              const qty = quantities[prod.id] || 0
              const isSelected = qty > 0

              return (
                <div
                  key={prod.id}
                  style={{
                    background: isSelected ? 'rgba(30, 58, 95, 0.35)' : '#111C2B',
                    border: isSelected ? '2px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: isMobile ? '16px' : '20px',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '170px minmax(0, 1fr)',
                    gap: isMobile ? '14px' : '20px',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                >
                  {/* Real Product Image */}
                  <div style={{ position: 'relative', width: '100%', height: '140px', background: '#070C13', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="170px"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        background: 'rgba(0,0,0,0.75)',
                        backdropFilter: 'blur(4px)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 800,
                        color: '#38BDF8',
                        textTransform: 'uppercase',
                      }}
                    >
                      {prod.truck} {prod.model}
                    </div>
                  </div>

                  {/* Product Details & Selection */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                        <div>
                          <h3 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 800, color: '#FFF' }}>
                            {prod.name}
                          </h3>
                          <div style={{ fontSize: '12px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>Tubing: <strong style={{ color: '#E2E8F0' }}>{prod.tubeDiameter}</strong></span>
                            <span>•</span>
                            <span>Material: <strong style={{ color: '#E2E8F0' }}>{prod.material}</strong></span>
                            <span>•</span>
                            <span>Radar Safe: <strong style={{ color: prod.radarCompliant ? '#10B981' : '#F59E0B' }}>{prod.radarCompliant ? 'Yes (CMS Ready)' : 'Standard'}</strong></span>
                          </div>
                        </div>

                        {/* Price & Affirm */}
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '22px', fontWeight: 900, color: '#FFF' }}>
                            ${prod.price.toLocaleString()}
                          </div>
                          <div style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 600 }}>
                            or ${prod.affirmMonthly}/mo with Affirm
                          </div>
                        </div>
                      </div>

                      {/* Mount Bracket Selector */}
                      <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
                        <span style={{ color: '#64748B', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Wrench size={13} /> Mounting Kit:
                        </span>
                        <select
                          value={bracketType[prod.id] || 'standard'}
                          onChange={(e) => setBracketType({ ...bracketType, [prod.id]: e.target.value })}
                          style={{
                            background: '#1E293B',
                            color: '#CBD5E1',
                            border: '1px solid rgba(255,255,255,0.15)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            cursor: 'pointer',
                          }}
                        >
                          <option value="standard">Direct Bolt-On Steel Bracket (Included $0)</option>
                          <option value="radar-cutout">CMS Radar Forward Bracket (Included $0)</option>
                          <option value="quick-tilt">Quick-Cam Tilt Latch (+ $120)</option>
                        </select>
                      </div>
                    </div>

                    {/* Stock Status & Quantity Stepper */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: prod.stockCount > 0 ? '#10B981' : '#EF4444' }}>
                        <CheckCircle2 size={14} />
                        <span>In Stock ({prod.stockCount} units in warehouse)</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#94A3B8' }}>Select Trucks:</span>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', background: '#0F172A' }}>
                          <button
                            onClick={() => handleQtyChange(prod.id, -1)}
                            style={{ padding: '6px 12px', background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', fontWeight: 700 }}
                          >
                            -
                          </button>
                          <span style={{ padding: '6px 12px', fontWeight: 800, color: qty > 0 ? '#38BDF8' : '#64748B', minWidth: '30px', textAlign: 'center' }}>
                            {qty}
                          </span>
                          <button
                            onClick={() => handleQtyChange(prod.id, 1)}
                            style={{ padding: '6px 12px', background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', fontWeight: 700 }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Sticky Checkout & Savings Box */}
          <div style={{ position: 'sticky', top: '24px' }}>
            <div
              style={{
                background: '#111C2B',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: 0 }}>
                  Order Summary
                </h2>
                <span style={{ fontSize: '12px', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.15)', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  {totalRigs} Rig{totalRigs !== 1 ? 's' : ''} Configured
                </span>
              </div>

              {/* Volume discount indicator */}
              <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '4px' }}>VOLUME TIER PROGRESS</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: totalRigs >= 2 ? '#10B981' : '#F59E0B' }}>
                  {discountLabel}
                </div>
                {totalRigs === 1 && (
                  <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>
                    💡 Add 1 more truck guard to unlock <strong>10% OFF Duo Discount</strong> (-${Math.round(rawSubtotal * 0.1)})!
                  </div>
                )}
                {totalRigs === 2 && (
                  <div style={{ fontSize: '11px', color: '#38BDF8', marginTop: '4px' }}>
                    🔥 Add 1 more truck guard to unlock <strong>15% OFF Fleet Discount</strong>!
                  </div>
                )}
              </div>

              {/* Cost Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                  <span>Gross Guard Total ({totalRigs} units):</span>
                  <span style={{ color: '#E2E8F0', fontWeight: 600 }}>${rawSubtotal.toLocaleString()}</span>
                </div>
                {discountVal > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 700 }}>
                    <span>Fleet Bundle Savings ({Math.round(discountRate * 100)}%):</span>
                    <span>-${discountVal.toLocaleString()}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                  <span>Vehicle Specific Brackets & Hardware:</span>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>INCLUDED ($0)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                  <span>Commercial Freight (Truckstop or Dock):</span>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>FREE FREIGHT ($0)</span>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#FFF' }}>Total Out-The-Door:</span>
                  <span style={{ fontSize: '24px', fontWeight: 900, color: '#38BDF8' }}>${netTotal.toLocaleString()}</span>
                </div>
                <div style={{ textAlign: 'right', fontSize: '11px', color: '#94A3B8' }}>
                  or as low as <strong>${affirmMonthly}/mo</strong> for 24 mos via Affirm
                </div>
              </div>

              {/* Perks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', color: '#94A3B8', marginBottom: '20px', background: '#0F172A', padding: '12px', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={13} color="#10B981" /> No Drilling Required — Uses Factory Tow Hook Receivers
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={13} color="#10B981" /> Full Hood Tilt Clearance Guaranteed
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={13} color="#10B981" /> 3-Year Structural Animal-Strike Warranty
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => {
                  setOrderPlaced(true)
                  setTimeout(() => setOrderPlaced(false), 3500)
                }}
                disabled={totalRigs === 0}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: totalRigs === 0 ? '#1E293B' : '#2563EB',
                  color: totalRigs === 0 ? '#64748B' : '#FFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: totalRigs === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background 0.2s',
                  boxShadow: totalRigs > 0 ? '0 4px 14px rgba(37, 99, 235, 0.4)' : 'none',
                }}
              >
                {orderPlaced ? (
                  <><Check size={18} /> ORDER CONFIRMED — DISPATCHING BRACKETS</>
                ) : (
                  <><ShoppingCart size={18} /> COMPLETE ORDER — ${netTotal.toLocaleString()}</>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '12px' }}>
                <a
                  href="tel:8005553337"
                  style={{
                    color: '#94A3B8',
                    fontSize: '12px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <PhoneCall size={12} /> Prefer to order over phone? Call driver support: 1-800-555-DEER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
