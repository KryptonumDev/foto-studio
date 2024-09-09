import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Sekcja z horyzontalną listą i nagłówkiem';
const icon = () => '➡️';

export default defineField({
  name: 'HorizontalListWithHeader',
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
      name: 'subtitle',
      type: 'array',
      title: 'Podtytuł',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error("Podtytuł musi zawierać jeden blok tekstowy."),
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania (opcjonalne)',
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [{ type: 'text', rows: 3 }],
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
