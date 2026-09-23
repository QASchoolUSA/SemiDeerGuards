'use client'

import React from 'react'
import { AlertTriangle, ArrowRight, Package, Shield, Zap } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function BrutalistWarehouseHome({ onExploreShop }: { onExploreShop?: () => void }) {
  return (
    <div
      style={{
        background: '#ECECEC',
        color: '#000000',
        fontFamily: '"Courier Prime", Courier, monospace',
        minHeight: '100vh',
        padding: '40px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Warning Stripe */}
        <div
          style={{
            height: '14px',
            background: 'repeating-linear-gradient(45deg, #000, #000 20px, #E2F952 20px, #E2F952 40px)',
            marginBottom: '32px',
            border: '3px solid #000',
          }}
        />

        {/* Top Bar Banner */}
        <div
          style={{
            background: '#E2F952',
            border: '3px solid #000',
            boxShadow: '6px 6px 0px #000',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ fontWeight: 900, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            [!] WAREHOUSE DIRECT INVENTORY // NO DEALER MARKUPS // NO FLUFF
          </div>
          <div style={{ fontWeight: 700, fontSize: '12px' }}>
            CRATES DISPATCHING DAILY VIA FLATBED
          </div>
        </div>

        {/* Brutalist Hero */}
        <div
          style={{
            background: '#FFFFFF',
            border: '4px solid #000',
            boxShadow: '10px 10px 0px #000',
            padding: '48px 36px',
            marginBottom: '60px',
          }}
        >
          <div style={{ display: 'inline-block', background: '#000', color: '#E2F952', padding: '6px 14px', fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', marginBottom: '20px' }}>
            HEAVY STEEL SECTION 49-B
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              textTransform: 'uppercase',
              margin: '0 0 24px 0',
              letterSpacing: '-0.03em',
            }}
          >
            SOLID STEEL. <br />
            ZERO PLASTIC CRAP.
          </h1>

          <p style={{ fontSize: '18px', lineHeight: 1.5, fontWeight: 700, maxWidth: '720px', marginBottom: '36px' }}>
            WE CUT 1/4" STRUCTURAL STEEL, WELD IT WITH INDUSTRIAL ROBOTS, AND SHIP IT ON WOODEN PALLETS TO TRUCKERS WHO CANNOT AFFORD TO WRECK THEIR ENGINE BLOCK.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={onExploreShop}
              style={{
                padding: '18px 40px',
                background: '#E2F952',
                color: '#000',
                border: '3px solid #000',
                boxShadow: '6px 6px 0px #000',
                fontWeight: 900,
                fontSize: '16px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span>CLAIM YOUR WAREHOUSE CRATE</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Live Pallet Inventory Manifest */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontWeight: 900, fontSize: '18px', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Package size={20} />
            <span>REAL-TIME CRATED INVENTORY</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#FFFFFF',
                  border: '3px solid #000',
                  boxShadow: '6px 6px 0px #000',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: '12px', borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                  <span>TRUCK: {prod.truck.toUpperCase()}</span>
                  <span style={{ background: '#E2F952', padding: '2px 6px' }}>{prod.tier}</span>
                </div>

                <div style={{ fontSize: '18px', fontWeight: 900 }}>{prod.name}</div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>FITS: {prod.model}</div>

                <div style={{ background: '#F4F4F4', padding: '10px', border: '1px dashed #000', fontSize: '12px' }}>
                  <div>STEEL: {prod.gauge}</div>
                  <div>WEIGHT: {prod.weightLbs} LBS SOLID</div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '2px solid #000' }}>
                  <span style={{ fontSize: '24px', fontWeight: 900 }}>${prod.price.toLocaleString()}</span>
                  <button
                    onClick={onExploreShop}
                    style={{
                      background: '#000',
                      color: '#E2F952',
                      border: 'none',
                      padding: '10px 18px',
                      fontWeight: 900,
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    SHIP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
