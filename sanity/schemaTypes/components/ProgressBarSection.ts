import { defineField } from 'sanity';
import { toPlainText } from '../../utils/toPlainText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Sekcja z paskiem postępu';
const icon = () => '✨';

export default defineField({
  name: 'ProgressBarSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [{
        ...SimpleTextBlock,
        of: [{
          name: 'inlineImg',
          type: 'image',
          title: 'Zdjęcie'
        }]
      }],
      validation: Rule => Rule.required().length(1).error("Nagłówek musi zawierać jeden blok tekstowy."),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista elementów',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              title: 'Treść',
              of: [SimpleTextBlock],
              validation: Rule => Rule.required().length(1).error("Treść musi zawierać jeden blok tekstowy."),
            })
          ],
          preview: {
            select: {
              title: 'text',
            }
          },
        },
      ],
      validation: Rule => Rule.required().min(4).error('Lista musi zawierać co najmniej 4 elementy.'),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: toPlainText(heading),
      icon,
    }),
  },
});
