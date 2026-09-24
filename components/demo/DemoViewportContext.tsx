'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ViewportMode = 'desktop' | 'mobile' | 'side-by-side'

interface DemoViewportContextType {
  viewport: ViewportMode
  setViewport: (vp: ViewportMode) => void
  isMobile: boolean
  zoomScale: number
  setZoomScale: (scale: number) => void
}

const DemoViewportContext = createContext<DemoViewportContextType>({
  viewport: 'desktop',
  setViewport: () => {},
  isMobile: false,
  zoomScale: 1,
  setZoomScale: () => {},
})

export function DemoViewportProvider({
  children,
  forcedViewport,
}: {
  children: ReactNode
  forcedViewport?: ViewportMode
}) {
  const [viewport, setViewport] = useState<ViewportMode>(forcedViewport || 'desktop')
  const [zoomScale, setZoomScale] = useState<number>(1)
  const [isWindowMobile, setIsWindowMobile] = useState<boolean>(false)

  // Track real browser window width as fallback
  useEffect(() => {
    const checkWidth = () => {
      setIsWindowMobile(window.innerWidth < 768)
    }
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  // Effectively mobile if forced, selected 'mobile', or real window is mobile
  const isMobile = forcedViewport === 'mobile' || viewport === 'mobile' || (viewport === 'desktop' && isWindowMobile)

  return (
    <DemoViewportContext.Provider
      value={{
        viewport: forcedViewport || viewport,
        setViewport,
        isMobile,
        zoomScale,
        setZoomScale,
      }}
    >
      {children}
    </DemoViewportContext.Provider>
  )
}

export function useDemoViewport() {
  return useContext(DemoViewportContext)
}
