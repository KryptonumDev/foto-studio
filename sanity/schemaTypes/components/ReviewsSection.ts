import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Sekcja opinii';
const icon = () => '👍';

export default defineField({
  name: 'ReviewsSection',
  type: 'object',
  icon,
  title,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error("Nagłówek może zawierać jeden blok tekstowy")
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista opinii',
      of: [
        { type: 'reference', to: [{ type: 'ReviewCollection' }] }
      ],
      validation: Rule => Rule.required().unique().min(3).error('Lista musi zawierać co najmniej 3 opinie i każda opinia musi być unikalna.'),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title,
      heading: blockToText(heading),
      icon
    })
  },
});
