import { defineField } from 'sanity';
import { toPlainText } from '../../utils/toPlainText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Nagłówek';
const icon = () => '🔖';

export default defineField({
  name: 'Header',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      title: 'Tytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().length(1).error('Tytuł musi zawierać jeden blok tekstowy')
    }),
    defineField({
      name: 'paragraph',
      type: 'array',
      title: 'Paragraf (opcjonalny)',
      of: [SimpleTextBlock],
    })
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: toPlainText(heading),
      icon,
    }),
  },
});
