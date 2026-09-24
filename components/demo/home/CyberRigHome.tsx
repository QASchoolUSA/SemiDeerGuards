'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  Radio,
  Wifi,
  Zap,
  Shield,
  ChevronRight,
  Activity,
  CheckCircle2,
  PhoneCall,
  Clock,
  ArrowRight,
  ShoppingCart,
  Sparkles,
  AlertTriangle,
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function CyberRigHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const { isMobile } = useDemoViewport()
  const [selectedTruck, setSelectedTruck] = useState<string>('all')

  const radarGuards = DEMO_PRODUCTS.filter((p) => p.radarCompliant)
  const displayGuards = selectedTruck === 'all' 
    ? radarGuards 
    : radarGuards.filter((p) => p.truck.toLowerCase().includes(selectedTruck))

  return (
    <div
      style={{
        background: '#040711',
        color: '#E0F2FE',
        fontFamily: '"Space Grotesk", "Rajdhani", sans-serif',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '20px 14px 60px' : '36px 20px 90px',
      }}
    >
      {/* Background Neon Vector Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(0, 240, 255, 0.08) 0%, transparent 70%),
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 50px 50px, 50px 50px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Cyber Driver Hotline Banner */}
        <div
          style={{
            background: 'rgba(0, 240, 255, 0.06)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '10px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: '#00F0FF', color: '#040711', fontSize: '10px', fontWeight: 900, padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>
              OEM RADAR CERTIFIED
            </span>
            <span style={{ fontSize: '13px', color: '#BAE6FD' }}>
              Guaranteed Zero False-Braking Triggers on Detroit Assurance 5.0, Volvo VADA & Bendix Wingman Fusion
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px' }}>
            <span style={{ color: '#22C55E', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> Ready to Ship
            </span>
            <a href="tel:8005553337" style={{ color: '#00F0FF', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={14} /> 1-800-555-DEER
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: isMobile ? '24px' : '48px', alignItems: 'center', marginBottom: '56px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#00F0FF', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
              NEXT-GEN TRUCKER COLLISION SAFETY
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)', fontWeight: 900, lineHeight: 1.05, color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 20px' }}>
              RADAR-SAFE DEER GUARDS. <br />
              <span style={{ color: '#00F0FF', textShadow: '0 0 25px rgba(0, 240, 255, 0.4)' }}>
                ZERO PHANTOM BRAKING.
              </span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#94A3B8', maxWidth: '580px', marginBottom: '32px' }}>
              Cheap guards block your truck's forward radar sensor, triggering dangerous sudden phantom braking at 65 MPH. Our CAD-engineered guards feature laser-tuned pass-through apertures so your ADAS and collision avoidance stay 100% operational.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '16px 32px',
                  background: '#00F0FF',
                  color: '#040711',
                  fontWeight: 900,
                  fontSize: '14px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.4)',
                }}
              >
                <span>SHOP RADAR-COMPLIANT GUARDS</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Radar Telemetry Specs */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid rgba(0, 240, 255, 0.2)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase' }}>RADAR PASS-THROUGH</div>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#00F0FF' }}>99.8%</div>
                <div style={{ fontSize: '11px', color: '#94A3B8' }}>76–81 GHz verified</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase' }}>IMPACT RATING</div>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#FFF' }}>18,500 LBS</div>
                <div style={{ fontSize: '11px', color: '#94A3B8' }}>Dynamic highway hit</div>
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase' }}>FALSE ALERTS</div>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#22C55E' }}>0.00%</div>
                <div style={{ fontSize: '11px', color: '#94A3B8' }}>Guaranteed no codes</div>
              </div>
            </div>
          </div>

          {/* Featured Radar Guard Showcase Image */}
          <div
            style={{
              background: '#0A0F1F',
              border: '1px solid #00F0FF',
              borderRadius: '16px',
              padding: '20px',
              position: 'relative',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.15)',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '10px', overflow: 'hidden', background: '#020408' }}>
              <Image
                src="/images/guards/guard-freightliner-cascadia.jpg"
                alt="Freightliner Cascadia with Radar-Safe Deer Guard"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(4, 7, 17, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#00F0FF' }}>HOTTEST SELLER // CASCADIA 126</div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFF' }}>Cascadia Radar Shield Elite</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: 900, color: '#00F0FF' }}>$2,099</div>
                  <div style={{ fontSize: '11px', color: '#94A3B8' }}>or $88/mo Affirm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Truck Make Quick Filters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#FFF', margin: 0 }}>
              Certified Radar-Safe Guards Ready to Ship
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#94A3B8' }}>
              Each unit includes factory laser-cut radar windows & vehicle-specific mounting brackets.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'all', label: 'All Rigs' },
              { id: 'freightliner', label: 'Cascadia' },
              { id: 'volvo', label: 'Volvo VNL' },
              { id: 'kenworth', label: 'Kenworth T680' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedTruck(btn.id)}
                style={{
                  padding: '8px 14px',
                  background: selectedTruck === btn.id ? '#00F0FF' : 'rgba(255,255,255,0.06)',
                  color: selectedTruck === btn.id ? '#040711' : '#CBD5E1',
                  border: selectedTruck === btn.id ? '1px solid #00F0FF' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with REAL IMAGES */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {displayGuards.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: '#090D1C',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '190px', background: '#020408' }}>
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
                    background: 'rgba(0, 240, 255, 0.9)',
                    color: '#040711',
                    fontSize: '10px',
                    fontWeight: 900,
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}
                >
                  ✓ 100% RADAR COMPLIANT
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#00F0FF', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {prod.truck} {prod.model}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: '0 0 8px' }}>
                    {prod.name}
                  </h3>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '14px', lineHeight: 1.5 }}>
                    {prod.tubeDiameter} schedule 40 steel • {prod.material} • Hood-tilt latch included.
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontSize: '22px', fontWeight: 900, color: '#FFF' }}>
                        ${prod.price.toLocaleString()}
                      </div>
                      <div style={{ fontSize: '11px', color: '#00F0FF' }}>
                        or ${prod.affirmMonthly}/mo with Affirm
                      </div>
                    </div>
                    <span style={{ fontSize: '11px', color: '#22C55E', fontWeight: 700 }}>
                      ✓ Free Freight
                    </span>
                  </div>

                  <button
                    onClick={onExploreShop}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(0, 240, 255, 0.12)',
                      border: '1px solid #00F0FF',
                      color: '#00F0FF',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <ShoppingCart size={15} />
                    <span>VIEW SPECS & BUY NOW</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
