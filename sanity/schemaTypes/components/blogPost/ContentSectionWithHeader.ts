import {defineField} from 'sanity'
import {toPlainText} from '../../../utils/toPlainText'

const title = 'Sekcja z treścią i nagłówkiem'
const icon = () => '📄'

export default defineField({
  name: 'ContentSectionWithHeader',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'heading',
      type: 'Heading',
      title: 'Nagłówek',
      validation: (Rule) =>
        Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'text',
      type: 'TextBlock',
      title: 'Treść',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Rozbudowana lista (opcjonalna)',
      description: 'Lista zawiera nagłówki i treści dla każdego elementu.',
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
              name: 'text',
              type: 'TextBlock',
              title: 'Treść',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              text: 'text',
            },
            prepare: ({heading, text}) => ({
              title: toPlainText(heading),
              subtitle: toPlainText(text),
              icon: () => '➡️',
            }),
          },
        },
      ],
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie (opcjonalne)',
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
