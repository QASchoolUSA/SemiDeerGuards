'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star, Check, Eye } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'

interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  compareAtPrice?: number
  badge?: string
  inStock: boolean
  rating?: number
  reviewCount?: number
  material?: string
  images?: { asset: { url: string } }[]
  category?: { title: string; slug: { current: string } }
  compatibleTrucks?: { brand: string; model: string }[]
}

interface ProductCardProps {
  product: Product
}

function getBadgeClass(badge: string) {
  switch (badge) {
    case 'BESTSELLER': return 'badge-gold'
    case 'NEW': return 'badge-blue'
    case 'SALE': return 'badge badge-success'
    case 'CAS COMPATIBLE': return 'badge-chrome'
    default: return 'badge-chrome'
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [adding, setAdding] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCartStore()
  const imageUrl = product.images?.[0]?.asset?.url

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  const brands = product.compatibleTrucks
    ? [...new Set(product.compatibleTrucks.map((t) => t.brand))].slice(0, 3)
    : []

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!product.inStock || adding) return
    setAdding(true)
    addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: imageUrl || '',
      slug: product.slug.current,
    })
    await new Promise((r) => setTimeout(r, 600))
    setAdding(false)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Link href={`/products/${product.slug.current}`} style={{ textDecoration: 'none' }}>
      <article className="product-card" aria-label={product.name}>
        {/* Image */}
        <div className="product-card-image" style={{ height: '240px' }}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-elevated)' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--border-strong)" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          )}

          {/* Badges overlay */}
          <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {product.badge && (
              <span className={`badge ${getBadgeClass(product.badge)}`}>{product.badge}</span>
            )}
            {discount > 0 && (
              <span className="badge badge-success">−{discount}%</span>
            )}
          </div>

          {/* Out of Stock overlay */}
          {!product.inStock && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(6,10,18,0.7)', backdropFilter: 'blur(4px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: 'var(--text-secondary)', fontWeight: '600', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Out of Stock
              </span>
            </div>
          )}

          {/* Quick view hover */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity var(--transition-normal)',
          }}
            className="product-card-overlay"
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(6,10,18,0.8)', color: 'var(--chrome)', padding: '8px 16px', borderRadius: '99px', fontSize: '13px', fontWeight: '600', border: '1px solid var(--border-default)' }}>
              <Eye size={14} /> Quick View
            </span>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: '16px' }}>
          {/* Truck Brands */}
          {brands.length > 0 && (
            <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
              {brands.map((brand) => (
                <span key={brand} style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', background: 'var(--bg-elevated)', padding: '2px 7px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                  {brand}
                </span>
              ))}
            </div>
          )}

          <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '8px' }}>
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
              <div className="star-rating">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={12} className={s <= Math.round(product.rating!) ? 'star-filled' : 'star-empty'} fill={s <= Math.round(product.rating!) ? 'var(--gold)' : 'none'} />
                ))}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>({product.reviewCount})</span>
            </div>
          )}

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--chrome-bright)', fontFamily: 'Barlow Condensed, sans-serif' }}>
              ${product.price.toLocaleString()}
            </span>
            {product.compareAtPrice && (
              <span style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                ${product.compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Add to Cart */}
          <button
            className={`btn ${added ? 'btn-outline' : 'btn-primary'} btn-sm`}
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={handleAddToCart}
            disabled={!product.inStock || adding}
            id={`add-to-cart-${product._id}`}
          >
            {added ? (
              <><Check size={15} /> Added!</>
            ) : adding ? (
              <span style={{ display: 'inline-block', width: '15px', height: '15px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
            ) : (
              <><ShoppingCart size={15} /> Add to Cart</>
            )}
          </button>
        </div>

        <style>{`
          .product-card:hover .product-card-overlay { opacity: 1; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </article>
    </Link>
  )
}
