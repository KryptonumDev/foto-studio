import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

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
          type: 'Heading',
          title: 'Nagłówek',
          validation: (Rule) =>
            Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'paragraph',
          type: 'TextBlock',
          title: 'Treść',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
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
      media: 'sideImg',
    },
    prepare: ({heading, media}) => ({
      title,
      subtitle: toPlainText(heading),
      media,
      icon,
    }),
  },
})
