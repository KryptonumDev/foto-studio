import { defineField } from 'sanity';
import { SimpleTextBlock } from '../../custom/TextBlock';
import { blockToText } from '../../utils/blockToText';

const title = 'Sekcja HERO';
const icon = () => '📄🖼️';

export default defineField({
  name: 'ExpandedHeader',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'content',
      type: 'object',
      title: 'Zawartość (po lewej stronie)',
      fields: [
        defineField({
          name: 'title',
          type: 'array',
          title: 'Tytuł',
          of: [SimpleTextBlock],
          validation: Rule => Rule.required().max(1).error('Tytuł musi zawierać jeden blok tekstowy.'),
        }),
        defineField({
          name: 'img',
          type: 'image',
          title: 'Zdjęcie (opcjonalne)'
        }),
        defineField({
          name: 'paragraph',
          type: 'array',
          title: 'Paragraf',
          of: [SimpleTextBlock],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'cta',
          type: 'cta',
          title: 'Wezwanie do działania',
          validation: Rule => Rule.required()
        }),
      ],
      validation: Rule => Rule.required(),
      preview: {
        select: {
          title: 'title',
          subtitle: 'paragraph',
          icon: '📄'
        }
      }
    }),
    defineField({
      name: 'sideImg',
      type: 'image',
      title: 'Obrazek (po prawej stronie)',
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      subtitle: 'content.title',   
      media: 'sideImg'
    },
    prepare: ({ subtitle, media }) => ({
      title,
      subtitle: blockToText(subtitle),
      media
    })
  }
});
