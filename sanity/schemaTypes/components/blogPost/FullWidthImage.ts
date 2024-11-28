import {defineField} from 'sanity'

const title = 'Zdjęcie - pełna szerokość'
const icon = () => '🏞️'

export default defineField({
  name: 'FullWidthImage',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      img: 'img',
    },
    prepare: ({img}) => ({
      title,
      media: img,
      icon,
    }),
  },
})
