import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'
import {SimpleTextBlock} from '../../custom/TextBlock'

const title = 'Rozbudowana lista / Szczegółowa lista'
const icon = () => '📝'

export default defineField({
  name: 'ListWithContent',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: (Rule) =>
        Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              type: 'array',
              title: 'Nagłówek',
              of: [SimpleTextBlock],
              validation: (Rule) =>
                Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy.'),
            }),
            defineField({
              name: 'paragraph',
              type: 'array',
              title: 'Paragraf',
              of: [SimpleTextBlock],
              validation: (Rule) =>
                Rule.required().length(1).error('Paragraf musi zawierać jeden blok tekstowy.'),
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'paragraph',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({heading}) => ({
      title,
      subtitle: toPlainText(heading),
      icon,
    }),
  },
})
