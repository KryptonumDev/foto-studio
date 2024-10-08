import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ImageCollection',
  title: 'Galeria - Zdjęcia',
  type: 'document',
  icon: () => '🖼️',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Kategoria',
      to: {type: 'ImageCategoryCollection'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł (opcjonalny)',
      validation: (Rule) => Rule.max(50).error('Tytuł nie może przekraczać 50 znaków.'),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Podtytuł (opcjonalny)',
      validation: (Rule) => Rule.max(50).error('Podtytuł nie może przekraczać 50 znaków.'),
    }),
    defineField({
      name: 'blogPost',
      type: 'reference',
      title: 'Powiązany post na blogu (opcjonalne)',
      to: {type: 'BlogPostCollection'},
    }),
  ],
  preview: {
    select: {
      title: 'category.categoryName',
      media: 'image',
      icon: 'icon',
    },
  },
})
