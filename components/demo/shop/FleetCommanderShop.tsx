'use client'

import React, { useState } from 'react'
import { FileSpreadsheet, Check, Download, Building, ShieldCheck, ArrowRight } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function FleetCommanderShop() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'g-vnl760': 5,
    'g-cascadia': 10,
    'g-t680': 0,
    'g-peterbilt579': 0,
  })
  const [poSubmitted, setPoSubmitted] = useState(false)

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const cur = prev[id] || 0
      const next = Math.max(0, cur + delta)
      return { ...prev, [id]: next }
    })
  }

  // Calculate total units & tiered discount
  const totalUnits = Object.values(quantities).reduce((acc, q) => acc + q, 0)
  let discountRate = 0
  if (totalUnits >= 50) discountRate = 0.28
  else if (totalUnits >= 20) discountRate = 0.18
  else if (totalUnits >= 5) discountRate = 0.10

  const subtotal = DEMO_PRODUCTS.reduce((acc, prod) => {
    const qty = quantities[prod.id] || 0
    return acc + prod.price * qty
  }, 0)

  const discountAmount = subtotal * discountRate
  const finalTotal = subtotal - discountAmount

  return (
    <div
      style={{
        background: '#081412',
        color: '#E2E8F0',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(16, 185, 129, 0.25)', paddingBottom: '20px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              B2B ENTERPRISE INVENTORY MATRIX
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
              Multi-Rig Fleet Order Portal
            </h1>
          </div>

          {/* Volume Tier Pill */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0B1D1A', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '8px 16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '12px', color: '#94A3B8' }}>Active Tier Rebate:</span>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#10B981' }}>
              {Math.round(discountRate * 100)}% OFF ({totalUnits} Units Selected)
            </span>
          </div>
        </div>

        {/* Layout: Main Table & Right Bulk Order Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(360px, 0.8fr)', gap: '32px' }}>
          {/* Spreadsheet Table */}
          <div style={{ background: '#0B1D1A', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '8px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#05120F', borderBottom: '1px solid rgba(16, 185, 129, 0.3)', color: '#10B981' }}>
                  <th style={{ padding: '14px 16px' }}>FLEET MODEL</th>
                  <th style={{ padding: '14px 16px' }}>APPLICATION</th>
                  <th style={{ padding: '14px 16px' }}>DEPOT STOCK</th>
                  <th style={{ padding: '14px 16px' }}>UNIT PRICE</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>QUANTITY</th>
                  <th style={{ padding: '14px 16px', textAlign: 'right' }}>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_PRODUCTS.map((prod) => {
                  const qty = quantities[prod.id] || 0
                  const lineTotal = prod.price * qty
                  return (
                    <tr key={prod.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: qty > 0 ? 'rgba(16, 185, 129, 0.06)' : 'transparent' }}>
                      <td style={{ padding: '14px 16px' }}>
                        <div style={{ fontWeight: 700, color: '#FFF' }}>{prod.name}</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>SKU: {prod.id.toUpperCase()}</div>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#94A3B8' }}>{prod.truck} {prod.model}</td>
                      <td style={{ padding: '14px 16px' }}>
                        <span style={{ color: prod.stockCount > 0 ? '#10B981' : '#EF4444', fontWeight: 600 }}>
                          {prod.stockCount} units available
                        </span>
                      </td>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: '#FFF' }}>${prod.price.toLocaleString()}</td>
                      <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', background: '#05120F' }}>
                          <button
                            onClick={() => handleQtyChange(prod.id, -1)}
                            style={{ padding: '4px 10px', background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', fontWeight: 700 }}
                          >
                            -
                          </button>
                          <span style={{ padding: '4px 12px', fontWeight: 800, color: '#10B981', minWidth: '32px', textAlign: 'center' }}>
                            {qty}
                          </span>
                          <button
                            onClick={() => handleQtyChange(prod.id, 1)}
                            style={{ padding: '4px 10px', background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', fontWeight: 700 }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: 800, color: qty > 0 ? '#10B981' : '#64748B' }}>
                        ${lineTotal.toLocaleString()}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Right Procurement Summary Box */}
          <div style={{ background: '#0B1D1A', border: '1px solid rgba(16, 185, 129, 0.35)', borderRadius: '8px', padding: '24px', height: 'fit-content' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 16px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
              Commercial Purchase Order
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8' }}>Total Power Units:</span>
                <span style={{ fontWeight: 800, color: '#FFF' }}>{totalUnits} Units</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94A3B8' }}>Gross Order Subtotal:</span>
                <span style={{ color: '#CBD5E1' }}>${subtotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981' }}>
                <span>Tier Volume Discount ({Math.round(discountRate * 100)}%):</span>
                <span>−${discountAmount.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                <span style={{ color: '#94A3B8' }}>Freight & Direct Depot Delivery:</span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>FREE FREIGHT ($0)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid rgba(16, 185, 129, 0.3)', paddingTop: '14px', fontSize: '18px', fontWeight: 800 }}>
                <span style={{ color: '#FFF' }}>Net Invoice Total:</span>
                <span style={{ color: '#10B981' }}>${finalTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Invoicing terms */}
            <div style={{ background: '#05120F', padding: '14px', borderRadius: '6px', fontSize: '11px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>
              Terms: Net-30 approved accounts eligible. Ships consolidated via dedicated flatbed freight with pre-labeled VIN manifests.
            </div>

            <button
              onClick={() => {
                setPoSubmitted(true)
                setTimeout(() => setPoSubmitted(false), 3000)
              }}
              disabled={totalUnits === 0}
              style={{
                width: '100%',
                padding: '14px',
                background: totalUnits === 0 ? '#1E293B' : '#10B981',
                color: totalUnits === 0 ? '#64748B' : '#062016',
                fontWeight: 800,
                fontSize: '13px',
                borderRadius: '6px',
                border: 'none',
                cursor: totalUnits === 0 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {poSubmitted ? (
                <><Check size={16} /> PO DISPATCHED TO FLEET REP</>
              ) : (
                <><FileSpreadsheet size={16} /> GENERATE NET-30 PURCHASE ORDER</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
