import { defineField } from 'sanity';
import { SimpleTextBlock, TextBlock } from '../../custom/TextBlock';
import { blockToText } from '../../utils/blockToText';

const title = 'Sekcja informacje';
const icon = () => '📝';

export default defineField({
  name: 'AboutSection',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      title: 'Tytuł (opcjonalny)',
      of: [SimpleTextBlock],
      validation: Rule => Rule.max(1).warning('Tytuł może zawierać jeden blok tekstowy')
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie (opcjonalne)'
    }),
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error("Nagłówek musi zawierać jeden blok tekstowy"),
    }),
    defineField({
      name: 'paragraph',
      type: 'array',
      title: 'Paragraf',
      of: [TextBlock],
      validation: Rule => Rule.required(),
    })
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img'
    },
    prepare: ({ heading, media }) => ({
      title,
      subtitle: blockToText(heading),
      media,
      icon,
    }),
  },
});
