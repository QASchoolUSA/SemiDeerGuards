'use client'

import React, { useState } from 'react'
import { Download, Sliders, CheckCircle2, AlertTriangle, Layers, Filter, Eye } from 'lucide-react'
import { DEMO_PRODUCTS, DemoProduct } from '../demoData'

export default function BlueprintShop() {
  const [selectedBrand, setSelectedBrand] = useState('ALL')
  const [casOnly, setCasOnly] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<DemoProduct | null>(DEMO_PRODUCTS[0])
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null)

  const brands = ['ALL', 'Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack', 'International']

  const filtered = DEMO_PRODUCTS.filter((p) => {
    if (selectedBrand !== 'ALL' && p.truck !== selectedBrand) return false
    if (casOnly && !p.casCompatible) return false
    return true
  })

  const triggerDownload = (id: string, name: string) => {
    setDownloadSuccess(id)
    setTimeout(() => setDownloadSuccess(null), 3000)
  }

  return (
    <div
      style={{
        background: '#04101E',
        color: '#D8EEFF',
        fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace',
        minHeight: '100vh',
        position: 'relative',
        padding: '40px 24px 80px',
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
        <div style={{ borderBottom: '1px solid rgba(0, 210, 255, 0.2)', paddingBottom: '24px', marginBottom: '32px' }}>
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
                      padding: '4px 10px',
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
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(360px, 0.9fr)', gap: '32px' }}>
          {/* Engineering Data Table */}
          <div style={{ background: 'rgba(6, 26, 48, 0.5)', border: '1px solid rgba(0, 210, 255, 0.25)', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 210, 255, 0.1)', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', color: '#00D2FF' }}>
                  <th style={{ padding: '12px 16px' }}>MAKE & MODEL</th>
                  <th style={{ padding: '12px 16px' }}>ALLOY / GAUGE</th>
                  <th style={{ padding: '12px 16px' }}>IMPACT (kJ)</th>
                  <th style={{ padding: '12px 16px' }}>CAS CERT</th>
                  <th style={{ padding: '12px 16px' }}>PRICE (USD)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>ACTION</th>
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
                      onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'rgba(0, 210, 255, 0.06)'
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 700, color: '#FFF' }}>{prod.truck} {prod.model}</div>
                        <div style={{ fontSize: '10px', color: '#688CA5' }}>{prod.name}</div>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#8FBAD9' }}>{prod.gauge}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ color: '#00D2FF', fontWeight: 700 }}>{prod.impactRating.split(' ')[0]}</span>
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        {prod.casCompatible ? (
                          <span style={{ color: '#22C55E', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                            <CheckCircle2 size={13} /> 77GHz OK
                          </span>
                        ) : (
                          <span style={{ color: '#EAB308', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                            <AlertTriangle size={13} /> Standard
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 800, color: '#FFF' }}>
                        ${prod.price.toLocaleString()}
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            triggerDownload(prod.id, prod.name)
                          }}
                          style={{
                            background: downloadSuccess === prod.id ? '#22C55E' : 'rgba(0, 210, 255, 0.1)',
                            border: '1px solid #00D2FF',
                            color: downloadSuccess === prod.id ? '#04101E' : '#00D2FF',
                            padding: '5px 10px',
                            fontSize: '10px',
                            cursor: 'pointer',
                          }}
                        >
                          {downloadSuccess === prod.id ? 'CAD READY' : 'STEP .DWG'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Right Selected Spec Sheet & Telemetry Pane */}
          {selectedProduct && (
            <div
              style={{
                background: 'rgba(6, 26, 48, 0.7)',
                border: '1px solid #00D2FF',
                padding: '24px',
                position: 'sticky',
                top: '100px',
                boxShadow: '0 0 30px rgba(0, 210, 255, 0.15)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', color: '#00D2FF', textTransform: 'uppercase' }}>
                  ACTIVE FITMENT SPEC SHEET
                </span>
                <span style={{ fontSize: '10px', color: '#688CA5' }}>PART NO: {selectedProduct.id.toUpperCase()}</span>
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#FFF', margin: '0 0 6px 0' }}>
                {selectedProduct.name}
              </h2>
              <div style={{ fontSize: '13px', color: '#00D2FF', marginBottom: '18px' }}>
                {selectedProduct.truck} — {selectedProduct.model}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  background: 'rgba(0,0,0,0.4)',
                  padding: '16px',
                  border: '1px dashed rgba(0, 210, 255, 0.25)',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <div style={{ fontSize: '10px', color: '#688CA5' }}>DRY WEIGHT</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFF' }}>{selectedProduct.weightLbs} lbs</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#688CA5' }}>AERODYNAMIC DELTA</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#22C55E' }}>{selectedProduct.aeroDragDelta}</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#688CA5' }}>FINISH COAT</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#8FBAD9' }}>{selectedProduct.finish}</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#688CA5' }}>INVENTORY STATUS</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: selectedProduct.inStock ? '#22C55E' : '#EF4444' }}>
                    {selectedProduct.inStock ? `${selectedProduct.stockCount} UNITS READY` : 'BACKORDER 5 DAYS'}
                  </div>
                </div>
              </div>

              {/* Technical Drawing Callout */}
              <div style={{ fontSize: '11px', color: '#8FBAD9', lineHeight: 1.6, marginBottom: '24px' }}>
                <p style={{ margin: '0 0 8px 0' }}>
                  <strong>Mounting:</strong> Bolts straight into chassis frame rails. No cutting, drilling, or OEM bumper removal required.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Sensor Clearance:</strong> Conforms to ISO 15623 radar aperture tolerances.
                </p>
              </div>

              {/* Price & Procure CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0, 210, 255, 0.2)', paddingTop: '16px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#688CA5' }}>UNIT NET PRICE</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#00D2FF' }}>
                    ${selectedProduct.price.toLocaleString()}
                  </div>
                </div>

                <button
                  style={{
                    background: '#00D2FF',
                    color: '#04101E',
                    padding: '12px 20px',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                  }}
                >
                  ADD TO PO ORDER
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
