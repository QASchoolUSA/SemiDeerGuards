import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { client } from '@/sanity/lib/client'
import { FEATURED_PRODUCTS_QUERY } from '@/sanity/lib/queries'

export default async function FeaturedProducts() {
  let products: any[] = []

  try {
    products = await client.fetch(FEATURED_PRODUCTS_QUERY)
  } catch {
    // During build without Sanity credentials, show placeholder state
    products = []
  }

  if (products.length === 0) {
    // Show a placeholder / coming-soon state
    products = PLACEHOLDER_PRODUCTS
  }

  return (
    <section className="section-padding" aria-label="Featured Products">
      <div className="container-full">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-label">Top Sellers</div>
            <h2 className="text-display">
              Featured <span className="gradient-text-chrome">Guards</span>
            </h2>
          </div>
          <Link href="/products" className="btn btn-outline">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="products-grid">
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Placeholder data (shown before Sanity is connected) ───────────────────────
const PLACEHOLDER_PRODUCTS = [
  {
    _id: 'placeholder-1',
    name: 'Heavy Duty Guard — Volvo VNL 760',
    slug: { current: 'heavy-duty-guard-volvo-vnl-760' },
    price: 2199,
    compareAtPrice: 2499,
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.9,
    reviewCount: 143,
    material: 'Powder-Coated Steel',
    images: [],
    category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } },
    compatibleTrucks: [{ brand: 'Volvo', model: 'VNL 760' }],
  },
  {
    _id: 'placeholder-2',
    name: 'Aero Pro Guard — Kenworth T680',
    slug: { current: 'aero-pro-guard-kenworth-t680' },
    price: 1899,
    badge: 'CAS COMPATIBLE',
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    material: 'Stainless Steel',
    images: [],
    category: { title: 'Aero', slug: { current: 'aero' } },
    compatibleTrucks: [{ brand: 'Kenworth', model: 'T680' }],
  },
  {
    _id: 'placeholder-3',
    name: 'Elite Guard — Freightliner Cascadia',
    slug: { current: 'elite-guard-freightliner-cascadia' },
    price: 2349,
    compareAtPrice: 2599,
    badge: 'SALE',
    inStock: true,
    rating: 4.7,
    reviewCount: 211,
    material: 'Steel',
    images: [],
    category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } },
    compatibleTrucks: [{ brand: 'Freightliner', model: 'Cascadia' }],
  },
  {
    _id: 'placeholder-4',
    name: 'Road Train Guard — Kenworth W900',
    slug: { current: 'road-train-guard-kenworth-w900' },
    price: 2699,
    badge: 'NEW',
    inStock: true,
    rating: 4.9,
    reviewCount: 32,
    material: 'Steel',
    images: [],
    category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } },
    compatibleTrucks: [{ brand: 'Kenworth', model: 'W900' }],
  },
  {
    _id: 'placeholder-5',
    name: 'Defender Guard — Peterbilt 389',
    slug: { current: 'defender-guard-peterbilt-389' },
    price: 2099,
    badge: 'BESTSELLER',
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    material: 'Aluminum',
    images: [],
    category: { title: 'Heavy Duty', slug: { current: 'heavy-duty' } },
    compatibleTrucks: [{ brand: 'Peterbilt', model: '389' }],
  },
  {
    _id: 'placeholder-6',
    name: 'Lightweight Aero — Mack Anthem',
    slug: { current: 'lightweight-aero-mack-anthem' },
    price: 1749,
    inStock: false,
    rating: 4.6,
    reviewCount: 74,
    material: 'Aluminum',
    images: [],
    category: { title: 'Aero', slug: { current: 'aero' } },
    compatibleTrucks: [{ brand: 'Mack', model: 'Anthem' }],
  },
]
