'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Activity,
  AlertTriangle,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Gauge,
  ShoppingCart,
  PhoneCall,
  CheckCircle2,
  DollarSign,
  TrendingDown,
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function CrashLabHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const { isMobile } = useDemoViewport()
  const [speedMph, setSpeedMph] = useState<number>(65)
  const [animalWeightLbs, setAnimalWeightLbs] = useState<number>(300)

  // Physics calculation: E_k = 0.5 * m * v^2
  const massKg = animalWeightLbs * 0.453592
  const velocityMs = speedMph * 0.44704
  const kineticJoules = Math.round(0.5 * massKg * Math.pow(velocityMs, 2))
  const kineticKj = (kineticJoules / 1000).toFixed(1)

  // Real financial trucking costs
  const towBill = 3500
  const partsDamage = Math.round(5500 + animalWeightLbs * 8.5)
  const downtimeDays = animalWeightLbs > 400 ? 18 : 12
  const lostRevenue = downtimeDays * 1200
  const totalUnprotectedLoss = towBill + partsDamage + lostRevenue

  return (
    <div
      style={{
        background: '#0C0A0B',
        color: '#FEE2E2',
        fontFamily: '"Chivo Mono", "Inter", -apple-system, sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 90px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Lab Certification Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(239, 68, 68, 0.3)',
            paddingBottom: '16px',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              DOWNTIME LOSS PREVENTION LAB // TRUCKER FINANCIAL PROTECTION
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px' }}>
            <span style={{ color: '#FCA5A5' }}>Zero Tow Guarantee</span>
            <a href="tel:8005553337" style={{ color: '#EF4444', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={14} /> 1-800-555-DEER
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.15fr) minmax(0, 0.85fr)', gap: isMobile ? '24px' : '40px', alignItems: 'start', marginBottom: '56px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#EF4444', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
              KINETIC IMPACT & REPAIR COST CALCULATOR
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
              AN UNPROTECTED HIT <br />
              <span style={{ color: '#EF4444' }}>COSTS $25,000+ IN DOWNTIME.</span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#FCA5A5', maxWidth: '580px', marginBottom: '32px' }}>
              When a 300-lb animal hits your front bumper at 65 MPH, the impact pierces the radiator and charge-air cooler, shuts down your engine, and strands you on the shoulder. Our guards dissipate the shock across your frame rails so you keep driving.
            </p>

            {/* Financial Breakdown Table */}
            <div
              style={{
                background: '#1A1113',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                borderRadius: '10px',
                padding: '20px',
                marginBottom: '32px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TrendingDown size={16} /> Average Single Animal Strike Cost (No Guard)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FCA5A5' }}>
                  <span>Heavy-Duty Rotator Tow Bill (Interstate):</span>
                  <span style={{ color: '#FFF', fontWeight: 700 }}>${towBill.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FCA5A5' }}>
                  <span>OEM Fiberglass Hood & CAC Intercooler:</span>
                  <span style={{ color: '#FFF', fontWeight: 700 }}>${partsDamage.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FCA5A5' }}>
                  <span>Lost Freight Revenue ({downtimeDays} Days Waiting for Parts):</span>
                  <span style={{ color: '#FFF', fontWeight: 700 }}>${lostRevenue.toLocaleString()}</span>
                </div>
                <div style={{ borderTop: '2px solid rgba(239, 68, 68, 0.4)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ color: '#FFF', fontWeight: 800, fontSize: '14px' }}>Total Out-Of-Pocket Loss:</span>
                  <span style={{ color: '#EF4444', fontWeight: 900, fontSize: '22px' }}>${totalUnprotectedLoss.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '16px 32px',
                  background: '#EF4444',
                  color: '#FFFFFF',
                  fontWeight: 900,
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 24px rgba(239, 68, 68, 0.4)',
                }}
              >
                <span>PROTECT YOUR RIG ($2,099 — PAYS FOR ITSELF)</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Scientific Collision Physics Simulator */}
          <div
            style={{
              background: '#1A1113',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', letterSpacing: '0.1em' }}>
                LIVE KINETIC CALCULATOR (E = ½mv²)
              </span>
              <Activity size={18} color="#EF4444" />
            </div>

            {/* Slider 1: Speed */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                <span style={{ color: '#FCA5A5' }}>Truck Cruising Speed:</span>
                <span style={{ fontWeight: 800, color: '#EF4444' }}>{speedMph} MPH</span>
              </div>
              <input
                type="range"
                min={45}
                max={80}
                value={speedMph}
                onChange={(e) => setSpeedMph(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#EF4444', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 2: Mass */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                <span style={{ color: '#FCA5A5' }}>Animal Size:</span>
                <span style={{ fontWeight: 800, color: '#EF4444' }}>{animalWeightLbs} LBS</span>
              </div>
              <input
                type="range"
                min={150}
                max={1000}
                step={25}
                value={animalWeightLbs}
                onChange={(e) => setAnimalWeightLbs(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#EF4444', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#B91C1C', marginTop: '4px' }}>
                <span>Whitetail (150#)</span>
                <span>Mule Deer (300#)</span>
                <span>Elk (650#)</span>
                <span>Bull Moose (1000#)</span>
              </div>
            </div>

            {/* Real Truck Guard Featured Photo */}
            <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(239, 68, 68, 0.3)', marginBottom: '20px', background: '#0D0607' }}>
              <Image
                src="/images/guards/guard-volvo-vnl.jpg"
                alt="Impact Protected Volvo VNL"
                fill
                sizes="400px"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.85)', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 800, color: '#EF4444' }}>
                VOLVO VNL VADA IMPACT READY
              </div>
            </div>

            {/* Live Calculated Telemetry Readout */}
            <div style={{ background: '#0D0607', padding: '16px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.25)', marginBottom: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#991B1B', textTransform: 'uppercase' }}>KINETIC IMPACT FORCE</div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#EF4444' }}>{kineticKj} kJ</div>
                  <div style={{ fontSize: '10px', color: '#FCA5A5' }}>{kineticJoules.toLocaleString()} Joules</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#991B1B', textTransform: 'uppercase' }}>FINANCIAL PAYBACK</div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#22C55E' }}>14x ROI</div>
                  <div style={{ fontSize: '10px', color: '#FCA5A5' }}>On 1st strike prevention</div>
                </div>
              </div>
            </div>

            <button
              onClick={onExploreShop}
              style={{
                width: '100%',
                padding: '14px',
                background: '#EF4444',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '12px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>FIND GUARDS RATED FOR {kineticKj} kJ STRIKES</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Product Cards Grid with REAL IMAGES */}
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#FFF', marginBottom: '20px' }}>
            Impact-Tested Semi Deer Guards Ready to Ship
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {DEMO_PRODUCTS.slice(0, 4).map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#1A1113',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '180px', background: '#0D0607' }}>
                  <Image src={prod.image} alt={prod.name} fill sizes="350px" style={{ objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(12, 10, 11, 0.88)',
                      border: '1px solid #EF4444',
                      color: '#EF4444',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {prod.truck.toUpperCase()} TESTED
                  </div>
                </div>

                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 4px 0' }}>
                      {prod.name}
                    </h3>
                    <div style={{ fontSize: '12px', color: '#F87171', marginBottom: '12px' }}>
                      {prod.model} • {prod.tubeDiameter}
                    </div>

                    <div style={{ background: '#0D0607', padding: '10px', borderRadius: '6px', border: '1px dashed rgba(239, 68, 68, 0.25)', fontSize: '11px', marginBottom: '16px' }}>
                      <div><strong>ENERGY DISSIPATION:</strong> {prod.impactRating}</div>
                      <div><strong>FRAME MOUNT:</strong> Direct tow receiver, no frame drilling</div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '22px', fontWeight: 900, color: '#EF4444' }}>
                          ${prod.price.toLocaleString()}
                        </div>
                        <div style={{ fontSize: '11px', color: '#FCA5A5' }}>
                          or ${prod.affirmMonthly}/mo with Affirm
                        </div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 700 }}>
                        Free Shipping
                      </span>
                    </div>

                    <button
                      onClick={onExploreShop}
                      style={{
                        width: '100%',
                        background: '#EF4444',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '12px',
                        fontWeight: 900,
                        fontSize: '12px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                    >
                      <ShoppingCart size={15} />
                      <span>ORDER IMPACT GUARD</span>
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
