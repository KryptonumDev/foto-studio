import { defineField } from 'sanity';
import { SimpleTextBlock } from '../../custom/TextBlock'
import { blockToText } from '../../utils/blockToText';

const title = 'Sekcja HERO z nagłówkiem i obrazkami';
const icon = () => '⭐️'; 

export default defineField({
  name: 'HeroHeaderAndImages',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Nagłówek',
      of: [SimpleTextBlock],
      validation: Rule => Rule.required().max(1).error('Nagłówek może zawierać tylko jeden blok tekstowy.'),
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required().length(5).error('Należy dodać 5 zdjęć.'),
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
