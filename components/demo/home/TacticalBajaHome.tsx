'use client'

import React, { useState } from 'react'
import { Shield, Zap, Flame, Award, ChevronRight, AlertOctagon, Gauge } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function TacticalBajaHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [selectedTier, setSelectedTier] = useState<'Tier 1' | 'Tier 2' | 'Tier 3'>('Tier 2')

  const tierInfo = {
    'Tier 1': {
      label: 'TIER 1 // INTERSTATE DEFENDER',
      target: 'Whitetail Deer (up to 200 lbs) @ 65 MPH',
      spec: '3.5" OD High-Yield Tubing + CAS Radar Sensor Safezone',
      joules: '13,500 Joules',
      barColor: '#EAB308',
      desc: 'Optimized for high-speed highway freights. Aerodynamically sculpted to minimize drag while protecting your intercooler and steering linkage.',
    },
    'Tier 2': {
      label: 'TIER 2 // ROCKY MOUNTAIN SENTINEL',
      target: 'Mule Deer & Elk (up to 600 lbs) @ 75 MPH',
      spec: '3/8" Carbon Plate Steel + Reinforced Upper Cowl Bars',
      joules: '18,500 Joules',
      barColor: '#F97316',
      desc: 'Our bestselling armor suite for cross-country haulers traversing Wyoming, Montana, and the Dakotas where animal density peaks at dawn.',
    },
    'Tier 3': {
      label: 'TIER 3 // ALASKAN TUNDRA DESTROYER',
      target: 'Bull Elk & Massive Alaskan Moose (1,400+ lbs)',
      spec: '1/2" Boxed Truss Structural Steel + Full Wrap Headlight Cages',
      joules: '29,400 Joules',
      barColor: '#EF4444',
      desc: 'Extreme brutalist armor engineered for the Dalton Highway, ice roads, and heavy logging operations. Zero compromise, unyielding brute force.',
    },
  }

  return (
    <div
      style={{
        background: '#120F0D',
        color: '#F8FAFC',
        fontFamily: '"Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Tactical Hazard Diagonal Stripe Top Bar */}
      <div
        style={{
          height: '10px',
          backgroundImage:
            'repeating-linear-gradient(45deg, #FF6B00, #FF6B00 15px, #000 15px, #000 30px)',
          width: '100%',
        }}
      />

      {/* Grit / Mud Texture Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '60px 24px 100px', position: 'relative', zIndex: 10 }}>
        {/* Aggressive Chamfered Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: '#FF6B00', color: '#000', fontWeight: 900, fontSize: '12px', letterSpacing: '0.12em', clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)', marginBottom: '24px' }}>
          <Flame size={16} />
          <span>MIL-SPEC TACTICAL FRONT-END ARMOR</span>
        </div>

        {/* Hero Banner Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '48px', alignItems: 'center', marginBottom: '70px' }}>
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                fontWeight: 900,
                lineHeight: 0.95,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}
            >
              HIT AN ANIMAL. <br />
              <span style={{ color: '#FF6B00', WebkitTextStroke: '1px #FF6B00' }}>
                KEEP ROLLING.
              </span>
            </h1>

            <p style={{ fontSize: '17px', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '600px', marginBottom: '36px' }}>
              Built for brutal logging trails, ice crossings, and 2 AM interstate runs. Our heavy-gauge steel cages absorb the catastrophic impact forces that crush radiators, crack oil pans, and leave unprotected rigs stranded for weeks.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '16px 36px',
                  background: 'linear-gradient(135deg, #FF6B00, #EA580C)',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '15px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  clipPath: 'polygon(0 0, 94% 0, 100% 100%, 6% 100%)',
                  boxShadow: '0 8px 30px rgba(255, 107, 0, 0.4)',
                }}
              >
                SELECT YOUR RIG ARMOR →
              </button>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  border: '2px solid rgba(255, 107, 0, 0.4)',
                  background: 'rgba(255, 107, 0, 0.05)',
                  fontSize: '13px',
                  fontWeight: 800,
                  color: '#FF6B00',
                  textTransform: 'uppercase',
                }}
              >
                <AlertOctagon size={18} />
                <span>Zero Downtime Guaranteed</span>
              </div>
            </div>

            {/* Mud/Grit Badges */}
            <div style={{ display: 'flex', gap: '24px', borderTop: '2px solid rgba(255, 107, 0, 0.2)', paddingTop: '24px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#FF6B00' }}>30,000+</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase' }}>Collisions Absorbed</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#F8FAFC' }}>$0 Radiator Losses</div>
                <div style={{ fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase' }}>Reported By Fleet Drivers</div>
              </div>
            </div>
          </div>

          {/* Interactive Armor Tier Selector Card */}
          <div
            style={{
              background: '#1A1613',
              border: '2px solid #FF6B00',
              padding: '32px',
              position: 'relative',
              clipPath: 'polygon(0 0, 96% 0, 100% 4%, 100% 100%, 4% 100%, 0 96%)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.8)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#FF6B00', letterSpacing: '0.1em' }}>
                ARMOR IMPACT CALCULATOR
              </span>
              <Gauge size={20} color="#FF6B00" />
            </div>

            {/* Tier Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '24px' }}>
              {(['Tier 1', 'Tier 2', 'Tier 3'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  style={{
                    padding: '12px 8px',
                    background: selectedTier === tier ? '#FF6B00' : 'rgba(255,255,255,0.05)',
                    color: selectedTier === tier ? '#000' : '#CBD5E1',
                    border: '1px solid rgba(255, 107, 0, 0.4)',
                    fontWeight: 900,
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tier}
                </button>
              ))}
            </div>

            {/* Tier Details Card */}
            <div style={{ background: '#0D0A08', padding: '20px', border: '1px solid rgba(255, 107, 0, 0.3)', marginBottom: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: tierInfo[selectedTier].barColor, marginBottom: '6px' }}>
                {tierInfo[selectedTier].label}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', marginBottom: '10px' }}>
                {tierInfo[selectedTier].target}
              </div>
              <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5, margin: '0 0 14px 0' }}>
                {tierInfo[selectedTier].desc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px', fontSize: '12px' }}>
                <span style={{ color: '#64748B' }}>IMPACT TOLERANCE:</span>
                <span style={{ fontWeight: 900, color: tierInfo[selectedTier].barColor }}>
                  {tierInfo[selectedTier].joules}
                </span>
              </div>
            </div>

            <button
              onClick={onExploreShop}
              style={{
                width: '100%',
                padding: '14px',
                background: '#FF6B00',
                color: '#000',
                fontWeight: 900,
                fontSize: '13px',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              EXPLORE {selectedTier} ARMORED GUARDS
            </button>
          </div>
        </div>

        {/* Heavy Hauler Product Cards */}
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '12px', height: '12px', background: '#FF6B00' }} />
            BATTLE-TESTED FLEET BUILDS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#1A1613',
                  border: '1px solid rgba(255, 107, 0, 0.3)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ background: '#FF6B00', color: '#000', fontSize: '10px', fontWeight: 900, padding: '3px 8px', textTransform: 'uppercase' }}>
                    {prod.truck} SPECIALTY
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#F97316' }}>{prod.tier}</span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#FFF', margin: 0 }}>
                  {prod.name}
                </h3>
                <div style={{ fontSize: '13px', color: '#94A3B8' }}>Fits: {prod.model}</div>

                <div style={{ background: '#0E0B09', padding: '10px', fontSize: '11px', color: '#CBD5E1', borderLeft: '3px solid #FF6B00' }}>
                  <div><strong>Armor Steel:</strong> {prod.gauge}</div>
                  <div><strong>Impact Rating:</strong> {prod.impactRating}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '22px', fontWeight: 900, color: '#FF6B00' }}>
                    ${prod.price.toLocaleString()}
                  </div>
                  <button
                    onClick={onExploreShop}
                    style={{
                      background: 'transparent',
                      border: '2px solid #FF6B00',
                      color: '#FF6B00',
                      fontWeight: 800,
                      fontSize: '12px',
                      padding: '8px 14px',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                    }}
                  >
                    DEPLOY RIG
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
