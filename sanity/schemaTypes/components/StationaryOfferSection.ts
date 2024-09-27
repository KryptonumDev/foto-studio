import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'
import {SimpleTextBlock, TextBlock} from '../../custom/TextBlock'

const title = 'Sekcja z ofertą stacjonarną'
const icon = () => '🖼️📄'

export default defineField({
  name: 'StationaryOfferSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'content',
      type: 'object',
      title: 'Zawartość (po prawej stronie)',
      fields: [
        defineField({
          name: 'heading',
          type: 'array',
          title: 'Nagłówek',
          of: [SimpleTextBlock],
          validation: (Rule) =>
            Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy.'),
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          type: 'object',
          title: 'Opis',
          fields: [
            defineField({
              name: 'heading',
              type: 'array',
              title: 'Nagłówek (dla opisu)',
              of: [SimpleTextBlock],
              validation: (Rule) =>
                Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy.'),
            }),
            defineField({
              name: 'text',
              type: 'array',
              title: 'Treść',
              of: [TextBlock],
              validation: (Rule) => Rule.required(),
            }),
          ],
          options: {collapsible: true, collapsed: true},
          validation: (Rule) => Rule.required(),
          preview: {
            select: {
              title: 'heading',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
      preview: {
        select: {
          title: 'heading',
          icon: '📄',
        },
      },
    }),
    defineField({
      name: 'sideImg',
      type: 'image',
      title: 'Obrazek (po lewej stronie)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'content.heading',
      sideImg: 'sideImg',
    },
    prepare: ({heading, sideImg}) => ({
      title,
      subtitle: toPlainText(heading),
      media: sideImg,
    }),
  },
})
