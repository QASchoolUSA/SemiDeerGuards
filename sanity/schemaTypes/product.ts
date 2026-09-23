import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Product Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'sku', title: 'SKU', type: 'string' }),
    defineField({ name: 'price', title: 'Price (USD)', type: 'number', validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'compareAtPrice', title: 'Compare at Price (USD)', type: 'number' }),
    defineField({ name: 'badge', title: 'Badge', type: 'string', options: { list: ['NEW', 'BESTSELLER', 'SALE', 'CAS COMPATIBLE'] } }),
    defineField({ name: 'featured', title: 'Featured Product', type: 'boolean', initialValue: false }),
    defineField({ name: 'inStock', title: 'In Stock', type: 'boolean', initialValue: true }),
    defineField({ name: 'rating', title: 'Rating (1–5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'reviewCount', title: 'Review Count', type: 'number', initialValue: 0 }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1).required()
    }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        defineField({ name: 'spec', type: 'object', fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'value', type: 'string', title: 'Value' },
        ]})
      ]
    }),
    defineField({ name: 'material', title: 'Material', type: 'string', options: { list: ['Steel', 'Stainless Steel', 'Aluminum', 'Powder-Coated Steel'] } }),
    defineField({ name: 'weight', title: 'Weight (lbs)', type: 'number' }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] }),
    defineField({
      name: 'compatibleTrucks',
      title: 'Compatible Truck Models',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'truckModel' }] }]
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }),
  ],
  preview: {
    select: { title: 'name', media: 'images.0', price: 'price' },
    prepare({ title, media, price }) {
      return { title, media, subtitle: `$${price}` }
    }
  }
})
