import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Sekcja z paskiem postępu'
const icon = () => '✨'

export default defineField({
  name: 'ProgressBarSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'InlineImageHeading',
      title: 'Nagłówek',
      validation: (Rule) =>
        Rule.required().length(2).error('Pole musi zawierać dwa bloki tekstowe'),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista elementów',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'TextBlock',
              title: 'Treść',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              text: 'text',
            },
            prepare: ({text}) => ({
              title: toPlainText(text),
              icon,
            }),
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().min(4).error('Lista musi zawierać co najmniej 4 elementy.'),
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
