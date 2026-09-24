'use client'

import React, { useState, useEffect } from 'react'
import DemoStudioNav, { ViewportMode } from '@/components/demo/DemoStudioNav'
import DesignSpecsDrawer from '@/components/demo/DesignSpecsDrawer'
import MobileDeviceFrame from '@/components/demo/MobileDeviceFrame'
import { DemoViewportProvider } from '@/components/demo/DemoViewportContext'
import { ARCHETYPES } from '@/components/demo/demoData'
import { Monitor, Smartphone, Columns } from 'lucide-react'

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
  const [viewport, setViewport] = useState<ViewportMode>('desktop')
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
      } else if (e.key.toLowerCase() === 'd') {
        setViewport('desktop')
      } else if (e.key.toLowerCase() === 'm') {
        setViewport('mobile')
      } else if (e.key.toLowerCase() === 'c') {
        setViewport('side-by-side')
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

      {/* Main Display Canvas */}
      <main style={{ padding: viewport === 'side-by-side' ? '24px 20px 80px' : '0 0 60px' }}>
        
        {/* DESKTOP VIEW */}
        {viewport === 'desktop' && (
          <div style={{ width: '100%', minHeight: '100vh' }}>
            <DemoViewportProvider forcedViewport="desktop">
              {renderDesign()}
            </DemoViewportProvider>
          </div>
        )}

        {/* MOBILE VIEW */}
        {viewport === 'mobile' && (
          <div style={{ padding: '24px 16px 80px' }}>
            <MobileDeviceFrame title={`Option #${currentOption.toString().padStart(2, '0')} (${viewMode.toUpperCase()})`}>
              {renderDesign()}
            </MobileDeviceFrame>
          </div>
        )}

        {/* SIDE-BY-SIDE COMPARE VIEW (Desktop + Mobile) */}
        {viewport === 'side-by-side' && (
          <div style={{ maxWidth: '1700px', margin: '0 auto' }}>
            {/* Header info bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 20px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                marginBottom: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Columns size={16} color="#C084FC" />
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#FFF' }}>
                  Desktop vs. Mobile Phone Side-by-Side Comparison
                </span>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>
                  (Testing responsive layout conversion simultaneously)
                </span>
              </div>

              <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
                <span style={{ color: '#60A5FA', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                  <Monitor size={14} /> Desktop (Fluid Width)
                </span>
                <span style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                  <Smartphone size={14} /> Mobile (390px iPhone)
                </span>
              </div>
            </div>

            {/* Two Column Layout: Left Desktop Scaled Frame + Right Mobile Device Frame */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.4fr) minmax(420px, 0.75fr)',
                gap: '32px',
                alignItems: 'start',
              }}
            >
              {/* Left Desktop Panel */}
              <div
                style={{
                  background: '#0B0F19',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
                }}
              >
                <div
                  style={{
                    background: '#1E293B',
                    padding: '10px 18px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: '#93C5FD' }}>
                    <Monitor size={14} />
                    <span>DESKTOP BROWSER VIEW (100% FLUID)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  </div>
                </div>

                <div style={{ maxHeight: '900px', overflowY: 'auto' }}>
                  <DemoViewportProvider forcedViewport="desktop">
                    {renderDesign()}
                  </DemoViewportProvider>
                </div>
              </div>

              {/* Right Mobile Panel (Realistic iPhone Frame) */}
              <div style={{ position: 'sticky', top: '100px' }}>
                <MobileDeviceFrame title={`Mobile Preview (Option #${currentOption})`}>
                  {renderDesign()}
                </MobileDeviceFrame>
              </div>
            </div>
          </div>
        )}
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
