'use client'

import React from 'react'
import { Award, Shield, PhoneCall, Star, ChevronRight } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function HeritageAmericanaHome({ onExploreShop }: { onExploreShop?: () => void }) {
  return (
    <div
      style={{
        background: '#140E0A',
        color: '#FDE68A',
        fontFamily: '"Cinzel", "Playfair Display", Georgia, serif',
        minHeight: '100vh',
        padding: '60px 24px 100px',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Heritage Top Seal Bar */}
        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(217, 119, 6, 0.3)', paddingBottom: '24px', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#D97706', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
            <Award size={16} />
            <span>AUTHENTIC AMERICAN HEAVY HAULER GUARDS // EST. 1978</span>
          </div>
          <div style={{ fontSize: '11px', color: '#B45309', letterSpacing: '0.1em' }}>
            FORGED IN CANTON, OHIO FROM DOMESTIC STRUCTURAL STEEL
          </div>
        </div>

        {/* Hero Banner */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 80px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#FFFBEB',
              letterSpacing: '-0.01em',
              marginBottom: '24px',
            }}
          >
            HAND-CRAFTED STEEL. <br />
            <span style={{ color: '#D97706' }}>UNBREAKABLE HERITAGE.</span>
          </h1>

          <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#D1A374', fontFamily: 'Georgia, serif', fontStyle: 'italic', marginBottom: '40px' }}>
            "Through forty Montana blizzards and two million miles of open asphalt, a real trucker knows there is no substitute for mirror-polished American steel."
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={onExploreShop}
              style={{
                padding: '16px 36px',
                background: 'linear-gradient(135deg, #D97706, #B45309)',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid #F59E0B',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(217, 119, 6, 0.4)',
              }}
            >
              Browse The Heritage Catalog
            </button>

            <button
              style={{
                padding: '16px 28px',
                background: 'rgba(217, 119, 6, 0.1)',
                color: '#FDE68A',
                border: '1px solid rgba(217, 119, 6, 0.4)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <PhoneCall size={16} />
              <span>Talk To Factory Dispatch</span>
            </button>
          </div>
        </div>

        {/* Heritage Testimonial & Guarantee Box */}
        <div
          style={{
            background: '#1E150F',
            border: '2px solid #D97706',
            padding: '36px',
            marginBottom: '80px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            <div>
              <div style={{ color: '#D97706', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                Handcrafted Guarantee
              </div>
              <p style={{ fontSize: '14px', color: '#E2D3B8', lineHeight: 1.6, margin: 0, fontFamily: 'Georgia, serif' }}>
                Every guard is stamped with its serial number and signed by the master fabricator before dipping into our triple-nickel chrome baths.
              </p>
            </div>
            <div>
              <div style={{ color: '#D97706', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                The Million-Mile Test
              </div>
              <p style={{ fontSize: '14px', color: '#E2D3B8', lineHeight: 1.6, margin: 0, fontFamily: 'Georgia, serif' }}>
                Tested on W900 and 389 Peterbilts pulling triple trailers across Wyoming pass. Zero frame twist, zero radiator damage.
              </p>
            </div>
            <div>
              <div style={{ color: '#D97706', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                Lifetime Weld Warranty
              </div>
              <p style={{ fontSize: '14px', color: '#E2D3B8', lineHeight: 1.6, margin: 0, fontFamily: 'Georgia, serif' }}>
                If any joint fails under normal highway service, we rebuild or replace the entire assembly at zero cost to you.
              </p>
            </div>
          </div>
        </div>

        {/* Classical Product Showcase */}
        <div>
          <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#FFFBEB', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '40px' }}>
            Traditional Heavy Haul Assemblies
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {DEMO_PRODUCTS.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#1A120D',
                  border: '1px solid rgba(217, 119, 6, 0.4)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '11px', color: '#D97706', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {prod.truck} Legacy Series
                </div>
                <h3 style={{ fontSize: '20px', color: '#FFFBEB', margin: 0 }}>
                  {prod.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#D1A374', fontFamily: 'Georgia, serif', margin: 0 }}>
                  Custom engineered for {prod.model}
                </p>

                <div style={{ borderTop: '1px solid rgba(217, 119, 6, 0.2)', paddingTop: '16px', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '22px', fontWeight: 700, color: '#D97706' }}>
                    ${prod.price.toLocaleString()}
                  </span>
                  <button
                    onClick={onExploreShop}
                    style={{
                      background: 'none',
                      border: '1px solid #D97706',
                      color: '#FDE68A',
                      padding: '8px 16px',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    View Specs
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
