import { defineType, defineField } from 'sanity'

export const truckModel = defineType({
  name: 'truckModel',
  title: 'Truck Model',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      options: { list: ['Volvo', 'Kenworth', 'Freightliner', 'Peterbilt', 'Mack', 'International'] },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'model', title: 'Model', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'yearFrom', title: 'Year From', type: 'number' }),
    defineField({ name: 'yearTo', title: 'Year To', type: 'number' }),
    defineField({ name: 'image', title: 'Truck Image', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { brand: 'brand', model: 'model', yearFrom: 'yearFrom', yearTo: 'yearTo' },
    prepare({ brand, model, yearFrom, yearTo }) {
      return { title: `${brand} ${model}`, subtitle: yearFrom ? `${yearFrom}–${yearTo || 'Present'}` : '' }
    }
  }
})
