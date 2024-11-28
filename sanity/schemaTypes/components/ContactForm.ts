import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Formularz kontaktowy'
const icon = () => '💬'

export default defineField({
  name: 'ContactForm',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'paragraph',
      type: 'TextBlock',
      title: 'Paragraf',
      validation: (Rule) =>
        Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'topics',
      type: 'array',
      title: 'Tematy wiadomości',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      validation: (Rule) => Rule.required().min(2),
    }),
  ],
  preview: {
    select: {
      paragraph: 'paragraph',
    },
    prepare: ({paragraph}) => ({
      title,
      subtitle: toPlainText(paragraph),
      icon,
    }),
  },
})
