import {defineField} from 'sanity'
import {toPlainText} from '../../../utils/toPlainText'

const title = 'Lista'
const icon = () => '📝'

export default defineField({
  name: 'List',
  type: 'object',
  title,
  icon,
  fields: [
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
              type: 'Heading',
              title: 'Nagłówek',
              validation: (Rule) =>
                Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
            }),
            defineField({
              name: 'paragraph',
              type: 'TextBlock',
              title: 'Paragraf',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
            },
            prepare: ({heading}) => ({
              title: toPlainText(heading),
              icon,
            }),
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      list: 'list',
    },
    prepare: ({list}) => ({
      title,
      subtitle: `Ilość elementów: ${list.length}`,
      icon,
    }),
  },
})
