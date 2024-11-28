import {defineField} from 'sanity'

const title = 'Układ trzech zdjęć'
const icon = () => '🌅'

export default defineField({
  name: 'ThreeImagesLayout',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Zdjęcia',
      validation: (Rule) => Rule.required().length(3).error('Należy dodać 3 zdjęcia'),
      description:
        'Pierwsze zdjęcie będzie wyświetlane na pełną szerokość, a dwa kolejne będą wyśrodkowane i tej samej wielkości.',
    }),
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare: ({images}) => ({
      title,
      media: images[0],
      icon,
    }),
  },
})
