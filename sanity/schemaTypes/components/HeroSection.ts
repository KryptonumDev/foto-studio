import {defineField} from 'sanity'
import {SimpleTextBlock} from '../../custom/TextBlock'
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
          type: 'array',
          title: 'Nagłówek',
          of: [SimpleTextBlock],
          validation: (Rule) =>
            Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy.'),
        }),
        defineField({
          name: 'img',
          type: 'image',
          title: 'Zdjęcie',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'paragraph',
          type: 'array',
          title: 'Paragraf',
          of: [SimpleTextBlock],
          validation: (Rule) =>
            Rule.required().length(1).error('Paragraf musi zawierać jeden blok tekstowy.'),
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
      preview: {
        select: {
          title: 'heading',
          subtitle: 'paragraph',
          media: 'img',
        },
      },
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
      sideImg: 'sideImg',
    },
    prepare: ({heading, sideImg}) => ({
      title,
      subtitle: toPlainText(heading),
      media: sideImg,
    }),
  },
})
