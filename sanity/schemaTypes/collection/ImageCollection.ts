import {defineField, defineType, ValidationContext} from 'sanity'

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
      name: 'blogPost',
      type: 'reference',
      title: 'Powiązany post na blogu (opcjonalne)',
      to: {type: 'BlogPostCollection'},
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      hidden: ({parent}) => !parent?.blogPost,
      validation: (Rule) =>
        Rule.custom((value: string | undefined, context: ValidationContext) => {
          if (!context.document?.blogPost) return true
          if (!value) return 'Tytuł jest wymagany'
          return value.length > 25 ? 'Tytuł nie może przekraczać 25 znaków' : true
        }),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Podtytuł',
      hidden: ({parent}) => !parent?.blogPost,
      validation: (Rule) =>
        Rule.custom((value: string | undefined, context: ValidationContext) => {
          if (!context.document?.blogPost) return true
          if (!value) return 'Podtytuł jest wymagany'
          return value.length > 25 ? 'Podtytuł nie może przekraczać 25 znaków' : true
        }),
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
