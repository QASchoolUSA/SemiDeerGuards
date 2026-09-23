'use client'

import Link from 'next/link'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'

const CATEGORIES = ['All', 'Heavy Duty', 'Aero', 'CAS Compatible', 'Stainless Steel', 'Aluminum']
const BRANDS = ['All Brands', 'Volvo', 'Kenworth', 'Freightliner', 'Peterbilt', 'Mack']
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Top Rated']

const PLACEHOLDER_PRODUCTS = [
  { _id: 'p1', name: 'Heavy Duty Guard — Volvo VNL 760', slug: { current: 'heavy-duty-guard-volvo-vnl-760' }, price: 2199, compareAtPrice: 2499, badge: 'BESTSELLER', inStock: true, rating: 4.9, reviewCount: 143, material: 'Powder-Coated Steel', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [{ brand: 'Volvo', model: 'VNL 760' }] },
  { _id: 'p2', name: 'Aero Pro Guard — Kenworth T680', slug: { current: 'aero-pro-guard-kenworth-t680' }, price: 1899, badge: 'CAS COMPATIBLE', inStock: true, rating: 4.8, reviewCount: 89, material: 'Stainless Steel', images: [], category: { title: 'Aero', slug: { current: 'aero' } }, compatibleTrucks: [{ brand: 'Kenworth', model: 'T680' }] },
  { _id: 'p3', name: 'Elite Guard — Freightliner Cascadia', slug: { current: 'elite-guard-freightliner-cascadia' }, price: 2349, compareAtPrice: 2599, badge: 'SALE', inStock: true, rating: 4.7, reviewCount: 211, material: 'Steel', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [{ brand: 'Freightliner', model: 'Cascadia' }] },
  { _id: 'p4', name: 'Road Train Guard — Kenworth W900', slug: { current: 'road-train-guard-kenworth-w900' }, price: 2699, badge: 'NEW', inStock: true, rating: 4.9, reviewCount: 32, material: 'Steel', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [{ brand: 'Kenworth', model: 'W900' }] },
  { _id: 'p5', name: 'Defender Guard — Peterbilt 389', slug: { current: 'defender-guard-peterbilt-389' }, price: 2099, badge: 'BESTSELLER', inStock: true, rating: 4.8, reviewCount: 156, material: 'Aluminum', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [{ brand: 'Peterbilt', model: '389' }] },
  { _id: 'p6', name: 'Lightweight Aero — Mack Anthem', slug: { current: 'lightweight-aero-mack-anthem' }, price: 1749, inStock: false, rating: 4.6, reviewCount: 74, material: 'Aluminum', images: [], category: { title: 'Aero', slug: { current: 'aero' } }, compatibleTrucks: [{ brand: 'Mack', model: 'Anthem' }] },
  { _id: 'p7', name: 'CAS Shield Guard — Volvo VNL 860', slug: { current: 'cas-shield-guard-volvo-vnl-860' }, price: 2450, badge: 'CAS COMPATIBLE', inStock: true, rating: 4.9, reviewCount: 67, material: 'Stainless Steel', images: [], category: { title: 'Aero', slug: { current: 'aero' } }, compatibleTrucks: [{ brand: 'Volvo', model: 'VNL 860' }] },
  { _id: 'p8', name: 'Economy Guard — Freightliner 114SD', slug: { current: 'economy-guard-freightliner-114sd' }, price: 1549, inStock: true, rating: 4.5, reviewCount: 38, material: 'Steel', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [{ brand: 'Freightliner', model: '114SD' }] },
]

export default function ProductsPage() {
  const products = PLACEHOLDER_PRODUCTS

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px' }}>
      {/* Page Header */}
      <div style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '48px 0 40px' }}>
        <div className="container-full">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Products</span>
          </div>
          <h1 className="text-display" style={{ marginBottom: '12px' }}>
            All <span className="gradient-text-chrome">Deer Guards</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
            {products.length} products · Free freight shipping on orders over $500
          </p>
        </div>
      </div>

      <div className="container-full" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="products-layout-grid">

          {/* Sidebar Filters */}
          <aside className="filter-sidebar" aria-label="Product Filters">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={16} color="var(--blue-accent)" /> Filters
              </h2>
              <button className="btn btn-ghost btn-sm" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Clear All
              </button>
            </div>

            {/* Truck Brand */}
            <FilterGroup label="Truck Brand">
              {BRANDS.map((brand) => (
                <FilterCheckbox key={brand} label={brand} id={`brand-${brand.toLowerCase().replace(' ', '-')}`} />
              ))}
            </FilterGroup>

            {/* Category */}
            <FilterGroup label="Category">
              {CATEGORIES.map((cat) => (
                <FilterCheckbox key={cat} label={cat} id={`cat-${cat.toLowerCase().replace(' ', '-')}`} />
              ))}
            </FilterGroup>

            {/* Material */}
            <FilterGroup label="Material">
              {['Steel', 'Stainless Steel', 'Aluminum', 'Powder-Coated Steel'].map((m) => (
                <FilterCheckbox key={m} label={m} id={`mat-${m.toLowerCase().replace(/[^a-z]/g, '-')}`} />
              ))}
            </FilterGroup>

            {/* Price Range */}
            <FilterGroup label="Price Range">
              <div style={{ padding: '8px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <span>$1,000</span>
                  <span>$3,500</span>
                </div>
                <input type="range" min={1000} max={3500} defaultValue={3500} style={{ width: '100%' }} id="price-range-filter" aria-label="Maximum price" />
              </div>
            </FilterGroup>

            {/* In Stock */}
            <div style={{ padding: '20px 0', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label htmlFor="in-stock-filter" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>In Stock Only</label>
              <input type="checkbox" id="in-stock-filter" style={{ width: '16px', height: '16px', accentColor: 'var(--blue-accent)', cursor: 'pointer' }} />
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            {/* Sort Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Showing <strong style={{ color: 'var(--text-secondary)' }}>{products.length}</strong> products
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label htmlFor="sort-select" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Sort:</label>
                <select id="sort-select" className="input select" style={{ width: 'auto', padding: '8px 36px 8px 12px', fontSize: '13px' }}>
                  {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className="products-grid">
              {products.map((product: any) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
      <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '14px' }}>
        {label}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {children}
      </div>
    </div>
  )
}

function FilterCheckbox({ label, id }: { label: string; id: string }) {
  return (
    <label htmlFor={id} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color var(--transition-fast)' }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
    >
      <input type="checkbox" id={id} style={{ width: '16px', height: '16px', accentColor: 'var(--blue-accent)', cursor: 'pointer', flexShrink: 0 }} />
      {label}
    </label>
  )
}
