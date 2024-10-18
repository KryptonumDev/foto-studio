import {defineField} from 'sanity'
import {toPlainText} from '../../../utils/toPlainText'

const title = 'Tekst'
const icon = () => '✏️'

export default defineField({
  name: 'Text',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'content',
      type: 'TextBlock',
      title: 'Treść',
      validation: (Rule) => Rule.required(),
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
