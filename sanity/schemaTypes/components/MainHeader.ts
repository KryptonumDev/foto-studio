import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Główny nagłówek';
const icon = () => '🔖';

export default defineField({
  name: 'MainHeader',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      title: 'Tytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error('Tytuł musi zawierać jeden blok tekstowy')
    }),
    defineField({
      name: 'paragraph',
      type: 'array',
      title: 'Paragraf (opcjonalny)',
      of: [SimpleTextBlock],
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie (opcjonalne)'
    })
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: blockToText(heading),
      icon,
    }),
  },
});
