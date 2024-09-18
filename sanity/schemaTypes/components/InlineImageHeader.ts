import {defineField} from 'sanity'
import {toPlainText} from '../../utils/toPlainText'
import {SimpleTextBlock} from '../../custom/TextBlock'

const title = 'Nagłówek z opływającym obrazem'
const icon = () => '🖌️'

export default defineField({
  name: 'InlineImageHeader',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [
        {
          ...SimpleTextBlock,
          of: [
            {
              name: 'inlineImg',
              type: 'image',
              title: 'Zdjęcie',
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().length(2).error('Nagłówek musi zawierać dwa bloki tekstowe'),
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
