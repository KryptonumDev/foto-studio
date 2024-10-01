import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Nagłówek z opływającym obrazem'
const icon = () => '🖌️'

export default defineField({
  name: 'InlineImageHeader',
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
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img',
    },
    prepare: ({heading, media}) => ({
      title,
      subtitle: toPlainText(heading),
      media,
      icon,
    }),
  },
})
