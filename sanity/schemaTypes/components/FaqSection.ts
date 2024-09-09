import { defineField } from 'sanity';
import { SimpleTextBlock } from '../../custom/TextBlock';
import { blockToText } from '../../utils/blockToText';

const title = 'Sekcja FAQ';
const icon = () => '❓';

export default defineField({
  name: 'FaqSection',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error('Nagłówek może zawierać jeden blok tekstowy'),
    }),
    defineField({
      name: 'list',
      type: 'array',
      of: [
        { type: 'reference', to: { type: 'FaqCollection' } }
      ],
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: { 
      heading: 'heading'
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: blockToText(heading),
      icon
    })
  },
});
