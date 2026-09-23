import { groq } from 'next-sanity'

// ─── Products ─────────────────────────────────────────────────────────────────

export const ALL_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(featured desc, _createdAt desc) {
    _id,
    name,
    slug,
    sku,
    price,
    compareAtPrice,
    badge,
    inStock,
    rating,
    reviewCount,
    material,
    weight,
    "images": images[]{
      asset->{url, metadata}
    },
    "category": category->{title, slug},
    "compatibleTrucks": compatibleTrucks[]->{
      brand,
      model,
      yearFrom,
      yearTo
    }
  }
`

export const FEATURED_PRODUCTS_QUERY = groq`
  *[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    name,
    slug,
    price,
    compareAtPrice,
    badge,
    inStock,
    rating,
    reviewCount,
    material,
    "images": images[0]{
      asset->{url, metadata}
    },
    "category": category->{title, slug},
    "compatibleTrucks": compatibleTrucks[]->{brand, model}
  }
`

export const PRODUCT_BY_SLUG_QUERY = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    sku,
    price,
    compareAtPrice,
    badge,
    inStock,
    rating,
    reviewCount,
    material,
    weight,
    description,
    specifications,
    "images": images[]{
      asset->{url, metadata}
    },
    "category": category->{title, slug},
    "compatibleTrucks": compatibleTrucks[]->{
      brand,
      model,
      yearFrom,
      yearTo,
      "image": image{asset->{url}}
    },
    seoTitle,
    seoDescription
  }
`

export const PRODUCTS_BY_TRUCK_BRAND_QUERY = groq`
  *[_type == "product" && $brand in compatibleTrucks[]->brand] | order(featured desc, _createdAt desc) {
    _id,
    name,
    slug,
    price,
    compareAtPrice,
    badge,
    inStock,
    rating,
    reviewCount,
    material,
    "images": images[0]{
      asset->{url, metadata}
    },
    "category": category->{title, slug},
    "compatibleTrucks": compatibleTrucks[]->{brand, model}
  }
`

export const RELATED_PRODUCTS_QUERY = groq`
  *[_type == "product" && slug.current != $slug && category._ref == $categoryId] | order(_createdAt desc) [0...4] {
    _id,
    name,
    slug,
    price,
    compareAtPrice,
    badge,
    "images": images[0]{asset->{url, metadata}},
    rating,
    reviewCount
  }
`

// ─── Categories ───────────────────────────────────────────────────────────────

export const ALL_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    "image": image{asset->{url}},
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`

// ─── Truck Models ─────────────────────────────────────────────────────────────

export const TRUCK_MODELS_BY_BRAND_QUERY = groq`
  *[_type == "truckModel" && brand == $brand] | order(model asc) {
    _id,
    brand,
    model,
    yearFrom,
    yearTo,
    "image": image{asset->{url}}
  }
`

export const ALL_TRUCK_BRANDS_QUERY = groq`
  array::unique(*[_type == "truckModel"].brand)
`

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO_QUERY = groq`
  *[_type == "hero"][0] {
    headline,
    subheadline,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    "backgroundImage": backgroundImage{asset->{url, metadata}},
    videoUrl
  }
`

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] | order(_createdAt desc) [0...8] {
    _id,
    authorName,
    company,
    truckModel,
    rating,
    body,
    "avatar": avatar{asset->{url}}
  }
`

// ─── Site Settings ────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    "logo": logo{asset->{url}},
    phone,
    email,
    address,
    shippingNotice,
    freeShippingThreshold,
    socialLinks
  }
`

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const FAQS_QUERY = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`
