import {defineField} from 'sanity'

const title = 'Układ dwóch zdjęć'
const icon = () => '🖼️'

export default defineField({
  name: 'TwoImagesLayout',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Zdjęcia',
      validation: (Rule) => Rule.required().length(2).error('Należy dodać 2 zdjęcia'),
    }),
    defineField({
      name: 'alignment',
      title: 'Wyrównanie',
      type: 'string',
      options: {
        list: [
          {title: 'Do górnej krawędzi', value: 'top'},
          {title: 'Wycentrowane', value: 'center'},
          {title: 'Do dolnej krawędzi', value: 'bottom'},
        ],
        layout: 'radio',
      },
      initialValue: 'top',
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
