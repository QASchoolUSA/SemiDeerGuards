'use client'

import React, { useState } from 'react'
import { QrCode, X, Copy, Check, ExternalLink, Smartphone } from 'lucide-react'

interface MobileQrModalProps {
  isOpen: boolean
  onClose: () => void
  currentOption: number
  viewMode: 'home' | 'shop'
}

export default function MobileQrModal({
  isOpen,
  onClose,
  currentOption,
  viewMode,
}: MobileQrModalProps) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const targetUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/demo?option=${currentOption}&mode=${viewMode}`
    : `http://localhost:3000/demo?option=${currentOption}&mode=${viewMode}`

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Open in phone-sized popup window
  const openPopout = () => {
    window.open(
      targetUrl,
      'MobileDemoPreview',
      'width=390,height=844,resizable=yes,scrollbars=yes,status=no'
    )
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0F172A',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '16px',
          padding: '28px',
          maxWidth: '440px',
          width: '100%',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
          position: 'relative',
          color: '#E2E8F0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '8px', borderRadius: '8px', color: '#38BDF8' }}>
            <Smartphone size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#FFF' }}>
              Test On Your Phone
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#94A3B8' }}>
              Preview Option #{currentOption.toString().padStart(2, '0')} ({viewMode === 'home' ? 'Homepage' : 'Shop'}) on a mobile screen
            </p>
          </div>
        </div>

        {/* QR Code graphic generator */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          {/* Quick SVG styled QR Code placeholder */}
          <div style={{ textAlign: 'center', color: '#0F172A' }}>
            <QrCode size={160} color="#0F172A" />
            <div style={{ fontSize: '11px', fontWeight: 700, marginTop: '6px', color: '#475569' }}>
              Scan with phone camera on same WiFi
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={openPopout}
            style={{
              padding: '12px',
              background: '#0284C7',
              color: '#FFF',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <ExternalLink size={15} />
            <span>Open Dedicated Mobile Pop-Up (390×844)</span>
          </button>

          <button
            onClick={handleCopy}
            style={{
              padding: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#CBD5E1',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {copied ? (
              <><Check size={14} color="#10B981" /> Link Copied to Clipboard!</>
            ) : (
              <><Copy size={14} /> Copy Direct Mobile URL</>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
