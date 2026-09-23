'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  showLabel?: boolean
  className?: string
}

export default function ThemeToggle({ showLabel = false, className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const current = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') ||
      (localStorage.getItem('theme') as 'dark' | 'light') ||
      'dark'
    setTheme(current)

    const handleThemeChange = () => {
      const updated = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark'
      setTheme(updated)
    }

    window.addEventListener('theme-change', handleThemeChange)
    return () => window.removeEventListener('theme-change', handleThemeChange)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable
    }
    window.dispatchEvent(new Event('theme-change'))
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        id={showLabel ? 'theme-toggle-btn-mobile' : 'theme-toggle-btn'}
        className={`btn btn-ghost btn-sm ${className}`}
        style={{
          width: showLabel ? 'auto' : '38px',
          height: '38px',
          padding: showLabel ? '0 14px' : 0,
          borderRadius: '10px',
          border: '1px solid var(--border-subtle)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: 'var(--text-secondary)',
        }}
        aria-label="Toggle theme"
      >
        <Moon size={18} />
        {showLabel && (
          <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
            Theme
          </span>
        )}
      </button>
    )
  }

  return (
    <button
      type="button"
      id={showLabel ? 'theme-toggle-btn-mobile' : 'theme-toggle-btn'}
      onClick={toggleTheme}
      className={`btn btn-ghost btn-sm ${className}`}
      style={{
        width: showLabel ? 'auto' : '38px',
        height: '38px',
        padding: showLabel ? '0 14px' : 0,
        borderRadius: '10px',
        border: '1px solid var(--border-subtle)',
        background: 'var(--bg-elevated)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        color: theme === 'dark' ? 'var(--gold)' : 'var(--blue-accent)',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
      }}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(360deg)',
      }}>
        {theme === 'dark' ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )}
      </div>
      {showLabel && (
        <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  )
}
