'use client'

import React, { useState } from 'react'
import { ArrowRight, BookOpen, Quote, Shield, Check } from 'lucide-react'
import { DEMO_PRODUCTS } from '../demoData'

export default function SplitStoryboardHome({ onExploreShop }: { onExploreShop?: () => void }) {
  const [activeChapter, setActiveChapter] = useState<number>(0)

  const chapters = [
    {
      index: '01',
      title: 'The 2:00 AM Hazard',
      subtitle: '55,000 Big-Rig Animal Collisions Annually',
      text: 'You are westbound on I-80 through Nebraska. Out of the darkness, a 300-pound buck freezes in your high beams. Without a heavy guard, the impact folds your bumper into the CAC intercooler, shears oil lines, and totals $15,000 in engine components before your air brakes even lock.',
      visualQuote: 'The collision was instantaneous. But our cooling stack never touched the fan blade.',
      highlight: 'ZERO TOWING NEEDED',
    },
    {
      index: '02',
      title: 'The Cold-Drawn Steel',
      subtitle: 'High-Tensile Metallurgy That Dissipates G-Forces',
      text: 'Unlike cheap welded tubing that fractures under shock load, our seamless carbon tubing undergoes progressive mandrel bending. The force of the strike is channeled downward into the reinforced chassis rail sockets rather than punching through your hood.',
      visualQuote: 'High-yield ASTM A500 alloy absorbs 18,500 Joules without fatigue.',
      highlight: 'FRAME REINFORCED',
    },
    {
      index: '03',
      title: 'The 12-Second Quick Tilt',
      subtitle: 'Effortless Daily Pre-Trip Inspections',
      text: 'Drivers hate guards that make checking oil dipsticks an ordeal. Our dual spring-loaded stainless steel locking pins let a single driver tilt the entire guard forward 90 degrees in twelve seconds without breaking a sweat.',
      visualQuote: 'Pull two pins, tilt forward, pop the hood. That simple.',
      highlight: 'NO TOOLS REQUIRED',
    },
    {
      index: '04',
      title: 'The Open Highway Ahead',
      subtitle: 'Back On The Freight Lane By Sunrise',
      text: 'A strike that leaves other rigs waiting 3 weeks for backordered factory hoods and radiators is nothing more than a thud and a pre-trip check for you. Protect your investment, your freight schedule, and your family income.',
      visualQuote: '3-year unlimited mileage warranty on structural integrity.',
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
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', minHeight: '100vh' }}>
        {/* Left Sticky Cinematic Visual & Scrubber Pane */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            background: 'linear-gradient(135deg, #1A102E 0%, #0B0912 100%)',
            borderRight: '1px solid rgba(236, 72, 153, 0.2)',
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EC4899', fontSize: '12px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
              <BookOpen size={16} />
              <span>THE SURVIVAL STORYBOARD</span>
            </div>

            <div style={{ fontSize: '14px', color: '#C084FC', fontWeight: 700, marginBottom: '8px' }}>
              CHAPTER {current.index} OF 04
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, margin: '0 0 20px 0' }}>
              {current.title}
            </h2>

            <div style={{ display: 'inline-block', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid #EC4899', color: '#EC4899', padding: '6px 14px', borderRadius: '4px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '32px' }}>
              {current.highlight}
            </div>

            {/* Cinematic Pull-Quote Box */}
            <div style={{ background: 'rgba(0,0,0,0.4)', borderLeft: '4px solid #EC4899', padding: '24px', borderRadius: '4px' }}>
              <Quote size={24} color="#EC4899" style={{ marginBottom: '8px' }} />
              <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#FAF5FF', lineHeight: 1.6, margin: 0 }}>
                "{current.visualQuote}"
              </p>
            </div>
          </div>

          {/* Scrubber Navigation Buttons */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              {chapters.map((ch, idx) => (
                <button
                  key={ch.index}
                  onClick={() => setActiveChapter(idx)}
                  style={{
                    flex: 1,
                    height: '4px',
                    background: activeChapter === idx ? '#EC4899' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  title={`Chapter ${ch.index}`}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#A855F7' }}>
                Tap chapters above to scrub story
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
                }}
              >
                <span>Shop The Rigs</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Scrollable Story Body */}
        <div style={{ padding: '80px 48px 120px', overflowY: 'auto' }}>
          <div style={{ maxWidth: '540px' }}>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#EC4899', marginBottom: '12px' }}>
              Documentary Narrative
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '24px' }}>
              The Anatomy of an Interstate Strike
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#D8B4FE', marginBottom: '40px' }}>
              Every long-haul driver remembers the night their route was interrupted. Explore the four engineering chapters that turn a catastrophic multi-week breakdown into a minor bump in the road.
            </p>

            {/* Chapter Details Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {chapters.map((ch, idx) => (
                <div
                  key={ch.index}
                  onClick={() => setActiveChapter(idx)}
                  style={{
                    padding: '28px',
                    borderRadius: '12px',
                    background: activeChapter === idx ? 'rgba(236, 72, 153, 0.08)' : 'rgba(255,255,255,0.02)',
                    border: activeChapter === idx ? '1px solid rgba(236, 72, 153, 0.4)' : '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#EC4899' }}>CHAPTER {ch.index}</span>
                    <span style={{ fontSize: '12px', color: '#9333EA', fontWeight: 700 }}>{ch.subtitle}</span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 12px 0' }}>
                    {ch.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#C084FC', margin: 0 }}>
                    {ch.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
