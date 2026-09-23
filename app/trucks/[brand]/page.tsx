import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { PRODUCTS_BY_TRUCK_BRAND_QUERY } from '@/sanity/lib/queries'
import ProductCard from '@/components/products/ProductCard'

interface Props {
  params: { brand: string }
}

const BRAND_META: Record<string, { display: string; description: string; color: string; emoji: string; models: string }> = {
  volvo:       { display: 'Volvo',       description: 'Deer guards engineered for Volvo VNL, VNM, and VNX semi trucks.', color: '#005B9A', emoji: '🔵', models: 'VNL 760, VNL 860, VNX 400, VNM 400' },
  kenworth:    { display: 'Kenworth',    description: 'Precision-fit guards for Kenworth T680, T880, W900 and more.', color: '#0066CC', emoji: '⚡', models: 'T680, T880, W900, T370, T800' },
  freightliner:{ display: 'Freightliner',description: 'Heavy-duty protection for Freightliner Cascadia, Coronado, and 114SD.', color: '#D4010F', emoji: '🔴', models: 'Cascadia, Coronado, 114SD, M2' },
  peterbilt:   { display: 'Peterbilt',   description: 'Custom-fit deer guards for Peterbilt 389, 579, and 567 models.', color: '#C0292C', emoji: '🚛', models: '389, 579, 567, 337, 348' },
  mack:        { display: 'Mack',        description: 'Rugged protection for Mack Anthem, Pinnacle, and Granite trucks.', color: '#F5A623', emoji: '🐂', models: 'Anthem, Pinnacle, Granite, TerraPro' },
  international:{ display: 'International', description: 'Deer guards for International LT Series and RH Series trucks.', color: '#CC2828', emoji: '🏗️', models: 'LT625, LT680, RH, MV' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = BRAND_META[params.brand.toLowerCase()]
  if (!meta) return { title: 'Not Found' }
  return {
    title: `${meta.display} Deer Guards for Semi Trucks`,
    description: meta.description,
  }
}

const PLACEHOLDER_PRODUCTS = [
  { _id: 'p1', name: `Heavy Duty Guard`, slug: { current: 'heavy-duty-guard-volvo-vnl-760' }, price: 2199, compareAtPrice: 2499, badge: 'BESTSELLER' as const, inStock: true, rating: 4.9, reviewCount: 143, material: 'Powder-Coated Steel', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [] },
  { _id: 'p2', name: `Aero Pro Guard`, slug: { current: 'aero-pro-guard' }, price: 1899, badge: 'CAS COMPATIBLE' as const, inStock: true, rating: 4.8, reviewCount: 89, material: 'Stainless Steel', images: [], category: { title: 'Aero', slug: { current: 'aero' } }, compatibleTrucks: [] },
  { _id: 'p3', name: `Elite Guard`, slug: { current: 'elite-guard' }, price: 2349, badge: 'NEW' as const, inStock: true, rating: 4.7, reviewCount: 56, material: 'Steel', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [] },
]

export default async function TruckBrandPage({ params }: Props) {
  const brandKey = params.brand.toLowerCase()
  const meta = BRAND_META[brandKey]
  if (!meta) notFound()

  let products: any[] = []
  try {
    products = await client.fetch(PRODUCTS_BY_TRUCK_BRAND_QUERY, { brand: meta.display })
  } catch {
    products = []
  }
  if (products.length === 0) products = PLACEHOLDER_PRODUCTS.map(p => ({ ...p, name: `${p.name} — ${meta.display}` }))

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Brand Hero */}
      <div style={{
        background: `linear-gradient(135deg, var(--bg-base) 0%, ${meta.color}15 50%, var(--bg-surface) 100%)`,
        borderBottom: '1px solid var(--border-subtle)',
        padding: '64px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-5%',
          width: '400px', height: '400px',
          background: `radial-gradient(circle, ${meta.color}12 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div className="container-full" style={{ position: 'relative' }}>
          <Link href="/trucks" className="btn btn-ghost btn-sm" style={{ marginBottom: '24px', display: 'inline-flex' }}>
            <ArrowLeft size={14} /> All Brands
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '16px',
              background: `${meta.color}18`, border: `2px solid ${meta.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px'
            }}>
              {meta.emoji}
            </div>
            <div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>Shop by Brand</p>
              <h1 className="text-display">{meta.display} <span className="gradient-text-chrome">Deer Guards</span></h1>
            </div>
          </div>
          <p className="text-subheading" style={{ maxWidth: '560px', marginBottom: '16px' }}>{meta.description}</p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Compatible models: {meta.models}</p>
        </div>
      </div>

      {/* Products */}
      <div className="container-full" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h2 className="text-heading">
            {products.length} Guards Available
          </h2>
        </div>
        <div className="products-grid">
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
