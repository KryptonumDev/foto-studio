import {defineField, defineType} from 'sanity'
import type {SanityDocument} from 'sanity/migrate'

import {validateSlug} from '../../utils/customValidations'
import {slugify} from '../../utils/slugify'
import {toPlainText} from '../../utils/toPlainText'

export default defineType({
  name: 'BlogPostCollection',
  type: 'document',
  title: 'Blog - Artykuły',
  icon: () => '📰',
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
      initialValue: 'caseStudy',
    }),
    defineField({
      name: 'title',
      type: 'Heading',
      title: 'Tytuł',
      validation: (Rule) =>
        Rule.required().length(1).error('Pole musi zawierać tylko jeden blok tekstowy'),
    }),
    defineField({
      name: 'paragraph',
      type: 'TextBlock',
      title: 'Paragraf (opcjonalny)',
      validation: (Rule) => Rule.length(1).warning('Pole może zawierać tylko jeden blok tekstowy'),
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
    defineField({
      name: 'content',
      type: 'BlogPostContent',
      title: 'Zawartość',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
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
      subtitle: 'category.categoryName',
      media: 'image',
      icon: 'icon',
    },
    prepare: ({title, ...rest}) => ({
      ...rest,
      title: toPlainText(title),
    }),
  },
  groups: [
    {
      name: 'content',
      title: 'Zawartość',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
})
