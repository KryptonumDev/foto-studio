import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Sekcja HERO'
const icon = () => '📄🖼️'

export default defineField({
  name: 'HeroSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'content',
      type: 'object',
      title: 'Zawartość (po lewej stronie)',
      fields: [
        defineField({
          name: 'heading',
          type: 'Heading',
          title: 'Nagłówek',
          validation: (Rule) =>
            Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
        }),
        defineField({
          name: 'img',
          type: 'image',
          title: 'Zdjęcie',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'paragraph',
          type: 'TextBlock',
          title: 'Paragraf',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sideImg',
      type: 'image',
      title: 'Obrazek (po prawej stronie)',
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
