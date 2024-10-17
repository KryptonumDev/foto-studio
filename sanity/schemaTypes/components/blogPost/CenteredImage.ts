import {defineField} from 'sanity'

const title = 'Zdjęcie (wycentrowane)'
const icon = () => '🖼️'

export default defineField({
  name: 'CenteredImage',
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
