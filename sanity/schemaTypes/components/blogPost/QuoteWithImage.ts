import {defineField} from 'sanity'
import {toPlainText} from '../../../utils/toPlainText'

const title = 'Cytat z zdjęciem'
const icon = () => '“'

export default defineField({
  name: 'QuoteWithImage',
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
    defineField({
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.required().min(1).max(2).error('Należy dodać od 1 do 2 zdjęć'),
    }),
  ],
  preview: {
    select: {
      content: 'content',
      images: 'images',
    },
    prepare: ({content, images}) => ({
      title,
      subtitle: toPlainText(content),
      media: images[0],
      icon,
    }),
  },
})
