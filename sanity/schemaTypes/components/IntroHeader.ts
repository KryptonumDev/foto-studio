import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Nagłówek'
const icon = () => '🔖'

export default defineField({
  name: 'IntroHeader',
  type: 'object',
  title,
  icon,
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
      title,
      subtitle: toPlainText(heading),
      icon,
    }),
  },
})
