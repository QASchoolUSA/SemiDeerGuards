'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Plus,
  Check,
  Sliders,
  Sparkles,
  Layers,
  Shield,
  Truck,
  CheckCircle2,
  Wrench,
  ShoppingCart,
  PhoneCall,
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function Configurator3DShop() {
  const { isMobile } = useDemoViewport()
  const [selectedProduct, setSelectedProduct] = useState(DEMO_PRODUCTS[0])
  const [addons, setAddons] = useState<Record<string, boolean>>({
    lightbar: false,
    towhook: true,
    lockpins: true,
  })
  const [ordered, setOrdered] = useState(false)

  const addonPrices = {
    lightbar: 349,
    towhook: 149,
    lockpins: 89,
  }

  const toggleAddon = (k: string) => {
    setAddons((prev) => ({ ...prev, [k]: !prev[k] }))
  }

  const addonsTotal = Object.entries(addons).reduce((sum, [k, active]) => {
    return active ? sum + (addonPrices as any)[k] : sum
  }, 0)

  const grandTotal = selectedProduct.price + addonsTotal
  const monthlyPay = Math.round(grandTotal / 24)

  return (
    <div
      style={{
        background: '#0B0D17',
        color: '#EEF2F6',
        fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            borderBottom: '1px solid rgba(139, 92, 246, 0.25)',
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
            <div style={{ fontSize: '11px', color: '#A78BFA', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              MODULAR RIG ACCESSORY BAY
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              Choose Guard & Add-On Driver Packages
            </h1>
          </div>
          <div
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid #8B5CF6',
              padding: '8px 16px',
              borderRadius: '8px',
              color: '#C4B5FD',
              fontSize: '13px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Truck size={15} />
            <span>Active Rig: {selectedProduct.truck} {selectedProduct.model}</span>
          </div>
        </div>

        {/* Two-Pane Modular Shop */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.35fr) minmax(360px, 0.8fr)', gap: isMobile ? '20px' : '32px', alignItems: 'start' }}>
          {/* Base Guard Selection Cards with REAL IMAGES */}
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#CBD5E1', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Step 1: Choose Base Deer Guard Frame
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {DEMO_PRODUCTS.map((prod) => {
                const isSelected = selectedProduct.id === prod.id
                return (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    style={{
                      background: isSelected ? 'rgba(139, 92, 246, 0.18)' : '#121626',
                      border: isSelected ? '2px solid #8B5CF6' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {/* Real Product Image */}
                    <div style={{ position: 'relative', width: '100%', height: '140px', background: '#070A12' }}>
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="280px"
                        style={{ objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '8px',
                          background: 'rgba(0,0,0,0.7)',
                          backdropFilter: 'blur(4px)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '10px',
                          fontWeight: 800,
                          color: '#C4B5FD',
                          textTransform: 'uppercase',
                        }}
                      >
                        {prod.truck}
                      </div>
                    </div>

                    <div style={{ padding: '16px' }}>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFF', marginBottom: '4px' }}>
                        {prod.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '12px' }}>
                        {prod.model} • {prod.tubeDiameter}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '18px', fontWeight: 900, color: '#FFF' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: isSelected ? '#C4B5FD' : '#64748B', fontWeight: 700 }}>
                          {isSelected ? '✓ SELECTED' : 'Click to Pick'}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Modular Addon Packs */}
            <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#CBD5E1', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Step 2: Add Driver Convenience & Safety Packs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  key: 'lightbar',
                  name: 'Integrated 30" Dual-Row Amber/White Strobe Lightbar',
                  price: 349,
                  desc: 'Pre-welded mounting tabs + plug & play cab switch wiring harness. DOT certified.',
                },
                {
                  key: 'towhook',
                  name: 'Extended Heavy-Duty Front Tow Hook Adapters (Pair)',
                  price: 149,
                  desc: 'Permits direct tow-strap attachment without having to tilt or remove guard.',
                },
                {
                  key: 'lockpins',
                  name: 'Anti-Theft Stainless Keyed Tilt-Lock Safety Pins',
                  price: 89,
                  desc: 'Prevents unauthorized forward unlatching or tamper while parked at rest stops.',
                },
              ].map((item) => {
                const isChecked = (addons as any)[item.key]
                return (
                  <div
                    key={item.key}
                    onClick={() => toggleAddon(item.key)}
                    style={{
                      background: isChecked ? 'rgba(139, 92, 246, 0.12)' : '#121626',
                      border: isChecked ? '1px solid #8B5CF6' : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '10px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '6px',
                          background: isChecked ? '#7C3AED' : 'rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFF',
                        }}
                      >
                        {isChecked && <Check size={14} />}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '14px', color: '#FFF' }}>{item.name}</div>
                        <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>{item.desc}</div>
                      </div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '14px', color: '#C4B5FD', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                      +${item.price}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Live Bill of Materials & Order Box */}
          <div
            style={{
              background: '#121626',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              borderRadius: '16px',
              padding: '28px',
              position: 'sticky',
              top: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 16px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
              Build Summary (BOM)
            </h2>

            {/* Selected Guard Snapshot */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px', background: '#0A0C16', padding: '10px', borderRadius: '8px' }}>
              <div style={{ position: 'relative', width: '60px', height: '50px', borderRadius: '4px', overflow: 'hidden' }}>
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill style={{ objectFit: 'cover' }} sizes="60px" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#FFF', fontSize: '13px' }}>{selectedProduct.name}</div>
                <div style={{ fontSize: '11px', color: '#94A3B8' }}>{selectedProduct.truck} • ${selectedProduct.price.toLocaleString()}</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8' }}>Base Deer Guard:</span>
                <span style={{ fontWeight: 700, color: '#FFF' }}>${selectedProduct.price.toLocaleString()}</span>
              </div>

              {Object.entries(addons).map(([k, active]) => {
                if (!active) return null
                return (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', color: '#A78BFA' }}>
                    <span>+ Addon ({k === 'lightbar' ? '30" Strobe Bar' : k === 'towhook' ? 'Tow Hooks' : 'Lock Pins'}):</span>
                    <span>+${(addonPrices as any)[k]}</span>
                  </div>
                )
              })}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                <span>Mounting Brackets & Hardware:</span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>FREE ($0)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8' }}>
                <span>Commercial Freight Delivery:</span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>FREE ($0)</span>
              </div>

              <div style={{ borderTop: '2px solid rgba(139, 92, 246, 0.3)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ color: '#FFF', fontWeight: 800, fontSize: '15px' }}>Out-The-Door Total:</span>
                <span style={{ color: '#C4B5FD', fontSize: '24px', fontWeight: 900 }}>${grandTotal.toLocaleString()}</span>
              </div>
              <div style={{ textAlign: 'right', fontSize: '11px', color: '#94A3B8' }}>
                or as low as <strong>${monthlyPay}/mo</strong> via Affirm
              </div>
            </div>

            <div style={{ background: '#0A0C16', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '11px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#10B981" /> Custom-built brackets pre-matched to {selectedProduct.truck}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#10B981" /> 100% money back fitment guarantee
              </div>
            </div>

            <button
              onClick={() => {
                setOrdered(true)
                setTimeout(() => setOrdered(false), 3000)
              }}
              style={{
                width: '100%',
                padding: '16px',
                background: '#7C3AED',
                color: '#FFF',
                fontWeight: 800,
                fontSize: '13px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
              }}
            >
              {ordered ? (
                <><Check size={16} /> ORDER PLACED — BUILD SENT TO SHOP</>
              ) : (
                <><ShoppingCart size={16} /> ORDER AS CONFIGURED — ${grandTotal.toLocaleString()}</>
              )}
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <a href="tel:8005553337" style={{ color: '#94A3B8', fontSize: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <PhoneCall size={12} /> Driver Support: 1-800-555-DEER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
