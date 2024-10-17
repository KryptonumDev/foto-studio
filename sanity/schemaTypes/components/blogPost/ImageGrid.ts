import {defineField} from 'sanity'

const title = 'Siatka ze zdjęciami'
const icon = () => '🖼️'

export default defineField({
  name: 'ImageGrid',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Zdjęcia',
      validation: (Rule) => Rule.required().min(2).max(4).error('Należy dodać od 2 do 4 zdjęć'),
    }),
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare: ({images}) => ({
      title,
      subtitle: `Ilość zdjęć: ${images.length}`,
      icon,
    }),
  },
})
