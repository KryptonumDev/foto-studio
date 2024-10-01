import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Sekcja opinii'
const icon = () => '👍'

export default defineField({
  name: 'ReviewsSection',
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
      name: 'list',
      type: 'array',
      title: 'Lista opinii',
      of: [{type: 'reference', to: [{type: 'ReviewCollection'}]}],
      validation: (Rule) =>
        Rule.required()
          .unique()
          .min(3)
          .error('Lista musi zawierać co najmniej 3 opinie i każda opinia musi być unikalna.'),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({heading}) => ({
      title,
      heading: toPlainText(heading),
      icon,
    }),
  },
})
