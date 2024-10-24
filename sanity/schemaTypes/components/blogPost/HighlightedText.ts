import {defineField} from 'sanity'
import {toPlainText} from '../../../utils/toPlainText'

const title = 'Wyróżniony tekst'
const icon = () => '✨'

export default defineField({
  name: 'HighlightedText',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'content',
      type: 'Heading',
      title: 'Treść',
      validation: (Rule) =>
        Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}) => ({
      title,
      subtitle: toPlainText(content),
      icon,
    }),
  },
})
