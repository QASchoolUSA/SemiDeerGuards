'use client'

import React, { useState } from 'react'
import {
  Cpu,
  Layers,
  FileCode,
  Download,
  Crosshair,
  ShieldAlert,
  Sliders,
  Check,
  ChevronRight,
  Activity
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function BlueprintHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [activePart, setActivePart] = useState<'tubing' | 'radar' | 'brackets' | 'hinge'>('tubing')

  const partDetails = {
    tubing: {
      title: '3.5" OD High-Tensile Structural Tubing',
      spec: 'ASTM A500 Grade C Carbon Steel with 50,000 PSI minimum yield strength',
      impact: 'Yield Threshold: 18,200 Joules without structural deflection into cooling stack',
      finish: 'Dual-coat zinc phosphate e-coat + electrostatic matte polyester',
      cadCode: 'DWG-TUBE-VNL-REV4',
    },
    radar: {
      title: 'Millimeter-Wave CAS Sensor Aperture',
      spec: 'Precision CNC laser cut with 180° unobstructed cone of radar propagation',
      impact: 'Tested 100% transparent to Bendix Wingman Fusion & Detroit Assurance 5.0',
      finish: 'Non-conductive polymer gasketed perimeter',
      cadCode: 'DWG-CAS-WIN-09',
    },
    brackets: {
      title: 'Heavy Flange Chassis Mounts (No-Drill)',
      spec: '1/2" CNC plasma-cut bracketry direct-bolting into factory tow hook sockets',
      impact: 'Grade 8 flanged hardware with 150,000 PSI tensile strength',
      finish: 'Dacromet anti-corrosion marine coating (1,000hr salt spray rated)',
      cadCode: 'DWG-BRKT-CHASSIS-02',
    },
    hinge: {
      title: 'Dual Quick-Release Tilt Mechanism',
      spec: 'Dual stainless locking pins allow 90° forward tilt in 12 seconds for hood access',
      impact: 'Double-shear locking pin design prevents accidental deployment at speed',
      finish: '316 Marine Stainless Steel hardware',
      cadCode: 'DWG-TILT-MECH-88',
    },
  }

  return (
    <div
      style={{
        background: '#04101E',
        color: '#D8EEFF',
        fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blueprint Grid Texture Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 210, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 210, 255, 0.07) 1px, transparent 1px),
            linear-gradient(rgba(0, 210, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 210, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          pointerEvents: 'none',
        }}
      />

      {/* Coordinate Crosshairs at corners */}
      <div style={{ position: 'absolute', top: 20, left: 24, fontSize: '10px', color: '#00D2FF88' }}>
        + LOC: 41.8781° N, 87.6298° W // GRID: CAD-ENGINEERING-MODE
      </div>
      <div style={{ position: 'absolute', top: 20, right: 24, fontSize: '10px', color: '#00D2FF88' }}>
        TOLERANCE: ±0.015" // SPEC: SAE-J1455
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1360px', margin: '0 auto', padding: '60px 24px 100px' }}>
        {/* Top Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: 'rgba(0, 210, 255, 0.1)',
              border: '1px solid #00D2FF',
              color: '#00D2FF',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <Crosshair size={12} />
            ENGINEERING SCHEMATIC SPECIFICATION
          </span>
          <span style={{ fontSize: '11px', color: '#688CA5' }}>REV 4.2.0-STABLE</span>
        </div>

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              FINITE ELEMENT <br />
              <span style={{ color: '#00D2FF', textShadow: '0 0 24px rgba(0, 210, 255, 0.4)' }}>
                FRONT-END SHIELD
              </span>
            </h1>

            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#8FBAD9', maxWidth: '580px', marginBottom: '32px' }}>
              Engineered exclusively for heavy Class 8 commercial vehicles. Every bend, truss, and radar cutout is CNC-modeled to withstand 18,000+ Joules of kinetic impact without radiator intrusion or sensor occlusion.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '12px 28px',
                  background: '#00D2FF',
                  color: '#04101E',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(0, 210, 255, 0.4)',
                }}
              >
                <span>OPEN SPEC CATALOG</span>
                <ChevronRight size={16} />
              </button>

              <button
                style={{
                  padding: '12px 24px',
                  background: 'rgba(0, 210, 255, 0.05)',
                  color: '#00D2FF',
                  border: '1px solid rgba(0, 210, 255, 0.4)',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Download size={15} />
                <span>DOWNLOAD CAD (.STEP)</span>
              </button>
            </div>

            {/* Live Telemetry Tickers */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                borderTop: '1px dashed rgba(0, 210, 255, 0.25)',
                paddingTop: '24px',
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: '#688CA5', textTransform: 'uppercase' }}>Kinetic Absorption</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#00D2FF' }}>18.5 kJ</div>
                <div style={{ fontSize: '10px', color: '#567A94' }}>@ 70 MPH Animal Impact</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#688CA5', textTransform: 'uppercase' }}>Radar Pass-Through</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#22C55E' }}>99.8%</div>
                <div style={{ fontSize: '10px', color: '#567A94' }}>77-81 GHz CAS Compliant</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#688CA5', textTransform: 'uppercase' }}>Install Duration</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#F8FAFC' }}>22 Min</div>
                <div style={{ fontSize: '10px', color: '#567A94' }}>Direct Factory Tow Sockets</div>
              </div>
            </div>
          </div>

          {/* Interactive Vector CAD Exploded Model Box */}
          <div
            style={{
              background: 'rgba(6, 26, 48, 0.7)',
              border: '1px solid rgba(0, 210, 255, 0.3)',
              borderRadius: '4px',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 0 30px rgba(0, 210, 255, 0.08) inset',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(0, 210, 255, 0.2)', paddingBottom: '12px' }}>
              <span style={{ fontSize: '11px', color: '#00D2FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} /> EXPLODED ASSEMBLY INSPECTOR
              </span>
              <span style={{ fontSize: '10px', color: '#688CA5' }}>MODEL: SG-VOLVO-VNL-X</span>
            </div>

            {/* SVG Wireframe Representation with Interactive Hotspots */}
            <div
              style={{
                height: '240px',
                background: 'rgba(2, 14, 28, 0.8)',
                border: '1px dashed rgba(0, 210, 255, 0.2)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              {/* Technical Drawing Vector Lines */}
              <svg width="100%" height="100%" viewBox="0 0 500 220" style={{ overflow: 'visible' }}>
                {/* Truck outline silhouette */}
                <path d="M 50 180 L 120 180 L 160 120 L 340 120 L 380 180 L 450 180" fill="none" stroke="#1A4A70" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Deer Guard Main Tube Bar */}
                <path
                  d="M 80 160 C 80 80, 160 60, 250 60 C 340 60, 420 80, 420 160 L 410 170 C 330 90, 170 90, 90 170 Z"
                  fill="rgba(0, 210, 255, 0.1)"
                  stroke="#00D2FF"
                  strokeWidth="2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActivePart('tubing')}
                />
                
                {/* Crossbars */}
                <line x1="120" y1="110" x2="380" y2="110" stroke="#00D2FF" strokeWidth="2" strokeDasharray="2 2" />
                <line x1="140" y1="140" x2="360" y2="140" stroke="#00D2FF" strokeWidth="2" />

                {/* Radar cutout center box */}
                <rect
                  x="220"
                  y="125"
                  width="60"
                  height="30"
                  rx="4"
                  fill="rgba(34, 197, 94, 0.15)"
                  stroke="#22C55E"
                  strokeWidth="1.5"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActivePart('radar')}
                />
                <text x="230" y="144" fill="#22C55E" fontSize="9" fontFamily="monospace">RADAR</text>

                {/* Mounting Brackets */}
                <rect
                  x="140"
                  y="160"
                  width="36"
                  height="36"
                  fill="rgba(245, 166, 35, 0.2)"
                  stroke="#F5A623"
                  strokeWidth="1.5"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActivePart('brackets')}
                />
                <rect
                  x="324"
                  y="160"
                  width="36"
                  height="36"
                  fill="rgba(245, 166, 35, 0.2)"
                  stroke="#F5A623"
                  strokeWidth="1.5"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActivePart('brackets')}
                />

                {/* Hinge Pin */}
                <circle
                  cx="158"
                  cy="178"
                  r="6"
                  fill="#EC4899"
                  stroke="#FFF"
                  strokeWidth="1"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActivePart('hinge')}
                />
                <circle
                  cx="342"
                  cy="178"
                  r="6"
                  fill="#EC4899"
                  stroke="#FFF"
                  strokeWidth="1"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActivePart('hinge')}
                />
              </svg>

              {/* Part selector pills */}
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', display: 'flex', gap: '6px' }}>
                {(['tubing', 'radar', 'brackets', 'hinge'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActivePart(key)}
                    style={{
                      padding: '3px 8px',
                      background: activePart === key ? '#00D2FF' : 'rgba(0,0,0,0.6)',
                      color: activePart === key ? '#04101E' : '#8FBAD9',
                      border: '1px solid rgba(0, 210, 255, 0.3)',
                      fontSize: '9px',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Part Breakdown Card */}
            <div style={{ background: 'rgba(0, 210, 255, 0.05)', border: '1px solid rgba(0, 210, 255, 0.2)', padding: '14px' }}>
              <div style={{ fontSize: '10px', color: '#00D2FF', textTransform: 'uppercase', marginBottom: '4px' }}>
                SELECTED COMPONENT // {partDetails[activePart].cadCode}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFF', marginBottom: '6px' }}>
                {partDetails[activePart].title}
              </div>
              <div style={{ fontSize: '11px', color: '#8FBAD9', marginBottom: '4px', lineHeight: 1.4 }}>
                <strong>Material:</strong> {partDetails[activePart].spec}
              </div>
              <div style={{ fontSize: '11px', color: '#4ADE80', lineHeight: 1.4 }}>
                <strong>Performance:</strong> {partDetails[activePart].impact}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Engineering Models Matrix Preview */}
        <div style={{ borderTop: '1px solid rgba(0, 210, 255, 0.2)', paddingTop: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#00D2FF', textTransform: 'uppercase' }}>PRODUCT REPOSITORY</div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
                VERIFIED RIG COMPATIBILITY MATRIX
              </h2>
            </div>
            <button
              onClick={onExploreShop}
              style={{
                background: 'transparent',
                border: '1px solid #00D2FF',
                color: '#00D2FF',
                padding: '8px 16px',
                fontSize: '12px',
                cursor: 'pointer',
                fontFamily: 'monospace',
              }}
            >
              VIEW FULL MATRIX [8 RIGS] →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: 'rgba(6, 26, 48, 0.5)',
                  border: '1px solid rgba(0, 210, 255, 0.25)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#688CA5' }}>
                  <span>TRUCK: {prod.truck}</span>
                  <span style={{ color: '#00D2FF' }}>{prod.tier}</span>
                </div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFF' }}>
                  {prod.name}
                </div>
                <div style={{ fontSize: '12px', color: '#8FBAD9' }}>
                  Model: {prod.model}
                </div>
                <div style={{ fontSize: '11px', color: '#688CA5', borderTop: '1px dashed rgba(0,210,255,0.15)', paddingTop: '10px' }}>
                  <div>Gauge: {prod.gauge}</div>
                  <div>Rating: {prod.impactRating}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#00D2FF' }}>
                    ${prod.price.toLocaleString()}
                  </span>
                  <button
                    onClick={onExploreShop}
                    style={{
                      background: 'rgba(0, 210, 255, 0.1)',
                      border: '1px solid #00D2FF',
                      color: '#00D2FF',
                      padding: '6px 14px',
                      fontSize: '11px',
                      cursor: 'pointer',
                    }}
                  >
                    INSPECT SPEC
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
