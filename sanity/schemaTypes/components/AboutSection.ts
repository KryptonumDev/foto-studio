import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'

const title = 'Sekcja "O mnie"'
const icon = () => '📝'

export default defineField({
  name: 'AboutSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'Heading',
      title: 'Nagłówek sekcji',
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
      name: 'content',
      type: 'object',
      title: 'Zawartość',
      fields: [
        defineField({
          name: 'contentHeading',
          type: 'Heading',
          title: 'Nagłówek treści',
          validation: (Rule) =>
            Rule.required().length(1).error('Pole musi zawierać jeden blok tekstowy'),
        }),
        defineField({
          name: 'paragraph',
          type: 'TextBlock',
          title: 'Paragraf',
          validation: (Rule) => Rule.required(),
        }),
      ],
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
      icon,
    }),
  },
})
