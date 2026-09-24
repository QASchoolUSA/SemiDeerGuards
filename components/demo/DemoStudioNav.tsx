'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Monitor,
  Smartphone,
  Columns,
  Layers,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Info,
  Home,
  ShoppingBag,
  Sparkles,
  ExternalLink,
  QrCode,
} from 'lucide-react'
import { ARCHETYPES } from './demoData'
import MobileQrModal from './MobileQrModal'

export type ViewportMode = 'desktop' | 'mobile' | 'side-by-side'

interface DemoStudioNavProps {
  currentOption: number
  setCurrentOption: (id: number) => void
  viewMode: 'home' | 'shop'
  setViewMode: (mode: 'home' | 'shop') => void
  viewport: ViewportMode
  setViewport: (vp: ViewportMode) => void
  isFullscreen: boolean
  setIsFullscreen: (fs: boolean) => void
  isInfoOpen: boolean
  setIsInfoOpen: (open: boolean) => void
}

export default function DemoStudioNav({
  currentOption,
  setCurrentOption,
  viewMode,
  setViewMode,
  viewport,
  setViewport,
  isFullscreen,
  setIsFullscreen,
  isInfoOpen,
  setIsInfoOpen,
}: DemoStudioNavProps) {
  const [isQrOpen, setIsQrOpen] = useState(false)
  const activeArchetype = ARCHETYPES.find((a) => a.id === currentOption) || ARCHETYPES[0]

  const handlePrev = () => {
    setCurrentOption(currentOption === 1 ? ARCHETYPES.length : currentOption - 1)
  }

  const handleNext = () => {
    setCurrentOption(currentOption === ARCHETYPES.length ? 1 : currentOption + 1)
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        background: 'rgba(6, 10, 18, 0.94)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#EEF2F7',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
      aria-label="Demo Studio Navigation"
    >
      {/* Top Primary Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Studio Branding & Active Option Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 12px',
              background: 'linear-gradient(135deg, rgba(74,158,255,0.18), rgba(139,92,246,0.18))',
              borderRadius: '8px',
              border: '1px solid rgba(74,158,255,0.3)',
            }}
          >
            <Sparkles size={16} color="#4A9EFF" />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, #60A5FA, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Demo Studio
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={handlePrev}
              title="Previous design option (ArrowLeft)"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#CBD5E1',
                borderRadius: '6px',
                padding: '5px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.15s ease',
              }}
            >
              <ChevronLeft size={16} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: activeArchetype.accentColor,
                  boxShadow: `0 0 8px ${activeArchetype.accentColor}`,
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#F8FAFC' }}>
                #{activeArchetype.id.toString().padStart(2, '0')} {activeArchetype.name}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                {activeArchetype.category}
              </span>
            </div>

            <button
              onClick={handleNext}
              title="Next design option (ArrowRight)"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#CBD5E1',
                borderRadius: '6px',
                padding: '5px 8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.15s ease',
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Center: PROMINENT DEVICE MODE SWITCHER (Desktop vs. Mobile vs. Side-by-Side) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Device Segmented Control */}
          <div
            style={{
              display: 'flex',
              background: 'rgba(15, 23, 42, 0.95)',
              padding: '3px',
              borderRadius: '10px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
            }}
          >
            <button
              onClick={() => setViewport('desktop')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.15s ease',
                background: viewport === 'desktop' ? '#2563EB' : 'transparent',
                color: viewport === 'desktop' ? '#FFFFFF' : '#94A3B8',
              }}
            >
              <Monitor size={14} />
              <span>Desktop View</span>
            </button>

            <button
              onClick={() => setViewport('mobile')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.15s ease',
                background: viewport === 'mobile' ? '#0284C7' : 'transparent',
                color: viewport === 'mobile' ? '#FFFFFF' : '#94A3B8',
              }}
            >
              <Smartphone size={14} />
              <span>Mobile Phone View</span>
            </button>

            <button
              onClick={() => setViewport('side-by-side')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.15s ease',
                background: viewport === 'side-by-side' ? '#7C3AED' : 'transparent',
                color: viewport === 'side-by-side' ? '#FFFFFF' : '#94A3B8',
              }}
            >
              <Columns size={14} />
              <span>Desktop + Mobile Side-by-Side</span>
            </button>
          </div>

          {/* Test on Physical Phone Modal trigger */}
          <button
            onClick={() => setIsQrOpen(true)}
            title="Scan QR to open on your phone or launch popup"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              color: '#38BDF8',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <QrCode size={14} />
            <span>QR / Phone Pop-up</span>
          </button>
        </div>

        {/* Right: Page Mode (Home/Shop) & Utility Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Home vs. Shop Toggle */}
          <div
            style={{
              display: 'flex',
              background: 'rgba(15, 23, 42, 0.9)',
              padding: '3px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <button
              onClick={() => setViewMode('home')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease',
                background: viewMode === 'home' ? activeArchetype.accentColor : 'transparent',
                color: viewMode === 'home' ? '#060A12' : '#94A3B8',
              }}
            >
              <Home size={14} />
              <span>Homepage</span>
            </button>

            <button
              onClick={() => setViewMode('shop')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.2s ease',
                background: viewMode === 'shop' ? activeArchetype.accentColor : 'transparent',
                color: viewMode === 'shop' ? '#060A12' : '#94A3B8',
              }}
            >
              <ShoppingBag size={14} />
              <span>Shop</span>
            </button>
          </div>

          {/* Design Specs Drawer Toggle */}
          <button
            onClick={() => setIsInfoOpen(!isInfoOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: isInfoOpen ? 'rgba(74,158,255,0.2)' : 'rgba(255,255,255,0.06)',
              border: isInfoOpen ? '1px solid #4A9EFF' : '1px solid rgba(255,255,255,0.1)',
              color: isInfoOpen ? '#60A5FA' : '#CBD5E1',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Info size={14} />
            <span>Design Specs</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Canvas'}
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#CBD5E1',
              borderRadius: '8px',
              padding: '6px 10px',
              cursor: 'pointer',
            }}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>

          {/* Exit / Back to Production Site */}
          <Link
            href="/"
            title="Go to Live Production Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#94A3B8',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            }}
          >
            <span>Live Site</span>
            <ExternalLink size={12} />
          </Link>
        </div>
      </div>

      {/* Bottom Option Pill Carousel (All 12 Archetypes) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 20px 10px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            color: '#64748B',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            marginRight: '4px',
          }}
        >
          Options (12):
        </span>

        {ARCHETYPES.map((arch) => {
          const isSelected = arch.id === currentOption
          return (
            <button
              key={arch.id}
              onClick={() => setCurrentOption(arch.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: isSelected ? 700 : 500,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                background: isSelected
                  ? `linear-gradient(135deg, ${arch.accentColor}26, ${arch.accentColor}10)`
                  : 'rgba(255,255,255,0.03)',
                color: isSelected ? '#FFFFFF' : '#94A3B8',
                border: isSelected
                  ? `1px solid ${arch.accentColor}`
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: isSelected ? `0 0 14px ${arch.accentColor}33` : 'none',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  fontSize: '10px',
                  fontWeight: 800,
                  background: isSelected ? arch.accentColor : 'rgba(255,255,255,0.1)',
                  color: isSelected ? '#000000' : '#CBD5E1',
                }}
              >
                {arch.id}
              </span>
              <span>{arch.name}</span>
            </button>
          )
        })}
      </div>

      {/* QR Code / Phone Pop-up Modal */}
      <MobileQrModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        currentOption={currentOption}
        viewMode={viewMode}
      />
    </header>
  )
}
