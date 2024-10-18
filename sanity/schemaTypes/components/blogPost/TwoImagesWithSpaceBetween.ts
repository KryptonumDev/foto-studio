import {defineField} from 'sanity'

const title = 'Układ dwóch zdjęć z odstępem'
const icon = () => '🖼️'

export default defineField({
  name: 'TwoImagesWithSpaceBetween',
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
          {title: 'wyśrodkowane', value: 'center'},
          {title: 'Do dolnej krawędzi', value: 'bottom'},
        ],
        layout: 'radio',
      },
      initialValue: 'top',
      description:
        'Wybierz sposób wyrównania dwóch zdjęć: do górnej krawędzi, wyśrodkowane lub do dolnej krawędzi.',
    }),
  ],
  preview: {
    select: {
      images: 'images',
      alignment: 'alignment',
    },
    prepare: ({images, alignment}) => ({
      title,
      subtitle: `Wyrównanie: ${alignment === 'top' ? 'do górnej krawędzi' : alignment === 'center' ? 'wyśrodkowane' : 'do dolnej krawędzi'}`,
      media: images[0],
      icon,
    }),
  },
})
