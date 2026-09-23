'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Check, Star, Shield, Truck, Zap, ChevronDown, ChevronUp, Package } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'

interface Spec { label: string; value: string }
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
  weight?: number
  description?: any[]
  specifications?: Spec[]
  images?: { asset: { url: string } }[]
  category?: { title: string }
  compatibleTrucks?: { brand: string; model: string; yearFrom?: number; yearTo?: number }[]
  sku?: string
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)
  const [added, setAdded] = useState(false)
  const [specsOpen, setSpecsOpen] = useState(true)
  const [shippingOpen, setShippingOpen] = useState(false)
  const { addItem } = useCartStore()

  const images = product.images || []
  const currentImage = images[selectedImage]?.asset?.url
  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  const handleAddToCart = async () => {
    if (!product.inStock || adding) return
    setAdding(true)
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
        image: currentImage || '',
        slug: product.slug.current,
        sku: product.sku,
      })
    }
    await new Promise((r) => setTimeout(r, 700))
    setAdding(false)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div className="pdp-grid">
      {/* ── Images ── */}
      <div>
        {/* Main Image */}
        <div style={{ background: 'var(--bg-elevated)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', aspectRatio: '4/3', position: 'relative', marginBottom: '12px' }}>
          {currentImage ? (
            <Image src={currentImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" priority />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <Package size={64} color="var(--border-strong)" />
              <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Product Image Coming Soon</span>
            </div>
          )}
          {product.badge && (
            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
              <span className="badge badge-gold">{product.badge}</span>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                style={{
                  width: '72px', height: '72px', borderRadius: 'var(--radius-md)',
                  border: `2px solid ${i === selectedImage ? 'var(--blue-accent)' : 'var(--border-subtle)'}`,
                  overflow: 'hidden', position: 'relative', cursor: 'pointer',
                  background: 'var(--bg-elevated)', transition: 'border-color var(--transition-fast)',
                  padding: 0,
                }}
                aria-label={`Product image ${i + 1}`}
              >
                <Image src={img.asset.url} alt="" fill style={{ objectFit: 'cover' }} sizes="72px" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Info Panel ── */}
      <div>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-secondary)' }}>{product.name}</span>
        </div>

        {/* Compatible Trucks */}
        {product.compatibleTrucks && product.compatibleTrucks.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
            {[...new Set(product.compatibleTrucks.map((t) => t.brand))].map((brand) => (
              <span key={brand} style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--blue-accent)', background: 'rgba(74,158,255,0.1)', padding: '3px 10px', borderRadius: '4px', border: '1px solid rgba(74,158,255,0.25)' }}>
                {brand}
              </span>
            ))}
          </div>
        )}

        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '16px' }}>
          {product.name}
        </h1>

        {/* Rating */}
        {product.rating && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div className="star-rating">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={16} fill={s <= Math.round(product.rating!) ? 'var(--gold)' : 'none'} color={s <= Math.round(product.rating!) ? 'var(--gold)' : 'var(--border-strong)'} />
              ))}
            </div>
            <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{product.rating}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>({product.reviewCount} reviews)</span>
          </div>
        )}

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '42px', fontWeight: '900', color: 'var(--chrome-bright)' }}>
            ${product.price.toLocaleString()}
          </span>
          {product.compareAtPrice && (
            <>
              <span style={{ fontSize: '20px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                ${product.compareAtPrice.toLocaleString()}
              </span>
              <span className="badge badge-success">Save {discount}%</span>
            </>
          )}
        </div>

        {/* Stock */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: product.inStock ? 'var(--success)' : 'var(--error)', boxShadow: product.inStock ? '0 0 8px var(--success)' : 'none' }} />
          <span style={{ fontSize: '13px', fontWeight: '600', color: product.inStock ? 'var(--success)' : 'var(--error)' }}>
            {product.inStock ? 'In Stock — Ships in 2 Business Days' : 'Out of Stock'}
          </span>
        </div>

        {/* Quick Specs */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {product.material && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-elevated)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              <Package size={12} color="var(--blue-accent)" /> {product.material}
            </div>
          )}
          {product.weight && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-elevated)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              ⚖️ {product.weight} lbs
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-elevated)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
            <Shield size={12} color="var(--blue-accent)" /> 3-Year Warranty
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="qty-input">
            <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">−</button>
            <span className="qty-number" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700' }}>{quantity}</span>
            <button className="qty-btn" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">+</button>
          </div>
          <button
            id="add-to-cart-detail"
            className={`btn ${added ? 'btn-outline' : 'btn-primary'} btn-lg`}
            style={{ flex: 1, minWidth: '200px', justifyContent: 'center' }}
            onClick={handleAddToCart}
            disabled={!product.inStock || adding}
          >
            {added ? (
              <><Check size={18} /> Added to Cart!</>
            ) : adding ? (
              <><span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Adding...</>
            ) : (
              <><ShoppingCart size={18} /> Add to Cart — ${(product.price * quantity).toLocaleString()}</>
            )}
          </button>
        </div>

        {/* Checkout CTA */}
        <Link href="/checkout" className="btn btn-chrome" style={{ width: '100%', justifyContent: 'center', marginBottom: '28px', fontSize: '16px', padding: '16px' }}>
          Buy Now — Secure Checkout
        </Link>

        {/* Trust Row */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingBottom: '28px', borderBottom: '1px solid var(--border-subtle)', marginBottom: '28px' }}>
          {[
            { icon: Shield, text: '3-Year Warranty' },
            { icon: Truck, text: 'Free Shipping $500+' },
            { icon: Zap, text: 'CAS Compatible' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <Icon size={13} color="var(--blue-accent)" /> {text}
            </div>
          ))}
        </div>

        {/* Specs Accordion */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => setSpecsOpen(!specsOpen)}>
              Technical Specifications {specsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <div style={{ maxHeight: specsOpen ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
              <div style={{ paddingBottom: '20px' }}>
                {product.specifications.map((spec) => (
                  <div key={spec.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: '14px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{spec.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Shipping Accordion */}
        <div className="accordion-item">
          <button className="accordion-trigger" onClick={() => setShippingOpen(!shippingOpen)}>
            Shipping & Returns {shippingOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div style={{ maxHeight: shippingOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
            <div style={{ paddingBottom: '20px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
              <p>🚚 <strong>Free freight shipping</strong> on orders over $500. Deer guards are heavy-freight items, palletized and shipped via LTL carrier for safe delivery.</p>
              <p style={{ marginTop: '12px' }}>📦 Most in-stock orders ship within <strong>2 business days</strong>. You will receive a tracking number via email.</p>
              <p style={{ marginTop: '12px' }}>↩️ <strong>30-day returns</strong> on uninstalled guards in original packaging. Contact support to initiate a return.</p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    </div>
  )
}
