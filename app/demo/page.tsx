'use client'

import React, { useState, useEffect } from 'react'
import DemoStudioNav from '@/components/demo/DemoStudioNav'
import DesignSpecsDrawer from '@/components/demo/DesignSpecsDrawer'
import { ARCHETYPES } from '@/components/demo/demoData'

// The 12 Distinct Homepage Components
import BlueprintHome from '@/components/demo/home/BlueprintHome'
import TacticalBajaHome from '@/components/demo/home/TacticalBajaHome'
import NordicMinimalHome from '@/components/demo/home/NordicMinimalHome'
import FleetCommanderHome from '@/components/demo/home/FleetCommanderHome'
import Configurator3DHome from '@/components/demo/home/Configurator3DHome'
import CyberRigHome from '@/components/demo/home/CyberRigHome'
import HeritageAmericanaHome from '@/components/demo/home/HeritageAmericanaHome'
import BrutalistWarehouseHome from '@/components/demo/home/BrutalistWarehouseHome'
import SplitStoryboardHome from '@/components/demo/home/SplitStoryboardHome'
import CrashLabHome from '@/components/demo/home/CrashLabHome'
import StealthBlackoutHome from '@/components/demo/home/StealthBlackoutHome'
import SpeedTerminalHome from '@/components/demo/home/SpeedTerminalHome'

// The 12 Distinct Shop Components
import BlueprintShop from '@/components/demo/shop/BlueprintShop'
import TacticalBajaShop from '@/components/demo/shop/TacticalBajaShop'
import NordicMinimalShop from '@/components/demo/shop/NordicMinimalShop'
import FleetCommanderShop from '@/components/demo/shop/FleetCommanderShop'
import Configurator3DShop from '@/components/demo/shop/Configurator3DShop'
import CyberRigShop from '@/components/demo/shop/CyberRigShop'
import HeritageAmericanaShop from '@/components/demo/shop/HeritageAmericanaShop'
import BrutalistWarehouseShop from '@/components/demo/shop/BrutalistWarehouseShop'
import SplitStoryboardShop from '@/components/demo/shop/SplitStoryboardShop'
import CrashLabShop from '@/components/demo/shop/CrashLabShop'
import StealthBlackoutShop from '@/components/demo/shop/StealthBlackoutShop'
import SpeedTerminalShop from '@/components/demo/shop/SpeedTerminalShop'

export default function DemoPage() {
  const [currentOption, setCurrentOption] = useState<number>(1)
  const [viewMode, setViewMode] = useState<'home' | 'shop'>('home')
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false)

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return

      if (e.key === 'ArrowRight') {
        setCurrentOption((prev) => (prev === ARCHETYPES.length ? 1 : prev + 1))
      } else if (e.key === 'ArrowLeft') {
        setCurrentOption((prev) => (prev === 1 ? ARCHETYPES.length : prev - 1))
      } else if (e.key.toLowerCase() === 'h') {
        setViewMode('home')
      } else if (e.key.toLowerCase() === 's') {
        setViewMode('shop')
      } else if (e.key.toLowerCase() === 'f') {
        setIsFullscreen((prev) => !prev)
      } else if (e.key.toLowerCase() === 'i') {
        setIsInfoOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const activeArchetype = ARCHETYPES.find((a) => a.id === currentOption) || ARCHETYPES[0]

  // Render active design view
  const renderDesign = () => {
    const onExploreShop = () => setViewMode('shop')

    if (viewMode === 'home') {
      switch (currentOption) {
        case 1: return <BlueprintHome onExploreShop={onExploreShop} />
        case 2: return <TacticalBajaHome onExploreShop={onExploreShop} />
        case 3: return <NordicMinimalHome onExploreShop={onExploreShop} />
        case 4: return <FleetCommanderHome onExploreShop={onExploreShop} />
        case 5: return <Configurator3DHome onExploreShop={onExploreShop} />
        case 6: return <CyberRigHome onExploreShop={onExploreShop} />
        case 7: return <HeritageAmericanaHome onExploreShop={onExploreShop} />
        case 8: return <BrutalistWarehouseHome onExploreShop={onExploreShop} />
        case 9: return <SplitStoryboardHome onExploreShop={onExploreShop} />
        case 10: return <CrashLabHome onExploreShop={onExploreShop} />
        case 11: return <StealthBlackoutHome onExploreShop={onExploreShop} />
        case 12: return <SpeedTerminalHome onExploreShop={onExploreShop} />
        default: return <BlueprintHome onExploreShop={onExploreShop} />
      }
    } else {
      switch (currentOption) {
        case 1: return <BlueprintShop />
        case 2: return <TacticalBajaShop />
        case 3: return <NordicMinimalShop />
        case 4: return <FleetCommanderShop />
        case 5: return <Configurator3DShop />
        case 6: return <CyberRigShop />
        case 7: return <HeritageAmericanaShop />
        case 8: return <BrutalistWarehouseShop />
        case 9: return <SplitStoryboardShop />
        case 10: return <CrashLabShop />
        case 11: return <StealthBlackoutShop />
        case 12: return <SpeedTerminalShop />
        default: return <BlueprintShop />
      }
    }
  }

  // Device frame styles
  const getContainerStyle = () => {
    if (viewport === 'tablet') {
      return {
        maxWidth: '768px',
        margin: '32px auto',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 0 12px #1E293B',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        minHeight: '800px',
      }
    }
    if (viewport === 'mobile') {
      return {
        maxWidth: '390px',
        margin: '32px auto',
        borderRadius: '36px',
        overflow: 'hidden',
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 0 12px #1E293B',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        minHeight: '844px',
      }
    }
    return {
      width: '100%',
      minHeight: '100vh',
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#04070D',
        position: isFullscreen ? 'fixed' : 'relative',
        inset: isFullscreen ? 0 : 'auto',
        zIndex: isFullscreen ? 99999 : 'auto',
        overflowY: 'auto',
      }}
    >
      {/* Top Demo Studio Toolbar */}
      <DemoStudioNav
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        viewMode={viewMode}
        setViewMode={setViewMode}
        viewport={viewport}
        setViewport={setViewport}
        isFullscreen={isFullscreen}
        setIsFullscreen={setIsFullscreen}
        isInfoOpen={isInfoOpen}
        setIsInfoOpen={setIsInfoOpen}
      />

      {/* Main Display Canvas (Framed or Full Fluid) */}
      <main style={{ paddingBottom: viewport !== 'desktop' ? '60px' : 0 }}>
        {/* Device Viewport Indicator Pill */}
        {viewport !== 'desktop' && (
          <div style={{ textAlign: 'center', paddingTop: '16px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.08)',
                color: '#94A3B8',
                fontSize: '11px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '99px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Simulating {viewport === 'tablet' ? 'iPad / Tablet (768px)' : 'iPhone / Mobile (390px)'}
            </span>
          </div>
        )}

        <div style={getContainerStyle()}>
          {renderDesign()}
        </div>
      </main>

      {/* Architectural Specs Drawer */}
      <DesignSpecsDrawer
        archetype={activeArchetype}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        viewMode={viewMode}
      />
    </div>
  )
}
