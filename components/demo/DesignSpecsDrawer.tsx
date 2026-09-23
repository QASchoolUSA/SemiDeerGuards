'use client'

import React from 'react'
import { X, CheckCircle2, Target, Layout, Type, Palette, Compass, Zap } from 'lucide-react'
import { DesignArchetype } from './demoData'

interface DesignSpecsDrawerProps {
  archetype: DesignArchetype
  isOpen: boolean
  onClose: () => void
  viewMode: 'home' | 'shop'
}

export default function DesignSpecsDrawer({
  archetype,
  isOpen,
  onClose,
  viewMode,
}: DesignSpecsDrawerProps) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: 'min(92vw, 440px)',
        zIndex: 10000,
        background: '#0B111E',
        borderLeft: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '-10px 0 40px rgba(0,0,0,0.7)',
        color: '#EEF2F7',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              padding: '3px 8px',
              borderRadius: '6px',
              background: archetype.accentColor,
              color: '#000',
              fontWeight: 800,
              fontSize: '11px',
            }}
          >
            #{archetype.id}
          </span>
          <div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#F8FAFC' }}>
              Design Blueprint
            </h3>
            <p style={{ margin: 0, fontSize: '11px', color: '#94A3B8' }}>
              Currently Viewing: {viewMode === 'home' ? 'Homepage' : 'Shop / Catalog'}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            color: '#94A3B8',
            borderRadius: '6px',
            padding: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
        >
          <X size={18} />
        </button>
      </div>

      {/* Content Body */}
      <div
        style={{
          padding: '24px',
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Archetype Title Card */}
        <div
          style={{
            padding: '16px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${archetype.accentColor}33`,
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: archetype.accentColor,
              marginBottom: '6px',
              letterSpacing: '0.06em',
            }}
          >
            {archetype.category} ARCHETYPE
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px 0', color: '#FFF' }}>
            {archetype.name}
          </h2>
          <p style={{ margin: 0, fontSize: '13px', color: '#94A3B8', lineHeight: 1.5 }}>
            {archetype.tagline}
          </p>
        </div>

        {/* Target Audience */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#CBD5E1',
              marginBottom: '8px',
            }}
          >
            <Target size={14} color={archetype.accentColor} />
            <span>Target Persona</span>
          </div>
          <div
            style={{
              padding: '12px 14px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              fontSize: '13px',
              color: '#CBD5E1',
              lineHeight: 1.5,
            }}
          >
            {archetype.targetAudience}
          </div>
        </div>

        {/* Spatial Hierarchy & Layout Style */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#CBD5E1',
              marginBottom: '8px',
            }}
          >
            <Layout size={14} color={archetype.accentColor} />
            <span>Layout & Spatial Concept</span>
          </div>
          <div
            style={{
              padding: '12px 14px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              fontSize: '13px',
              color: '#CBD5E1',
              lineHeight: 1.5,
            }}
          >
            {archetype.layoutStyle}
          </div>
        </div>

        {/* Typography & Color */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#CBD5E1',
                marginBottom: '6px',
              }}
            >
              <Type size={13} color={archetype.accentColor} />
              <span>Typography</span>
            </div>
            <div
              style={{
                padding: '10px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: '11px',
                color: '#94A3B8',
              }}
            >
              {archetype.typography}
            </div>
          </div>

          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#CBD5E1',
                marginBottom: '6px',
              }}
            >
              <Palette size={13} color={archetype.accentColor} />
              <span>Accent Token</span>
            </div>
            <div
              style={{
                padding: '10px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: '11px',
                color: '#94A3B8',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '4px',
                  background: archetype.accentColor,
                }}
              />
              <span style={{ fontFamily: 'monospace' }}>{archetype.accentColor}</span>
            </div>
          </div>
        </div>

        {/* Key Innovations */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#CBD5E1',
              marginBottom: '10px',
            }}
          >
            <Zap size={14} color={archetype.accentColor} />
            <span>Key UX & Architectural Innovations</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {archetype.keyInnovations.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '12px',
                  color: '#CBD5E1',
                  lineHeight: 1.4,
                }}
              >
                <CheckCircle2
                  size={14}
                  color={archetype.accentColor}
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
