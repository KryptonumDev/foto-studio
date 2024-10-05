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
      name: 'categoryLabel',
      type: 'string',
      title: 'Wyświetlana nazwa kategorii (opcjonalne)',
      description: 'Ta nazwa zostanie wyświetlona zamiast domyślnej nazwy kategorii.',
      validation: (Rule) =>
        Rule.max(50).error('Wyświetlana nazwa kategorii nie może przekraczać 50 znaków.'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
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
      title: 'title',
      subtitle: 'category.categoryName',
      media: 'image',
      icon: 'icon',
    },
  },
})
