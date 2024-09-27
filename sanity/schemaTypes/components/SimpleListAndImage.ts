import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'
import {SimpleTextBlock} from '../../custom/TextBlock'

const title = 'Prosta lista z obrazkiem'
const icon = () => '📋'

export default defineField({
  name: 'SimpleListAndImage',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: (Rule) =>
        Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [
        {
          type: 'object',
          title: 'Element listy',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              title: 'Treść',
              of: [SimpleTextBlock],
              validation: (Rule) =>
                Rule.required().length(1).error('Treść musi zawierać jeden blok tekstowy.'),
            }),
          ],
          preview: {
            select: {
              title: 'text',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'imagePosition',
      type: 'string',
      title: 'Pozycja obrazu',
      description: 'Wybierz, po której stronie ma być obraz: po lewej czy po prawej stronie listy.',
      options: {
        list: [
          {title: 'Lewo', value: 'left'},
          {title: 'Prawo', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'right',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img',
    },
    prepare: ({heading, media}) => ({
      title,
      subtitle: toPlainText(heading),
      media,
    }),
  },
})
