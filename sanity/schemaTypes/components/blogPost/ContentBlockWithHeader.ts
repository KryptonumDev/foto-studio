import {defineField} from 'sanity'
import {toPlainText} from '../../../utils/toPlainText'

const title = 'Blok tekstowy z nagłówkiem'
const icon = () => '📄'

export default defineField({
  name: 'ContentBlockWithHeader',
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
      name: 'content',
      type: 'TextBlock',
      title: 'Treść',
      validation: (Rule) => Rule.required(),
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
