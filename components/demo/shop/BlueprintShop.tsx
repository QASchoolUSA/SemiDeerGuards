'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Download, Sliders, CheckCircle2, AlertTriangle, Layers, Filter, Eye, ShoppingCart } from 'lucide-react'
import { DEMO_PRODUCTS, DemoProduct } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function BlueprintShop() {
  const { isMobile } = useDemoViewport()
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [casOnly, setCasOnly] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<DemoProduct>(DEMO_PRODUCTS[0])
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null)
  const [cartAdded, setCartAdded] = useState(false)

  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  const filtered = DEMO_PRODUCTS.filter((p) => {
    if (selectedBrand !== 'ALL' && p.truck !== selectedBrand) return false
    if (casOnly && !p.casCompatible) return false
    return true
  })

  const triggerDownload = (id: string, name: string) => {
    setDownloadSuccess(id)
    setTimeout(() => setDownloadSuccess(null), 3000)
  }

  const handleAdd = () => {
    setCartAdded(true)
    setTimeout(() => setCartAdded(false), 2500)
  }

  return (
    <div
      style={{
        background: '#04101E',
        color: '#D8EEFF',
        fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace',
        minHeight: '100vh',
        position: 'relative',
        padding: '36px 20px 80px',
      }}
    >
      {/* Background blueprint grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 210, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 210, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header & Matrix Controls */}
        <div style={{ borderBottom: '1px solid rgba(0, 210, 255, 0.2)', paddingBottom: '20px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#00D2FF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                SPECIFICATION CATALOG // REV 2026.04
              </div>
              <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
                TECHNICAL DATA-MATRIX REPOSITORY
              </h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              {/* CAS Toggle */}
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  background: 'rgba(0, 210, 255, 0.06)',
                  padding: '6px 12px',
                  border: '1px solid rgba(0, 210, 255, 0.25)',
                }}
              >
                <input
                  type="checkbox"
                  checked={casOnly}
                  onChange={(e) => setCasOnly(e.target.checked)}
                  style={{ accentColor: '#00D2FF' }}
                />
                <span>CAS RADAR COMPLIANT ONLY</span>
              </label>

              {/* Brand Pills */}
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    style={{
                      background: selectedBrand === b ? '#00D2FF' : 'rgba(255,255,255,0.04)',
                      color: selectedBrand === b ? '#04101E' : '#8FBAD9',
                      border: '1px solid rgba(0, 210, 255, 0.2)',
                      padding: '6px 12px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      fontWeight: selectedBrand === b ? 700 : 500,
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two-Pane Matrix Layout: Left Spec Table, Right Live CAD Inspector */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.35fr) minmax(360px, 0.9fr)', gap: isMobile ? '20px' : '32px', alignItems: 'start' }}>
          {/* Engineering Data Table */}
          <div style={{ background: 'rgba(6, 26, 48, 0.5)', border: '1px solid rgba(0, 210, 255, 0.25)', overflowX: 'auto', borderRadius: '4px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 210, 255, 0.1)', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', color: '#00D2FF' }}>
                  <th style={{ padding: '12px 14px' }}>VIEW</th>
                  <th style={{ padding: '12px 14px' }}>MAKE & MODEL</th>
                  <th style={{ padding: '12px 14px' }}>ALLOY / GAUGE</th>
                  <th style={{ padding: '12px 14px' }}>IMPACT</th>
                  <th style={{ padding: '12px 14px' }}>PRICE</th>
                  <th style={{ padding: '12px 14px', textAlign: 'right' }}>DWG</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((prod) => {
                  const isSelected = selectedProduct?.id === prod.id
                  return (
                    <tr
                      key={prod.id}
                      onClick={() => setSelectedProduct(prod)}
                      style={{
                        borderBottom: '1px solid rgba(0, 210, 255, 0.12)',
                        background: isSelected ? 'rgba(0, 210, 255, 0.15)' : 'transparent',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease',
                      }}
                    >
                      <td style={{ padding: '10px 14px' }}>
                        <div style={{ position: 'relative', width: '48px', height: '36px', borderRadius: '3px', overflow: 'hidden', border: '1px solid rgba(0, 210, 255, 0.3)', background: '#020912' }}>
                          <Image src={prod.image} alt={prod.name} fill sizes="48px" style={{ objectFit: 'cover' }} />
                        </div>
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        <div style={{ fontWeight: 700, color: '#FFF' }}>{prod.truck} {prod.model}</div>
                        <div style={{ fontSize: '10px', color: '#688CA5' }}>{prod.name}</div>
                      </td>
                      <td style={{ padding: '12px 14px', color: '#8FBAD9' }}>{prod.tubeDiameter}</td>
                      <td style={{ padding: '12px 14px' }}>
                        <span style={{ color: '#00D2FF', fontWeight: 700 }}>{prod.impactRating.split(' ')[0]}</span>
                      </td>
                      <td style={{ padding: '12px 14px', fontWeight: 800, color: '#FFF' }}>
                        ${prod.price.toLocaleString()}
                      </td>
                      <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            triggerDownload(prod.id, prod.name)
                          }}
                          style={{
                            background: downloadSuccess === prod.id ? '#22C55E' : 'rgba(0, 210, 255, 0.1)',
                            border: '1px solid #00D2FF',
                            color: downloadSuccess === prod.id ? '#04101E' : '#00D2FF',
                            padding: '4px 8px',
                            fontSize: '10px',
                            cursor: 'pointer',
                          }}
                        >
                          {downloadSuccess === prod.id ? 'CAD READY' : 'DWG'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Right Selected Spec Sheet & Telemetry Pane with REAL IMAGE */}
          {selectedProduct && (
            <div
              style={{
                background: 'rgba(6, 26, 48, 0.85)',
                border: '1px solid #00D2FF',
                padding: isMobile ? '16px' : '24px',
                position: isMobile ? 'relative' : 'sticky',
                top: isMobile ? '0' : '24px',
                boxShadow: '0 0 30px rgba(0, 210, 255, 0.15)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '11px', color: '#00D2FF', textTransform: 'uppercase' }}>
                  ACTIVE FITMENT SPEC SHEET
                </span>
                <span style={{ fontSize: '10px', color: '#688CA5' }}>SKU: {selectedProduct.id.toUpperCase()}</span>
              </div>

              {/* Real Product Image Container */}
              <div style={{ position: 'relative', width: '100%', height: '200px', border: '1px solid rgba(0, 210, 255, 0.4)', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px', background: '#020912' }}>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="400px"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '8px', left: '8px', background: 'rgba(4, 16, 30, 0.85)', border: '1px solid #00D2FF', color: '#00D2FF', padding: '2px 8px', fontSize: '10px', fontWeight: 700 }}>
                  {selectedProduct.truck.toUpperCase()} CHASSIS MATCH
                </div>
              </div>

              <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                {selectedProduct.name}
              </h2>
              <div style={{ fontSize: '12px', color: '#00D2FF', marginBottom: '16px' }}>
                Application: {selectedProduct.truck} — {selectedProduct.model}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  background: 'rgba(0,0,0,0.4)',
                  padding: '14px',
                  border: '1px dashed rgba(0, 210, 255, 0.25)',
                  marginBottom: '18px',
                  fontSize: '11px',
                }}
              >
                <div>
                  <div style={{ color: '#688CA5' }}>TUBING PROFILE</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFF' }}>{selectedProduct.tubeDiameter}</div>
                </div>
                <div>
                  <div style={{ color: '#688CA5' }}>IMPACT RATING</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#22C55E' }}>{selectedProduct.impactRating}</div>
                </div>
                <div>
                  <div style={{ color: '#688CA5' }}>RADAR STATUS</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: selectedProduct.radarCompliant ? '#22C55E' : '#EAB308' }}>
                    {selectedProduct.radarCompliant ? '100% Pass-Through' : 'Standard Bumper'}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#688CA5' }}>DEPOT STOCK</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#00D2FF' }}>
                    {selectedProduct.stockCount} UNITS CRATED
                  </div>
                </div>
              </div>

              {/* Price & Procure CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0, 210, 255, 0.2)', paddingTop: '16px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#688CA5' }}>UNIT NET PRICE</div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#00D2FF' }}>
                    ${selectedProduct.price.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '10px', color: '#8FBAD9' }}>or ${selectedProduct.affirmMonthly}/mo Affirm</div>
                </div>

                <button
                  onClick={handleAdd}
                  style={{
                    background: cartAdded ? '#22C55E' : '#00D2FF',
                    color: '#04101E',
                    padding: '12px 20px',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <ShoppingCart size={14} />
                  <span>{cartAdded ? 'ADDED' : 'BUY GUARD'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
