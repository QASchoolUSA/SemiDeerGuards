import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { PRODUCT_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import ProductDetailClient from '@/components/products/ProductDetailClient'
import ProductCard from '@/components/products/ProductCard'

interface Props {
  params: { slug: string }
}

// Placeholder for dev
const PLACEHOLDER_PRODUCT = {
  _id: 'placeholder-detail',
  name: 'Heavy Duty Guard — Volvo VNL 760',
  slug: { current: 'heavy-duty-guard-volvo-vnl-760' },
  sku: 'SDG-VNL760-HD',
  price: 2199,
  compareAtPrice: 2499,
  badge: 'BESTSELLER',
  inStock: true,
  rating: 4.9,
  reviewCount: 143,
  material: 'Powder-Coated Steel',
  weight: 92,
  description: [],
  specifications: [
    { label: 'Material', value: 'Heavy-Gauge 14-Gauge Steel' },
    { label: 'Finish', value: 'Black Powder Coat' },
    { label: 'Weight', value: '92 lbs' },
    { label: 'Width', value: '92"' },
    { label: 'Height', value: '38"' },
    { label: 'CAS Compatible', value: 'Yes — Bendix Fusion, Mobileye' },
    { label: 'Warranty', value: '3 Years Limited' },
    { label: 'Install Time', value: '2–4 Hours' },
    { label: 'Hardware Included', value: 'Yes' },
  ],
  images: [],
  category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } },
  compatibleTrucks: [
    { brand: 'Volvo', model: 'VNL 760', yearFrom: 2018, yearTo: 2024 },
    { brand: 'Volvo', model: 'VNL 860', yearFrom: 2018, yearTo: 2024 },
  ],
  seoTitle: 'Heavy Duty Deer Guard for Volvo VNL 760 | SemiDeerGuards',
  seoDescription: 'Heavy-gauge powder-coated steel deer guard engineered for the Volvo VNL 760. CAS-compatible, 3-year warranty, free freight shipping.',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let product: any
  try {
    product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug: params.slug })
  } catch {
    product = null
  }
  product = product || PLACEHOLDER_PRODUCT

  return {
    title: product.seoTitle || product.name,
    description: product.seoDescription || `Buy ${product.name}. Heavy-duty deer guard for semi trucks. 3-year warranty. Free freight shipping over $500.`,
  }
}

export default async function ProductPage({ params }: Props) {
  let product: any
  try {
    product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug: params.slug })
  } catch {
    product = null
  }

  // For dev/placeholder mode, use placeholder data
  if (!product && params.slug === 'heavy-duty-guard-volvo-vnl-760') {
    product = PLACEHOLDER_PRODUCT
  }

  if (!product) notFound()

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="container-full" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <ProductDetailClient product={product} />

        {/* Compatible Trucks Section */}
        {product.compatibleTrucks && product.compatibleTrucks.length > 0 && (
          <div style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 className="text-heading" style={{ marginBottom: '32px' }}>
              Compatible <span className="gradient-text-chrome">Truck Models</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              {product.compatibleTrucks.map((truck: any) => (
                <div key={`${truck.brand}-${truck.model}`} className="glass-card" style={{ padding: '20px' }}>
                  <p style={{ fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>{truck.brand} {truck.model}</p>
                  {truck.yearFrom && (
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{truck.yearFrom}–{truck.yearTo || 'Present'}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
