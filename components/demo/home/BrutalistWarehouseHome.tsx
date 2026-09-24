'use client'

import React from 'react'
import Image from 'next/image'
import { AlertTriangle, ArrowRight, Package, Shield, Zap, PhoneCall, CheckCircle2, ShoppingCart } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function BrutalistWarehouseHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const { isMobile } = useDemoViewport()
  const severeProducts = DEMO_PRODUCTS.slice(0, 4)

  return (
    <div
      style={{
        background: '#EAEAEA',
        color: '#000000',
        fontFamily: '"Courier Prime", Courier, monospace',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 80px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Warning Hazard Stripe */}
        <div
          style={{
            height: '14px',
            background: 'repeating-linear-gradient(45deg, #000, #000 20px, #E2F952 20px, #E2F952 40px)',
            marginBottom: '28px',
            border: '3px solid #000',
          }}
        />

        {/* Top Bar Banner */}
        <div
          style={{
            background: '#E2F952',
            border: '3px solid #000',
            boxShadow: '6px 6px 0px #000',
            padding: '14px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ fontWeight: 900, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            [!] NORTHERN ROUTE MOOSE & ELK IMPACT DIVISION // FACTORY DIRECT
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontWeight: 800, fontSize: '12px' }}>
            <span>PALLETS LEAVING DOCK TODAY</span>
            <a href="tel:8005553337" style={{ color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={14} /> 1-800-555-DEER
            </a>
          </div>
        </div>

        {/* Brutalist Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
            gap: isMobile ? '20px' : '32px',
            alignItems: 'stretch',
            marginBottom: '48px',
          }}
        >
          {/* Hero Copy Box */}
          <div
            style={{
              background: '#FFFFFF',
              border: '4px solid #000',
              boxShadow: '8px 8px 0px #000',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'inline-block', background: '#000', color: '#E2F952', padding: '6px 14px', fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', marginBottom: '16px' }}>
                RATED FOR 1,400 LB ALASKAN MOOSE STRIKES
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  textTransform: 'uppercase',
                  margin: '0 0 20px 0',
                  letterSpacing: '-0.03em',
                }}
              >
                HEAVY STEEL. <br />
                ZERO RADIATOR CRUSH.
              </h1>

              <p style={{ fontSize: '16px', lineHeight: 1.5, fontWeight: 700, marginBottom: '28px' }}>
                WHEN A 1,200 LB ELK JUMPS ONTO THE ALASKA HIGHWAY AT 2 AM, LIGHTWEIGHT TUBING WILL FOLD INTO YOUR CHARGE-AIR COOLER. WE CUT 1/4" INDUSTRIAL STEEL, ROBOT-WELD DUAL CROSSMEMBERS, AND SHIP DIRECT TO DRIVERS WHO CANNOT AFFORD A $20,000 TOW.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <button
                  onClick={onExploreShop}
                  style={{
                    padding: '16px 36px',
                    background: '#E2F952',
                    color: '#000',
                    border: '3px solid #000',
                    boxShadow: '4px 4px 0px #000',
                    fontWeight: 900,
                    fontSize: '15px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span>ORDER CRATED MOOSE GUARD</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Specs Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '12px', borderTop: '3px solid #000', paddingTop: '16px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#666', fontWeight: 900 }}>STEEL GAUGE</div>
                  <div style={{ fontSize: '18px', fontWeight: 900 }}>1/4" SCH 40</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#666', fontWeight: 900 }}>KINETIC ABSORPTION</div>
                  <div style={{ fontSize: '18px', fontWeight: 900 }}>30,000+ LBS</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#666', fontWeight: 900 }}>PALLET FREIGHT</div>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#000' }}>$0 (FREE)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Winter Moose Guard Photo Box */}
          <div
            style={{
              background: '#FFFFFF',
              border: '4px solid #000',
              boxShadow: '8px 8px 0px #000',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '360px', border: '3px solid #000', overflow: 'hidden' }}>
              <Image
                src="/images/guards/guard-winter-moose.jpg"
                alt="Severe Winter Moose Guard on Semi Truck"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: '#E2F952',
                  border: '2px solid #000',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '11px',
                  padding: '4px 10px',
                  textTransform: 'uppercase',
                }}
              >
                PROVEN SUB-ZERO IMPACT
              </div>
            </div>

            <div style={{ marginTop: '16px', borderTop: '2px solid #000', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: '14px' }}>NORTHERN BLIZZARD MOOSE SHIELD</div>
                <div style={{ fontSize: '11px', color: '#666', fontWeight: 700 }}>Dual Upper Crossbar + 45° Corner Sweeps</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '20px', fontWeight: 900 }}>$2,749</div>
                <div style={{ fontSize: '11px', color: '#000', fontWeight: 700 }}>or $115/mo Affirm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Warehouse Pallet Inventory */}
        <div>
          <div style={{ fontWeight: 900, fontSize: '18px', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Package size={22} />
            <span>CRATED PALLET INVENTORY (READY FOR FLATBED PICKUP)</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {severeProducts.map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#FFFFFF',
                  border: '3px solid #000',
                  boxShadow: '6px 6px 0px #000',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '180px', borderBottom: '3px solid #000' }}>
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
                      background: '#000',
                      color: '#E2F952',
                      padding: '3px 8px',
                      fontWeight: 900,
                      fontSize: '11px',
                    }}
                  >
                    {prod.truck.toUpperCase()}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: '#E2F952',
                      color: '#000',
                      border: '2px solid #000',
                      padding: '2px 8px',
                      fontWeight: 900,
                      fontSize: '10px',
                    }}
                  >
                    IN STOCK: {prod.stockCount} CRATES
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 900, margin: '0 0 4px 0' }}>
                      {prod.name}
                    </h3>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#444', marginBottom: '12px' }}>
                      FITS: {prod.model} • {prod.tubeDiameter}
                    </div>

                    <div style={{ background: '#F4F4F4', padding: '10px', border: '2px solid #000', fontSize: '11px', marginBottom: '16px' }}>
                      <div><strong>IMPACT:</strong> {prod.impactRating}</div>
                      <div><strong>MOUNT:</strong> Tow-Hook Gusset Direct Bolt-On</div>
                      <div><strong>RADAR:</strong> {prod.radarCompliant ? '100% Pass-Through' : 'Standard'}</div>
                    </div>
                  </div>

                  <div style={{ borderTop: '2px solid #000', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: 900 }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#555', fontWeight: 700 }}>
                          or ${prod.affirmMonthly}/mo Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 900, background: '#E2F952', padding: '3px 6px', border: '1px solid #000' }}>
                        FREE FREIGHT
                      </span>
                    </div>

                    <button
                      onClick={onExploreShop}
                      style={{
                        width: '100%',
                        background: '#000',
                        color: '#E2F952',
                        border: 'none',
                        padding: '12px',
                        fontWeight: 900,
                        fontSize: '13px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                    >
                      <ShoppingCart size={15} />
                      <span>ORDER CRATE NOW</span>
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
