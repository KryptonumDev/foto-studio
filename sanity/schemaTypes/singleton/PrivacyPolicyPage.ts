import {defineField, defineType} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

export default defineType({
  name: 'PrivacyPolicyPage',
  type: 'document',
  title: 'Polityka prywatności',
  icon: () => '🔒',
  fields: [
    defineField({
      name: 'heading',
      type: 'Heading',
      title: 'Nagłówek',
      validation: (Rule) =>
        Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Treść',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              type: 'Heading',
              title: 'Nagłówek',
              validation: (Rule) =>
                Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
            }),
            defineField({
              name: 'content',
              type: 'TextBlock',
              title: 'Treść',
              validation: (Rule) => Rule.required(),
            }),
          ],
          validation: (Rule) => Rule.required(),
          preview: {
            select: {
              heading: 'heading',
            },
            prepare: ({heading}) => ({
              title: toPlainText(heading),
              icon: () => '➡️',
            }),
          },
        },
      ],
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
})
