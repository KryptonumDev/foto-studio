import { defineField } from 'sanity';
import { SimpleTextBlock } from '../../custom/TextBlock';
import { blockToText } from '../../utils/blockToText';

const title = 'Sekcja z wróżnionymi artykułami z bloga';
const icon = () => '🏆';

export default defineField({
  name: 'FeaturedPostsSection',
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
      title: 'Lista',
      of: [
        { type: 'reference', to: [{ type: 'BlogPostCollection' }] }
      ],
      validation: Rule => Rule.required().min(2).max(5).error('Lista musi zawierać od 2 do 5 pozycji.'),
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
