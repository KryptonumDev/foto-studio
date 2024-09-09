import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Sekcja "Dlaczego My?"';
const icon = () => '✨';

export default defineField({
  name: 'WhyChooseUsSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error("Nagłówek musi zawierać jeden blok tekstowy."),
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie (opcjonalne)',
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista cech/zalet',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              title: 'Treść',
              of: [SimpleTextBlock],
              validation: Rule => Rule.required().max(1).error("Treść musi zawierać jeden blok tekstowy."),
            })
          ],
          preview: {
            select: {
              title: 'text',
            }
          },
        },
      ],
      validation: Rule => Rule.required().min(3).error('Lista musi zawierać co najmniej 3 elementy.'),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: blockToText(heading),
      icon,
    }),
  },
});
