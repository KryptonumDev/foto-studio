import {defineField, defineType} from 'sanity'
import type {SanityDocument} from 'sanity/migrate'

import {validateSlug} from '../../../utils/customValidations'
import {slugify} from '../../../utils/slugify'
import {SimpleTextBlock} from '../../../custom/TextBlock'
import {toPlainText} from '../../../utils/toPlainText'

export default defineType({
  name: 'BlogPostCollection',
  type: 'document',
  title: 'Blog - Artykuły',
  icon: () => '🗞️',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      title: 'Typ artykułu',
      options: {
        list: [
          {title: 'Historie klientów', value: 'caseStudy'},
          {title: 'Artykuł', value: 'article'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'title',
      type: 'array',
      title: 'Tytuł',
      of: [SimpleTextBlock],
      validation: (Rule) =>
        Rule.required().length(1).error('Tytuł może zawierać tylko jeden blok tekstowy'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Slug, to unikalny ciąg znaków, który znajdziemy zazwyczaj po ukośniku w adresie URL podstrony. Dzięki niemu jego forma jest zrozumiała dla użytkowników.',
      options: {
        source: (doc: SanityDocument) => {
          return toPlainText(doc?.title)
        },
        slugify: (input) => `${slugify(input)}`,
      },
      validation: (Rule) => Rule.custom(validateSlug).required(),
    }),
    defineField({
      name: 'intro',
      type: 'array',
      title: 'Wprowadzenie do artykułu (opcjonalne)',
      of: [SimpleTextBlock],
      validation: (Rule) =>
        Rule.length(1).warning('Wprowadzenie może zawierać tylko jeden blok tekstowy'),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Kategoria',
      to: {type: 'BlogCategoryCollection'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
    //CONTENT
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.name',
      media: 'image',
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
})
