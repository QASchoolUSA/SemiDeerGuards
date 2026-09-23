'use client'

import React, { useState } from 'react'
import { Activity, AlertTriangle, ShieldCheck, FileCheck, ArrowRight, Gauge } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function CrashLabHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [speedMph, setSpeedMph] = useState<number>(65)
  const [animalWeightLbs, setAnimalWeightLbs] = useState<number>(300)

  // Physics calculation: E_k = 0.5 * m * v^2
  // convert lbs to kg: lbs * 0.453592
  // convert mph to m/s: mph * 0.44704
  const massKg = animalWeightLbs * 0.453592
  const velocityMs = speedMph * 0.44704
  const kineticJoules = Math.round(0.5 * massKg * Math.pow(velocityMs, 2))
  const kineticKj = (kineticJoules / 1000).toFixed(1)

  // Estimated repair cost if unprotected
  const estimatedDamage = Math.round(4500 + (kineticJoules / 1000) * 480)

  return (
    <div
      style={{
        background: '#0C0A0B',
        color: '#FEE2E2',
        fontFamily: '"Chivo Mono", "Inter", -apple-system, sans-serif',
        minHeight: '100vh',
        padding: '50px 24px 100px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Lab Certification Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(239, 68, 68, 0.3)', paddingBottom: '20px', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 10px #EF4444' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              CRASH SIMULATION LAB // ISO 17025 ACCREDITED TESTING
            </span>
          </div>

          <div style={{ fontSize: '11px', color: '#F87171' }}>
            FACILITY TEST BENCH: HYDRAULIC SLED IMPACTOR #04
          </div>
        </div>

        {/* Hero Banner Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: '48px', alignItems: 'center', marginBottom: '70px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Dynamic Collision Energy Dissipation
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              THE PHYSICS OF ANIMAL IMPACT. <br />
              <span style={{ color: '#EF4444' }}>CALCULATED & DEFEATED.</span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#FCA5A5', maxWidth: '560px', marginBottom: '36px' }}>
              At 65 MPH, hitting a 300-lb deer unleashes over 14,000 Joules of kinetic energy in under 60 milliseconds. Our structural triangulation distributes this spike across dual frame rails without chassis deformation.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '14px 32px',
                  background: '#EF4444',
                  color: '#FFFFFF',
                  fontWeight: 800,
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
                <span>TESTED GUARDS CATALOG</span>
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
              padding: '32px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', letterSpacing: '0.1em' }}>
                KINETIC ENERGY CALCULATOR (E = ½mv²)
              </span>
              <Activity size={18} color="#EF4444" />
            </div>

            {/* Slider 1: Speed */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                <span style={{ color: '#FCA5A5' }}>Truck Travel Speed:</span>
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
                <span style={{ color: '#FCA5A5' }}>Wildlife Target Mass:</span>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#7F1D1D', marginTop: '4px' }}>
                <span>Whitetail (150#)</span>
                <span>Mule Deer (300#)</span>
                <span>Bull Elk (700#)</span>
                <span>Moose (1000#)</span>
              </div>
            </div>

            {/* Live Calculated Telemetry Readout */}
            <div style={{ background: '#0D0607', padding: '20px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.25)', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#991B1B', textTransform: 'uppercase' }}>Kinetic Strike Energy</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#EF4444' }}>{kineticKj} kJ</div>
                  <div style={{ fontSize: '10px', color: '#FCA5A5' }}>{kineticJoules.toLocaleString()} Joules</div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', color: '#991B1B', textTransform: 'uppercase' }}>Unprotected Repair Loss</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#FFF' }}>${estimatedDamage.toLocaleString()}</div>
                  <div style={{ fontSize: '10px', color: '#FCA5A5' }}>Radiator + Tow + Downtime</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '11px', color: '#FCA5A5', lineHeight: 1.5, marginBottom: '20px' }}>
              SemiDeerGuards structural safety threshold: <strong>Rated up to 29.4 kJ</strong> before frame attachment deflection.
            </div>

            <button
              onClick={onExploreShop}
              style={{
                width: '100%',
                padding: '14px',
                background: '#EF4444',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '12px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              FIND SHIELDS RATED FOR {kineticKj} kJ STRIKES
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
