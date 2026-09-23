'use client'

import React, { useState } from 'react'
import {
  TrendingUp,
  Truck,
  Building2,
  DollarSign,
  ShieldCheck,
  MapPin,
  ChevronRight,
  Calculator,
  FileSpreadsheet
} from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function FleetCommanderHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [fleetSize, setFleetSize] = useState<number>(25)
  const estimatedSavings = fleetSize * 4800 // average animal collision downtime cost saved per truck

  return (
    <div
      style={{
        background: '#081412',
        color: '#E2E8F0',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
        padding: '50px 24px 100px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Top Enterprise Command Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.25)', paddingBottom: '20px', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              FLEET COMMANDER B2B PROCUREMENT NETWORK // US DOT COMPLIANT
            </span>
          </div>

          <div style={{ fontSize: '12px', color: '#94A3B8' }}>
            Nationwide Depot Fulfillment: <strong style={{ color: '#10B981' }}>ONLINE (99.4% In-Stock)</strong>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '48px', alignItems: 'center', marginBottom: '60px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', marginBottom: '12px' }}>
              Commercial Fleet Asset Protection
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              ELIMINATE TOWING & <br />
              <span style={{ color: '#10B981' }}>COLLISION DOWNTIME.</span>
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#94A3B8', maxWidth: '560px', marginBottom: '32px' }}>
              The #1 standardized front-end protection program for national freight carriers. Guaranteed DOT clearance, CAS radar alignment, and Net-30 enterprise invoicing for fleets of 10 to 5,000+ power units.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button
                onClick={onExploreShop}
                style={{
                  padding: '14px 28px',
                  background: '#10B981',
                  color: '#062016',
                  fontWeight: 800,
                  fontSize: '13px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>OPEN B2B ORDER MATRIX</span>
                <ChevronRight size={16} />
              </button>

              <button
                style={{
                  padding: '14px 24px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10B981',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  fontWeight: 700,
                  fontSize: '13px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <FileSpreadsheet size={16} />
                <span>REQUEST BULK RFQ</span>
              </button>
            </div>

            {/* Enterprise KPIs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>UNITS IN SERVICE</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#FFF' }}>14,200+</div>
                <div style={{ fontSize: '11px', color: '#10B981' }}>Across 180+ Fleets</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>EST. DOWNTIME AVOIDED</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981' }}>$14.8M</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>2025 Calendar Year</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>REGIONAL DEPOTS</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#FFF' }}>5 Hubs</div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>Next-Day Freight</div>
              </div>
            </div>
          </div>

          {/* Interactive Fleet ROI Calculator Widget */}
          <div
            style={{
              background: '#0B1D1A',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px' }}>
              <Calculator size={18} />
              <span>FLEET LOSS PREVENTION CALCULATOR</span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                <span style={{ color: '#CBD5E1' }}>Active Power Units in Fleet:</span>
                <span style={{ fontWeight: 800, color: '#10B981', fontSize: '16px' }}>{fleetSize} Trucks</span>
              </div>
              <input
                type="range"
                min={5}
                max={200}
                step={5}
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748B', marginTop: '4px' }}>
                <span>5 Trucks</span>
                <span>50 Trucks</span>
                <span>100 Trucks</span>
                <span>200+ Trucks</span>
              </div>
            </div>

            <div style={{ background: '#05120F', padding: '20px', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>
                Estimated Annual Downtime Avoidance
              </div>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#10B981' }}>
                ${estimatedSavings.toLocaleString()}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px' }}>
                Based on ATA benchmark: $4,800 avg tow + radiator + 4.2 days lost freight per strike.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1' }}>
                <ShieldCheck size={16} color="#10B981" />
                <span>Tiered Volume Pricing: <strong>Up to 28% Enterprise Rebate</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1' }}>
                <Building2 size={16} color="#10B981" />
                <span>Direct Drop-Ship to Any Terminal or Maintenance Bay</span>
              </div>
            </div>

            <button
              onClick={onExploreShop}
              style={{
                width: '100%',
                padding: '14px',
                background: '#10B981',
                color: '#062016',
                fontWeight: 800,
                fontSize: '13px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ORDER FOR {fleetSize} TRUCKS WITH VOLUME DISCOUNT
            </button>
          </div>
        </div>

        {/* Depot Location Network */}
        <div style={{ background: '#0B1D1A', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '10px', padding: '24px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} />
            <span>NATIONWIDE DISTRIBUTION HUBS (READY FOR FREIGHT DISPATCH)</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { city: 'Dallas / Fort Worth, TX', stock: '142 Units', transit: 'Next Day South/Central' },
              { city: 'Chicago, IL', stock: '210 Units', transit: 'Next Day Midwest' },
              { city: 'Atlanta, GA', stock: '128 Units', transit: 'Next Day Southeast' },
              { city: 'Reno, NV', stock: '96 Units', transit: 'Next Day West Coast' },
              { city: 'Scranton, PA', stock: '115 Units', transit: 'Next Day Northeast' },
            ].map((hub) => (
              <div key={hub.city} style={{ background: '#05120F', padding: '14px', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                <div style={{ fontWeight: 700, fontSize: '13px', color: '#FFF', marginBottom: '4px' }}>{hub.city}</div>
                <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>In-Stock: {hub.stock}</div>
                <div style={{ fontSize: '10px', color: '#64748B' }}>{hub.transit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
