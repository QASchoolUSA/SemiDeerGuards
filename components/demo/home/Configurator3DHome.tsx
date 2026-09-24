'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Sliders,
  Check,
  RotateCw,
  Eye,
  Sparkles,
  Truck,
  Shield,
  ArrowRight,
  Crosshair,
  CreditCard,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react'
import { useDemoViewport } from '../DemoViewportContext'

const RIG_MODELS: Record<
  string,
  {
    name: string
    years: string
    image: string
    price: number
    affirmMonthly: number
    weight: number
    impactCap: string
    tubeSpec: string
    casStatus: string
  }
> = {
  Volvo: {
    name: 'Volvo VNL Series (760 / 860)',
    years: '2018 - 2026',
    image: '/images/guards/guard-volvo-vnl.jpg',
    price: 2199,
    affirmMonthly: 92,
    weight: 104,
    impactCap: '18,500 lbs dynamic strike',
    tubeSpec: '3.0" Heavy-Wall Marine Grade Schedule 40',
    casStatus: 'Volvo Active Driver Assist (VADA) Zero Interference',
  },
  Freightliner: {
    name: 'Freightliner Cascadia 116 / 126',
    years: '2018 - 2026',
    image: '/images/guards/guard-freightliner-cascadia.jpg',
    price: 2099,
    affirmMonthly: 88,
    weight: 98,
    impactCap: '17,800 lbs dynamic strike',
    tubeSpec: '3.0" Mandrel Bent Steel with Lower Skid Plate',
    casStatus: 'Detroit Assurance 5.0 Radar Verified Fitment',
  },
  Kenworth: {
    name: 'Kenworth T680 Next Gen',
    years: '2015 - 2026',
    image: '/images/guards/guard-kenworth-t680.jpg',
    price: 2249,
    affirmMonthly: 94,
    weight: 108,
    impactCap: '19,200 lbs dynamic strike',
    tubeSpec: '3.0" Aerodynamic Swept Contour Steel',
    casStatus: 'Bendix Wingman Fusion Radar Pass-Through',
  },
  Peterbilt: {
    name: 'Peterbilt 389 / 579 Classic & Aero',
    years: '2014 - 2026',
    image: '/images/guards/guard-peterbilt-389.jpg',
    price: 2499,
    affirmMonthly: 104,
    weight: 122,
    impactCap: '24,000 lbs severe strike',
    tubeSpec: '3.5" High-Luster Mirror Stainless Chrome',
    casStatus: 'Bendix Wingman & Custom Chrome Grille Guard',
  },
  Mack: {
    name: 'Mack Anthem 64T / 70T',
    years: '2019 - 2026',
    image: '/images/guards/guard-mack-anthem.jpg',
    price: 2299,
    affirmMonthly: 96,
    weight: 112,
    impactCap: '21,000 lbs dynamic strike',
    tubeSpec: '3.0" Heavy-Duty Boxed Uprights with Mesh Insert',
    casStatus: 'Mack Bendix Wingman Radar Compatible',
  },
}

export default function Configurator3DHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const { isMobile } = useDemoViewport()
  const [selectedMake, setSelectedMake] = useState<keyof typeof RIG_MODELS>('Volvo')
  const [finish, setFinish] = useState<'MatteBlack' | 'Chrome'>('Chrome')
  const [heavyDutyMoose, setHeavyDutyMoose] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

  const curRig = RIG_MODELS[selectedMake]
  const basePrice = curRig.price + (heavyDutyMoose ? 350 : 0) + (finish === 'Chrome' ? 100 : 0)
  const monthlyPay = Math.round(basePrice / 24)

  return (
    <div
      style={{
        background: '#0B0D17',
        color: '#EEF2F6',
        fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: isMobile ? '24px 16px 60px' : '40px 20px 90px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.4)', padding: '4px 12px', borderRadius: '99px', fontSize: '11px', color: '#C4B5FD', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>
              <Sparkles size={13} />
              <span>DRIVER VISUAL FITMENT BAY</span>
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0, color: '#FFF' }}>
              See Real Deer Guards On Your Semi Rig
            </h1>
            <p style={{ margin: '6px 0 0', color: '#94A3B8', fontSize: '14px' }}>
              Select your truck brand below to preview real installed photography, radar clearance specs, and direct factory pricing.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="tel:8005553337"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                color: '#CBD5E1',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 700,
              }}
            >
              <PhoneCall size={14} /> 1-800-555-DEER (Fitting Tech)
            </a>
          </div>
        </div>

        {/* Rig Make Selector Tabs */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '24px' }}>
          {Object.keys(RIG_MODELS).map((make) => {
            const isSelected = selectedMake === make
            return (
              <button
                key={make}
                onClick={() => setSelectedMake(make as keyof typeof RIG_MODELS)}
                style={{
                  padding: '12px 24px',
                  background: isSelected ? '#7C3AED' : '#151928',
                  color: isSelected ? '#FFF' : '#94A3B8',
                  border: isSelected ? '1px solid #A78BFA' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 16px rgba(124, 58, 237, 0.4)' : 'none',
                }}
              >
                <Truck size={16} />
                <span>{make}</span>
              </button>
            )
          })}
        </div>

        {/* Visualizer Workspace: Left Rig Stage Photo + Right Configuration Card */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.4fr) minmax(360px, 0.8fr)', gap: isMobile ? '20px' : '30px', alignItems: 'start' }}>
          
          {/* Main Rig Display Stage */}
          <div
            style={{
              background: '#111524',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '16px',
              padding: '24px',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            }}
          >
            {/* Top Stage Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#A78BFA', textTransform: 'uppercase' }}>
                  CERTIFIED OEM BOLT-ON FITMENT
                </span>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFF' }}>
                  {curRig.name} ({curRig.years})
                </div>
              </div>

              <span style={{ fontSize: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '4px 10px', borderRadius: '6px', fontWeight: 700 }}>
                ✓ Guaranteed Tow-Hook Fit
              </span>
            </div>

            {/* High-Res Truck Photo Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '420px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#070A12',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Image
                src={curRig.image}
                alt={`${selectedMake} truck with installed deer guard`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 800px"
                style={{ objectFit: 'cover' }}
              />

              {/* Hotspot 1: Radar Window */}
              <div
                onClick={() => setActiveHotspot(activeHotspot === 'radar' ? null : 'radar')}
                style={{
                  position: 'absolute',
                  top: '55%',
                  left: '42%',
                  cursor: 'pointer',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    background: '#7C3AED',
                    color: '#FFF',
                    padding: '6px 10px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 0 16px rgba(124, 58, 237, 0.8)',
                  }}
                >
                  <Crosshair size={13} />
                  <span>CAS Radar Window</span>
                </div>
              </div>

              {/* Hotspot 2: Hood Tilt Latch */}
              <div
                onClick={() => setActiveHotspot(activeHotspot === 'tilt' ? null : 'tilt')}
                style={{
                  position: 'absolute',
                  top: '72%',
                  left: '68%',
                  cursor: 'pointer',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    background: '#2563EB',
                    color: '#FFF',
                    padding: '6px 10px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 0 16px rgba(37, 99, 235, 0.8)',
                  }}
                >
                  <RotateCw size={13} />
                  <span>Quick-Cam Tilt</span>
                </div>
              </div>

              {/* Hotspot Details Popup */}
              {activeHotspot === 'radar' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #7C3AED',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    zIndex: 20,
                  }}
                >
                  <div style={{ fontWeight: 800, color: '#A78BFA', fontSize: '13px', marginBottom: '4px' }}>
                    COLLISION AVOIDANCE RADAR (CMS) COMPLIANCE
                  </div>
                  <div style={{ fontSize: '12px', color: '#E2E8F0' }}>
                    {curRig.casStatus}. Tested at 65 MPH highway speeds with Detroit Assurance, Volvo Active Driver Assist, and Bendix Wingman systems with 0 false alerts.
                  </div>
                </div>
              )}

              {activeHotspot === 'tilt' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(15, 23, 42, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #2563EB',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    zIndex: 20,
                  }}
                >
                  <div style={{ fontWeight: 800, color: '#60A5FA', fontSize: '13px', marginBottom: '4px' }}>
                    DUAL CAM-LATCH HOOD ACCESS
                  </div>
                  <div style={{ fontSize: '12px', color: '#E2E8F0' }}>
                    Allows a single driver to unlock two heavy-duty safety pins and tilt the deer guard forward 90 degrees for daily oil and pre-trip engine inspections.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Real Rig Specs Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: '12px',
                marginTop: '20px',
                background: '#151928',
                padding: '16px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>TUBING GAUGE</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
                  {curRig.tubeSpec}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>IMPACT TOLERANCE</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#10B981', marginTop: '2px' }}>
                  {curRig.impactCap}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>SYSTEM WEIGHT</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#CBD5E1', marginTop: '2px' }}>
                  {curRig.weight + (heavyDutyMoose ? 30 : 0)} lbs
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#94A3B8' }}>INSTALL TIME</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#A78BFA', marginTop: '2px' }}>
                  30 - 45 Mins (Bolt-On)
                </div>
              </div>
            </div>
          </div>

          {/* Right Configuration & Direct Buy Box */}
          <div
            style={{
              background: '#111524',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#A78BFA', textTransform: 'uppercase' }}>
                DIRECT FACTORY FITTER
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#FFF', margin: '4px 0 0' }}>
                {selectedMake} Guard Package
              </h2>
            </div>

            {/* Select Finish */}
            <div>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#CBD5E1', display: 'block', marginBottom: '8px' }}>
                FINISH & COATING:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  onClick={() => setFinish('Chrome')}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: finish === 'Chrome' ? 'rgba(139, 92, 246, 0.2)' : '#151928',
                    border: finish === 'Chrome' ? '2px solid #8B5CF6' : '1px solid rgba(255,255,255,0.08)',
                    color: '#FFF',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  <div>Mirror Stainless</div>
                  <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>Corrosion Free (+ $100)</div>
                </button>
                <button
                  onClick={() => setFinish('MatteBlack')}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: finish === 'MatteBlack' ? 'rgba(139, 92, 246, 0.2)' : '#151928',
                    border: finish === 'MatteBlack' ? '2px solid #8B5CF6' : '1px solid rgba(255,255,255,0.08)',
                    color: '#FFF',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textAlign: 'center',
                  }}
                >
                  <div>Textured Matte Black</div>
                  <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>High-Impact Powdercoat</div>
                </button>
              </div>
            </div>

            {/* Heavy-Duty Moose Option Toggle */}
            <div
              onClick={() => setHeavyDutyMoose(!heavyDutyMoose)}
              style={{
                background: heavyDutyMoose ? 'rgba(139, 92, 246, 0.15)' : '#151928',
                border: heavyDutyMoose ? '1px solid #8B5CF6' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFF' }}>
                  Upgrade to Heavy-Duty Moose Armor
                </div>
                <div style={{ fontSize: '11px', color: '#94A3B8' }}>
                  Extra crossbars + 3.5" reinforced tubular uprights (+ $350)
                </div>
              </div>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '4px',
                  background: heavyDutyMoose ? '#8B5CF6' : 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                }}
              >
                {heavyDutyMoose && <Check size={14} />}
              </div>
            </div>

            {/* Price & Affirm Breakdown */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '13px', color: '#94A3B8' }}>Driver Direct Price:</span>
                <span style={{ fontSize: '28px', fontWeight: 900, color: '#FFF' }}>
                  ${basePrice.toLocaleString()}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>
                  ✓ Brackets + Commercial Freight Included
                </span>
                <span style={{ fontSize: '12px', color: '#A78BFA', fontWeight: 700 }}>
                  or ${monthlyPay}/mo with Affirm
                </span>
              </div>
            </div>

            {/* Guarantees */}
            <div style={{ background: '#151928', borderRadius: '8px', padding: '12px', fontSize: '11px', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#10B981" /> 100% Fit Guarantee for your {selectedMake} model year
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#10B981" /> Ships directly to terminal or truckstop freight dock
              </div>
            </div>

            {/* Buy / Go to Shop */}
            <button
              onClick={onExploreShop}
              style={{
                width: '100%',
                padding: '16px',
                background: '#8B5CF6',
                color: '#FFF',
                fontWeight: 900,
                fontSize: '14px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.4)',
              }}
            >
              <span>CONFIGURE ACCESSORIES & ORDER ({selectedMake})</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
