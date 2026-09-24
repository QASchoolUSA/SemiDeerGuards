'use client'

import React, { useState } from 'react'
import { Wifi, Battery, RotateCw, ZoomIn, ZoomOut, Smartphone } from 'lucide-react'
import { DemoViewportProvider } from './DemoViewportContext'

interface MobileDeviceFrameProps {
  children: React.ReactNode
  title?: string
}

export default function MobileDeviceFrame({ children, title }: MobileDeviceFrameProps) {
  const [scale, setScale] = useState<number>(0.9)
  const [isLandscape, setIsLandscape] = useState<boolean>(false)

  const width = isLandscape ? 844 : 390
  const height = isLandscape ? 390 : 844

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px auto 40px' }}>
      {/* Device Toolbar Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '6px 14px',
          borderRadius: '99px',
          marginBottom: '16px',
          fontSize: '12px',
          color: '#CBD5E1',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#38BDF8' }}>
          <Smartphone size={14} />
          <span>{title || 'Mobile Phone View'}</span>
          <span style={{ color: '#64748B', fontWeight: 500 }}>({width} × {height}px)</span>
        </div>

        <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />

        {/* Scale Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '11px', color: '#94A3B8' }}>Scale:</span>
          {[0.8, 0.9, 1.0].map((s) => (
            <button
              key={s}
              onClick={() => setScale(s)}
              style={{
                background: scale === s ? '#38BDF8' : 'rgba(255,255,255,0.06)',
                color: scale === s ? '#040711' : '#CBD5E1',
                border: 'none',
                borderRadius: '4px',
                padding: '2px 7px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {Math.round(s * 100)}%
            </button>
          ))}
        </div>

        <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />

        {/* Rotate Button */}
        <button
          onClick={() => setIsLandscape(!isLandscape)}
          title="Toggle Portrait / Landscape"
          style={{
            background: 'none',
            border: 'none',
            color: isLandscape ? '#38BDF8' : '#94A3B8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            fontWeight: 600,
          }}
        >
          <RotateCw size={13} />
          <span>{isLandscape ? 'Landscape' : 'Rotate'}</span>
        </button>
      </div>

      {/* Outer Scaled Wrapper */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          marginBottom: scale < 1 ? `-${Math.round((1 - scale) * (height + 40))}px` : '0',
        }}
      >
        {/* Realistic iPhone Phone Bezel */}
        <div
          style={{
            width: `${width + 24}px`,
            height: `${height + 24}px`,
            background: '#1F2430',
            borderRadius: '52px',
            padding: '12px',
            boxShadow: `
              0 0 0 2px #334155,
              0 30px 80px -15px rgba(0, 0, 0, 0.9),
              0 0 40px rgba(56, 189, 248, 0.15)
            `,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Inner Phone Screen */}
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
              background: '#040711',
              borderRadius: '42px',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* iOS Status Bar */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '44px',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 24px',
                color: '#FFF',
                fontSize: '13px',
                fontWeight: 600,
                pointerEvents: 'none',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
              }}
            >
              <span>9:41</span>

              {/* Dynamic Island */}
              <div
                style={{
                  width: '110px',
                  height: '28px',
                  background: '#000',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 10px',
                }}
              >
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#081726' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0B253A' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Wifi size={13} />
                <span style={{ fontSize: '10px', fontWeight: 800 }}>5G</span>
                <Battery size={15} />
              </div>
            </div>

            {/* Scrollable Mobile Page Body */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                paddingTop: '44px',
                paddingBottom: '34px',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
              }}
            >
              <DemoViewportProvider forcedViewport="mobile">
                {children}
              </DemoViewportProvider>
            </div>

            {/* iOS Home Indicator Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '130px',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '3px',
                zIndex: 9999,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
