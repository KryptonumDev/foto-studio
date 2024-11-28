import {defineField, defineType} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

export default defineType({
  name: 'FaqCollection',
  type: 'document',
  title: 'Zbiór elementów FAQ',
  icon: () => '❓',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Pytanie',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'TextBlock',
      title: 'Odpowiedź',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      icon: 'icon',
      answer: 'answer',
    },
    prepare: ({answer, ...rest}) => ({
      ...rest,
      subtitle: toPlainText(answer),
    }),
  },
})
