'use client'

import React, { useState } from 'react'
import { Plus, Check, Sliders, Sparkles, Layers, Shield } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function Configurator3DShop() {
  const [selectedProduct, setSelectedProduct] = useState(DEMO_PRODUCTS[0])
  const [addons, setAddons] = useState<Record<string, boolean>>({
    lightbar: false,
    towhook: true,
    lockpins: true,
  })

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

  return (
    <div
      style={{
        background: '#0D0E1A',
        color: '#EEF2F6',
        fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.25)', paddingBottom: '20px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#A78BFA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              MODULAR RIG BUILD SHOP
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              Configure Base Guard & Addon Packages
            </h1>
          </div>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid #8B5CF6', padding: '8px 16px', borderRadius: '8px', color: '#A78BFA', fontSize: '13px', fontWeight: 700 }}>
            Active Rig: {selectedProduct.truck} {selectedProduct.model}
          </div>
        </div>

        {/* Two-Pane Modular Shop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(360px, 0.8fr)', gap: '32px' }}>
          {/* Base Guard Selection Cards */}
          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#CBD5E1', marginBottom: '16px', textTransform: 'uppercase' }}>
              Step 1: Choose Your Core Guard Frame
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {DEMO_PRODUCTS.map((prod) => {
                const isSelected = selectedProduct.id === prod.id
                return (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    style={{
                      background: isSelected ? 'rgba(139, 92, 246, 0.15)' : '#131424',
                      border: isSelected ? '2px solid #8B5CF6' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#A78BFA', fontWeight: 700, marginBottom: '6px' }}>
                      {prod.truck.toUpperCase()}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>
                      {prod.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '12px' }}>
                      {prod.model}
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#A78BFA' }}>
                      ${prod.price.toLocaleString()}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Modular Addon Packs */}
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#CBD5E1', marginBottom: '16px', textTransform: 'uppercase' }}>
              Step 2: Bolt-On Modular Accessories
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { key: 'lightbar', name: 'Integrated 30" Dual-Row Amber/White Strobe Lightbar', price: 349, desc: 'Pre-welded mounting tabs + plug & play harness' },
                { key: 'towhook', name: 'Extended Heavy-Duty Front Tow Hook Adapters', price: 149, desc: 'Permits direct strap attachment without guard removal' },
                { key: 'lockpins', name: 'Anti-Theft Stainless Keyed Tilt-Lock Pins', price: 89, desc: 'Prevents unauthorized forward unlatching at truck stops' },
              ].map((item) => {
                const isChecked = (addons as any)[item.key]
                return (
                  <div
                    key={item.key}
                    onClick={() => toggleAddon(item.key)}
                    style={{
                      background: isChecked ? 'rgba(139, 92, 246, 0.1)' : '#131424',
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
                          width: '20px',
                          height: '20px',
                          borderRadius: '6px',
                          background: isChecked ? '#8B5CF6' : 'rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFF',
                        }}
                      >
                        {isChecked && <Check size={14} />}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '14px', color: '#FFF' }}>{item.name}</div>
                        <div style={{ fontSize: '12px', color: '#94A3B8' }}>{item.desc}</div>
                      </div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '14px', color: '#A78BFA' }}>
                      +${item.price}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Live Bill of Materials */}
          <div style={{ background: '#131424', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', padding: '28px', height: 'fit-content' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 16px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
              Build Summary (BOM)
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8' }}>{selectedProduct.name}:</span>
                <span style={{ fontWeight: 700, color: '#FFF' }}>${selectedProduct.price.toLocaleString()}</span>
              </div>

              {Object.entries(addons).map(([k, active]) => {
                if (!active) return null
                return (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', color: '#A78BFA' }}>
                    <span>+ Addon ({k}):</span>
                    <span>${(addonPrices as any)[k]}</span>
                  </div>
                )
              })}

              <div style={{ borderTop: '2px solid rgba(139, 92, 246, 0.3)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 800 }}>
                <span style={{ color: '#FFF' }}>Total Modular Rig:</span>
                <span style={{ color: '#A78BFA' }}>${grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              style={{
                width: '100%',
                padding: '16px',
                background: '#8B5CF6',
                color: '#FFF',
                fontWeight: 800,
                fontSize: '13px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ORDER AS CONFIGURED
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
