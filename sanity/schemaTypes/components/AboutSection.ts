import { defineField } from 'sanity';
import { SimpleTextBlock, TextBlock } from '../../custom/TextBlock';
import { toPlainText } from '../../utils/toPlainText';

const title = 'Sekcja "O mnie"';
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
      title: 'Tytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().length(1).error('Tytuł musi zawierać jeden blok tekstowy')
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      type: 'array',
      title: 'Podtytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().length(1).error("Podtytuł musi zawierać jeden blok tekstowy"),
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
      subtitle: toPlainText(heading),
      media,
      icon,
    }),
  },
});
