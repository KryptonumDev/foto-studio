import {defineField} from 'sanity'
import {SimpleTextBlock} from '../../custom/TextBlock'
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
      type: 'array',
      title: 'Nagłówek sekcji',
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
      name: 'content',
      type: 'object',
      title: 'Zawartość',
      fields: [
        defineField({
          name: 'contentHeading',
          type: 'array',
          title: 'Nagłówek treści',
          of: [SimpleTextBlock],
          validation: (Rule) =>
            Rule.required().length(1).error('Nagłówek musi zawierać jeden blok tekstowy'),
        }),
        defineField({
          name: 'paragraph',
          type: 'array',
          title: 'Paragraf',
          of: [SimpleTextBlock],
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
