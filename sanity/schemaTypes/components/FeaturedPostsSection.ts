import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Sekcja z wróżnionymi artykułami z bloga'
const icon = () => '🏆'

export default defineField({
  name: 'FeaturedPostsSection',
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
      title: 'Lista',
      of: [{type: 'reference', to: [{type: 'BlogPostCollection'}]}],
      validation: (Rule) =>
        Rule.required().min(2).max(5).error('Lista musi zawierać od 2 do 5 pozycji.'),
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
