'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, Shield, Truck, Package, ArrowRight, DollarSign, Wrench } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function OwnerOperatorProHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [truckQty, setTruckQty] = useState<1 | 2 | 3>(1)
  const { isMobile } = useDemoViewport()

  const discountPerGuard = truckQty === 1 ? 0 : truckQty === 2 ? 150 : 225

  return (
    <div
      style={{
        background: '#061A14',
        color: '#E2E8F0',
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '24px 16px 60px' : '50px 24px 100px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Banner */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.3)', paddingBottom: '16px', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#10B981', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              OWNER-OPERATOR & 1–3 TRUCK FLEET PROGRAM
            </span>
          </div>
          <div style={{ fontSize: '11px', color: '#A7F3D0' }}>
            Free Freight to Any Commercial Address or Truck Stop Across USA
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: isMobile ? '24px' : '40px', alignItems: 'center', marginBottom: isMobile ? '36px' : '64px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase', marginBottom: '12px' }}>
              Outfit Your Rig with Zero Downtime Risk
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Complete Driver Bundles: <br />
              <span style={{ color: '#10B981' }}>Guard + Brackets + Free Freight.</span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#94A3B8', maxWidth: '560px', marginBottom: '28px' }}>
              Whether you're an independent driver running your own Cascadia or managing 2 to 3 power units, get our turnkey complete package: deer guard, custom no-drill chassis brackets, and Grade-8 hardware.
            </p>

            {/* Interactive 1 to 3 Truck Bundle Calculator */}
            <div
              style={{
                background: '#0B2920',
                border: '2px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
                marginBottom: '28px',
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#A7F3D0', textTransform: 'uppercase', marginBottom: '12px' }}>
                How Many Trucks Are You Outfitting?
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                {[
                  { qty: 1, label: '1 Truck (Solo Rig)', discount: 'Standard Best Price' },
                  { qty: 2, label: '2 Trucks (Save $300)', discount: 'Save $150 / Guard' },
                  { qty: 3, label: '3 Trucks (Save $675)', discount: 'Save $225 / Guard' },
                ].map((b) => (
                  <button
                    key={b.qty}
                    onClick={() => setTruckQty(b.qty as any)}
                    style={{
                      background: truckQty === b.qty ? '#10B981' : '#061A14',
                      color: truckQty === b.qty ? '#061A14' : '#E2E8F0',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      borderRadius: '8px',
                      padding: '12px 10px',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '13px' }}>{b.label}</div>
                    <div style={{ fontSize: '11px', marginTop: '2px', opacity: 0.8 }}>{b.discount}</div>
                  </button>
                ))}
              </div>

              <div style={{ background: '#04120E', padding: '14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#6EE7B7' }}>Complete Kit per Truck (Guard + Brackets + Free Delivery):</div>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#FFF' }}>
                    ${(2199 - discountPerGuard).toLocaleString()} / truck
                  </div>
                </div>
                <button
                  onClick={onExploreShop}
                  style={{
                    background: '#10B981',
                    color: '#061A14',
                    fontWeight: 900,
                    fontSize: '13px',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Order {truckQty} Truck Bundle →
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#A7F3D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Wrench size={16} />
                <span>25-Minute Easy Bolt-On</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Package size={16} />
                <span>Palletized Freight with Tracking</span>
              </div>
            </div>
          </div>

          {/* Real Photo Card */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(16, 185, 129, 0.3)',
              aspectRatio: '4/3',
            }}
          >
            <Image
              src="/images/guards/guard-freightliner-cascadia.jpg"
              alt="Freightliner Cascadia with Road Armor deer guard at truck stop"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(6, 26, 20, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                padding: '12px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFF' }}>
                  Titan Pro Sentinel — Cascadia
                </div>
                <div style={{ fontSize: '11px', color: '#A7F3D0' }}>
                  Full Hood & Radar Protection • In Stock at Dallas Hub
                </div>
              </div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#10B981' }}>
                $2,349
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#FFF', marginBottom: '24px' }}>
            Popular Owner-Operator Rig Packages
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#0B2920',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image src={prod.image} alt={prod.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {prod.truck} Rig Fitting
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#FFF', margin: '0 0 6px 0' }}>
                    {prod.name}
                  </h3>
                  <div style={{ fontSize: '12px', color: '#A7F3D0', marginBottom: '14px' }}>
                    Brackets & Hardware Included • {prod.stockCount} in stock
                  </div>

                  <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '22px', fontWeight: 900, color: '#10B981' }}>
                      ${prod.price.toLocaleString()}
                    </span>
                    <button
                      onClick={onExploreShop}
                      style={{
                        background: '#10B981',
                        color: '#061A14',
                        fontWeight: 800,
                        fontSize: '12px',
                        padding: '10px 18px',
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Buy Package
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
