'use client'

import React, { useState } from 'react'
import { Sliders, Check, RotateCw, Eye, Sparkles, Truck, Shield, ArrowRight } from 'lucide-react'

export default function Configurator3DHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [selectedMake, setSelectedMake] = useState('Volvo')
  const [guardStyle, setGuardStyle] = useState<'Aero' | 'Heavy' | 'Moose'>('Heavy')
  const [finish, setFinish] = useState<'Chrome' | 'MatteBlack' | 'Wrinkle'>('MatteBlack')
  const [isTilted, setIsTilted] = useState(false)

  const truckMakes = ['Volvo', 'Freightliner', 'Kenworth', 'Peterbilt', 'Mack']

  // Dynamic calculations based on user configuration
  const configStats = {
    weight: guardStyle === 'Aero' ? 88 : guardStyle === 'Heavy' ? 108 : 142,
    price: guardStyle === 'Aero' ? 1899 : guardStyle === 'Heavy' ? 2299 : 2749,
    impactJoules: guardStyle === 'Aero' ? '13,500 J' : guardStyle === 'Heavy' ? '18,500 J' : '29,400 J',
    dragDelta: guardStyle === 'Aero' ? '-0.4%' : guardStyle === 'Heavy' ? '-0.1%' : '+0.9%',
  }

  return (
    <div
      style={{
        background: '#0D0E1A',
        color: '#EEF2F6',
        fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '50px 24px 100px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Studio Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.4)', padding: '4px 10px', borderRadius: '99px', fontSize: '11px', color: '#A78BFA', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              <Sparkles size={13} />
              <span>Interactive Rig Studio</span>
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 800, margin: 0, color: '#FFF' }}>
              Custom Rig Configurator
            </h1>
          </div>

          {/* Tilt Action Toggle */}
          <button
            onClick={() => setIsTilted(!isTilted)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              background: isTilted ? '#8B5CF6' : 'rgba(255,255,255,0.06)',
              color: isTilted ? '#FFF' : '#CBD5E1',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <RotateCw size={14} />
            <span>{isTilted ? 'Return to Drive Position' : 'Simulate 90° Forward Tilt (Hood Service)'}</span>
          </button>
        </div>

        {/* Studio Bay (3D Look Layout) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(360px, 0.8fr)', gap: '32px' }}>
          {/* Virtual Rig Stage Box */}
          <div
            style={{
              background: 'radial-gradient(ellipse at 50% 60%, #1E1B4B 0%, #0A0A14 80%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '16px',
              padding: '40px 24px',
              minHeight: '480px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            {/* Top Config Badges */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#A78BFA', fontWeight: 700 }}>
                {selectedMake.toUpperCase()} RIG CHASSIS // ACTIVE VIEWPORT
              </span>
              <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '4px', color: '#94A3B8' }}>
                Status: {isTilted ? 'Hood Maintenance Position (90° Forward)' : 'Road Travel Locked'}
              </span>
            </div>

            {/* SVG Visual Representation of Truck & Selected Guard */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '40px 0' }}>
              <svg width="420" height="240" viewBox="0 0 420 240">
                {/* Truck Cabin Base */}
                <rect x="180" y="30" width="200" height="150" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                <rect x="200" y="50" width="160" height="60" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
                {/* Grille */}
                <rect x="100" y="70" width="90" height="110" rx="6" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
                <line x1="100" y1="90" x2="190" y2="90" stroke="#475569" strokeWidth="2" />
                <line x1="100" y1="110" x2="190" y2="110" stroke="#475569" strokeWidth="2" />
                <line x1="100" y1="130" x2="190" y2="130" stroke="#475569" strokeWidth="2" />
                <line x1="100" y1="150" x2="190" y2="150" stroke="#475569" strokeWidth="2" />

                {/* Headlights */}
                <circle cx="120" cy="80" r="10" fill="#FEF08A" opacity="0.8" />
                <circle cx="120" cy="160" r="10" fill="#FEF08A" opacity="0.8" />

                {/* Dynamic Guard (rotates or changes appearance based on finish and style) */}
                <g
                  style={{
                    transformOrigin: '95px 180px',
                    transform: isTilted ? 'rotate(-65deg)' : 'none',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Guard Outer Tube */}
                  <path
                    d={
                      guardStyle === 'Aero'
                        ? 'M 90 40 C 60 70, 60 170, 90 200 L 98 190 C 74 165, 74 75, 98 50 Z'
                        : guardStyle === 'Heavy'
                        ? 'M 80 30 C 45 65, 45 175, 80 210 L 90 200 C 60 170, 60 70, 90 40 Z'
                        : 'M 70 20 C 30 60, 30 180, 70 220 L 85 210 C 50 175, 50 65, 85 30 Z'
                    }
                    fill={finish === 'Chrome' ? '#E2E8F0' : finish === 'MatteBlack' ? '#18181B' : '#27272A'}
                    stroke={finish === 'Chrome' ? '#FFFFFF' : '#8B5CF6'}
                    strokeWidth={guardStyle === 'Moose' ? 3 : 2}
                  />

                  {/* Horizontal Louvers */}
                  <rect x="55" y="90" width="30" height="6" fill={finish === 'Chrome' ? '#CBD5E1' : '#3F3F46'} />
                  <rect x="55" y="115" width="30" height="6" fill={finish === 'Chrome' ? '#CBD5E1' : '#3F3F46'} />
                  <rect x="55" y="140" width="30" height="6" fill={finish === 'Chrome' ? '#CBD5E1' : '#3F3F46'} />

                  {/* CAS Radar Window */}
                  <rect x="50" y="110" width="22" height="16" rx="3" fill="#10B981" opacity="0.6" stroke="#10B981" strokeWidth="1" />
                </g>
              </svg>
            </div>

            {/* Live Telemetry Dock at bottom of 3D bay */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>ARMOR WEIGHT</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFF' }}>{configStats.weight} lbs</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>AERO DRAG</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#10B981' }}>{configStats.dragDelta}</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>IMPACT CAP</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#A78BFA' }}>{configStats.impactJoules}</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>BUILD TOTAL</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#F8FAFC' }}>${configStats.price}</div>
              </div>
            </div>
          </div>

          {/* Interactive Configurator Controls */}
          <div
            style={{
              background: '#131424',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Step 1: Make */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#A78BFA', textTransform: 'uppercase', marginBottom: '10px' }}>
                1. Select Truck Make
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {truckMakes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMake(m)}
                    style={{
                      padding: '8px 14px',
                      background: selectedMake === m ? '#8B5CF6' : 'rgba(255,255,255,0.05)',
                      color: selectedMake === m ? '#FFF' : '#CBD5E1',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guard Style */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#A78BFA', textTransform: 'uppercase', marginBottom: '10px' }}>
                2. Protection Architecture
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  { key: 'Aero', label: 'Aero Pro', desc: 'Lightweight' },
                  { key: 'Heavy', label: 'Heavy Duty', desc: 'All-Rounder' },
                  { key: 'Moose', label: 'Moose Shield', desc: 'Maximum' },
                ].map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setGuardStyle(s.key as any)}
                    style={{
                      padding: '12px 8px',
                      background: guardStyle === s.key ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.04)',
                      border: guardStyle === s.key ? '1px solid #8B5CF6' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      color: '#FFF',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '12px' }}>{s.label}</div>
                    <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Finish */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#A78BFA', textTransform: 'uppercase', marginBottom: '10px' }}>
                3. Surface Finish
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  { key: 'MatteBlack', label: 'Matte Black' },
                  { key: 'Chrome', label: 'Mirror Chrome' },
                  { key: 'Wrinkle', label: 'Wrinkle Coat' },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFinish(f.key as any)}
                    style={{
                      padding: '10px 8px',
                      background: finish === f.key ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.04)',
                      border: finish === f.key ? '1px solid #8B5CF6' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      color: '#FFF',
                      cursor: 'pointer',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Lock Configuration Button */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
              <button
                onClick={onExploreShop}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#8B5CF6',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '13px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>FINALIZE & LOCK CUSTOM RIG (${configStats.price})</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
