import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'

interface Props {
  params: Promise<{ brand: string }>
}

const BRAND_META: Record<string, { display: string; description: string; color: string; emoji: string; models: string }> = {
  volvo:        { display: 'Volvo',         description: 'Deer guards engineered for Volvo VNL, VNM, and VNX semi trucks.', color: '#005B9A', emoji: '🔵', models: 'VNL 760, VNL 860, VNX 400, VNM 400' },
  kenworth:     { display: 'Kenworth',      description: 'Precision-fit guards for Kenworth T680, T880, W900 and more.',     color: '#0066CC', emoji: '⚡', models: 'T680, T880, W900, T370, T800' },
  freightliner: { display: 'Freightliner',  description: 'Heavy-duty protection for Freightliner Cascadia, Coronado, 114SD.', color: '#D4010F', emoji: '🔴', models: 'Cascadia, Coronado, 114SD, M2' },
  peterbilt:    { display: 'Peterbilt',     description: 'Custom-fit deer guards for Peterbilt 389, 579, and 567 models.',   color: '#C0292C', emoji: '🚛', models: '389, 579, 567, 337, 348' },
  mack:         { display: 'Mack',          description: 'Rugged protection for Mack Anthem, Pinnacle, and Granite trucks.', color: '#F5A623', emoji: '🐂', models: 'Anthem, Pinnacle, Granite, TerraPro' },
  international:{ display: 'International', description: 'Deer guards for International LT Series and RH Series trucks.',    color: '#CC2828', emoji: '🏗️', models: 'LT625, LT680, RH, MV' },
}

const makePlaceholders = (displayName: string) => [
  { _id: 'p1', name: `Heavy Duty Guard — ${displayName}`, slug: { current: 'heavy-duty-guard-volvo-vnl-760' }, price: 2199, compareAtPrice: 2499, badge: 'BESTSELLER', inStock: true, rating: 4.9, reviewCount: 143, material: 'Powder-Coated Steel', images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [] },
  { _id: 'p2', name: `Aero Pro Guard — ${displayName}`,   slug: { current: 'aero-pro-guard' },                price: 1899, badge: 'CAS COMPATIBLE', inStock: true, rating: 4.8, reviewCount: 89,  material: 'Stainless Steel',      images: [], category: { title: 'Aero',       slug: { current: 'aero' }       }, compatibleTrucks: [] },
  { _id: 'p3', name: `Elite Guard — ${displayName}`,      slug: { current: 'elite-guard' },                   price: 2349, badge: 'NEW',           inStock: true, rating: 4.7, reviewCount: 56,  material: 'Steel',                images: [], category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } }, compatibleTrucks: [] },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand } = await params
  const meta = BRAND_META[brand.toLowerCase()]
  if (!meta) return { title: 'Not Found' }
  return {
    title: `${meta.display} Deer Guards for Semi Trucks`,
    description: meta.description,
  }
}

export default async function TruckBrandPage({ params }: Props) {
  const { brand } = await params
  const brandKey = brand.toLowerCase()
  const meta = BRAND_META[brandKey]

  if (!meta) notFound()

  // meta is guaranteed non-null after notFound() — TypeScript needs explicit reassurance
  const safeMeta = meta!

  let products: any[] = []
  try {
    const { client } = await import('@/sanity/lib/client')
    const { PRODUCTS_BY_TRUCK_BRAND_QUERY } = await import('@/sanity/lib/queries')
    products = await client.fetch(PRODUCTS_BY_TRUCK_BRAND_QUERY, { brand: safeMeta.display })
  } catch {
    products = []
  }

  if (products.length === 0) products = makePlaceholders(safeMeta.display)

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Brand Hero */}
      <div style={{
        background: `linear-gradient(135deg, var(--bg-base) 0%, ${safeMeta.color}15 50%, var(--bg-surface) 100%)`,
        borderBottom: '1px solid var(--border-subtle)',
        padding: '64px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-5%',
          width: '400px', height: '400px',
          background: `radial-gradient(circle, ${safeMeta.color}12 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div className="container-full" style={{ position: 'relative' }}>
          <Link href="/trucks" className="btn btn-ghost btn-sm" style={{ marginBottom: '24px', display: 'inline-flex' }}>
            <ArrowLeft size={14} /> All Brands
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '16px',
              background: `${safeMeta.color}18`, border: `2px solid ${safeMeta.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px',
              flexShrink: 0,
            }}>
              {safeMeta.emoji}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>Shop by Brand</p>
              <h1 className="text-display" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{safeMeta.display} <span className="gradient-text-chrome">Deer Guards</span></h1>
            </div>
          </div>
          <p className="text-subheading" style={{ maxWidth: '560px', marginBottom: '16px' }}>{safeMeta.description}</p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Compatible models: {safeMeta.models}</p>
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
