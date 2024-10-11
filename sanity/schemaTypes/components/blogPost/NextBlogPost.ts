import {defineField} from 'sanity'
import {toPlainText} from '../../../utils/toPlainText'

const title = 'Następny wpis na blogu'
const icon = () => '⏩'

export default defineField({
  name: 'NextBlogPost',
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
      name: 'blogPost',
      type: 'reference',
      to: [{type: 'BlogPostCollection'}],
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
