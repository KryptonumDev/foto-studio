import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'
import {SimpleTextBlock} from '../../custom/TextBlock'

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
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: (Rule) =>
        Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'paragraph',
      type: 'array',
      title: 'Paragraf (opcjonalny)',
      of: [SimpleTextBlock],
      validation: (Rule) => Rule.length(1).warning('Paragraf może zawierać jeden blok tekstowy'),
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
