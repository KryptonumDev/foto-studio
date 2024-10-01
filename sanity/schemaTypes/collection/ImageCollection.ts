import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ImageCollection',
  title: 'Galeria - Zdjęcia',
  type: 'document',
  icon: () => '🖼️',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: (Rule) => Rule.required().max(50).error('Tytuł nie może przekraczać 50 znaków.'),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Kategoria',
      to: {type: 'ImageCategoryCollection'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.name',
      media: 'image',
      icon: 'icon',
    },
  },
})
