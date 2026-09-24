'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, BookOpen, Quote, Shield, Check, Star, ShoppingCart, PhoneCall } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'
import { useDemoViewport } from '../DemoViewportContext'

export default function SplitStoryboardHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [activeChapter, setActiveChapter] = useState<number>(0)
  const { isMobile } = useDemoViewport()

  const chapters = [
    {
      index: '01',
      title: 'The 2:00 AM Hazard on I-80',
      subtitle: 'Verified Cascadia Deer Strike',
      text: 'Westbound on I-80 outside Cheyenne. A 280-lb buck jumped across the median at 68 MPH. The guard deflected the body downward away from the radiator stack, intercooler, and windshield. Zero fluid leaks, zero tow bill.',
      visualQuote: 'Hit at 68 MPH. Inspected at the next TA truck stop—zero frame twist, cooling stack untouched. Kept rolling to Salt Lake City on time.',
      driver: 'Dave M. — Independent Owner-Operator (Freightliner Cascadia)',
      image: '/images/guards/guard-cascadia.jpg',
      highlight: 'ZERO RADIATOR DAMAGE',
    },
    {
      index: '02',
      title: 'The Sub-Zero Moose Test',
      subtitle: '1,300 lb Strike on Alaska Highway',
      text: 'In whiteout conditions north of Fort Nelson, an 1,200 lb bull moose collided with our high-clearance moose guard. Mandrel-bent high-tensile steel absorbed 28,000 lbs of dynamic kinetic load, saving an estimated $24,000 engine overhaul.',
      visualQuote: 'Sub-zero temperatures make brittle metal snap. This guard held solid and saved my entire winter freight season.',
      driver: 'Stanislaw K. — Cross-Border Heavy Haul (Volvo VNL 860)',
      image: '/images/guards/guard-winter-moose.jpg',
      highlight: '30,000 LB IMPACT ABSORBED',
    },
    {
      index: '03',
      title: 'The 15-Second Pre-Trip Tilt',
      subtitle: 'Effortless Daily Hood Inspection',
      text: 'Drivers hate guards that make checking oil dipsticks an ordeal. Our dual spring-loaded stainless steel locking pins let a single driver tilt the entire guard forward 90 degrees in fifteen seconds with one hand.',
      visualQuote: 'Pull two pins, tilt forward, pop the hood. No heavy lifting, no tools needed at 5 AM.',
      driver: 'Marcus T. — Peterbilt 389 Long Haul Driver',
      image: '/images/guards/guard-peterbilt-389.jpg',
      highlight: 'ONE-MAN 90° TILT',
    },
    {
      index: '04',
      title: 'Zero Downtime Guarantee',
      subtitle: 'Back on Freight Schedule by Sunrise',
      text: 'A strike that leaves other rigs waiting 3 to 6 weeks for backordered factory hoods and radiators is nothing more than a thud and a pre-trip check for you. Protect your investment, your freight schedule, and your family income.',
      visualQuote: 'Paid for itself the very first night. My dispatcher could not believe I made the delivery on time.',
      driver: 'Elena R. — 3-Truck Fleet Owner (Kenworth T680)',
      image: '/images/guards/guard-kenworth-t680.jpg',
      highlight: 'MILLION-MILE PEACE OF MIND',
    },
  ]

  const current = chapters[activeChapter]

  return (
    <div
      style={{
        background: '#0B0912',
        color: '#F3E8FF',
        fontFamily: '"Epilogue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        minHeight: '100vh',
      }}
    >
      {/* 50/50 Split Grid Container */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.05fr) minmax(0, 0.95fr)', minHeight: isMobile ? 'auto' : '100vh' }}>
        
        {/* Left Sticky Cinematic Visual & Scrubber Pane */}
        <div
          style={{
            position: isMobile ? 'relative' : 'sticky',
            top: 0,
            height: isMobile ? 'auto' : '100vh',
            background: 'linear-gradient(135deg, #180D28 0%, #0B0912 100%)',
            borderRight: isMobile ? 'none' : '1px solid rgba(236, 72, 153, 0.25)',
            borderBottom: isMobile ? '1px solid rgba(236, 72, 153, 0.25)' : 'none',
            padding: isMobile ? '28px 16px' : '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: isMobile ? 'visible' : 'auto',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EC4899', fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                <BookOpen size={15} />
                <span>FIELD STRIKE DOCUMENTARY</span>
              </div>
              <span style={{ fontSize: '12px', color: '#C084FC', fontWeight: 700 }}>
                STORY {current.index} OF 04
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, margin: '0 0 16px 0' }}>
              {current.title}
            </h2>

            <div style={{ display: 'inline-block', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid #EC4899', color: '#EC4899', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px' }}>
              {current.highlight}
            </div>

            {/* Real Truck Image for Current Story */}
            <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(236, 72, 153, 0.3)', marginBottom: '20px', background: '#050308' }}>
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 550px"
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.8)', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', color: '#F3E8FF', fontWeight: 700 }}>
                {current.subtitle}
              </div>
            </div>

            {/* Pull-Quote Box */}
            <div style={{ background: 'rgba(0,0,0,0.45)', borderLeft: '4px solid #EC4899', padding: '16px 20px', borderRadius: '4px', marginBottom: '20px' }}>
              <Quote size={20} color="#EC4899" style={{ marginBottom: '6px' }} />
              <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#FAF5FF', lineHeight: 1.5, margin: '0 0 8px' }}>
                "{current.visualQuote}"
              </p>
              <div style={{ fontSize: '12px', color: '#C084FC', fontWeight: 700 }}>
                — {current.driver}
              </div>
            </div>
          </div>

          {/* Scrubber Navigation Buttons */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {chapters.map((ch, idx) => (
                <button
                  key={ch.index}
                  onClick={() => setActiveChapter(idx)}
                  style={{
                    flex: 1,
                    height: '6px',
                    borderRadius: '3px',
                    background: activeChapter === idx ? '#EC4899' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  title={`Story ${ch.index}`}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#A855F7' }}>
                Click story bars to inspect field proof
              </span>
              <button
                onClick={onExploreShop}
                style={{
                  background: '#EC4899',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontWeight: 800,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 14px rgba(236, 72, 153, 0.4)',
                }}
              >
                <span>SHOP VERIFIED GUARDS</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Scrollable Product Catalog & Testimonials */}
        <div style={{ padding: isMobile ? '32px 16px 60px' : '60px 40px 100px', overflowY: 'auto' }}>
          <div style={{ maxWidth: '580px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#EC4899', marginBottom: '8px', fontWeight: 800 }}>
              VERIFIED DRIVER E-COMMERCE
            </div>
            <h1 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '16px' }}>
              Equip Your Rig Before The Next Trip
            </h1>

            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#D8B4FE', marginBottom: '28px' }}>
              Every deer guard below is built from mandrel-bent structural tubing with pre-welded mounting brackets that bolt straight to your truck's tow hook sockets.
            </p>

            {/* Direct Product Cards with REAL IMAGES */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {DEMO_PRODUCTS.slice(0, 4).map((prod) => (
                <div
                  key={prod.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(236, 72, 153, 0.25)',
                    borderRadius: '12px',
                    padding: isMobile ? '16px' : '20px',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '140px minmax(0, 1fr)',
                    gap: isMobile ? '12px' : '20px',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', background: '#050308' }}>
                    <Image src={prod.image} alt={prod.name} fill sizes="140px" style={{ objectFit: 'cover' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#EC4899', textTransform: 'uppercase' }}>
                        {prod.truck} {prod.model}
                      </div>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#FFF', margin: '2px 0 4px' }}>
                        {prod.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#FBBF24', marginBottom: '8px' }}>
                        <Star size={13} fill="#FBBF24" />
                        <Star size={13} fill="#FBBF24" />
                        <Star size={13} fill="#FBBF24" />
                        <Star size={13} fill="#FBBF24" />
                        <Star size={13} fill="#FBBF24" />
                        <span style={{ color: '#D8B4FE', marginLeft: '4px' }}>({prod.reviewCount} driver reviews)</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px' }}>
                      <div>
                        <div style={{ fontSize: '18px', fontWeight: 900, color: '#FFF' }}>${prod.price.toLocaleString()}</div>
                        <div style={{ fontSize: '11px', color: '#C084FC' }}>or ${prod.affirmMonthly}/mo Affirm</div>
                      </div>

                      <button
                        onClick={onExploreShop}
                        style={{
                          background: '#EC4899',
                          color: '#FFF',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          fontWeight: 800,
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <ShoppingCart size={13} />
                        <span>BUY GUARD</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
