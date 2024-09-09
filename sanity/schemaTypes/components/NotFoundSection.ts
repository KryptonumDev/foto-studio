import { defineField } from 'sanity';
import { blockToText } from '../../utils/blockToText';
import { SimpleTextBlock } from '../../custom/TextBlock';

const title = 'Sekcja - Strony nie znaleziono';
const icon = () => '❌';

export default defineField({
  name: 'NotFoundSection',
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
      name: 'subtitle',
      type: 'string',
      title: 'Podtytuł (opcjonalny)',
      initialValue: 'Page 404'
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required().length(2).error('Należy dodać 2 zdjęcia.')
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
