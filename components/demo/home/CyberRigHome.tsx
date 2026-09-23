'use client'

import React, { useState } from 'react'
import { Radio, Wifi, Zap, Shield, ChevronRight, Activity, Terminal } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function CyberRigHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [pulseActive, setPulseActive] = useState(true)

  return (
    <div
      style={{
        background: '#020205',
        color: '#E0F2FE',
        fontFamily: '"Rajdhani", "Space Grotesk", sans-serif',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 24px 100px',
      }}
    >
      {/* Background Neon Vector Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.08) 0%, transparent 60%),
            linear-gradient(rgba(0, 240, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Cyber HUD Status Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0, 240, 255, 0.2)', paddingBottom: '16px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio size={14} color="#00F0FF" />
            <span style={{ fontSize: '12px', letterSpacing: '0.15em', color: '#00F0FF', textTransform: 'uppercase', fontWeight: 700 }}>
              CYBER-RIG TELEMETRY SHIELD // ADAS CAS 5.0
            </span>
          </div>
          <div style={{ fontSize: '11px', color: '#38BDF8', fontFamily: 'monospace' }}>
            MILLIMETER-WAVE PASS-THROUGH: 99.8% // STATUS: NOMINAL
          </div>
        </div>

        {/* Hero Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '48px', alignItems: 'center', marginBottom: '70px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#00F0FF', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Autonomous & Sensor-Protected Transport
            </div>

            <h1 style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.0, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '24px' }}>
              ZERO SENSOR INTERFERENCE. <br />
              <span style={{ color: '#00F0FF', textShadow: '0 0 25px rgba(0, 240, 255, 0.5)' }}>
                ABSOLUTE KINETIC ARMOR.
              </span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#94A3B8', maxWidth: '580px', marginBottom: '36px' }}>
              Collision Avoidance Systems (CAS) and radar emergency braking save lives—unless your bumper guard creates blind-spot ghosts. CyberRig designs radar apertures tuned down to 0.05° signal deviation.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '14px 32px',
                  background: '#00F0FF',
                  color: '#020205',
                  fontWeight: 800,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  boxShadow: '0 0 24px rgba(0, 240, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>EXPLORE CYBER-SHIELDS</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Radar Telemetry Tickers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid rgba(0, 240, 255, 0.15)', paddingTop: '24px' }}>
              <div>
                <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase' }}>RADAR FREQUENCY</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#00F0FF' }}>76–81 GHz</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase' }}>APERTURE CONE</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#FFF' }}>180° FIELD</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase' }}>FALSE POSITIVES</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#22C55E' }}>0.00%</div>
              </div>
            </div>
          </div>

          {/* Active Radar Wave Graphic Visualizer */}
          <div
            style={{
              background: 'rgba(8, 12, 28, 0.85)',
              border: '1px solid #00F0FF',
              borderRadius: '8px',
              padding: '28px',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.12)',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', color: '#00F0FF', fontWeight: 700, letterSpacing: '0.1em' }}>
                RADAR EMISSION WAVE ANALYSIS
              </span>
              <button
                onClick={() => setPulseActive(!pulseActive)}
                style={{ background: 'none', border: '1px solid rgba(0,240,255,0.4)', color: '#00F0FF', padding: '3px 8px', fontSize: '10px', cursor: 'pointer' }}
              >
                {pulseActive ? 'PULSE: ACTIVE' : 'PULSE: PAUSED'}
              </button>
            </div>

            {/* SVG Wave Visualization */}
            <div style={{ height: '220px', background: '#020208', border: '1px dashed rgba(0, 240, 255, 0.25)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', overflow: 'hidden' }}>
              <svg width="100%" height="100%" viewBox="0 0 360 200">
                {/* Radar emitter origin */}
                <circle cx="50" cy="100" r="10" fill="#00F0FF" />
                <text x="35" y="130" fill="#00F0FF" fontSize="10" fontFamily="monospace">RADAR</text>

                {/* Concentric wave rings */}
                {[50, 90, 130, 170, 210, 250, 290].map((r, i) => (
                  <path
                    key={r}
                    d={`M ${50 + r * 0.7} ${100 - r * 0.5} A ${r} ${r} 0 0 1 ${50 + r * 0.7} ${100 + r * 0.5}`}
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                    opacity={pulseActive ? (0.9 - i * 0.12) : 0.4}
                  />
                ))}

                {/* Guard Cutout Aperture Line */}
                <line x1="140" y1="20" x2="140" y2="70" stroke="#38BDF8" strokeWidth="4" />
                <line x1="140" y1="130" x2="140" y2="180" stroke="#38BDF8" strokeWidth="4" />
                <rect x="135" y="70" width="10" height="60" fill="none" stroke="#22C55E" strokeWidth="1" strokeDasharray="3 3" />
                <text x="150" y="104" fill="#22C55E" fontSize="9" fontFamily="monospace">PASS-THROUGH</text>
              </svg>
            </div>

            <div style={{ fontSize: '11px', color: '#94A3B8', lineHeight: 1.5 }}>
              Precision radar pass-through validated with Detroit Assurance, Volvo Active Driver Assist, and Bendix Wingman Fusion.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
