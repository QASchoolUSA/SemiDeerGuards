import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon (emoji or SVG name)', type: 'string' }),
    defineField({ name: 'image', title: 'Category Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  preview: {
    select: { title: 'title', media: 'image' }
  }
})

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
    defineField({ name: 'ctaText', title: 'Primary CTA Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'Primary CTA Link', type: 'string' }),
    defineField({ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string' }),
    defineField({ name: 'secondaryCtaLink', title: 'Secondary CTA Link', type: 'string' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'videoUrl', title: 'Background Video URL', type: 'url' }),
  ]
})

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'authorName', title: 'Author Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'company', title: 'Company / Fleet', type: 'string' }),
    defineField({ name: 'truckModel', title: 'Truck Model', type: 'string' }),
    defineField({ name: 'rating', title: 'Rating (1–5)', type: 'number', validation: (Rule) => Rule.required().min(1).max(5) }),
    defineField({ name: 'body', title: 'Testimonial', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: 'avatar', title: 'Avatar Photo', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'company', rating: 'rating' },
    prepare({ title, subtitle, rating }) {
      return { title, subtitle: `${subtitle} — ⭐ ${rating}` }
    }
  }
})

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Shipping', 'Installation', 'Compatibility', 'Warranty', 'General'] } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' }
  }
})

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 3 }),
    defineField({ name: 'shippingNotice', title: 'Shipping Notice', type: 'string' }),
    defineField({ name: 'freeShippingThreshold', title: 'Free Shipping Threshold ($)', type: 'number' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
        { name: 'twitter', type: 'url', title: 'Twitter / X' },
      ]
    }),
  ]
})
